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
  accent: string;
}

const featuredProjects: ProjectItem[] = [
  {
    id: "blood-donation",
    title: "Blood Donation System",
    role: "Lead Full-stack Developer",
    subtitle: "Healthcare & Scheduling",
    description: "Automated blood request management, emergency donor matching algorithms, and real-time storage inventory dashboard.",
    techStack: ["TypeScript", "React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
    icon: Layers,
    accent: "from-rose-500/20 to-red-500/5",
  },
  {
    id: "vstep-lab",
    title: "VSTEP Writing Lab",
    role: "AI & Fullstack Engineer",
    subtitle: "AI EdTech Platform",
    description: "Automated essay scoring web platform utilizing Google Gemini LLM API with structured CEFR rubric evaluation.",
    techStack: ["React", "TypeScript", "Google Gemini API", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt",
    icon: Sparkles,
    accent: "from-indigo-500/20 to-purple-500/5",
  },
  {
    id: "skinsync",
    title: "SkinSync Cosmetics",
    role: "Backend Architect & Full-stack",
    subtitle: "Fullstack E-Commerce & Booking",
    description: "Comprehensive beauty consultation and booking system featuring PayOS QR payments and Clean Architecture backend.",
    techStack: ["C#", ".NET 9", "ASP.NET Core", "React", "SQL Server", "PayOS"],
    githubUrl: "https://github.com/tkiennt/SkinSync",
    icon: Server,
    accent: "from-teal-500/20 to-emerald-500/5",
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
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    id: "valorant-td",
    title: "Valorant Tower Defense",
    role: "Game Gameplay & Physics Programmer",
    subtitle: "2D Game Development",
    description: "Tactical grid-based tower defense game with custom ability physics, Universal Render Pipeline (URP), and pathfinding.",
    techStack: ["Unity 2D", "C#", "URP", "OOP Design Patterns"],
    githubUrl: "https://github.com/tkiennt/valorant-tower-defense",
    icon: Gamepad2,
    accent: "from-orange-500/20 to-amber-500/5",
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
    accent: "from-violet-500/20 to-fuchsia-500/5",
  },
];

export const Project: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header - Victor Eke Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-2xl">
              Curated showcase of software solutions, cross-platform apps, and systems built with modern engineering standards.
            </p>
          </div>

          <a
            href="#repos"
            className="text-xs font-mono text-[#33E092] hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>Browse all live repositories</span>
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
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs card-hover-lift overflow-hidden"
              >
                {/* Subtle top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Card Header: Icon + Links */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 light-mode:bg-zinc-100 border border-zinc-700/60 light-mode:border-zinc-200 flex items-center justify-center text-[#33E092] group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-[#33E092] hover:bg-zinc-800 transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* 1. TÊN DỰ ÁN NỔI BẬT HƠN HẾT (Prominent Title) */}
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-100 light-mode:text-zinc-900 group-hover:text-[#33E092] transition-colors mb-2 tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* 2. TÊN VAI TRÒ LÀ SUBHEADING (Clear Subheading) */}
                  <div className="text-xs sm:text-sm font-semibold text-[#33E092] mb-3.5 flex flex-wrap items-center gap-1.5 font-mono">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#33E092]/10 border border-[#33E092]/30 text-[#33E092]">
                      Vai trò: {project.role}
                    </span>
                    <span className="text-zinc-400 light-mode:text-zinc-500 font-normal">
                      • {project.subtitle}
                    </span>
                  </div>

                  {/* Concise Description (No redundant words) */}
                  <p className="text-xs sm:text-sm text-zinc-400 light-mode:text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/50 light-mode:border-zinc-100">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-zinc-800/60 light-mode:bg-zinc-100 text-[11px] font-mono text-zinc-300 light-mode:text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
