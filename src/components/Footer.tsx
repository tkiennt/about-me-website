import React from "react";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { userProfile } from "../data/githubData";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-socials">
        <a
          href={`https://github.com/${userProfile.githubHandle}`}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="p-2.5 rounded-full bg-purple-500/10 text-[#5000ca] dark:text-purple-300 hover:bg-[#5000ca] hover:text-white transition-all transform hover:-translate-y-1"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/nguyentotrungkien/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="p-2.5 rounded-full bg-purple-500/10 text-[#5000ca] dark:text-purple-300 hover:bg-[#5000ca] hover:text-white transition-all transform hover:-translate-y-1"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${userProfile.email}`}
          title="Email"
          className="p-2.5 rounded-full bg-purple-500/10 text-[#5000ca] dark:text-purple-300 hover:bg-[#5000ca] hover:text-white transition-all transform hover:-translate-y-1"
        >
          <Mail size={20} />
        </a>
      </div>

      <p className="flex items-center justify-center gap-1.5 flex-wrap">
        <span>A portfolio designed & built by</span>
        <a
          href={`https://github.com/${userProfile.githubHandle}`}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-[#5000ca] dark:text-purple-400 hover:underline"
        >
          {userProfile.name} (@{userProfile.githubHandle})
        </a>
        <span>with</span>
        <Heart size={14} className="text-purple-500 fill-purple-500 inline" />
      </p>

      <p className="text-xs opacity-60 mt-2 font-mono">
        Software Engineering Student · {userProfile.university} · Based on yujisatojr/react-portfolio-template
      </p>
    </footer>
  );
};
