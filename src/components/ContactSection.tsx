import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    const subject = encodeURIComponent(`[Portfolio Contact] Tin nhắn từ ${formState.name || 'Nhà tuyển dụng'}`);
    const body = encodeURIComponent(`${formState.message}\n\nLiên hệ lại qua: ${formState.email}`);
    window.location.href = `mailto:${profileData.contacts.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Liên hệ & Kết nối</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cùng trao đổi về cơ hội hợp tác
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Tôi luôn hào hứng thảo luận về các dự án công nghệ, kiến trúc phần mềm phân tán hoặc các cơ hội việc làm Backend / Full-Stack Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Hòm thư điện tử
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {profileData.contacts.email}
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 hover:bg-blue-100 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="w-5 h-5 text-slate-800 dark:text-white" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">GitHub</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Repositories & Code</div>
              </a>

              <a
                href={profileData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="w-5 h-5 text-blue-600" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">LinkedIn</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Professional Network</div>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Địa điểm & Trạng thái</span>
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {profileData.contacts.location}
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {profileData.status}
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Gửi lời nhắn nhanh
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center animate-in fade-in">
                  <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Cảm ơn bạn đã liên hệ!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                    Trình gửi thư email đã được kích hoạt. Tôi sẽ phản hồi bạn trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                        Email liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Nội dung tin nhắn <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Chào Nhật Minh, tôi quan tâm đến dự án của bạn và muốn trao đổi về vị trí..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi tin nhắn</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
