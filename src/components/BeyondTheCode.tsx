import React from 'react';
import { 
  Heart, 
  Trophy, 
  Flame, 
  Users, 
  Shield, 
  Coffee, 
  Terminal, 
  Keyboard, 
  Zap
} from 'lucide-react';
import { BasketballIcon } from './Icons';
import { karateData, basketballData, otherPassions } from '../data/portfolioData';

export const BeyondTheCode: React.FC = () => {
  return (
    <section id="beyond-code" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200/60 dark:border-rose-800/60 text-xs font-semibold text-rose-700 dark:text-rose-300 mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Life & Passions ("Beyond the Code")</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Võ đạo, Thể thao & Cuộc sống Ngoài giờ Code
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Kỹ sư phần mềm giỏi không chỉ ngồi trước màn hình terminal 24/7. Tinh thần kỷ luật thép từ Karate và khả năng điều phối trận đấu từ Bóng rổ là hai trụ cột rèn luyện bản lĩnh, tư duy phản xạ và tinh thần đồng đội của tôi.
          </p>
        </div>

        {/* Two Featured Big Cards: Karate & Basketball */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* 1. KARATE CARD */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-red-400 dark:hover:border-red-500 transition-all">
            
            {/* Background Decorative Kanji */}
            <div className="absolute right-4 top-4 text-7xl font-bold text-slate-100 dark:text-slate-800/40 select-none pointer-events-none -z-0">
              空手
            </div>

            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200/70 dark:border-red-800/70 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  {karateData.discipline}
                </span>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  {karateData.rank}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Karatedo: Kỷ luật Thép & Tinh thần Vô tâm (Mushin)
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mb-4">
                {karateData.experience} • {karateData.role}
              </p>

              {/* Visual Placeholder / Mockup Gallery Card */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-red-950/90 via-slate-900 to-black text-white p-5 border border-red-900/40 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-red-400 font-bold">
                    Dojo & Tournament Arena
                  </span>
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm font-semibold text-slate-100 mb-1">
                  Khoảnh khắc Thi đấu & Võ đường FPT
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tập luyện và rèn dũa mỗi tuần tại CLB Karate Đại học FPT; huấn luyện thể lực và hướng dẫn kỹ thuật Kumite căn bản cho các thế hệ tân sinh viên.
                </p>
              </div>

              {/* Tournament Medals */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Thành tích Thi đấu Tiêu biểu</span>
                </div>
                <ul className="space-y-2">
                  {karateData.medals.map((medal, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                      <span>{medal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Analogy */}
              <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/30">
                <div className="text-xs font-bold text-red-700 dark:text-red-400 font-mono mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Bài học áp dụng vào Lập trình & Kiến trúc</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{karateData.engineeringAnalogy}"
                </p>
              </div>

            </div>
          </div>

          {/* 2. BASKETBALL CARD */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-orange-400 dark:hover:border-orange-500 transition-all">
            
            {/* Background Decorative Element */}
            <div className="absolute right-4 top-4 text-7xl font-bold text-slate-100 dark:text-slate-800/40 select-none pointer-events-none -z-0">
              🏀
            </div>

            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-200/70 dark:border-orange-800/70 flex items-center gap-1.5">
                  <BasketballIcon className="w-3.5 h-3.5" />
                  Bóng rổ Đại học FPT
                </span>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/70 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Point Guard (PG)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Bóng rổ: Nhãn quan Chiến thuật & Tinh thần Đồng đội
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mb-4">
                {basketballData.experience} • {basketballData.role}
              </p>

              {/* Visual Placeholder / Mockup Gallery Card */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-950/90 via-slate-900 to-black text-white p-5 border border-orange-900/40 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-orange-400 font-bold">
                    Court & Fastbreak Playmaker
                  </span>
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm font-semibold text-slate-100 mb-1">
                  Đội tuyển Khoa Kỹ thuật Phần mềm (SE Team)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Điều phối các pha chuyển trạng thái tấn công nhanh (Fastbreak), phân tích lỗ hổng chiến thuật đối phương và kết nối sự phối hợp ăn ý giữa các thành viên.
                </p>
              </div>

              {/* Tournament Tournaments */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Giải đấu & Dấu ấn Nổi bật</span>
                </div>
                <ul className="space-y-2">
                  {basketballData.tournaments.map((tour, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                      <span>{tour}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teamwork Analogy */}
              <div className="p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/30">
                <div className="text-xs font-bold text-orange-700 dark:text-orange-400 font-mono mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Bài học áp dụng vào Teamwork & Event-Driven Architecture</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{basketballData.teamworkAnalogy}"
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Other Passions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherPassions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                  {item.tag}
                </span>
                {idx === 0 && <Terminal className="w-4 h-4 text-slate-400" />}
                {idx === 1 && <Coffee className="w-4 h-4 text-amber-500" />}
                {idx === 2 && <Keyboard className="w-4 h-4 text-indigo-400" />}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
