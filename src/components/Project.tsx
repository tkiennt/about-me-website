import React from "react";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { timelineProjects } from "../data/githubData";

// Featured project visual representations
const projectGradients: Record<string, string> = {
  "blood-donation-swp391": "from-rose-600 via-red-500 to-amber-500",
  "vstep-writing-lab": "from-indigo-600 via-purple-600 to-pink-500",
  "skinsync": "from-teal-500 via-cyan-600 to-blue-600",
  "valorant-tower-defense": "from-red-600 via-orange-600 to-neutral-900",
  "scientific-paper-reader": "from-sky-600 via-blue-700 to-indigo-800",
  "autowash-pro": "from-emerald-600 via-teal-600 to-cyan-700",
  "meal-prep-service": "from-amber-600 via-orange-500 to-emerald-600",
  "research-trend-analyzer": "from-violet-600 via-purple-700 to-fuchsia-600",
};

export const Project: React.FC = () => {
  // Take top 6 highlighted projects
  const featured = timelineProjects.slice(0, 6);

  return (
    <div className="projects-container" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1>Featured Engineering Projects</h1>
          <p className="text-base opacity-80 max-w-2xl">
            Selected showcase of key architectural implementations, cross-platform mobile systems, and AI-driven platforms developed with production-grade engineering principles.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {featured.map((item) => {
          const gradient = projectGradients[item.id] || "from-purple-600 to-indigo-800";
          const primaryRepo = item.repos[0];

          return (
            <div key={item.id} className="project-card group">
              {/* Card Visual / Thumbnail */}
              <div className="project-thumbnail relative flex items-center justify-center p-6 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-85 group-hover:opacity-100 transition-opacity duration-300`}
                />
                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                
                {/* Visual Label */}
                <div className="relative z-10 text-center text-white px-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <FolderGit2 size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
                    {item.category}
                  </span>
                  <div className="text-sm font-semibold mt-2 opacity-90">
                    {item.period}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2>{item.title}</h2>
                </div>

                <p>{item.description}</p>

                {/* Key contribution highlight */}
                <div className="text-xs opacity-90 mb-4 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                  <Sparkles size={14} className="text-[#5000ca] dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>{item.contributions[0]}</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.techStack.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="chip">
                      {tech}
                    </span>
                  ))}
                  {item.techStack.length > 5 && (
                    <span className="chip opacity-70">
                      +{item.techStack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Actions / Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800 mt-auto">
                  {primaryRepo && (
                    <a
                      href={primaryRepo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#5000ca] dark:text-purple-400 hover:underline"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Repository</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
