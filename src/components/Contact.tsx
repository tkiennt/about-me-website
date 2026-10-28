import React, { useState } from "react";
import { MapPin, Send, Check, Copy, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ContactProps {
  username: string;
}

export const Contact: React.FC<ContactProps> = ({ username }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "nguyentotrungkien@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      const mailtoUrl = `mailto:${contactEmail}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/10 bg-black text-[#f4f4f4]">
      <div className="max-w-4xl mx-auto px-6 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="font-editorial-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
            Have an engineering role, capstone project, or software collaboration in mind? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="md:col-span-5 space-y-4">
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/15 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400">Direct Email</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs font-mono text-white hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-white" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm sm:text-base font-semibold text-white hover:underline break-all"
              >
                {contactEmail}
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/15 backdrop-blur-md shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <MapPin size={14} className="text-white shrink-0" />
                <span>TP. Hồ Chí Minh / Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Open for Full-time Roles & Projects</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0e0e0e] border border-white/15 text-xs font-mono font-medium text-white hover:border-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0e0e0e] border border-white/15 text-xs font-mono font-medium text-white hover:border-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-white/15 backdrop-blur-md shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <Check size={22} />
                </div>
                <h3 className="font-editorial-display text-lg font-bold text-white">
                  Message Dispatched
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Your mail client has been opened. Looking forward to speaking with you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your system requirements, role, or team..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-zinc-200 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
