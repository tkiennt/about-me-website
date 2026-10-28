import React from "react";
import { Mail, ArrowUp } from "lucide-react";
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
    <footer className="border-t border-white/10 py-12 bg-black text-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-left">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
              TK
            </div>
            <div>
              <div className="text-sm font-bold text-white font-editorial-display tracking-tight">
                Trung Kiên
              </div>
              <div className="text-xs font-mono text-zinc-500">
                Software Engineering · FPT University
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
              className="p-2 rounded-lg bg-[#0e0e0e] border border-white/15 text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/nguyentotrungkien/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded-lg bg-[#0e0e0e] border border-white/15 text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:nguyentotrungkien@gmail.com"
              title="Email"
              className="p-2 rounded-lg bg-[#0e0e0e] border border-white/15 text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <Mail size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-lg bg-[#0e0e0e] border border-white/15 text-zinc-400 hover:text-white hover:border-white transition-colors cursor-pointer ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {CURRENT_YEAR} Trung Kiên. Strict Monochrome Editorial Architecture.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React 19 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
