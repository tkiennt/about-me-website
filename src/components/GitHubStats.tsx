import React from 'react';
import { Activity, Code, Cpu, ExternalLink } from 'lucide-react';
import { userProfile } from '../data/githubData';

export const GitHubStats: React.FC = () => {
  return (
    <section id="analytics" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>GitHub Contribution & Activity Analytics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hoạt động Đóng góp & Phân bổ Công nghệ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Biểu đồ hoạt động và tỷ trọng ngôn ngữ lập trình được tổng hợp từ toàn bộ các nhánh làm việc thực tế của Trung Kiên (@{userProfile.githubHandle}).
          </p>
        </div>

        {/* 1. Live GitHub Contribution Heatmap */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Biểu đồ Commit & Đóng góp GitHub (Contribution Graph)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Dữ liệu trực tiếp từ GitHub cho tài khoản @{userProfile.githubHandle}
              </p>
            </div>
            <a
              href={`https://github.com/${userProfile.githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline self-start sm:self-auto"
            >
              <span>Xem trực tiếp trên GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Contribution Calendar Heatmap Image */}
          <div className="overflow-x-auto pb-2 flex justify-center">
            <div className="min-w-[700px] p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col items-center">
              <img
                src={`https://ghchart.rshah.org/2563eb/${userProfile.githubHandle}`}
                alt={`${userProfile.githubHandle}'s GitHub Contribution Chart`}
                className="w-full max-w-4xl h-auto dark:invert dark:hue-rotate-180 transition-all filter"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex items-center justify-between w-full mt-3 text-[11px] text-slate-400 font-mono">
                <span>Ít đóng góp</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-slate-800 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-200 dark:bg-blue-900 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-400 dark:bg-blue-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 dark:bg-blue-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-800 dark:bg-blue-400 inline-block" />
                </div>
                <span>Nhiều đóng góp</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Language Breakdown & Progress Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Language Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Phân bổ Công nghệ Thực tế (Branch-Scan)
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Được tính toán dựa trên khối lượng mã nguồn và lịch sử commit trên các nhánh chính.
            </p>

            {/* Multi-segment Progress Bar */}
            <div className="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800 mb-6 shadow-inner">
              {userProfile.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full transition-all hover:opacity-90 relative group"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend & Details */}
            <div className="space-y-3">
              {userProfile.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {lang.name}
                    </span>
                  </div>
                  <span className="font-bold text-slate-600 dark:text-slate-400">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Live Cards / Widgets */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Đặc tính Kỹ thuật Nổi bật
                </h3>
              </div>
              
              <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-100 font-mono">Fullstack C# / .NET Core & React:</strong> Chiếm hơn 73% tổng số commit, tập trung vào Clean Architecture, Web API, SignalR và Entity Framework Core.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-100 font-mono">Mobile App Flutter / Dart:</strong> Đóng góp trên SkinSync, Scientific Paper Reader và OpenAlex Trend Analyzer với thư viện biểu đồ fl_chart.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-100 font-mono">Game & Cloud Integration:</strong> Phát triển game chiến thuật 2D Unity Valorant tích hợp xác thực tài khoản đám mây qua AWS SDK for .NET.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Branch Scan Active</span>
              <span className="text-emerald-500 font-semibold">100% Verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
