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
      "Designed Manager Dashboard with real-time blood unit storage tracking and audit logs",
      "Integrated secure notification API and multi-role authentication flow",
    ],
    techStack: ["TypeScript", "React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
  },
  {
    id: "vstep-writing-lab",
    role: "Fullstack & GenAI Engineer",
    organization: "VSTEP AI Automated Essay Grading System",
    period: "2024",
    category: "AI & Web System",
    synopsis: "Automated scoring and lexical feedback web platform for national English proficiency writing tests.",
    highlights: [
      "Integrated Google Gemini LLM API with fine-tuned rubric prompts for instant CEFR assessment",
      "Implemented resilient JsonRepairHelper streaming parser to eliminate malformed JSON responses",
      "Built interactive student feedback dashboard with grammar highlighting and score breakdowns",
    ],
    techStack: ["React", "TypeScript", "Google Gemini API", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/tkiennt",
  },
  {
    id: "skinsync",
    role: "Fullstack Engineer",
    organization: "SkinSync Cosmetics & Booking Service",
    period: "2024",
    category: "Fullstack & Payments",
    synopsis: "E-commerce and consultation scheduling system built with Clean Architecture principles.",
    highlights: [
      "Architected backend using ASP.NET Core Clean Architecture and Entity Framework Core",
      "Integrated PayOS QR gateway for seamless automated transaction validation",
      "Implemented JWT authentication and responsive client dashboard in React",
    ],
    techStack: ["C#", ".NET 9", "React", "SQL Server", "PayOS", "REST API"],
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
    <section id="experience" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header - Victor Eke Style */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Project Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
            Work & Engineering Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-2xl">
            Key software projects and systems I've built, emphasizing clean code, production architecture, and real impact.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-zinc-800 light-mode:border-zinc-200 ml-4 sm:ml-6 space-y-12">
          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-7 sm:pl-9 group text-left">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 light-mode:bg-white border-2 border-zinc-600 group-hover:border-[#33E092] group-hover:bg-[#33E092] transition-colors" />

              {/* Item Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs card-hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 light-mode:text-zinc-900 group-hover:text-[#33E092] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-zinc-400 light-mode:text-zinc-600">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 light-mode:bg-zinc-100 text-xs font-mono text-zinc-300 light-mode:text-zinc-700">
                      <Calendar size={12} className="text-[#33E092]" />
                      {item.period}
                    </span>

                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Source on GitHub"
                        className="p-1.5 rounded-lg bg-zinc-800 light-mode:bg-zinc-100 text-zinc-400 hover:text-[#33E092] transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Synopsis */}
                <p className="text-sm text-zinc-300 light-mode:text-zinc-700 mb-4 leading-relaxed">
                  {item.synopsis}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5 text-xs text-zinc-400 light-mode:text-zinc-600">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#33E092] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/50 light-mode:border-zinc-100">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-800/50 light-mode:bg-zinc-100 text-[11px] font-mono text-zinc-300 light-mode:text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
