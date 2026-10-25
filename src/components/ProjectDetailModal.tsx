import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  GitBranch, 
  GitCommit, 
  FolderGit2, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Layers
} from "lucide-react";
import { GithubIcon } from "./Icons";
import type { TimelineProject } from "../types/github";

interface ProjectDetailModalProps {
  project: TimelineProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const totalCommits = project.repos.reduce((acc, r) => acc + r.commits, 0);
  const primaryRepo = project.repos[0];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#ffffff] dark:bg-[#161b22] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-[#5000ca] dark:text-purple-300">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                <CheckCircle2 size={13} /> {project.status}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs opacity-75 font-mono">
                <Calendar size={13} className="text-[#5000ca]" />
                {project.period}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
            <div>
              <div className="text-xs opacity-70 font-semibold mb-0.5">Tổng commits đóng góp</div>
              <div className="text-xl font-black text-[#5000ca] dark:text-purple-400 flex items-center gap-1.5">
                <GitCommit size={18} />
                <span>{totalCommits} commits</span>
              </div>
            </div>
            {primaryRepo && (
              <div>
                <div className="text-xs opacity-70 font-semibold mb-0.5">Vai trò dự án</div>
                <div className="text-base font-bold text-slate-800 dark:text-slate-200">
                  {primaryRepo.role}
                </div>
              </div>
            )}
            {primaryRepo && (
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs opacity-70 font-semibold mb-0.5">Nhánh chính làm việc</div>
                <div className="text-sm font-mono font-bold text-[#a855f7] flex items-center gap-1">
                  <GitBranch size={14} />
                  <span>{primaryRepo.branch}</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 1: Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5000ca] dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <Layers size={14} /> TỔNG QUAN DỰ ÁN
            </h3>
            <p className="text-base leading-relaxed opacity-90">
              {project.description}
            </p>
          </div>

          {/* Section 2: Skills / Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5000ca] dark:text-purple-400 mb-2.5">
              KỸ NĂNG & CÔNG NGHỆ ÁP DỤNG (SKILLS)
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-[#5000ca] dark:text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: Key Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5000ca] dark:text-purple-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles size={14} /> ĐÓNG GÓP KỸ THUẬT & KẾT QUẢ THEN CHỐT
            </h3>
            <div className="space-y-2.5">
              {project.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-[#5000ca]/15 text-[#5000ca] dark:text-purple-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Repositories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5000ca] dark:text-purple-400 mb-2.5 flex items-center gap-1.5">
              <FolderGit2 size={14} /> KHO MÃ NGUỒN GITHUB
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.repos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-purple-50 dark:bg-slate-900/60 dark:hover:bg-purple-950/30 hover:border-[#5000ca] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold truncate text-slate-800 dark:text-slate-200 group-hover:text-[#5000ca]">
                      {repo.name}
                    </span>
                    <ExternalLink size={13} className="shrink-0 opacity-60 group-hover:opacity-100 group-hover:text-[#5000ca]" />
                  </div>
                  <div className="flex items-center justify-between text-xs opacity-75 font-mono pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    <span className="flex items-center gap-1">
                      <GitBranch size={11} /> {repo.branch}
                    </span>
                    <span className="font-bold text-[#5000ca] dark:text-purple-300">
                      {repo.commits} commits
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đóng
          </button>

          {primaryRepo && (
            <a
              href={primaryRepo.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5000ca] hover:bg-[#6200ea] text-white text-sm font-bold shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Mở kho lưu trữ GitHub</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
