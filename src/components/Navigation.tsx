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
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/20 flex items-center justify-center font-bold text-sm text-white shadow-sm group-hover:border-white transition-colors">
            TK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-white">
              Trung Kiên
            </span>
            <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isLive ? "bg-emerald-400" : "bg-amber-500"}`}></span>
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
              className="px-3.5 py-1.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
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
            title={`Fetch GitHub data for @${username}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 border border-white/15 text-zinc-300 hover:border-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw size={12} className={`text-white ${loading ? "animate-spin" : ""}`} />
            <span>Live Sync</span>
          </button>

          {/* GitHub Profile Icon Link */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onModeChange}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mode === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 transition-all text-left">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
