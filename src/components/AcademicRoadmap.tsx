import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Code2, 
  ExternalLink, 
  AlertCircle, 
  Lightbulb, 
  Award, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Cpu,
  Tag
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { semestersData } from '../data/portfolioData';
import type { Semester, Project } from '../types';

export const AcademicRoadmap: React.FC = () => {
  const [selectedSemesterId, setSelectedSemesterId] = useState<number>(5); // Default to SWP391 semester
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  // Collect popular tech stacks for quick filtering
  const popularTechs = useMemo(() => {
    return ['All', 'ASP.NET Core', '.NET 8', 'React', 'Java', 'Docker', 'PostgreSQL', 'Kafka', 'SignalR', 'Go (Golang)'];
  }, []);

  // Filtered semesters
  const filteredSemesters = useMemo(() => {
    return semestersData.filter(sem => {
      const matchesSearch = 
        searchQuery === '' ||
        sem.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sem.courses.some(c => 
          c.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        sem.projects.some(p => 
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
        );

      const matchesTech = 
        selectedTech === 'All' ||
        sem.projects.some(p => p.techStack.some(t => t.toLowerCase().includes(selectedTech.toLowerCase())));

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  const activeSemester = useMemo(() => {
    return semestersData.find(s => s.id === selectedSemesterId) || semestersData[0];
  }, [selectedSemesterId]);

  return (
    <section id="roadmap" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Roadmap & Project Timeline (Trọng tâm)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lộ trình Kỹ thuật Phần mềm (9 Học kỳ)
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Toàn bộ hành trình đào tạo cử nhân SE tại Đại học FPT: từ giải thuật con trỏ C nền tảng, thiết kế cơ sở dữ liệu, kiến trúc Clean Architecture, thực tập doanh nghiệp (OJT) đến Đồ án tốt nghiệp Capstone SEP490.
          </p>
        </div>

        {/* Search, Filter & View Controls */}
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs mb-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm mã môn (SWP391, DBI202...), tên dự án, công nghệ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Xóa
              </button>
            )}
          </div>

          {/* View Mode Toggle: Single Semester vs All */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">Chế độ xem:</span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'single'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Từng học kỳ (Interactive)
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'all'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Toàn bộ 9 Kỳ (Timeline)
              </button>
            </div>
          </div>
        </div>

        {/* Tech Quick Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 text-xs font-mono scrollbar-none no-scrollbar">
          <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1 shrink-0">
            <Tag className="w-3 h-3" />
            Lọc theo Tech:
          </span>
          {popularTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`shrink-0 px-2.5 py-1 rounded-lg transition-all ${
                selectedTech === tech
                  ? 'bg-blue-600 text-white font-bold shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Interactive Semester Navigator (Pills/Tabs) */}
        {viewMode === 'single' && (
          <div className="mb-10">
            <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
              {semestersData.map((sem) => {
                const isActive = sem.id === selectedSemesterId;
                return (
                  <button
                    key={sem.id}
                    onClick={() => setSelectedSemesterId(sem.id)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all transform active:scale-95 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <span className="font-mono">{sem.term}</span>
                    {sem.status === 'Completed' && (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-blue-200' : 'text-emerald-500'}`} />
                    )}
                    {sem.status === 'In Progress' && (
                      <Clock className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-amber-500'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content View: Single Semester View */}
        {viewMode === 'single' ? (
          <SemesterCard semester={activeSemester} />
        ) : (
          /* Content View: Full Vertical Timeline of all 9 semesters */
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-emerald-500 before:-z-0">
            {filteredSemesters.map((semester) => (
              <div key={semester.id} className="relative pl-10 sm:pl-16">
                {/* Timeline Node Badge */}
                <div className="absolute left-1.5 sm:left-5.5 top-5 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold ring-4 ring-white dark:ring-slate-900 shadow-sm z-10">
                  {semester.id}
                </div>
                <SemesterCard semester={semester} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

interface SemesterCardProps {
  semester: Semester;
}

const SemesterCard: React.FC<SemesterCardProps> = ({ semester }) => {
  return (
    <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm transition-all">
      
      {/* Semester Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
              {semester.term}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {semester.academicYear}
            </span>
            {semester.status === 'Completed' ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                <CheckCircle2 className="w-3 h-3" /> Hoàn thành
              </span>
            ) : semester.status === 'In Progress' ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60">
                <Clock className="w-3 h-3 animate-spin" /> Đang học (In Progress)
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                Sắp tới
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {semester.title}
          </h3>
        </div>

        {semester.gpa && (
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 self-start md:self-auto">
            <div className="text-right">
              <div className="text-xs text-slate-500 dark:text-slate-400">Điểm trung bình (GPA)</div>
              <div className="text-base font-extrabold font-mono text-blue-600 dark:text-blue-400">
                {semester.gpa}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        {semester.description}
      </p>

      {/* Courses Grid */}
      <div className="mt-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-3 font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Danh sách môn học trọng tâm ({semester.courses.length} môn)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {semester.courses.map((course) => (
            <div
              key={course.code}
              className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  {course.code}
                </span>
                {course.credits && (
                  <span className="text-[11px] font-mono text-slate-400">
                    {course.credits} credits
                  </span>
                )}
              </div>
              <div className="font-semibold text-xs text-slate-800 dark:text-slate-200 line-clamp-1 mb-1" title={course.name}>
                {course.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-snug">
                {course.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      {semester.projects.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-4 font-mono">
            <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Đồ án / Dự án Chuyên ngành Nổi bật</span>
          </h4>

          <div className="space-y-6">
            {semester.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all group">
      
      {/* Top Header of Project Card: Project Title is MOST PROMINENT, Role is SUBHEADING */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded font-mono ${
              project.status === 'Production'
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : project.status === 'In Progress'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
            }`}>
              ● {project.status}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {project.period}
            </span>
          </div>

          {/* 1. TÊN DỰ ÁN NỔI BẬT HƠN HẾT (Prominent Title) */}
          <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
            {project.title}
          </h4>

          {/* 2. TÊN VAI TRÒ LÀ SUBHEADING (Clear Subheading) */}
          <div className="mt-1.5 flex flex-wrap items-center gap-2 font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 text-xs font-bold">
              Vai trò: {project.role}
            </span>
            <span className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 font-sans">
              — {project.subtitle}
            </span>
          </div>
        </div>

        {/* Links: GitHub & Demo */}
        <div className="flex items-center gap-2 self-start shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Xem Repo GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              title="Trải nghiệm Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 my-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Architecture Highlight (if available) */}
      {project.architectureHighlight && (
        <div className="my-3 text-xs flex items-start gap-2 p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/40 text-blue-900 dark:text-blue-200 font-medium">
          <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <span><strong>Kiến trúc cốt lõi:</strong> {project.architectureHighlight}</span>
        </div>
      )}

      {/* KEY TAKEAWAYS / LESSONS LEARNED (Trọng tâm) */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-3 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Key Takeaways / Lessons Learned (Problem $\rightarrow$ Solution $\rightarrow$ Architecture Takeaway)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* 1. Problem */}
          <div className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 mb-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>1. Vấn đề (Problem)</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.takeaway.problem}
            </p>
          </div>

          {/* 2. Solution */}
          <div className="p-3.5 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/40">
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 mb-1.5 font-mono">
              <Lightbulb className="w-3.5 h-3.5 shrink-0" />
              <span>2. Giải pháp (Solution)</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.takeaway.solution}
            </p>
          </div>

          {/* 3. Engineering Takeaway */}
          <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1.5 font-mono">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>3. Bài học Kỹ thuật (Takeaway)</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.takeaway.engineeringTakeaway}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
