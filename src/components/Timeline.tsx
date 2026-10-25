import React, { useState } from "react";
import { 
  ArrowRight,
  FolderGit2, 
  Smartphone, 
  Gamepad2, 
  Layers, 
  FlaskConical,
  Award
} from "lucide-react";
import { timelineProjects } from "../data/githubData";
import { ProjectDetailModal } from "./ProjectDetailModal";
import type { TimelineProject } from "../types/github";

const categoryIcons: Record<string, any> = {
  "FPT Capstone & Core": Layers,
  "Mobile (Flutter)": Smartphone,
  "Client & Game": Gamepad2,
  "Tools & Practice": FlaskConical,
};

export const Timeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<TimelineProject | null>(null);

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
              Dòng thời gian các dự án kỹ thuật phần mềm và kỹ năng công nghệ thực tế. Nhấp vào từng dự án để xem tài liệu kiến trúc, đóng góp chi tiết và mã nguồn GitHub.
            </p>
          </div>

          {/* Total Projects Counter */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#5000ca] dark:text-purple-300 font-bold self-start md:self-auto">
            <Award size={18} />
            <span>{filteredProjects.length} Dự án theo mốc thời gian</span>
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

            return (
              <div
                key={project.id}
                className="vertical-timeline-element vertical-timeline-element--work group"
              >
                {/* Center Icon */}
                <span className="vertical-timeline-element-icon cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <IconComponent size={22} />
                </span>

                {/* Card Content with Speech Arrow: Clickable to open Project Detail */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="vertical-timeline-element-content cursor-pointer group-hover:border-[#5000ca] group-hover:shadow-xl group-hover:shadow-purple-900/10 transition-all duration-200"
                >
                  <div className="vertical-timeline-element-content-arrow"></div>

                  {/* Date Tag */}
                  <span className="vertical-timeline-element-date">
                    {project.period}
                  </span>

                  {/* 1. Tên dự án (Project Name) */}
                  <h3 className="vertical-timeline-element-title group-hover:text-[#5000ca] dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* 2. Skills (Tech Stack) */}
                  <div className="flex flex-wrap gap-1.5 pt-3 mb-2">
                    {project.techStack.map((tech, techIdx) => (
                      <span key={techIdx} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action prompt */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#5000ca] dark:text-purple-400 pt-2 border-t border-slate-200/60 dark:border-slate-800 group-hover:translate-x-1 transition-transform">
                    <span>Xem thông tin dự án chi tiết</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal / Page */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};
