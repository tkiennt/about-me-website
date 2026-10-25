/**
 * GitHub Configuration
 * Centralized configuration variable to fetch real-time data from GitHub API.
 * You can customize the username or pass it via environment variable VITE_GITHUB_USERNAME.
 */

export const GITHUB_CONFIG = {
  // Primary GitHub username variable - change here or via environment variable
  username: import.meta.env.VITE_GITHUB_USERNAME || "tkiennt",
  // Base API URL
  apiBase: "https://api.github.com",
  // Cache expiration time in milliseconds (10 minutes)
  cacheTTL: 10 * 60 * 1000,
};

export const getGitHubUsername = (): string => {
  return GITHUB_CONFIG.username;
};
