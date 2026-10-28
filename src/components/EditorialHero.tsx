import React, { useEffect, useRef } from "react";
import { ArrowUpRight, GitCommit, FolderGit2, GitPullRequest } from "lucide-react";
import type { GitHubUserProfile, GitHubAggregatedStats } from "../types/githubRealtime";
import heroPhoto from "../assets/hero-mypic2.jpg";

interface EditorialHeroProps {
  profile: GitHubUserProfile | null;
  stats: GitHubAggregatedStats;
  username: string;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  profile,
  stats,
  username,
}) => {
  const photoWrapRef = useRef<HTMLDivElement>(null);

  // Parallax photo drift on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (photoWrapRef.current) {
        const drift = window.scrollY * 0.08;
        photoWrapRef.current.style.transform = `translateY(${drift}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayName = profile?.name || "Trung Kiên";

  return (
    <header className="hero-editorial-section relative w-full bg-[#dadada] text-[#111111] overflow-hidden pt-20" id="hero">
      <div className="hero-artboard relative w-[calc(1440*var(--u))] max-w-full min-h-[calc(938*var(--u))] mx-auto">

        {/* 1. Hero Photo (myic2.jpg - Full body with basketball, generous headroom below floating pill) */}
        <div
          ref={photoWrapRef}
          className="absolute left-1/2 -translate-x-1/2 top-[calc(50*var(--u))] w-[calc(540*var(--u))] h-[calc(860*var(--u))] z-10 pointer-events-none max-md:relative max-md:left-0 max-md:translate-x-0 max-md:top-0 max-md:w-full max-md:h-[500px] max-md:mt-4"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
          }}
        >
          <img
            src={heroPhoto}
            alt="Trung Kiên - Software Engineer walking with basketball"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* 2. Left Column: Title "SOFTWARE ENGINEERING" (Fully visible, not covered), Commits & Repos Card */}
        <div className="absolute left-[calc(57*var(--u))] top-[calc(140*var(--u))] w-[calc(400*var(--u))] z-30 max-md:static max-md:w-full max-md:px-5 max-md:mt-6">
          
          {/* Main Title: SOFTWARE ENGINEERING (Not covered!) */}
          <div className="overflow-visible leading-none">
            <span className="font-editorial-display block text-[calc(68*var(--u))] max-md:text-4xl leading-[0.9] tracking-[-0.04em] text-[#111111] uppercase font-bold">
              SOFTWARE
            </span>
            <span className="font-editorial-display block text-[calc(68*var(--u))] max-md:text-4xl leading-[0.9] tracking-[-0.04em] text-[#111111] uppercase font-bold mt-1">
              ENGINEERING
            </span>
          </div>
          <div className="text-[calc(14*var(--u))] font-mono font-medium text-[#111111]/70 mt-2">
            {displayName} (@{username}) · FPT University
          </div>

          {/* About Copy */}
          <div className="mt-[calc(26*var(--u))] max-md:mt-4">
            <div className="text-[calc(12*var(--u))] max-md:text-xs font-semibold tracking-wider text-[#111111] uppercase flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span>(ABOUT)</span>
            </div>
            <p className="text-[calc(13.5*var(--u))] max-md:text-sm font-medium text-zinc-800 leading-[1.5] max-w-[calc(350*var(--u))]">
              Specialized in high-throughput backend services, clean architecture, and modern cross-platform applications with .NET, React, and Flutter.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-[calc(20*var(--u))] max-md:mt-4 flex items-center gap-3">
            <a
              href="#projects"
              className="h-[calc(40*var(--u))] px-[calc(20*var(--u))] bg-black text-white rounded-full text-[calc(13*var(--u))] font-medium inline-flex items-center gap-1.5 hover:-translate-y-0.5 hover:bg-zinc-900 transition-all shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#contact"
              className="h-[calc(40*var(--u))] px-[calc(18*var(--u))] bg-white/80 hover:bg-white text-black border border-black/10 rounded-full text-[calc(13*var(--u))] font-medium inline-flex items-center gap-1 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Commits & Repos Card */}
          <div className="mt-[calc(28*var(--u))] max-md:mt-6 bg-[#171717] text-white rounded-[calc(12*var(--u))] p-[calc(18*var(--u))] max-md:p-4 shadow-xl border border-white/5 w-full">
            <div className="text-[calc(11.5*var(--u))] font-semibold text-white/60 uppercase tracking-wider mb-3">
              GitHub Metrics & Code Output
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <GitCommit size={13} className="text-white" />
                  <span>Commits</span>
                </div>
                <div className="font-editorial-display text-[calc(24*var(--u))] font-bold text-white leading-none">
                  520+
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <FolderGit2 size={13} className="text-white" />
                  <span>Repos</span>
                </div>
                <div className="font-editorial-display text-[calc(24*var(--u))] font-bold text-white leading-none">
                  {stats.totalRepos || profile?.public_repos || "28"}+
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <GitPullRequest size={13} className="text-white" />
                  <span>PRs</span>
                </div>
                <div className="font-editorial-display text-[calc(24*var(--u))] font-bold text-white leading-none">
                  89+
                </div>
              </div>
            </div>

            <div className="text-[calc(11*var(--u))] text-white/50 mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
              <span>Primary: C# .NET · TypeScript · Dart</span>
              <a href="#github" className="text-white hover:underline flex items-center gap-1 font-mono">
                View @{username} ↗
              </a>
            </div>
          </div>

        </div>

        {/* 3. Right Column: Featured Capstones (SkinSync & VSTEP) */}
        <div className="absolute right-[calc(57*var(--u))] top-[calc(140*var(--u))] w-[calc(340*var(--u))] z-30 max-md:static max-md:w-full max-md:px-5 max-md:mt-8">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-[calc(14*var(--u))] h-[calc(36*var(--u))] bg-white/80 backdrop-blur-md border border-white/90 rounded-full text-[calc(12.5*var(--u))] font-semibold text-[#111111] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Full-time Roles</span>
          </div>

          {/* Featured Capstones Header */}
          <div className="mt-[calc(24*var(--u))] max-md:mt-5 flex justify-between items-center text-[calc(12*var(--u))] font-semibold text-[#111111] uppercase tracking-wider">
            <span>Featured Capstone Projects</span>
            <span>[2026]</span>
          </div>

          {/* Dual Card Stack: SkinSync & VSTEP */}
          <div className="mt-2.5 flex flex-col gap-3">
            
            {/* Card 1: SkinSync */}
            <a
              href="https://github.com/tkiennt/SkinSync"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-3.5 rounded-[calc(10*var(--u))] bg-[#141414] text-white hover:bg-[#1a1a1a] transition-all border border-white/10 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80 mb-1.5">
                    Flutter Mobile · .NET 9 Backend
                  </span>
                  <h3 className="font-editorial-display text-[calc(18*var(--u))] font-bold text-white group-hover:text-zinc-200 transition-colors">
                    SkinSync Ecosystem
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-white/20 transition-all">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
              <p className="text-[calc(11.5*var(--u))] text-white/60 line-clamp-2 mt-1 leading-snug">
                Cross-Platform Skincare AI Assistant with toxic cosmetic ingredients conflict checker, Supabase & PayOS gateway.
              </p>
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                <span>44 commits on Kien</span>
                <span>·</span>
                <span>Owner (Fork)</span>
              </div>
            </a>

            {/* Card 2: VSTEP Writing Lab */}
            <a
              href="https://github.com/tkiennt/vstep-writing-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-3.5 rounded-[calc(10*var(--u))] bg-[#141414] text-white hover:bg-[#1a1a1a] transition-all border border-white/10 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80 mb-1.5">
                    ASP.NET Core · Next.js · Gemini AI
                  </span>
                  <h3 className="font-editorial-display text-[calc(18*var(--u))] font-bold text-white group-hover:text-zinc-200 transition-colors">
                    VSTEP Writing Lab
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-white/20 transition-all">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
              <p className="text-[calc(11.5*var(--u))] text-white/60 line-clamp-2 mt-1 leading-snug">
                Automated English exam prep & grading engine with tuned AI Gemini rubric and JsonRepairHelper streaming recovery.
              </p>
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                <span>73 commits on trungkien</span>
                <span>·</span>
                <span>Owner</span>
              </div>
            </a>

          </div>

        </div>

        {/* 4. Bottom Architectural Wordmark Strip */}
        <div className="absolute left-0 w-full bottom-[calc(20*var(--u))] flex items-center justify-center gap-[calc(28*var(--u))] text-[calc(12.5*var(--u))] tracking-[0.14em] font-medium text-[#111111]/70 uppercase z-20 pointer-events-none max-md:hidden">
          <span>Clean Architecture</span>
          <span className="opacity-30">·</span>
          <span>Distributed Systems</span>
          <span className="opacity-30">·</span>
          <span>High Concurrency</span>
        </div>

      </div>
    </header>
  );
};
