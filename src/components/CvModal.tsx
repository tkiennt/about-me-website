import React from 'react';
import { X, Download, Printer, GraduationCap, Code2, Award, Briefcase, Mail, MapPin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
              Curriculum Vitae
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {profileData.name} - Software Engineer Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 transition-colors"
              title="In / Lưu PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">In / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans print:p-0 print:overflow-visible">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {profileData.name}
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
              Software Engineering Student • Đại học FPT
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-500 dark:text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {profileData.contacts.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {profileData.contacts.location}
              </span>
              <a 
                href={profileData.contacts.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-500 underline"
              >
                GitHub Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 mb-3">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Học vấn & Thành tích Học thuật</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  Đại học FPT ({profileData.campus})
                </div>
                <div className="font-mono text-xs text-slate-500">
                  2022 - {profileData.expectedGraduation}
                </div>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Cử nhân Kỹ thuật Phần mềm (Software Engineering) • <strong>GPA: {profileData.metrics[0].value}</strong>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Học bổng tài năng Đại học FPT • Top 5% sinh viên có điểm số học tập xuất sắc nhất khoa SE.
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 mb-3">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Kỹ năng Chuyên môn (Technical Competencies)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  Languages & Frameworks:
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                  C#, .NET 8 / ASP.NET Core, Java 17, Go (Golang), Python, TypeScript, React, Vite, Tailwind CSS
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  Databases & Distributed:
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                  PostgreSQL, SQL Server, Redis, Apache Kafka, RabbitMQ, gRPC, RESTful API
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  Architecture & Patterns:
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clean Architecture, CQRS, Event-Driven, Microservices, SAGA Pattern, Domain-Driven Design (DDD)
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  DevOps, Cloud & QA:
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                  Docker, Kubernetes, GitHub Actions CI/CD, JMeter, Playwright, Prometheus, Grafana
                </span>
              </div>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 mb-3">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Dự án Tiêu biểu & Thực tập Doanh nghiệp</span>
            </h2>
            <div className="space-y-4">
              {/* OJT */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    FPT Software — Backend Engineer Intern (OJT Kỳ 6)
                  </div>
                  <div className="font-mono text-xs text-slate-500">2024 - 2025</div>
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                  Tech: .NET 8, Apache Kafka, PostgreSQL, Docker, OpenTelemetry
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-2 space-y-1">
                  <li>Xây dựng Kafka Batch Consumer xử lý 4.000 events/giây từ cảm biến IoT container chuỗi cung ứng.</li>
                  <li>Tối ưu hóa Bulk Insert vào PostgreSQL, giảm 85% số lượt ghi đĩa vật lý và loại bỏ tắc nghẽn I/O.</li>
                  <li>Viết Unit Test với xUnit đạt tỷ lệ Code Coverage &gt; 82%, tích hợp pipeline CI/CD tự động.</li>
                </ul>
              </div>

              {/* Capstone */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    AutoDocFlow — AI-Powered Medical Records Capstone (SEP490)
                  </div>
                  <div className="font-mono text-xs text-slate-500">2026 (Hiện tại)</div>
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                  Tech: Go (Golang), FastAPI, React, PostgreSQL, Milvus, Docker
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-2 space-y-1">
                  <li>Trưởng nhóm Backend: Thiết kế kiến trúc Asynchronous Task Queue phản hồi client trong &lt; 50ms.</li>
                  <li>Bảo mật hồ sơ y khoa bằng mã hóa phong bì (Envelope Encryption), tuân thủ tiêu chuẩn an toàn PII.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extracurricular & Sports */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Hoạt động, Võ thuật & Thể thao</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
              <div>
                <strong>Karatedo:</strong> Đai đen Nhất đẳng (Shodan) • Huy chương Vàng Kumite Giải Karate Sinh viên FPT • Trợ giảng võ đường.
              </div>
              <div>
                <strong>Bóng rổ:</strong> Đội trưởng Đội tuyển Khoa Kỹ thuật Phần mềm (SE Basketball Team) • Giải Ba 3x3 FPT Championship.
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Đóng
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải xuống CV (PDF)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
