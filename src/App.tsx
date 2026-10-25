import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GitHubStats } from './components/GitHubStats';
import { TimelineSection } from './components/TimelineSection';
import { RepoExplorer } from './components/RepoExplorer';
import { UpstreamSync } from './components/UpstreamSync';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section: Real Developer Profile & Executive Metrics */}
        <Hero />

        {/* 3. GitHub Activity & Live Contribution Analytics */}
        <GitHubStats />

        {/* 4. Signature Timeline: Developer Journey (ParamBirje inspired) */}
        <TimelineSection />

        {/* 5. All 34 Repositories Explorer */}
        <RepoExplorer />

        {/* 6. Upstream Synchronization Tracker */}
        <UpstreamSync />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
