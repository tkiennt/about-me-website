import React from "react";
import { ArrowDown, ArrowUpRight, FolderGit2, GitBranch, GitCommit } from "lucide-react";

export const EditorialManifesto: React.FC = () => {
  const topRepos = [
    {
      id: "skinsync",
      name: "SkinSync Ecosystem",
      repo: "tkiennt/SkinSync",
      url: "https://github.com/tkiennt/SkinSync",
      badge: "Mobile & Backend",
      tech: ["Flutter", ".NET 9", "Supabase", "PayOS"],
      commits: "44 Commits",
      branch: "branch: Kien",
      desc: "Cross-platform skincare AI assistant with toxic cosmetic conflict verification, mobile-to-cloud synchronization, and PayOS gateway.",
      highlight: "Clean Architecture · Mobile UI Sync",
    },
    {
      id: "vstep",
      name: "VSTEP Writing Lab",
      repo: "tkiennt/vstep-writing-lab",
      url: "https://github.com/tkiennt/vstep-writing-lab",
      badge: "AI Scoring Engine",
      tech: ["ASP.NET Core", "Next.js", "TypeScript", "Gemini AI"],
      commits: "73 Commits",
      branch: "branch: trungkien",
      desc: "Automated English essay scoring engine utilizing fine-tuned Gemini AI, Rubric analysis, and streaming JsonRepairHelper.",
      highlight: "Resilient JSON Recovery · EF Core",
    },
    {
      id: "blood-system",
      name: "Blood Donation System",
      repo: "tkiennt/Project_SWP391_BloodDonationSystem",
      url: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
      badge: "Healthcare Platform",
      tech: ["Java Spring Boot", "React", "MySQL", "REST API"],
      commits: "93 Commits",
      branch: "branch: trungkien",
      desc: "Humanitarian blood coordination platform featuring blood compatibility matching algorithms, inventory tracking, and donor scheduling.",
      highlight: "Matching Algorithm · Event Scheduling",
    },
  ];

  return (
    <div className="w-full bg-black text-[#f4f4f4]">
      {/* 1. Black Bar: 111u tall with bottom hairline */}
      <div className="w-full h-[calc(111*var(--u))] max-md:h-auto max-md:py-6 border-b border-white/15 bg-black relative z-20">
        <div className="w-[calc(1440*var(--u))] max-w-full h-full mx-auto flex max-md:flex-col items-center justify-between px-[calc(57*var(--u))] font-editorial-display text-[calc(14*var(--u))] max-md:text-xs font-semibold tracking-wider uppercase max-md:gap-3">
          <div className="flex items-center gap-2">
            <span>EST</span>
            <span className="text-[#6f6f6f]">2022 · FPT UNIVERSITY</span>
          </div>

          <a href="#featured-repos" className="flex items-center gap-3 hover:text-white group cursor-pointer">
            <span>EXPLORE REPOSITORIES</span>
            <div className="w-[calc(32*var(--u))] h-[calc(32*var(--u))] rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:translate-y-1 group-hover:border-white">
              <ArrowDown size={14} />
            </div>
          </a>

          <div className="text-[#6f6f6f]">3 FEATURED REPOSITORIES</div>
        </div>
      </div>

      {/* 2. Three Featured Repositories Section (3-Column Pill Layout, strictly matching theme) */}
      <section
        id="featured-repos"
        className="w-full pt-[calc(100*var(--u))] pb-[calc(140*var(--u))] max-md:pt-16 max-md:pb-20 relative overflow-hidden"
      >
        <div className="w-[calc(1302*var(--u))] max-w-[94vw] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[calc(50*var(--u))] max-md:mb-8 border-b border-white/15 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-zinc-300 uppercase tracking-widest mb-3">
                <FolderGit2 size={13} className="text-white" />
                <span>Featured Engineering Repositories</span>
              </div>
              <h2 className="font-editorial-display text-[calc(44*var(--u))] max-md:text-3xl font-bold tracking-tight text-white uppercase">
                Core Codebases
              </h2>
            </div>
            <p className="text-[calc(14*var(--u))] max-md:text-sm text-zinc-400 max-w-[calc(420*var(--u))] mt-3 md:mt-0 font-normal leading-relaxed">
              Three production-oriented systems designed with Clean Architecture, microservices, and AI integrations (excluding PanelForge).
            </p>
          </div>

          {/* 3-Column Pill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[calc(20*var(--u))] max-md:gap-5">
            {topRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-[calc(28*var(--u))] max-md:p-6 rounded-[calc(20*var(--u))] bg-[#0d0d0d] border border-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl"
              >
                {/* Top Row: Category pill & External Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 text-white font-medium border border-white/10">
                      {repo.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Title & Repo Path */}
                  <h3 className="font-editorial-display text-[calc(24*var(--u))] max-md:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {repo.name}
                  </h3>
                  <div className="font-mono text-[calc(11.5*var(--u))] text-zinc-400 mt-1 mb-3 flex items-center gap-1.5">
                    <GitBranch size={12} className="text-zinc-500" />
                    <span>{repo.repo}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[calc(13*var(--u))] max-md:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                    {repo.desc}
                  </p>
                </div>

                {/* Bottom Row: Tech Tags & Commits */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {repo.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1 text-white">
                      <GitCommit size={12} />
                      <span>{repo.commits}</span>
                    </span>
                    <span className="text-zinc-500">{repo.branch}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
