import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Code2, Clock, FolderGit2, BarChart2, Mail, GitPullRequest } from "lucide-react";

interface NavigationProps {
  mode: string;
  onModeChange: () => void;
}

const navItems = [
  { label: "Expertise", id: "expertise", icon: Code2 },
  { label: "Timeline", id: "history", icon: Clock },
  { label: "Projects", id: "projects", icon: FolderGit2 },
  { label: "Analytics", id: "analytics", icon: BarChart2 },
  { label: "Repositories", id: "repos", icon: GitPullRequest },
  { label: "Contact", id: "contact", icon: Mail },
];

export const Navigation: React.FC<NavigationProps> = ({ mode, onModeChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar-fixed-top ${scrolled ? "shadow-md" : ""}`}>
        <div className="navigation-bar">
          {/* Logo / Title */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#5000ca] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              TK
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg leading-tight tracking-tight">Trung Kiên</span>
              <span className="text-xs text-[#a855f7] font-mono">@tkiennt</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onModeChange}
              aria-label="Toggle Theme"
              className="ml-3 p-2 rounded-full hover:bg-purple-500/10 text-[#5000ca] dark:text-purple-400 cursor-pointer transition-colors"
            >
              {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onModeChange}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-[#5000ca] dark:text-purple-400 cursor-pointer"
            >
              {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open Menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-[#161b22] border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-left text-slate-800 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-colors"
                  >
                    <Icon size={18} className="text-[#5000ca]" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
