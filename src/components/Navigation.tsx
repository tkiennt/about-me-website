import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, RefreshCw } from "lucide-react";
import { GithubIcon } from "./Icons";

interface NavigationProps {
  mode: string;
  onModeChange: () => void;
  username: string;
  isLive: boolean;
  onRefresh: () => void;
  loading: boolean;
}

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation: React.FC<NavigationProps> = ({
  mode,
  onModeChange,
  username,
  isLive,
  onRefresh,
  loading,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/80 dark:bg-[#121212]/85 light-mode:bg-white/85 backdrop-blur-md border-b border-zinc-800/80 dark:border-zinc-800/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-bold text-sm text-[#33E092] shadow-sm group-hover:border-[#33E092]/60 transition-colors">
            TK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 light-mode:text-zinc-900">
              Trung Kiên
            </span>
            <span className="text-[11px] font-mono text-zinc-400 light-mode:text-zinc-500 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? "bg-[#33E092] animate-ping" : "bg-amber-400"}`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isLive ? "bg-[#33E092]" : "bg-amber-500"}`}></span>
              </span>
              @{username}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 light-mode:text-zinc-600 light-mode:hover:text-zinc-900 rounded-lg hover:bg-zinc-800/40 light-mode:hover:bg-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Live API sync badge / refresh */}
          <button
            onClick={onRefresh}
            disabled={loading}
            title={`Fetch real-time GitHub data for @${username}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full bg-zinc-900/80 light-mode:bg-zinc-100 border border-zinc-800 light-mode:border-zinc-200 text-zinc-300 light-mode:text-zinc-700 hover:border-[#33E092]/50 transition-colors cursor-pointer"
          >
            <RefreshCw size={12} className={`text-[#33E092] ${loading ? "animate-spin" : ""}`} />
            <span>Real-time</span>
          </button>

          {/* GitHub Profile Icon Link */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 light-mode:text-zinc-600 light-mode:hover:text-zinc-900 hover:bg-zinc-800/50 light-mode:hover:bg-zinc-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onModeChange}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-zinc-400 hover:text-[#33E092] hover:bg-zinc-800/50 light-mode:hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            {mode === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 border-b border-zinc-800 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm py-1.5 text-zinc-300 hover:text-[#33E092]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#33E092]"></span>
              GitHub: @{username}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
