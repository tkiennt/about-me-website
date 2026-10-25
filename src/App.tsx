import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
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
  const [mode, setMode] = useState<string>(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  // Real-time GitHub data hook powered by configurable variable (no hardcoding)
  const {
    username,
    profile,
    repos,
    events,
    stats,
    loading,
    isLive,
    lastUpdated,
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
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode dark" : "light-mode"}`}>
      {/* 1. Navigation Header */}
      <Navigation
        mode={mode}
        onModeChange={handleModeChange}
        username={username}
        isLive={isLive}
        onRefresh={refresh}
        loading={loading}
      />

      {/* 2. Main Content Stream */}
      <FadeIn transitionDuration={600}>
        <main>
          {/* Hero Section */}
          <Main
            profile={profile}
            stats={stats}
            username={username}
            isLive={isLive}
            loading={loading}
          />

          {/* Work & Project Timeline (Experience) */}
          <Timeline />

          {/* Selected Featured Projects */}
          <Project />

          {/* Real-time GitHub Analytics & Heatmap */}
          <GitHubStats
            username={username}
            stats={stats}
            events={events}
            isLive={isLive}
            lastUpdated={lastUpdated}
            onRefresh={refresh}
            loading={loading}
          />

          {/* Live Public Repositories Explorer */}
          <RepoExplorer
            repos={repos}
            username={username}
            loading={loading}
          />

          {/* Technical Capabilities & Stack */}
          <Expertise />

          {/* Minimal Contact Section */}
          <Contact username={username} />
        </main>
      </FadeIn>

      {/* 3. Footer with victoreke.com attribution */}
      <Footer username={username} />
    </div>
  );
};

export default App;
