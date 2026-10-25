import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { userProfile } from '../data/githubData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-slate-900 dark:text-white font-mono">
                @{userProfile.githubHandle}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {userProfile.name}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
              <span>Software Engineering Student @ FPT University</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
              <span>Timeline Portfolio</span>
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${userProfile.githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${userProfile.email}`}
              aria-label="Email"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Gửi Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-0.5 shadow-2xs ml-2"
              title="Về đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-[11px] text-slate-400 font-mono">
          © {new Date().getFullYear()} {userProfile.name} (@{userProfile.githubHandle}). All data branch-verified. Inspired by ParamBirje/timeline-portfolio.
        </div>

      </div>
    </footer>
  );
};
