import React, { useState } from 'react';
import { Trophy, BookmarkCheck, Sparkles, Quote, School } from 'lucide-react';
import { schoolStagesData } from '../data/portfolioData';
import type { SchoolStage } from '../types';

export const MilestonesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('high-school');

  const currentStage: SchoolStage = schoolStagesData.find(s => s.id === activeTabId) || schoolStagesData[0];

  return (
    <section id="background" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Background, Milestones & Activities (Dạng Tab Bar)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nền tảng Học vấn & Cột mốc Trưởng thành
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Những dấu ấn qua từng cấp học: từ niềm đam mê thuở ấu thơ với khối lệnh Scratch, tư duy giải toán THCS cho đến các giải thưởng Học sinh Giỏi Tin học & Khoa học Kỹ thuật THPT.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 max-w-xl mb-10 border border-slate-300/60 dark:border-slate-700/60">
          {schoolStagesData.map((stage) => {
            const isActive = stage.id === activeTabId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveTabId(stage.id)}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs scale-[1.02]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {stage.name}
              </button>
            );
          })}
        </div>

        {/* Stage Content Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm animate-in fade-in duration-300">
          
          {/* Header of Stage */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  {currentStage.period}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  {currentStage.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {currentStage.schoolName}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {currentStage.subtitle}
              </p>
            </div>
          </div>

          {/* Highlights & Milestones Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStage.highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 hover:border-blue-400 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.year}
                  </span>
                  {item.type === 'award' && (
                    <Trophy className="w-4 h-4 text-amber-500" />
                  )}
                  {item.type === 'leadership' && (
                    <BookmarkCheck className="w-4 h-4 text-blue-500" />
                  )}
                  {item.type === 'activity' && (
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                  )}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Reflection Quote Block */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/60 to-indigo-50/60 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-800/40 relative">
            <Quote className="w-6 h-6 text-blue-500/40 absolute top-4 left-4" />
            <div className="pl-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 font-mono mb-1">
                Chiêm nghiệm & Dấu ấn phát triển
              </div>
              <p className="text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">
                "{currentStage.reflection}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
