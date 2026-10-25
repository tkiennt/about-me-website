import React, { useState } from 'react';
import { 
  GitCommit, 
  GitPullRequest, 
  FolderGit2, 
  GitBranch, 
  Check, 
  Copy, 
  ArrowDown, 
  MapPin, 
  GraduationCap, 
  ExternalLink,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { userProfile } from '../data/githubData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(userProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/5 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          
          {/* Left: Profile Info */}
          <div className="flex-1 max-w-3xl">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-6 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">@{userProfile.githubHandle}</span>
              <span className="text-slate-400">•</span>
              <span>Git Credential: <code className="text-slate-600 dark:text-slate-300 font-bold">{userProfile.subUsername}</code></span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Báo cáo thực tế 25/10/2026</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-3">
              {userProfile.name}
            </h1>

            <p className="text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 font-mono">
              {userProfile.role}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {userProfile.bio}
            </p>

            {/* University & Location Chips */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mb-8">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>{userProfile.university}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{userProfile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Branch-Scan Engine (520+ Commits)</span>
              </div>
            </div>

            {/* Active Working Branches Chips */}
            <div className="flex items-center gap-2 flex-wrap mb-8">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5 text-blue-500" />
                Nhánh làm việc chính:
              </span>
              {userProfile.stats.activeBranches.map((branch) => (
                <span
                  key={branch}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200/80 dark:border-slate-700/80"
                >
                  {branch}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Xem Timeline Đóng góp</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={`https://github.com/${userProfile.githubHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-700/60 hover:bg-slate-800 transition-all font-mono"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs sm:text-sm font-mono transition-colors"
                title="Sao chép Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Đã chép Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 opacity-70" />
                    <span>{userProfile.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right: Avatar & Quick Terminal Card */}
          <div className="w-full sm:w-auto flex flex-col items-center">
            <div className="relative group mb-6">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 shadow-xl transition-all">
                <img
                  src={userProfile.avatarUrl}
                  alt={userProfile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-slate-900 text-white shadow-lg border border-slate-800">
                <GithubIcon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Quick Terminal Card */}
            <div className="w-full max-w-xs p-3.5 rounded-2xl bg-slate-900 text-slate-300 font-mono text-[11px] border border-slate-800 shadow-md">
              <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-1 text-[10px] text-slate-400">git-profile.sh</span>
              </div>
              <div className="pt-2 space-y-1">
                <div><span className="text-emerald-400">$</span> git config user.name</div>
                <div className="text-slate-100 pl-3">"Trung Kiên"</div>
                <div><span className="text-emerald-400">$</span> git config user.email</div>
                <div className="text-slate-100 pl-3">"{userProfile.email}"</div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Executive Stats Cards */}
        <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                Tổng Commit Ghi nhận
              </span>
              <GitCommit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              {userProfile.stats.totalCommits}+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Quét trên toàn bộ các branch cá nhân
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                Repositories Tiếp cận
              </span>
              <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              {userProfile.stats.totalRepos}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              15 Public, 6 Private & Repos Nhóm
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                Pull Requests (PRs)
              </span>
              <GitPullRequest className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              {userProfile.stats.totalPRs}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tạo và merge thành công đa dự án
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                Quy trình Quản lý
              </span>
              <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              0 Issues
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Quy trình tập trung trực tiếp qua PRs
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
