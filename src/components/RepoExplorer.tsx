import React, { useState, useMemo } from "react";
import { FolderGit2, Search, ExternalLink, Star, GitFork } from "lucide-react";
import type { GitHubRepo } from "../types/githubRealtime";

interface RepoExplorerProps {
  repos: GitHubRepo[];
  username?: string;
  loading: boolean;
}

export const RepoExplorer: React.FC<RepoExplorerProps> = ({ repos, loading }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Dynamically extract unique languages from live repos
  const availableLanguages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ["All", ...Array.from(set).sort()];
  }, [repos]);

  // Filter repositories dynamically
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        searchQuery === "" ||
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLanguage =
        selectedLanguage === "All" || repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, selectedLanguage]);

  return (
    <section id="repos" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Real-Time Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
              Live Repositories Explorer
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-2xl">
              All public GitHub repositories streamed in real time. Search and filter by language with instant updates.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 self-start md:self-auto">
            Showing <span className="text-[#33E092] font-bold">{filteredRepos.length}</span> of {repos.length} public repos
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs mb-8 space-y-4 text-left">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search repository by name or topic..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-zinc-950/80 light-mode:bg-zinc-50 border border-zinc-800 light-mode:border-zinc-200 text-zinc-100 light-mode:text-zinc-900 placeholder:text-zinc-500 focus:outline-hidden focus:border-[#33E092]"
              />
            </div>

            {/* Language Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                    selectedLanguage === lang
                      ? "bg-[#33E092] text-zinc-950 font-bold"
                      : "bg-zinc-800/60 light-mode:bg-zinc-100 text-zinc-400 light-mode:text-zinc-600 hover:text-zinc-100"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-44 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 animate-pulse p-5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="h-4 w-1/2 bg-zinc-800 rounded-sm"></div>
                  <div className="h-3 w-3/4 bg-zinc-800/60 rounded-sm"></div>
                </div>
                <div className="h-3 w-1/3 bg-zinc-800/40 rounded-sm"></div>
              </div>
            ))}
          </div>
        ) : filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {filteredRepos.map((repo) => {
              const updatedFormatted = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, {
                month: "short",
                year: "numeric",
              });

              return (
                <div
                  key={repo.id}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs card-hover-lift"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <h3 className="font-bold text-sm text-zinc-100 light-mode:text-zinc-900 group-hover:text-[#33E092] transition-colors truncate">
                        {repo.name}
                      </h3>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        title="Open on GitHub"
                        className="text-zinc-400 hover:text-[#33E092] p-1"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 light-mode:text-zinc-600 line-clamp-2 leading-relaxed mb-4">
                      {repo.description || "Public repository and code workspace."}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/50 light-mode:border-zinc-100 text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      {repo.language ? (
                        <span className="inline-flex items-center gap-1 text-zinc-300 light-mode:text-zinc-700">
                          <span className="w-2 h-2 rounded-full bg-[#33E092]"></span>
                          <span>{repo.language}</span>
                        </span>
                      ) : (
                        <span className="text-zinc-500">Repository</span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-zinc-400" title="Stars">
                        <Star size={11} className={repo.stargazers_count > 0 ? "text-amber-400 fill-amber-400" : ""} />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1 text-zinc-400" title="Forks">
                        <GitFork size={11} />
                        <span>{repo.forks_count}</span>
                      </span>
                      <span className="text-zinc-500">{updatedFormatted}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-xs font-mono text-zinc-400">
            No repositories match your current filter criteria.
          </div>
        )}

      </div>
    </section>
  );
};
