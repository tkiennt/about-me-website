import React from "react";
import { FolderGit2, ExternalLink, Sparkles, Smartphone, Layers, Server, Gamepad2, FileText } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: any;
}

const featuredProjects: ProjectItem[] = [
  {
    id: "skinsync",
    title: "SkinSync Ecosystem",
    role: "Backend Architect & Mobile Sync",
    subtitle: "Skincare AI & Multiplatform",
    description: "Cross-platform beauty consultation and booking system featuring PayOS QR payments, toxic ingredients check, and Clean Architecture.",
    techStack: ["C#", ".NET 9", "Flutter", "React", "SQL Server", "PayOS"],
    githubUrl: "https://github.com/tkiennt/SkinSync",
    icon: Server,
  },
  {
    id: "vstep-lab",
    title: "VSTEP Writing Lab",
    role: "AI & Fullstack Engineer",
    subtitle: "Automated AI Scoring Engine",
    description: "Automated essay scoring web platform utilizing Google Gemini LLM API with structured CEFR rubric evaluation and stream recovery.",
    techStack: ["React", "TypeScript", "ASP.NET Core", "Gemini AI", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt/vstep-writing-lab",
    icon: Sparkles,
  },
  {
    id: "blood-donation",
    title: "Blood Donation System",
    role: "Lead Full-stack Developer",
    subtitle: "Healthcare & Scheduling",
    description: "Automated blood request management, emergency donor matching algorithms, and storage inventory dashboard.",
    techStack: ["TypeScript", "React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
    icon: Layers,
  },
  {
    id: "scientific-reader",
    title: "Scientific Paper Reader",
    role: "Mobile Cross-Platform Developer",
    subtitle: "Mobile Cross-Platform",
    description: "Mobile PDF reader application tailored for research publications with offline document caching and annotations.",
    techStack: ["Flutter", "Dart", "Syncfusion PDF", "AWS SDK", "Riverpod"],
    githubUrl: "https://github.com/tkiennt/scientific-paper-reader",
    icon: Smartphone,
  },
  {
    id: "valorant-td",
    title: "Valorant Tower Defense",
    role: "Gameplay & Physics Programmer",
    subtitle: "2D Game Development",
    description: "Tactical grid-based tower defense game with custom ability physics, Universal Render Pipeline (URP), and pathfinding.",
    techStack: ["Unity 2D", "C#", "URP", "OOP Design Patterns"],
    githubUrl: "https://github.com/tkiennt/valorant-tower-defense",
    icon: Gamepad2,
  },
  {
    id: "autobot",
    title: "AUTOBOT API Runner",
    role: "DevOps & QA Automation Engineer",
    subtitle: "DevOps & QA Automation",
    description: "Automated regression testing suite executing continuous multi-branch validation for RESTful API services.",
    techStack: ["JavaScript", "Postman", "Newman", "CI/CD Actions"],
    githubUrl: "https://github.com/tkiennt/AUTOBOT",
    icon: FileText,
  },
];

export const Project: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/10 bg-[#070707] text-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-editorial-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Curated showcase of software solutions, cross-platform apps, and systems built with modern engineering standards.
            </p>
          </div>

          <a
            href="#repos"
            className="text-xs font-mono text-white hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>Browse public repositories</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {featuredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0e0e0e] border border-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                      <Icon size={18} />
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Role & Subtitle */}
                  <div className="text-xs font-mono text-zinc-400 mb-1">
                    {project.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial-display text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
