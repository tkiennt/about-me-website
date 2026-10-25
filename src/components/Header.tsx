import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, GitCommit, GitPullRequest, FolderGit2, GitFork, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { userProfile } from '../data/githubData';

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: 'Chỉ số GitHub', href: '#stats', icon: GitCommit },
    { label: 'Timeline Dự án', href: '#timeline', icon: GitPullRequest },
    { label: '34 Repositories', href: '#repos', icon: FolderGit2 },
    { label: 'Đồng bộ Upstream', href: '#upstream', icon: GitFork },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0B1120]/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Personal GitHub Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/30 group-hover:ring-blue-500 transition-all">
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>@{userProfile.githubHandle}</span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  FPT SE
                </span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                520+ Commits • 34 Repos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 rounded-xl transition-colors font-mono"
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & GitHub Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
              title={isDark ? 'Giao diện Sáng' : 'Giao diện Tối'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Visit GitHub Button */}
            <a
              href={`https://github.com/${userProfile.githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-all font-mono shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-mono"
              >
                <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href={`https://github.com/${userProfile.githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-mono"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Xem @{userProfile.githubHandle} trên GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
