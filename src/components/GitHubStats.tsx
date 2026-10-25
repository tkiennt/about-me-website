import React from "react";
import { Activity, GitCommit, ExternalLink, RefreshCw, Sparkles } from "lucide-react";
import type { GitHubAggregatedStats, GitHubEvent } from "../types/githubRealtime";

interface GitHubStatsProps {
  username: string;
  stats: GitHubAggregatedStats;
  events: GitHubEvent[];
  isLive: boolean;
  lastUpdated: Date | null;
  onRefresh: () => void;
  loading: boolean;
}

export const GitHubStats: React.FC<GitHubStatsProps> = ({
  username,
  stats,
  events,
  isLive,
  lastUpdated,
  onRefresh,
  loading,
}) => {
  // Extract push events and recent commits
  const commitEvents = events
    .filter((e) => e.type === "PushEvent" && e.payload.commits && e.payload.commits.length > 0)
    .slice(0, 4);

  return (
    <section id="github" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time GitHub Activity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
              Open Source & Contributions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-2xl">
              Live metrics and recent code commits streamed directly from GitHub for <span className="font-mono text-[#33E092]">@{username}</span>.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={onRefresh}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-xs font-mono text-zinc-300 light-mode:text-zinc-700 hover:border-[#33E092]/60 transition-colors cursor-pointer"
            >
              <RefreshCw size={13} className={`text-[#33E092] ${loading ? "animate-spin" : ""}`} />
              <span>Refresh API</span>
            </button>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-xs font-mono text-zinc-300 light-mode:text-zinc-700 hover:text-[#33E092] hover:border-[#33E092]/60 transition-colors"
            >
              <span>View GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* 1. Real-Time Contribution Heatmap Calendar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs mb-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800/80 light-mode:border-zinc-100">
            <div>
              <h3 className="text-base font-bold text-zinc-100 light-mode:text-zinc-900 flex items-center gap-2">
                <span>Contribution Heatmap</span>
                <span className="text-xs font-mono text-zinc-500">(@{username})</span>
              </h3>
              <p className="text-xs text-zinc-400 light-mode:text-zinc-500 mt-0.5 font-mono">
                Real-time annual commit timeline from GitHub public graph
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#33E092]"></span>
              <span>Status: {isLive ? "Live API Connected" : "Cached"}</span>
            </div>
          </div>

          {/* GitHub Contribution Chart Image with Victor Eke Mint Green Tint */}
          <div className="overflow-x-auto pb-2 flex justify-center">
            <div className="min-w-[680px] p-4 rounded-2xl bg-zinc-950/80 light-mode:bg-zinc-50 border border-zinc-800/80 light-mode:border-zinc-200 flex flex-col items-center">
              <img
                src={`https://ghchart.rshah.org/33e092/${username}`}
                alt={`${username}'s GitHub Contribution Chart`}
                className="w-full max-w-4xl h-auto transition-opacity duration-300"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="flex items-center justify-between w-full mt-3 text-[11px] text-zinc-500 font-mono">
                <span>Less active</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-zinc-800"></span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#33E092]/30"></span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#33E092]/60"></span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#33E092]"></span>
                </div>
                <span>More active</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Grid: Dynamic Language Distribution & Recent Live Commits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Dynamic Language Breakdown */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/80 light-mode:border-zinc-100">
                <h3 className="text-base font-bold text-zinc-100 light-mode:text-zinc-900 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#33E092]" />
                  <span>Real-Time Language Share</span>
                </h3>
                <span className="text-xs font-mono text-zinc-500">Calculated live</span>
              </div>

              <p className="text-xs text-zinc-400 light-mode:text-zinc-600 mb-6 leading-relaxed">
                Calculated dynamically from all public repositories on @{username}'s GitHub account. No hardcoded ratios.
              </p>

              {/* Languages List */}
              <div className="space-y-3.5">
                {stats.topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300 light-mode:text-zinc-700 font-medium flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        {lang.name}
                      </span>
                      <span className="text-zinc-400">{lang.percentage}% ({lang.count} repos)</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-zinc-800 light-mode:bg-zinc-200 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/50 light-mode:border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Total Repos Processed: {stats.totalRepos}</span>
              <span>Stars: {stats.totalStars}</span>
            </div>
          </div>

          {/* Recent Live Activity Stream */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/80 light-mode:border-zinc-100">
              <h3 className="text-base font-bold text-zinc-100 light-mode:text-zinc-900 flex items-center gap-2">
                <GitCommit size={16} className="text-[#33E092]" />
                <span>Recent Live GitHub Commits</span>
              </h3>
              <span className="text-xs font-mono text-[#33E092]">REST API</span>
            </div>

            {commitEvents.length > 0 ? (
              <div className="space-y-3.5">
                {commitEvents.map((event) => {
                  const repoShortName = event.repo.name.split("/")[1] || event.repo.name;
                  const firstCommit = event.payload.commits?.[0];
                  const commitDate = new Date(event.created_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <div
                      key={event.id}
                      className="p-3.5 rounded-xl bg-zinc-950/60 light-mode:bg-zinc-50 border border-zinc-800/60 light-mode:border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-[#33E092]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="text-[#33E092] font-semibold">{repoShortName}</span>
                          <span className="text-zinc-500">•</span>
                          <span className="text-zinc-400">{commitDate}</span>
                        </div>
                        <p className="text-xs text-zinc-300 light-mode:text-zinc-700 font-mono truncate max-w-md">
                          {firstCommit?.message || "Code update & commit push"}
                        </p>
                      </div>

                      <a
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-[#33E092] self-start sm:self-auto shrink-0"
                      >
                        <span>View repo</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-xs font-mono text-zinc-400">
                <GitCommit size={24} className="mx-auto mb-2 text-zinc-600" />
                <span>No recent public push events found on this account.</span>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800/50 light-mode:border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Account: @{username}</span>
              {lastUpdated && (
                <span>Updated: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
