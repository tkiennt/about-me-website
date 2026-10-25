import React, { useState, useMemo } from 'react';
import { 
  GitCommit, 
  GitPullRequest, 
  ExternalLink, 
  Calendar, 
  GitBranch, 
  CheckCircle2, 
  Clock,
  Lock,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { timelineProjects } from '../data/githubData';
import type { TimelineProject } from '../types/github';

export const TimelineSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'FPT Capstone & Core', 'Mobile (Flutter)', 'Client & Game', 'Tools & Practice'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return timelineProjects;
    return timelineProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="timeline" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3 font-mono">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Developer Journey & Projects Timeline (ParamBirje Inspired)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dòng thời gian Dự án & Đóng góp Kỹ thuật
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Lịch sử phát triển các dự án thực tế qua các mốc thời gian, chi tiết từng nhánh tính năng (<code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">trungkien</code>, <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">Kien</code>, <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">KienNTT_branch</code>) cùng số lượng commit thực chiến.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Signature Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 before:absolute before:inset-0 before:left-2 sm:before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-emerald-500 before:opacity-60 space-y-12">
          {filteredProjects.map((project) => (
            <TimelineCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface TimelineCardProps {
  project: TimelineProject;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ project }) => {
  return (
    <div className="relative group">
      {/* Timeline Node Point */}
      <div className={`absolute -left-[30px] sm:-left-[42px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 ${
        project.isConfidential ? 'border-amber-500' : 'border-blue-600'
      } shadow-xs z-10 group-hover:scale-125 transition-transform`} />

      {/* Card Body */}
      <div className={`rounded-3xl bg-white dark:bg-slate-900 border p-6 sm:p-8 shadow-xs hover:shadow-md transition-all ${
        project.isConfidential
          ? 'border-amber-500/30 dark:border-amber-500/30 ring-1 ring-amber-500/20'
          : 'border-slate-200/90 dark:border-slate-800/90'
      }`}>
        
        {/* Header: Period, Category & Confidentiality Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {project.category}
            </span>
            {project.isConfidential && (
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800/60">
                <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>Bảo mật / NDA</span>
              </span>
            )}
          </div>

          <div>
            {project.status === 'Active' ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60 font-mono">
                <Clock className="w-3 h-3 animate-spin" /> Đang phát triển tích cực
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full font-mono">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Hoàn thành & Đồng bộ
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Confidential Notice Banner (if any) */}
        {project.isConfidential && project.confidentialNotice && (
          <div className="mb-5 p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Thông báo bảo mật:</strong> {project.confidentialNotice}
            </p>
          </div>
        )}

        {/* Repositories & Working Branches Info */}
        <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
          <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-blue-500" />
              <span>Repository & Nhánh làm việc ({project.repos.length})</span>
            </span>
            {project.isConfidential && (
              <span className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                <Lock className="w-3 h-3" /> Private Access Only
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.repos.map((repo) => {
              const isLocked = repo.isPrivate || !repo.url;
              return isLocked ? (
                /* Protected / Private Repo Item */
                <div
                  key={repo.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-amber-200/60 dark:border-amber-900/40"
                  title="Kho lưu trữ nội bộ được bảo mật"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                      {repo.commits} commits
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {repo.branch}
                    </span>
                  </div>
                </div>
              ) : (
                /* Public Accessible Repo Item */
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group/link"
                >
                  <div className="flex items-center gap-2 truncate">
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                    <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400">
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                      {repo.commits} commits
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {repo.branch}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-blue-500" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Concrete Contributions Bullet Points */}
        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-blue-500" />
            <span>Chi tiết Đóng góp của Trung Kiên</span>
          </div>
          <ul className="space-y-1.5">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};
