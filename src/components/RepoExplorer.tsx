import React, { useState, useMemo } from 'react';
import { FolderGit2, Search, ExternalLink, Lock, Globe, GitBranch, GitCommit, Filter } from 'lucide-react';
import { allRepositoriesData } from '../data/githubData';

export const RepoExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedRole, setSelectedRole] = useState<string>('All');

  const languages = ['All', 'TypeScript', 'C#', 'Dart / Flutter', 'JavaScript', 'Java'];
  const roles = ['All', 'Owner', 'Collaborator', 'Owner (Fork)'];

  const filteredRepos = useMemo(() => {
    return allRepositoriesData.filter((repo) => {
      const matchesSearch =
        searchQuery === '' ||
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.subsystem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.branch.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLanguage =
        selectedLanguage === 'All' ||
        (selectedLanguage === 'C#' && repo.language.includes('C#')) ||
        (selectedLanguage === 'Dart / Flutter' && repo.language.includes('Dart')) ||
        repo.language.toLowerCase().includes(selectedLanguage.toLowerCase());

      const matchesRole =
        selectedRole === 'All' ||
        repo.role.toLowerCase() === selectedRole.toLowerCase();

      return matchesSearch && matchesLanguage && matchesRole;
    });
  }, [searchQuery, selectedLanguage, selectedRole]);

  return (
    <section id="repos" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3 font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Public Repositories Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kho Repositories & Chi tiết Đóng góp
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Bảng thống kê danh mục repositories được hiển thị công khai. Các dự án nội bộ đang phát triển được ẩn hoàn toàn theo yêu cầu bảo mật, trong khi tổng số lượng commit (<strong>520+ commits</strong> trên 34 repositories) vẫn được hệ thống ghi nhận toàn diện.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm tên repo, phân hệ đóng góp, nhánh..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 self-end md:self-auto">
              Hiển thị: <strong>{filteredRepos.length}</strong> / {allRepositoriesData.length} repositories công khai
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3" />
              Ngôn ngữ:
            </span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedLanguage === lang
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {lang}
              </button>
            ))}

            <span className="text-xs font-mono text-slate-400 ml-3 flex items-center gap-1 shrink-0">
              Vai trò:
            </span>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedRole === r
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

        </div>

        {/* Repositories Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 font-mono text-slate-500 dark:text-slate-400">
                  <th className="py-3.5 px-4 font-semibold w-12 text-center">STT</th>
                  <th className="py-3.5 px-4 font-semibold">Tên Repository</th>
                  <th className="py-3.5 px-4 font-semibold">Vai trò</th>
                  <th className="py-3.5 px-4 font-semibold">Ngôn ngữ</th>
                  <th className="py-3.5 px-4 font-semibold">Nhánh làm việc</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Commits</th>
                  <th className="py-3.5 px-4 font-semibold min-w-[280px]">Phân hệ tham gia đóng góp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredRepos.map((repo, idx) => (
                  <tr
                    key={repo.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                      {idx + 1}
                    </td>

                    <td className="py-3.5 px-4 font-mono font-semibold">
                      {repo.url ? (
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {repo.isPrivate ? (
                            <span title="Private Repo">
                              <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            </span>
                          ) : (
                            <span title="Public Repo">
                              <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            </span>
                          )}
                          <span className="truncate max-w-[220px] sm:max-w-xs">{repo.name}</span>
                          <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                          <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{repo.name}</span>
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        repo.role === 'Owner'
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          : repo.role === 'Owner (Fork)'
                          ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                          : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                      }`}>
                        {repo.role}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-700 dark:text-slate-300">
                      {repo.language}
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                        <GitBranch className="w-3 h-3 text-blue-500" />
                        {repo.branch}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900 dark:text-white">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                        <GitCommit className="w-3 h-3" />
                        {repo.commits}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 leading-snug">
                      {repo.subsystem}
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
