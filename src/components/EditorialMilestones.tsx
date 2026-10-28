import React from "react";
import { GitCommit, FolderGit2, GitPullRequest, ArrowUpRight } from "lucide-react";
import type { GitHubAggregatedStats } from "../types/githubRealtime";

interface EditorialMilestonesProps {
  stats: GitHubAggregatedStats;
}

export const EditorialMilestones: React.FC<EditorialMilestonesProps> = ({ stats }) => {
  return (
    <section className="w-full bg-black pb-[calc(140*var(--u))] max-md:pb-16 relative">
      {/* Panel Container: 1302 × 429u */}
      <div className="w-[calc(1302*var(--u))] max-w-[94vw] h-[calc(429*var(--u))] max-md:h-auto mx-auto border border-white/20 rounded-[calc(14*var(--u))] bg-[#0c0c0c] relative overflow-hidden flex max-md:flex-col items-center pl-[calc(48*var(--u))] pr-[calc(48*var(--u))] max-md:p-6 shadow-2xl">
        
        {/* Left Column: Heading & Copy */}
        <div className="w-[calc(440*var(--u))] max-md:w-full flex-shrink-0 relative z-10 max-md:mb-8">
          
          {/* Frosted Tile 1: Asterisk tile top right of line 1 */}
          <div className="absolute -top-[calc(24*var(--u))] left-[calc(270*var(--u))] max-md:left-48 max-md:-top-4 w-[calc(88*var(--u))] h-[calc(88*var(--u))] max-md:w-14 max-md:h-14 rounded-[calc(12*var(--u))] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center z-20 shadow-xl pointer-events-none">
            <svg className="w-8 h-8 max-md:w-5 max-md:h-5 stroke-white stroke-[2.2]" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
              <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeLinecap="round" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="text-[calc(55*var(--u))] max-md:text-3xl font-medium leading-[1.05] tracking-tight text-[#f4f4f4]">
            Validated by<br />
            Core Projects &<br />
            Engineering<br />
            Milestones
          </h2>

          <p className="mt-[calc(24*var(--u))] max-md:mt-4 text-[calc(14*var(--u))] max-md:text-sm leading-relaxed text-white/65 max-w-[calc(350*var(--u))] max-md:max-w-none">
            Proven engineering deliverables across distributed backend systems, mobile architectures, concurrency locks, and enterprise full-stack solutions.
          </p>
        </div>

        {/* Right Column: 3 Metric Cards (Commits, Repos, Pull Requests - No wrong avatars!) */}
        <div className="flex max-md:flex-col gap-[calc(18*var(--u))] max-md:gap-4 items-center h-full ml-auto max-md:ml-0 max-md:w-full w-[calc(720*var(--u))]">
          
          {/* Card 1: Commits (Light Grey) */}
          <div className="flex-1 max-md:w-full h-[calc(326*var(--u))] max-md:h-auto bg-[#d6d6d6] text-[#111111] rounded-[calc(10*var(--u))] p-[calc(26*var(--u))] max-md:p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <GitCommit size={20} className="text-[#111111]" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-black/10 text-black">
                Code Volume
              </span>
            </div>

            <div>
              <div className="font-editorial-display text-[calc(52*var(--u))] max-md:text-4xl font-bold tracking-tight text-[#111111] leading-none">
                520+
              </div>
              <div className="text-[calc(16*var(--u))] font-semibold text-black mt-2">
                Git Commits
              </div>
              <div className="text-[calc(12*var(--u))] text-zinc-700 leading-snug mt-1">
                Continuous codebase contributions across active branches and repositories.
              </div>
            </div>

            <a
              href="#github"
              className="text-[calc(12*var(--u))] font-mono font-semibold text-black hover:underline flex items-center gap-1 pt-3 border-t border-black/10"
            >
              <span>View Activity Timeline</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Card 2: Repositories (Dark Neutral) */}
          <div className="flex-1 max-md:w-full h-[calc(326*var(--u))] max-md:h-auto bg-[#1c1c1c] text-white rounded-[calc(10*var(--u))] p-[calc(26*var(--u))] max-md:p-5 flex flex-col justify-between border border-white/10 hover:-translate-y-1.5 transition-transform duration-300 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FolderGit2 size={20} className="text-white" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                Architecture
              </span>
            </div>

            <div>
              <div className="font-editorial-display text-[calc(52*var(--u))] max-md:text-4xl font-bold tracking-tight text-white leading-none">
                {stats.totalRepos || "28"}+
              </div>
              <div className="text-[calc(16*var(--u))] font-semibold text-white mt-2">
                Repositories
              </div>
              <div className="text-[calc(12*var(--u))] text-zinc-400 leading-snug mt-1">
                Modular systems spanning .NET Core, React, Flutter, and Java Spring.
              </div>
            </div>

            <a
              href="#github"
              className="text-[calc(12*var(--u))] font-mono font-semibold text-zinc-300 hover:text-white hover:underline flex items-center gap-1 pt-3 border-t border-white/10"
            >
              <span>Explore Repositories</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Card 3: Pull Requests (Dark Accent) */}
          <div className="flex-1 max-md:w-full h-[calc(326*var(--u))] max-md:h-auto bg-[#111111] text-white rounded-[calc(10*var(--u))] p-[calc(26*var(--u))] max-md:p-5 flex flex-col justify-between border border-white/15 hover:-translate-y-1.5 transition-transform duration-300 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GitPullRequest size={20} className="text-white" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                Collaboration
              </span>
            </div>

            <div>
              <div className="font-editorial-display text-[calc(52*var(--u))] max-md:text-4xl font-bold tracking-tight text-white leading-none">
                89+
              </div>
              <div className="text-[calc(16*var(--u))] font-semibold text-white mt-2">
                Pull Requests
              </div>
              <div className="text-[calc(12*var(--u))] text-zinc-400 leading-snug mt-1">
                Merged team features, branch integrations, and production deployments.
              </div>
            </div>

            <div className="text-[calc(11.5*var(--u))] font-mono text-zinc-500 pt-3 border-t border-white/10">
              Clean Review Discipline
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
