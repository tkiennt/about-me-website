import React from "react";
import { Activity, ExternalLink, RefreshCw } from "lucide-react";
import type { GitHubAggregatedStats } from "../types/githubRealtime";

interface GitHubStatsProps {
  username: string;
  stats: GitHubAggregatedStats;
  onRefresh: () => void;
  loading: boolean;
}

export const GitHubStats: React.FC<GitHubStatsProps> = ({
  username,
  stats,
  onRefresh,
  loading,
}) => {

  return (
    <section id="github" className="py-20 md:py-28 border-t border-white/10 bg-black text-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>GitHub Activity & Commits</span>
            </div>
            <h2 className="font-editorial-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Open Source & Contributions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Public code contributions and activity streams directly from GitHub for <span className="font-mono text-white font-semibold">@{username}</span>.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={onRefresh}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 hover:border-white hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw size={13} className={`text-white ${loading ? "animate-spin" : ""}`} />
              <span>Sync GitHub</span>
            </button>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-zinc-200 transition-colors"
            >
              <span>GitHub Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* GitHub Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          
          {/* 1. Contribution Heatmap Calendar */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-white/15 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Annual Contribution Timeline
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                GitHub Public Activity Graph
              </span>
            </div>

            {/* Heatmap Image from GitHub */}
            <div className="w-full overflow-x-auto py-2">
              <img
                src={`https://ghchart.rshah.org/40c463/${username}`}
                alt={`${username}'s GitHub contribution calendar`}
                className="w-full min-w-[650px] h-auto invert contrast-125 opacity-90"
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 mt-2">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-zinc-600" />
                <span className="w-2.5 h-2.5 rounded-xs bg-zinc-400" />
                <span className="w-2.5 h-2.5 rounded-xs bg-white" />
              </div>
              <span>More Active</span>
            </div>
          </div>

          {/* 2. Language Breakdown Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-white/15 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Language Share
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  By Repositories
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3.5 mt-4">
                {stats.topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-zinc-300">{lang.name}</span>
                      <span className="text-white font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-zinc-400 mt-6 flex justify-between">
              <span>Primary: C# & TypeScript</span>
              <span className="text-white font-medium">Cross-Platform</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
