import React from "react";
import { Mail, GitCommit, GitPullRequest, FolderGit2, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { userProfile } from "../data/githubData";

export const Main: React.FC = () => {
  return (
    <div className="container" id="hero">
      <div className="about-section">
        {/* Avatar with circle styling */}
        <div className="image-wrapper">
          <img
            src={userProfile.avatarUrl}
            alt={userProfile.name}
            className="hover:rotate-3 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="content">
          {/* Social Icons */}
          <div className="social_icons">
            <a
              href={`https://github.com/${userProfile.githubHandle}`}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nguyentotrungkien/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${userProfile.email}`}
              title="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <h1>{userProfile.name.split(" ")[0]} {userProfile.name.split(" ")[1]}</h1>
          <p className="subtitle">{userProfile.role}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm opacity-80 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={16} className="text-[#5000ca]" />
              {userProfile.university}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-[#5000ca]" />
              {userProfile.location}
            </span>
          </div>

          <p className="text-base leading-relaxed opacity-90 mb-6 font-normal">
            {userProfile.bio}
          </p>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-purple-400 font-semibold mb-1">
                <GitCommit size={14} /> COMMITS
              </div>
              <div className="text-2xl font-black text-[#5000ca] dark:text-purple-300">
                {userProfile.stats.totalCommits}+
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-blue-400 font-semibold mb-1">
                <GitPullRequest size={14} /> MERGED PRS
              </div>
              <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                {userProfile.stats.totalPRs}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                <FolderGit2 size={14} /> REPOSITORIES
              </div>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {userProfile.stats.totalRepos}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
