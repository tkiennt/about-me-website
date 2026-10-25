import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { Expertise } from "./components/Expertise";
import { Timeline } from "./components/Timeline";
import { Project } from "./components/Project";
import { GitHubStats } from "./components/GitHubStats";
import { RepoExplorer } from "./components/RepoExplorer";
import { UpstreamSync } from "./components/UpstreamSync";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import FadeIn from "./components/FadeIn";

export const App: React.FC = () => {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.remove("dark");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    // Default to dark mode matching yujisatojr template aesthetic
    document.documentElement.classList.add("dark");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode dark" : "light-mode"
      }`}
    >
      {/* 1. Sticky Navigation */}
      <Navigation mode={mode} onModeChange={handleModeChange} />

      {/* 2. Main Content Wrapped in FadeIn Animation */}
      <FadeIn transitionDuration={700}>
        {/* Hero Section */}
        <Main />

        {/* Expertise / Skills */}
        <Expertise />

        {/* Project Timeline (Central Requirement) */}
        <Timeline />

        {/* Featured Projects Showcase */}
        <Project />

        {/* GitHub Analytics & Live Contribution Heatmap */}
        <GitHubStats />

        {/* All Repositories Explorer */}
        <RepoExplorer />

        {/* Upstream Synchronization Tracker */}
        <UpstreamSync />

        {/* Contact Section */}
        <Contact />
      </FadeIn>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default App;
