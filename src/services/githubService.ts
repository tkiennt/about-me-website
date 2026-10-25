import { GITHUB_CONFIG } from "../config/githubConfig";
import type {
  GitHubUserProfile,
  GitHubRepo,
  GitHubEvent,
  GitHubAggregatedStats,
  LanguageStat,
} from "../types/githubRealtime";

// Language color mapping matching GitHub's color scheme
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "C#": "#178600",
  Dart: "#00b4ab",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  C: "#555555",
  "C++": "#f34b7d",
  Vue: "#41b883",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};

const CACHE_KEY_PREFIX = "portfolio_gh_cache_";

interface CacheEntry<T> {
  timestamp: number;
  data: T;
}

function getFromCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(`${CACHE_KEY_PREFIX}${key}`);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    const isExpired = Date.now() - entry.timestamp > GITHUB_CONFIG.cacheTTL;
    if (isExpired) return null;
    return entry.data;
  } catch {
    return null;
  }
}

function setToCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(`${CACHE_KEY_PREFIX}${key}`, JSON.stringify(entry));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Fetch GitHub User Profile in Real-Time
 */
export async function fetchGitHubProfile(
  username: string = GITHUB_CONFIG.username
): Promise<GitHubUserProfile> {
  const cacheKey = `profile_${username}`;
  const cached = getFromCache<GitHubUserProfile>(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${GITHUB_CONFIG.apiBase}/users/${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const data: GitHubUserProfile = await response.json();
  setToCache(cacheKey, data);
  return data;
}

/**
 * Fetch GitHub Public Repositories in Real-Time
 */
export async function fetchGitHubRepos(
  username: string = GITHUB_CONFIG.username
): Promise<GitHubRepo[]> {
  const cacheKey = `repos_${username}`;
  const cached = getFromCache<GitHubRepo[]>(cacheKey);
  if (cached) return cached;

  const response = await fetch(
    `${GITHUB_CONFIG.apiBase}/users/${username}/repos?per_page=100&sort=pushed`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const data: GitHubRepo[] = await response.json();
  setToCache(cacheKey, data);
  return data;
}

/**
 * Fetch Recent Public GitHub Events (Commits, PRs, Pushes) in Real-Time
 */
export async function fetchGitHubEvents(
  username: string = GITHUB_CONFIG.username
): Promise<GitHubEvent[]> {
  const cacheKey = `events_${username}`;
  const cached = getFromCache<GitHubEvent[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GITHUB_CONFIG.apiBase}/users/${username}/events/public?per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data: GitHubEvent[] = await response.json();
    setToCache(cacheKey, data);
    return data;
  } catch {
    return [];
  }
}

/**
 * Calculate Aggregated Statistics Dynamically from Real-Time GitHub Repositories
 */
export function calculateAggregatedStats(
  profile: GitHubUserProfile | null,
  repos: GitHubRepo[],
  events: GitHubEvent[] = []
): GitHubAggregatedStats {
  const totalRepos = profile ? profile.public_repos : repos.length;
  const followers = profile ? profile.followers : 0;
  const following = profile ? profile.following : 0;

  let totalStars = 0;
  let totalForks = 0;
  const langCounts: Record<string, number> = {};

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count || 0;
    totalForks += repo.forks_count || 0;

    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  });

  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0);

  const topLanguages: LanguageStat[] = Object.entries(langCounts)
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0,
      color: LANGUAGE_COLORS[name] || "#64748b",
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return {
    totalRepos,
    totalStars,
    totalForks,
    followers,
    following,
    topLanguages,
    recentActivityCount: events.length,
  };
}

/**
 * Clear cache for fresh real-time retrieval
 */
export function clearGitHubCache(username: string = GITHUB_CONFIG.username): void {
  try {
    localStorage.removeItem(`${CACHE_KEY_PREFIX}profile_${username}`);
    localStorage.removeItem(`${CACHE_KEY_PREFIX}repos_${username}`);
    localStorage.removeItem(`${CACHE_KEY_PREFIX}events_${username}`);
  } catch {
    // Ignore
  }
}
