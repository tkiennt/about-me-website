import React from "react";
import { Mail, MapPin, GraduationCap, ArrowDown, FolderGit2, Star, Users, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import type { GitHubUserProfile, GitHubAggregatedStats } from "../types/githubRealtime";

interface MainProps {
  profile: GitHubUserProfile | null;
  stats: GitHubAggregatedStats;
  username: string;
  isLive: boolean;
  loading: boolean;
}

export const Main: React.FC<MainProps> = ({
  profile,
  stats,
  username,
  isLive,
  loading,
}) => {
  const avatarUrl = profile?.avatar_url || "https://avatars.githubusercontent.com/u/169631839?v=4";
  const displayName = profile?.name || "Trung Kiên";
  const bio = "I build reliable web systems and cross-platform mobile apps with .NET, React, and Flutter. Passionate about clean architecture, scalable APIs, and open-source software.";

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle radial glow - Victor Eke style */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#33E092]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill - Victor Eke Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 light-mode:bg-zinc-100 border border-zinc-800 light-mode:border-zinc-200 text-xs font-mono text-zinc-300 light-mode:text-zinc-700 mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33E092] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33E092]"></span>
              </span>
              <span>Available for full-time & contract roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 light-mode:text-zinc-900 mb-4 leading-tight">
              I'm <span className="text-[#33E092]">{displayName}</span>
            </h1>

            {/* Role Subheading */}
            <h2 className="text-lg sm:text-xl font-medium text-zinc-400 light-mode:text-zinc-600 mb-5">
              Software Engineer & Fullstack / Mobile Developer
            </h2>

            {/* Location & Academic tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 light-mode:text-zinc-500 mb-6">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#33E092]" />
                TPHCM, Việt Nam
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap size={14} className="text-[#33E092]" />
                FPT University HCMC (Software Engineering)
              </span>
            </div>

            {/* Minimal Punchy Bio (No redundant words) */}
            <p className="text-base text-zinc-300 light-mode:text-zinc-700 leading-relaxed max-w-xl mb-8">
              {bio}
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-[#33E092] text-zinc-950 font-semibold text-sm hover:bg-[#0CCE6B] transition-colors shadow-sm primary-glow-sm inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 light-mode:bg-white text-zinc-200 light-mode:text-zinc-800 border border-zinc-800 light-mode:border-zinc-200 font-semibold text-sm hover:border-[#33E092]/60 transition-colors"
              >
                Get In Touch
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-2.5 rounded-xl bg-zinc-900 light-mode:bg-zinc-100 border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nguyentotrungkien/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-xl bg-zinc-900 light-mode:bg-zinc-100 border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nguyentotrungkien@gmail.com"
                  title="Email"
                  className="p-2.5 rounded-xl bg-zinc-900 light-mode:bg-zinc-100 border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time GitHub Live Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl p-6 bg-zinc-900/60 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 backdrop-blur-md shadow-xl card-hover-lift text-left relative overflow-hidden">
              
              {/* Subtle accent badge */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-zinc-800/80 light-mode:border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={avatarUrl}
                      alt={displayName}
                      className="w-14 h-14 rounded-2xl border-2 border-zinc-700/80 object-cover shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-zinc-950 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#33E092]"></span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-100 light-mode:text-zinc-900 flex items-center gap-1.5">
                      <span>{displayName}</span>
                    </h3>
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#33E092] hover:underline flex items-center gap-1"
                    >
                      <span>@{username}</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <div className="px-2 py-1 rounded-md bg-[#33E092]/10 border border-[#33E092]/30 text-[#33E092] text-[10px] font-mono uppercase tracking-wider font-bold">
                  {isLive ? "LIVE DATA" : "SYNCED"}
                </div>
              </div>

              {/* Dynamic Real-Time Stats Grid (from GitHub API) */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <div className="p-3 rounded-2xl bg-zinc-950/60 light-mode:bg-zinc-50 border border-zinc-800/60 light-mode:border-zinc-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-zinc-400 mb-1">
                    <FolderGit2 size={12} className="text-[#33E092]" />
                    <span>REPOS</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-100 light-mode:text-zinc-900">
                    {loading ? "..." : stats.totalRepos}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-950/60 light-mode:bg-zinc-50 border border-zinc-800/60 light-mode:border-zinc-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-zinc-400 mb-1">
                    <Star size={12} className="text-amber-400" />
                    <span>STARS</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-100 light-mode:text-zinc-900">
                    {loading ? "..." : stats.totalStars}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-950/60 light-mode:bg-zinc-50 border border-zinc-800/60 light-mode:border-zinc-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-zinc-400 mb-1">
                    <Users size={12} className="text-sky-400" />
                    <span>FOLLOWERS</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-100 light-mode:text-zinc-900">
                    {loading ? "..." : stats.followers}
                  </div>
                </div>
              </div>

              {/* Live Languages breakdown (dynamically computed from GitHub repos) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Sparkles size={11} className="text-[#33E092]" />
                    <span>Real-Time Tech Breakdown:</span>
                  </span>
                  <span className="text-[10px] text-zinc-500">From public repos</span>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-zinc-800 light-mode:bg-zinc-200 overflow-hidden flex">
                  {stats.topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                      title={`${lang.name}: ${lang.percentage}%`}
                      className="h-full transition-all duration-500"
                    />
                  ))}
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {stats.topLanguages.slice(0, 4).map((lang) => (
                    <span
                      key={lang.name}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800/80 light-mode:bg-zinc-100 text-[11px] font-mono text-zinc-300 light-mode:text-zinc-700"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span>{lang.name}</span>
                      <span className="text-zinc-500 text-[10px]">{lang.percentage}%</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
