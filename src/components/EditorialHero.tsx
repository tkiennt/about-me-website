import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, GitCommit, FolderGit2, GitPullRequest, Mail, FileText, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const contactEmail = "nguyentotrungkien@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Parallax photo drift on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (photoWrapRef.current) {
        const drift = window.scrollY * 0.06;
        photoWrapRef.current.style.transform = `translateY(${drift}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayName = profile?.name || "Trung Kiên";

  return (
    <header className="hero-editorial-section relative w-full bg-[#dadada] text-[#111111] overflow-hidden pt-[84px] max-md:pt-16 pb-6" id="hero">
      <div className="hero-artboard relative w-[calc(1440*var(--u))] max-w-full min-h-[calc(840*var(--u))] mx-auto">

        {/* 1. Hero Photo (myic2.jpg - Full body with basketball, head sits naturally below nav) */}
        <div
          ref={photoWrapRef}
          className="absolute left-1/2 -translate-x-1/2 top-[calc(15*var(--u))] w-[calc(530*var(--u))] h-[calc(810*var(--u))] z-10 pointer-events-none max-md:relative max-md:left-0 max-md:translate-x-0 max-md:top-0 max-md:w-full max-md:h-[460px] max-md:mt-2"
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

        {/* Central Brand Glass Plate (Orvante Archetype: Frosted plate across back) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(410*var(--u))] z-20 max-md:hidden pointer-events-auto">
          <div className="w-[calc(370*var(--u))] h-[calc(72*var(--u))] rounded-[calc(14*var(--u))] bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex items-center justify-between px-5 text-white group hover:border-white/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold font-mono text-xs text-white">
                TK
              </div>
              <div>
                <div className="font-editorial-display font-bold text-[calc(17*var(--u))] tracking-wider uppercase">
                  TRUNG KIÊN
                </div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                  Software Engineering · FPTU
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all"
                title="GitHub @tkiennt"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all"
                title="Email direct"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Left Column: Title "SOFTWARE ENGINEERING", Copy, Actions & GitHub Card */}
        <div className="absolute left-[calc(57*var(--u))] top-[calc(40*var(--u))] w-[calc(400*var(--u))] z-30 max-md:static max-md:w-full max-md:px-5 max-md:mt-4">
          
          {/* Main Title: SOFTWARE ENGINEERING */}
          <div className="overflow-visible leading-none">
            <span className="font-editorial-display block text-[calc(66*var(--u))] max-md:text-4xl leading-[0.9] tracking-[-0.04em] text-[#111111] uppercase font-bold">
              SOFTWARE
            </span>
            <span className="font-editorial-display block text-[calc(66*var(--u))] max-md:text-4xl leading-[0.9] tracking-[-0.04em] text-[#111111] uppercase font-bold mt-1">
              ENGINEERING
            </span>
          </div>
          <div className="text-[calc(13.5*var(--u))] font-mono font-medium text-[#111111]/75 mt-2 flex items-center gap-2">
            <span>{displayName} (@{username})</span>
            <span>·</span>
            <span>FPT University</span>
          </div>

          {/* About Copy */}
          <div className="mt-[calc(20*var(--u))] max-md:mt-4">
            <div className="text-[calc(11.5*var(--u))] max-md:text-xs font-semibold tracking-wider text-[#111111] uppercase flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span>(ABOUT)</span>
            </div>
            <p className="text-[calc(13*var(--u))] max-md:text-sm font-medium text-zinc-800 leading-[1.5] max-w-[calc(355*var(--u))]">
              Specialized in high-throughput backend services, clean architecture, and modern cross-platform applications with .NET, React, and Flutter.
            </p>
          </div>

          {/* Action Buttons & Social Pills */}
          <div className="mt-[calc(18*var(--u))] max-md:mt-4 space-y-3">
            <div className="flex items-center gap-3">
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

            {/* Social Quick Pills Row */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-[calc(36*var(--u))] h-[calc(36*var(--u))] rounded-full bg-white/80 hover:bg-black hover:text-white text-[#111111] border border-black/10 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-[calc(36*var(--u))] h-[calc(36*var(--u))] rounded-full bg-white/80 hover:bg-black hover:text-white text-[#111111] border border-black/10 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="px-3 h-[calc(36*var(--u))] rounded-full bg-white/80 hover:bg-black hover:text-white text-[#111111] border border-black/10 flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-200 shadow-sm cursor-pointer"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copiedEmail ? "Copied" : "Email"}</span>
              </button>
              <a
                href="#contact"
                className="px-3 h-[calc(36*var(--u))] rounded-full bg-white/80 hover:bg-black hover:text-white text-[#111111] border border-black/10 flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-200 shadow-sm"
              >
                <FileText size={13} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Commits & Repos Card */}
          <div className="mt-[calc(22*var(--u))] max-md:mt-6 bg-[#171717] text-white rounded-[calc(12*var(--u))] p-[calc(18*var(--u))] max-md:p-4 shadow-xl border border-white/5 w-full">
            <div className="text-[calc(11*var(--u))] font-semibold text-white/60 uppercase tracking-wider mb-2.5">
              GitHub Metrics & Code Output
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <GitCommit size={13} className="text-white" />
                  <span>Commits</span>
                </div>
                <div className="font-editorial-display text-[calc(22*var(--u))] font-bold text-white leading-none">
                  520+
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <FolderGit2 size={13} className="text-white" />
                  <span>Repos</span>
                </div>
                <div className="font-editorial-display text-[calc(22*var(--u))] font-bold text-white leading-none">
                  {stats.totalRepos || profile?.public_repos || "28"}+
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <GitPullRequest size={13} className="text-white" />
                  <span>PRs</span>
                </div>
                <div className="font-editorial-display text-[calc(22*var(--u))] font-bold text-white leading-none">
                  89+
                </div>
              </div>
            </div>

            <div className="text-[calc(11*var(--u))] text-white/50 mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
              <span>Primary: C# .NET · TypeScript · Dart</span>
              <a href="#github" className="text-white hover:underline flex items-center gap-1 font-mono">
                View @{username} ↗
              </a>
            </div>
          </div>

        </div>

        {/* 3. Right Column: Featured Capstones & Social Hub */}
        <div className="absolute right-[calc(57*var(--u))] top-[calc(40*var(--u))] w-[calc(340*var(--u))] z-30 max-md:static max-md:w-full max-md:px-5 max-md:mt-6">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-[calc(14*var(--u))] h-[calc(34*var(--u))] bg-white/85 backdrop-blur-md border border-white/90 rounded-full text-[calc(12*var(--u))] font-semibold text-[#111111] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Full-time Roles</span>
          </div>

          {/* Featured Capstones Header */}
          <div className="mt-[calc(18*var(--u))] max-md:mt-4 flex justify-between items-center text-[calc(11.5*var(--u))] font-semibold text-[#111111] uppercase tracking-wider">
            <span>Featured Capstones</span>
            <span>[2026]</span>
          </div>

          {/* Dual Card Stack: SkinSync & VSTEP */}
          <div className="mt-2 flex flex-col gap-2.5">
            
            {/* Card 1: SkinSync */}
            <a
              href="https://github.com/tkiennt/SkinSync"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-3 rounded-[calc(10*var(--u))] bg-[#141414] text-white hover:bg-[#1c1c1c] transition-all border border-white/10 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80 mb-1">
                    Flutter Mobile · .NET 9 Backend
                  </span>
                  <h3 className="font-editorial-display text-[calc(17*var(--u))] font-bold text-white group-hover:text-zinc-200 transition-colors">
                    SkinSync Ecosystem
                  </h3>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-white/20 transition-all">
                  <ArrowUpRight size={13} className="text-white" />
                </div>
              </div>
              <p className="text-[calc(11*var(--u))] text-white/60 line-clamp-2 mt-1 leading-snug">
                Cross-Platform Skincare AI Assistant with toxic cosmetic ingredients conflict checker, Supabase & PayOS gateway.
              </p>
              <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono text-zinc-400">
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
              className="group relative block p-3 rounded-[calc(10*var(--u))] bg-[#141414] text-white hover:bg-[#1c1c1c] transition-all border border-white/10 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80 mb-1">
                    ASP.NET Core · Next.js · Gemini AI
                  </span>
                  <h3 className="font-editorial-display text-[calc(17*var(--u))] font-bold text-white group-hover:text-zinc-200 transition-colors">
                    VSTEP Writing Lab
                  </h3>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-white/20 transition-all">
                  <ArrowUpRight size={13} className="text-white" />
                </div>
              </div>
              <p className="text-[calc(11*var(--u))] text-white/60 line-clamp-2 mt-1 leading-snug">
                Automated English exam prep & grading engine with tuned AI Gemini rubric and JsonRepairHelper streaming recovery.
              </p>
              <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                <span>73 commits on trungkien</span>
                <span>·</span>
                <span>Owner</span>
              </div>
            </a>

          </div>

          {/* Social Channels & Developer Network Component */}
          <div className="mt-3 p-3.5 rounded-[calc(10*var(--u))] bg-white/80 backdrop-blur-xl border border-white/90 shadow-md text-[#111111]">
            <div className="flex items-center justify-between text-[10.5px] font-mono font-semibold uppercase tracking-wider text-[#111111]/70 mb-2 pb-1.5 border-b border-black/10">
              <span>Developer Social Links</span>
              <span className="text-[10px] font-mono text-zinc-500">@{username}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-black/5 hover:bg-black hover:text-white transition-all group border border-black/5"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0 text-[#111111] group-hover:text-white transition-colors" />
                <div className="overflow-hidden">
                  <div className="font-semibold text-[11px] leading-tight">GitHub</div>
                  <div className="text-[9.5px] text-zinc-500 group-hover:text-zinc-300 truncate font-mono">Repositories</div>
                </div>
                <ArrowUpRight size={11} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-black/5 hover:bg-black hover:text-white transition-all group border border-black/5"
              >
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0 text-[#111111] group-hover:text-white transition-colors" />
                <div className="overflow-hidden">
                  <div className="font-semibold text-[11px] leading-tight">LinkedIn</div>
                  <div className="text-[9.5px] text-zinc-500 group-hover:text-zinc-300 truncate font-mono">Connect</div>
                </div>
                <ArrowUpRight size={11} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 p-2 rounded-lg bg-black/5 hover:bg-black hover:text-white transition-all group border border-black/5"
              >
                <Mail size={13} className="shrink-0 text-[#111111] group-hover:text-white transition-colors" />
                <div className="overflow-hidden">
                  <div className="font-semibold text-[11px] leading-tight">Email</div>
                  <div className="text-[9.5px] text-zinc-500 group-hover:text-zinc-300 truncate font-mono">Inquiry</div>
                </div>
                <ArrowUpRight size={11} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 p-2 rounded-lg bg-black/5 hover:bg-black hover:text-white transition-all group border border-black/5"
              >
                <FileText size={13} className="shrink-0 text-[#111111] group-hover:text-white transition-colors" />
                <div className="overflow-hidden">
                  <div className="font-semibold text-[11px] leading-tight">Resume</div>
                  <div className="text-[9.5px] text-zinc-500 group-hover:text-zinc-300 truncate font-mono">CV '26</div>
                </div>
                <ArrowUpRight size={11} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* 4. Bottom Architectural & Social Ticker Strip */}
        <div className="absolute left-0 w-full bottom-[calc(14*var(--u))] flex items-center justify-center gap-[calc(24*var(--u))] text-[calc(11.5*var(--u))] tracking-[0.14em] font-medium text-[#111111]/70 uppercase z-20 pointer-events-auto max-md:hidden px-8">
          <span>Clean Architecture</span>
          <span className="opacity-30">·</span>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline flex items-center gap-1 font-mono normal-case">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/{username}</span>
          </a>
          <span className="opacity-30">·</span>
          <span>Distributed Systems</span>
          <span className="opacity-30">·</span>
          <a href={`mailto:${contactEmail}`} className="hover:text-black hover:underline flex items-center gap-1 font-mono normal-case">
            <Mail size={12} />
            <span>{contactEmail}</span>
          </a>
          <span className="opacity-30">·</span>
          <span>High Concurrency</span>
        </div>

      </div>
    </header>
  );
};
