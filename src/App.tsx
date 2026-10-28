import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { EditorialHero } from "./components/EditorialHero";
import { EditorialManifesto } from "./components/EditorialManifesto";
import { EditorialMilestones } from "./components/EditorialMilestones";
import { Timeline } from "./components/Timeline";
import { Project } from "./components/Project";
import { GitHubStats } from "./components/GitHubStats";
import { RepoExplorer } from "./components/RepoExplorer";
import { Expertise } from "./components/Expertise";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import FadeIn from "./components/FadeIn";
import { useGitHubRealtime } from "./hooks/useGitHubRealtime";

export const App: React.FC = () => {
  const [mode, setMode] = useState<string>("dark");

  const {
    username,
    profile,
    repos,
    stats,
    loading,
    isLive,
    refresh,
  } = useGitHubRealtime();

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="main-container dark-mode dark bg-black text-[#f4f4f4] min-h-screen selection:bg-white selection:text-black">
      {/* Top Floating Header for when scrolled past Hero */}
      <Navigation
        mode={mode}
        onModeChange={handleModeChange}
        username={username}
        isLive={isLive}
        onRefresh={refresh}
        loading={loading}
      />

      {/* Main Content Stream */}
      <main className="relative w-full overflow-hidden">
        {/* 1. Orvante Editorial Hero Section (1440 × 938u) */}
        <EditorialHero
          profile={profile}
          stats={stats}
          username={username}
        />

        {/* 2. Orvante Black Bar (111u) & 3 Highlighted Repositories (Pill 3-Column Layout) */}
        <EditorialManifesto />

        {/* 3. Orvante Milestones (Commits, Repos, Pull Requests) */}
        <EditorialMilestones stats={stats} />

        <FadeIn transitionDuration={600}>
          {/* 4. Experience & Career Milestones */}
          <Timeline />

          {/* 5. Featured Projects Showcase */}
          <Project />

          {/* 6. GitHub Stats & Activity */}
          <GitHubStats
            username={username}
            stats={stats}
            onRefresh={refresh}
            loading={loading}
          />

          {/* 7. Repositories Explorer */}
          <RepoExplorer
            repos={repos}
            username={username}
            loading={loading}
          />

          {/* 8. Technical Skills & Capabilities */}
          <Expertise />

          {/* 9. Minimal Contact Form */}
          <Contact username={username} />
        </FadeIn>
      </main>

      {/* Footer */}
      <Footer username={username} />
    </div>
  );
};

export default App;
