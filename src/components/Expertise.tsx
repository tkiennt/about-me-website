import React from "react";
import { Server, Smartphone, Cpu, Globe, Code2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Robust architectures, RESTful API microservices, and database persistence layers.",
    skills: ["C#", ".NET 9", "ASP.NET Core", "Java Spring Boot", "SQL Server", "MySQL", "Clean Architecture", "JWT Auth"],
  },
  {
    title: "Frontend & Web",
    icon: Globe,
    description: "Responsive, accessible, and high-performance client user interfaces.",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "HTML5 / CSS3"],
  },
  {
    title: "Mobile & Interactive",
    icon: Smartphone,
    description: "Cross-platform mobile applications and 2D interactive game engines.",
    skills: ["Flutter", "Dart", "Riverpod", "Unity 2D", "Universal Render Pipeline", "Syncfusion PDF", "Offline Sync"],
  },
  {
    title: "AI & DevOps Tooling",
    icon: Cpu,
    description: "Automated regression pipelines, containerization, and LLM integrations.",
    skills: ["Google Gemini API", "Git Flow", "Docker", "Postman / Newman", "GitHub Actions CI/CD", "PayOS Gateway"],
  },
];

export const Expertise: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
            Skills & Core Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-2xl">
            Technologies and frameworks I utilize to architect, build, and ship end-to-end software solutions.
          </p>
        </div>

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs card-hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 light-mode:bg-zinc-100 border border-zinc-700/60 light-mode:border-zinc-200 flex items-center justify-center text-[#33E092]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-100 light-mode:text-zinc-900">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 light-mode:text-zinc-600 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/50 light-mode:border-zinc-100">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/60 light-mode:bg-zinc-100 text-xs font-mono text-zinc-300 light-mode:text-zinc-700 hover:text-[#33E092] hover:border-[#33E092]/30 border border-transparent transition-colors"
                    >
                      {skill}
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
