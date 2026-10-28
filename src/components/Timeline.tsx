import React from "react";
import { Briefcase, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  synopsis: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "blood-donation",
    role: "Lead Fullstack Developer",
    organization: "Blood Donation Management & Matching (SWP391)",
    period: "2024 - 2025",
    category: "Fullstack Platform",
    synopsis: "Engineered high-concurrency blood matching and emergency donor scheduling platform for regional medical centers.",
    highlights: [
      "Built donor-recipient compatibility matching algorithm and automated dispatch queue",
      "Designed Manager Dashboard with automated blood unit storage tracking and audit logs",
      "Integrated secure notification API and multi-role authentication flow",
    ],
    techStack: ["TypeScript", "React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
  },
  {
    id: "vstep-writing-lab",
    role: "Fullstack & GenAI Engineer",
    organization: "VSTEP AI Automated Essay Grading System",
    period: "2024 - 2026",
    category: "AI & Web System",
    synopsis: "Automated scoring and lexical feedback web platform for national English proficiency writing tests.",
    highlights: [
      "Integrated Google Gemini LLM API with fine-tuned rubric prompts for instant CEFR assessment",
      "Implemented resilient JsonRepairHelper streaming parser to eliminate malformed JSON responses",
      "Built interactive student feedback dashboard with grammar highlighting and score breakdowns",
    ],
    techStack: ["React", "TypeScript", "Google Gemini API", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/tkiennt/vstep-writing-lab",
  },
  {
    id: "skinsync",
    role: "Fullstack Engineer",
    organization: "SkinSync Cosmetics & Booking Ecosystem",
    period: "2024 - 2026",
    category: "Fullstack & Mobile",
    synopsis: "Cross-platform skincare consultation and conflict detection system built with Clean Architecture.",
    highlights: [
      "Architected backend using ASP.NET Core Clean Architecture and Entity Framework Core",
      "Synchronized Flutter mobile client with C# .NET 9 backend and Supabase database",
      "Integrated PayOS QR gateway for seamless automated transaction validation",
    ],
    techStack: ["C#", ".NET 9", "Flutter", "React", "SQL Server", "PayOS"],
    githubUrl: "https://github.com/tkiennt/SkinSync",
  },
  {
    id: "valorant-td",
    role: "Gameplay & Systems Programmer",
    organization: "Valorant Tower Defense (Unity 2D)",
    period: "2024",
    category: "Game Engineering",
    synopsis: "Tactical tower defense game inspired by Valorant mechanics, featuring custom pathfinding and ability systems.",
    highlights: [
      "Engineered wave management system, agent abilities, and grid-based projectile physics in C#",
      "Utilized Unity Universal Render Pipeline (URP) with custom 2D lighting and particle effects",
      "Optimized runtime memory allocation and frame pacing for stable 60 FPS performance",
    ],
    techStack: ["Unity 2D", "C#", "Universal Render Pipeline", "OOP Game Architecture"],
    githubUrl: "https://github.com/tkiennt/valorant-tower-defense",
  },
  {
    id: "fpt-academic",
    role: "Software Engineering Student",
    organization: "FPT University Hanoi",
    period: "2022 - Present",
    category: "Education & Foundations",
    synopsis: "Rigorous curriculum covering distributed architecture, algorithms, database optimization, and team software projects.",
    highlights: [
      "Mastered data structures, algorithms, object-oriented design, and microservices patterns",
      "Collaborated across 30+ team repositories applying Git Flow, CI/CD, and automated regression testing",
    ],
    techStack: ["C#", ".NET", "Java", "TypeScript", "SQL Server", "Git Flow"],
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/10 bg-black text-[#f4f4f4]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Project Milestones</span>
          </div>
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Work & Engineering Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Key software projects and systems engineered with focus on clean code, production architecture, and verified reliability.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-6 space-y-12">
          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-7 sm:pl-9 group text-left">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-500 group-hover:border-white group-hover:bg-white transition-colors" />

              {/* Item Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0e0e] border border-white/15 hover:border-white/35 backdrop-blur-md transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-editorial-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-300 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-white/10 text-white border border-white/10">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.synopsis}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 size={15} className="text-white mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:underline transition-colors"
                    >
                      <span>Repository</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
