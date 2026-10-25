import React, { useState } from "react";
import { 
  GitBranch, 
  ExternalLink, 
  CheckCircle2, 
  FolderGit2, 
  Sparkles, 
  Smartphone, 
  Gamepad2, 
  Layers, 
  FlaskConical,
  Award
} from "lucide-react";
import { timelineProjects } from "../data/githubData";
import type { TimelineProject } from "../types/github";

const categoryIcons: Record<string, any> = {
  "FPT Capstone & Core": Layers,
  "Mobile (Flutter)": Smartphone,
  "Client & Game": Gamepad2,
  "Tools & Practice": FlaskConical,
};

export const Timeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "FPT Capstone & Core", "Mobile (Flutter)", "Client & Game", "Tools & Practice"];

  const filteredProjects = selectedCategory === "All"
    ? timelineProjects
    : timelineProjects.filter((p) => p.category === selectedCategory);

  return (
    <div id="history">
      <div className="items-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h1>Project & Engineering Timeline</h1>
            <p className="text-base opacity-80 max-w-2xl">
              Chronological journey of real software engineering projects, contributions, and key takeaways across FPT University coursework, cross-platform mobile apps, AI scoring systems, and game architectures.
            </p>
          </div>

          {/* Total Projects Counter */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#5000ca] dark:text-purple-300 font-bold self-start md:self-auto">
            <Award size={18} />
            <span>{filteredProjects.length} Milestones Tracked</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#5000ca] text-white shadow-lg shadow-purple-900/30"
                  : "bg-slate-200/80 dark:bg-[#161b22] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          {filteredProjects.map((project: TimelineProject) => {
            const IconComponent = categoryIcons[project.category] || FolderGit2;
            const primaryRepo = project.repos[0];

            return (
              <div
                key={project.id}
                className="vertical-timeline-element vertical-timeline-element--work"
              >
                {/* Center Icon */}
                <span className="vertical-timeline-element-icon">
                  <IconComponent size={22} />
                </span>

                {/* Card Content with Speech Arrow */}
                <div className="vertical-timeline-element-content">
                  <div className="vertical-timeline-element-content-arrow"></div>

                  {/* Header Row: Category Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-[#5000ca] dark:text-purple-300">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={13} /> {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="vertical-timeline-element-title">
                    {project.title}
                  </h3>

                  {/* Affiliation & Role */}
                  {primaryRepo && (
                    <h4 className="vertical-timeline-element-subtitle flex items-center gap-2 flex-wrap">
                      <span>{primaryRepo.role}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-purple-600 dark:text-purple-300">
                        <GitBranch size={12} /> {primaryRepo.branch}
                      </span>
                      <span>·</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {primaryRepo.commits} commits
                      </span>
                    </h4>
                  )}

                  {/* Date Tag */}
                  <span className="vertical-timeline-element-date">
                    {project.period}
                  </span>

                  {/* Description */}
                  <p className="text-sm leading-relaxed opacity-90 my-3 font-normal">
                    {project.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="my-3 space-y-1.5 border-t border-slate-200/60 dark:border-slate-800 pt-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5000ca] dark:text-purple-400 mb-1 flex items-center gap-1">
                      <Sparkles size={12} /> Key Engineering Deliverables
                    </div>
                    {project.contributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs leading-normal opacity-85">
                        <span className="text-[#5000ca] dark:text-purple-400 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 mb-3">
                    {project.techStack.map((tech, techIdx) => (
                      <span key={techIdx} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    {project.repos.map((repo, repoIdx) => (
                      <a
                        key={repoIdx}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-purple-100 dark:bg-slate-800/90 dark:hover:bg-purple-900/30 text-slate-700 dark:text-slate-200 hover:text-[#5000ca] transition-all"
                      >
                        <FolderGit2 size={13} className="text-[#5000ca]" />
                        <span>{repo.name.split("/")[1] || repo.name}</span>
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
