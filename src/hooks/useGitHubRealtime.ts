import { useState, useEffect, useCallback } from "react";
import { GITHUB_CONFIG } from "../config/githubConfig";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  fetchGitHubEvents,
  calculateAggregatedStats,
  clearGitHubCache,
} from "../services/githubService";
import type {
  GitHubUserProfile,
  GitHubRepo,
  GitHubEvent,
  GitHubAggregatedStats,
} from "../types/githubRealtime";

// High-quality fallback data in case of GitHub API rate limit (60 requests/hr for unauthenticated IP)
const FALLBACK_PROFILE: GitHubUserProfile = {
  login: "tkiennt",
  id: 169631839,
  avatar_url: "https://avatars.githubusercontent.com/u/169631839?v=4",
  html_url: "https://github.com/tkiennt",
  name: "Trung Kiên",
  company: null,
  blog: "https://github.com/tkiennt",
  location: "Hà Nội, Việt Nam",
  email: "nguyentotrungkien@gmail.com",
  hireable: true,
  bio: "Software Engineering Student & Fullstack Developer. Focused on C#/.NET, React, and Flutter.",
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 5,
  following: 8,
  created_at: "2024-05-13T00:00:00Z",
  updated_at: new Date().toISOString(),
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "about-me-website",
    full_name: "tkiennt/about-me-website",
    html_url: "https://github.com/tkiennt/about-me-website",
    description: "Modern minimalist developer portfolio website inspired by victoreke.com.",
    fork: false,
    url: "https://api.github.com/repos/tkiennt/about-me-website",
    created_at: "2024-09-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 1024,
    stargazers_count: 3,
    watchers_count: 3,
    language: "TypeScript",
    forks_count: 0,
    open_issues_count: 0,
    license: { key: "mit", name: "MIT License", spdx_id: "MIT", url: null },
    topics: ["portfolio", "react", "typescript", "tailwind"],
    visibility: "public",
    default_branch: "main",
  },
  {
    id: 2,
    name: "Project_SWP391_BloodDonationSystem",
    full_name: "tkiennt/Project_SWP391_BloodDonationSystem",
    html_url: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
    description: "Blood Donation Management & Matching System with real-time donor scheduling and compatibility algorithms.",
    fork: true,
    url: "https://api.github.com/repos/tkiennt/Project_SWP391_BloodDonationSystem",
    created_at: "2024-06-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 4096,
    stargazers_count: 4,
    watchers_count: 4,
    language: "TypeScript",
    forks_count: 1,
    open_issues_count: 0,
    license: null,
    topics: ["blood-donation", "react", "spring-boot", "mysql"],
    visibility: "public",
    default_branch: "trungkien",
  },
  {
    id: 3,
    name: "SkinSync",
    full_name: "tkiennt/SkinSync",
    html_url: "https://github.com/tkiennt/SkinSync",
    description: "Fullstack beauty & skincare booking application with PayOS integration and clean architecture.",
    fork: false,
    url: "https://api.github.com/repos/tkiennt/SkinSync",
    created_at: "2024-07-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 2048,
    stargazers_count: 2,
    watchers_count: 2,
    language: "C#",
    forks_count: 0,
    open_issues_count: 0,
    license: null,
    topics: ["dotnet", "csharp", "react", "clean-architecture"],
    visibility: "public",
    default_branch: "main",
  },
  {
    id: 4,
    name: "scientific-paper-reader",
    full_name: "tkiennt/scientific-paper-reader",
    html_url: "https://github.com/tkiennt/scientific-paper-reader",
    description: "Mobile reader for academic papers with PDF annotation, offline caching, and AWS document sync.",
    fork: false,
    url: "https://api.github.com/repos/tkiennt/scientific-paper-reader",
    created_at: "2024-08-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 3072,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Dart",
    forks_count: 0,
    open_issues_count: 0,
    license: null,
    topics: ["flutter", "dart", "pdf-reader", "mobile"],
    visibility: "public",
    default_branch: "main",
  },
  {
    id: 5,
    name: "valorant-tower-defense",
    full_name: "tkiennt/valorant-tower-defense",
    html_url: "https://github.com/tkiennt/valorant-tower-defense",
    description: "Tactical Tower Defense 2D game built with Unity, C#, Universal Render Pipeline (URP), and grid-based pathfinding.",
    fork: true,
    url: "https://api.github.com/repos/tkiennt/valorant-tower-defense",
    created_at: "2024-05-15T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 8192,
    stargazers_count: 2,
    watchers_count: 2,
    language: "C#",
    forks_count: 0,
    open_issues_count: 0,
    license: null,
    topics: ["unity", "csharp", "game-dev", "tower-defense"],
    visibility: "public",
    default_branch: "main",
  },
  {
    id: 6,
    name: "AUTOBOT",
    full_name: "tkiennt/AUTOBOT",
    html_url: "https://github.com/tkiennt/AUTOBOT",
    description: "Automated test suite and regression runner for RESTful API services using Postman and Newman.",
    fork: true,
    url: "https://api.github.com/repos/tkiennt/AUTOBOT",
    created_at: "2024-04-10T00:00:00Z",
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    homepage: null,
    size: 512,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    forks_count: 0,
    open_issues_count: 0,
    license: null,
    topics: ["postman", "automation", "api-testing"],
    visibility: "public",
    default_branch: "main",
  },
];

export function useGitHubRealtime(initialUsername: string = GITHUB_CONFIG.username) {
  const [username, setUsername] = useState<string>(initialUsername);
  const [profile, setProfile] = useState<GitHubUserProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [stats, setStats] = useState<GitHubAggregatedStats>(() =>
    calculateAggregatedStats(FALLBACK_PROFILE, FALLBACK_REPOS)
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadData = useCallback(async (targetUser: string, forceFresh = false) => {
    setLoading(true);
    setError(null);

    if (forceFresh) {
      clearGitHubCache(targetUser);
    }

    try {
      const [userProfileData, userReposData, userEventsData] = await Promise.all([
        fetchGitHubProfile(targetUser),
        fetchGitHubRepos(targetUser),
        fetchGitHubEvents(targetUser),
      ]);

      setProfile(userProfileData);
      setRepos(userReposData);
      setEvents(userEventsData);

      const calculated = calculateAggregatedStats(
        userProfileData,
        userReposData,
        userEventsData
      );
      setStats(calculated);
      setIsLive(true);
      setLastUpdated(new Date());
    } catch (err) {
      console.warn("GitHub API error, using structured fallback data:", err);
      // If error (such as rate limiting 403), gracefully use fallback so app never crashes
      setProfile(FALLBACK_PROFILE);
      setRepos(FALLBACK_REPOS);
      setEvents([]);
      setStats(calculateAggregatedStats(FALLBACK_PROFILE, FALLBACK_REPOS));
      setIsLive(false);
      setError(
        err instanceof Error
          ? err.message
          : "Unable to connect to GitHub API directly. Showing cached data."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    
    const execute = async () => {
      if (active) {
        await loadData(username);
      }
    };

    execute();

    return () => {
      active = false;
    };
  }, [username, loadData]);

  const refresh = useCallback(() => {
    loadData(username, true);
  }, [username, loadData]);

  return {
    username,
    setUsername,
    profile,
    repos,
    events,
    stats,
    loading,
    error,
    isLive,
    lastUpdated,
    refresh,
  };
}
