import React from "react";
import { Mail, ExternalLink, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  username: string;
}

export const Footer: React.FC<FooterProps> = ({ username }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 light-mode:border-zinc-200 py-12 bg-zinc-950/60 light-mode:bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60 light-mode:border-zinc-200 text-left">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs text-[#33E092]">
              TK
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-100 light-mode:text-zinc-900">
                Trung Kiên
              </div>
              <div className="text-xs font-mono text-zinc-500">
                Software Engineer & Developer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 rounded-lg bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/nguyentotrungkien/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded-lg bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:nguyentotrungkien@gmail.com"
              title="Email"
              className="p-2 rounded-lg bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-zinc-100 hover:border-[#33E092]/50 transition-colors"
            >
              <Mail size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-lg bg-zinc-900 light-mode:bg-white border border-zinc-800 light-mode:border-zinc-200 text-zinc-400 hover:text-[#33E092] hover:border-[#33E092]/50 transition-colors cursor-pointer ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Attribution & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-zinc-500 font-mono">
          <p>© {CURRENT_YEAR} Trung Kiên. All rights reserved.</p>

          {/* Victor Eke attribution as requested in license */}
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-end">
            <span>Theme inspired by</span>
            <a
              href="https://victoreke.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#33E092] hover:underline font-semibold inline-flex items-center gap-0.5"
            >
              <span>victoreke.com</span>
              <ExternalLink size={10} />
            </a>
            <span>• Built with React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
