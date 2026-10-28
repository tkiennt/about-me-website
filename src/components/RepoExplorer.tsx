import React, { useState, useMemo } from "react";
import { Search, FolderGit2, Star, GitFork, ExternalLink } from "lucide-react";
import type { GitHubRepo } from "../types/githubRealtime";

interface RepoExplorerProps {
  repos: GitHubRepo[];
  username: string;
  loading: boolean;
}

export const RepoExplorer: React.FC<RepoExplorerProps> = ({
  repos,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Extract available languages dynamically
  const languages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return ["All", ...Array.from(langs)];
  }, [repos]);

  // Filter repositories based on query & language
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLanguage =
        selectedLanguage === "All" || repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, selectedLanguage]);

  return (
    <section id="repos" className="py-20 md:py-28 border-t border-white/10 bg-[#070707] text-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Public Repositories</span>
            </div>
            <h2 className="font-editorial-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Repositories Explorer
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
              All public GitHub codebases streamed directly from GitHub. Search and filter by programming language.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 self-start md:self-auto">
            Showing <span className="text-white font-bold">{filteredRepos.length}</span> of {repos.length} public repos
          </div>
        </div>

        {/* Controls: Search Bar & Language Chips */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search repositories by name, topic, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0e0e0e] border border-white/15 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-hidden focus:border-white transition-colors"
            />
          </div>

          {/* Language Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-2 rounded-xl text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  selectedLanguage === lang
                    ? "bg-white text-black font-semibold shadow-xs"
                    : "bg-[#0e0e0e] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repository Cards Grid */}
        {filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {filteredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0e0e0e] border border-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-editorial-display text-lg font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                    <ExternalLink size={14} className="text-zinc-500 group-hover:text-white shrink-0 transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-6 leading-relaxed">
                    {repo.description || "No description provided for this repository."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <span>{repo.language}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Star size={12} className="text-white" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <GitFork size={12} className="text-white" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-zinc-500 font-mono text-sm">
            No public repositories found matching your filter criteria.
          </div>
        )}

      </div>
    </section>
  );
};
