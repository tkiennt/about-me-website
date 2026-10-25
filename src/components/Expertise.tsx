import React from "react";
import { Server, Smartphone, Cpu } from "lucide-react";

const fullStackSkills = [
  "C#",
  ".NET 9",
  "ASP.NET Core",
  "React",
  "TypeScript",
  "Next.js",
  "Java",
  "Spring Boot",
  "SQL Server",
  "MySQL",
  "RESTful API",
  "PayOS",
  "Supabase",
  "Tailwind CSS"
];

const mobileGameSkills = [
  "Dart",
  "Flutter",
  "Riverpod",
  "Provider",
  "Unity 2D",
  "C# Scripting",
  "URP",
  "AWS SDK (.NET)",
  "Syncfusion PDF",
  "fl_chart",
  "Mobile UI/UX"
];

const aiDevOpsSkills = [
  "Gemini AI LLM",
  "Fine-Tuned Models",
  "JsonRepairHelper",
  "Postman Automation",
  "Newman",
  "Git Flow",
  "Branching Strategy",
  "Docker",
  "Firebase Auth",
  "CI/CD Actions"
];

export const Expertise: React.FC = () => {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise & Capabilities</h1>
        <div className="skills-grid">
          {/* Card 1: Full-Stack & Backend */}
          <div className="skill-card">
            <div className="w-14 h-14 rounded-2xl bg-[#5000ca]/15 text-[#5000ca] flex items-center justify-center mb-2">
              <Server size={32} />
            </div>
            <h3>Full Stack Web & Architecture</h3>
            <p>
              Specialized in architecting high-reliability backends and sleek client dashboards. Proficient in N-Tier Clean Architecture, Entity Framework Core, JWT Bearer authentication, and modern React/TypeScript frontends.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {fullStackSkills.map((skill, index) => (
                <span key={index} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Mobile & Game */}
          <div className="skill-card">
            <div className="w-14 h-14 rounded-2xl bg-[#5000ca]/15 text-[#5000ca] flex items-center justify-center mb-2">
              <Smartphone size={32} />
            </div>
            <h3>Mobile Apps & Game Systems</h3>
            <p>
              Crafting cross-platform mobile experiences with Flutter/Dart and desktop/game prototypes with Unity 2D (URP). Deep experience in offline data synchronization, academic paper rendering, and AWS cloud auth.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mobileGameSkills.map((skill, index) => (
                <span key={index} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: AI & QA Automation */}
          <div className="skill-card">
            <div className="w-14 h-14 rounded-2xl bg-[#5000ca]/15 text-[#5000ca] flex items-center justify-center mb-2">
              <Cpu size={32} />
            </div>
            <h3>GenAI Integration & Quality Assurance</h3>
            <p>
              Leveraging Google Gemini LLMs for automated essay grading, designing JsonRepairHelper streaming parsers, and building automated Postman regression testing suites across multi-branch Git Flow environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {aiDevOpsSkills.map((skill, index) => (
                <span key={index} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
