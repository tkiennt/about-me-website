import React from 'react';
import { GitFork, CheckCircle, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';
import { upstreamReposData } from '../data/githubData';

export const UpstreamSync: React.FC = () => {
  return (
    <section id="upstream" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-3 font-mono">
            <GitFork className="w-3.5 h-3.5" />
            <span>Upstream Sync Status</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Đồng bộ Tiến độ với Dự án Gốc (Upstream Repos)
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Theo dõi trạng thái đồng bộ giữa các repository forked trên profile cá nhân (@tkiennt) với các dự án nhóm và tổ chức gốc (Upstream Parents).
          </p>
        </div>

        {/* Upstream Table Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 font-mono text-slate-500 dark:text-slate-400">
                  <th className="py-3.5 px-4 font-semibold w-12 text-center">STT</th>
                  <th className="py-3.5 px-4 font-semibold">Tên Fork Repo trên Profile</th>
                  <th className="py-3.5 px-4 font-semibold">Dự án gốc (Upstream Parent)</th>
                  <th className="py-3.5 px-4 font-semibold">Nhánh mặc định</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Trạng thái đồng bộ</th>
                  <th className="py-3.5 px-4 font-semibold min-w-[280px]">Ghi chú xử lý</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {upstreamReposData.map((repo, idx) => (
                  <tr
                    key={repo.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                      {idx + 1}
                    </td>

                    <td className="py-3.5 px-4 font-mono font-semibold">
                      {repo.forkUrl ? (
                        <a
                          href={repo.forkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <span>{repo.forkName}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      ) : (
                        <span>{repo.forkName}</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-700 dark:text-slate-300">
                      <a
                        href={`https://github.com/${repo.upstreamParent}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        <span>{repo.upstreamParent}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                      </a>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px]">
                        {repo.defaultBranch}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        repo.syncStatus === 'Merged & Synced'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : repo.syncStatus === 'Identical'
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                      }`}>
                        {repo.syncStatus === 'Merged & Synced' && <CheckCircle className="w-3 h-3" />}
                        {repo.syncStatus === 'Identical' && <RefreshCw className="w-3 h-3" />}
                        {repo.syncStatus === 'Diverged' && <AlertCircle className="w-3 h-3" />}
                        <span>{repo.syncStatus}</span>
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 leading-snug">
                      {repo.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
