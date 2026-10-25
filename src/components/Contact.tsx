import React, { useState } from "react";
import { MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/80 light-mode:border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33E092]/10 border border-[#33E092]/30 text-xs font-mono font-semibold text-[#33E092] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light-mode:text-zinc-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 light-mode:text-zinc-600 max-w-xl">
            Have an engineering role, capstone project, or collaboration in mind? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="md:col-span-5 space-y-4">
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400">Direct Email</span>
                <button
                  onClick={handleCopy}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-[#33E092] hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-[#33E092]" /> : <Copy size={14} />}
                </button>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm font-mono font-semibold text-zinc-200 light-mode:text-zinc-800 hover:text-[#33E092] break-all transition-colors"
              >
                {contactEmail}
              </a>
              {copied && (
                <div className="text-[11px] font-mono text-[#33E092] mt-1">
                  ✓ Copied to clipboard
                </div>
              )}
            </div>

            {/* Location & Status */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <MapPin size={14} className="text-[#33E092]" />
                <span>Location</span>
              </div>
              <div className="text-sm font-semibold text-zinc-200 light-mode:text-zinc-800">
                Hà Nội, Việt Nam
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                FPT University Hanoi Campus
              </div>
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs flex items-center justify-around">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://www.linkedin.com/in/nguyentotrungkien/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="md:col-span-7 p-6 rounded-3xl bg-zinc-900/60 light-mode:bg-white border border-zinc-800/80 light-mode:border-zinc-200 backdrop-blur-md shadow-xs">
            <h3 className="text-base font-bold text-zinc-100 light-mode:text-zinc-900 mb-4 pb-2 border-b border-zinc-800/80 light-mode:border-zinc-100">
              Send a Quick Message
            </h3>

            {submitted ? (
              <div className="p-6 text-center text-xs font-mono text-[#33E092] bg-[#33E092]/10 rounded-xl border border-[#33E092]/30">
                Opening your email client with message prepared. Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-zinc-950/80 light-mode:bg-zinc-50 border border-zinc-800 light-mode:border-zinc-200 text-zinc-100 light-mode:text-zinc-900 placeholder:text-zinc-600 focus:outline-hidden focus:border-[#33E092]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-zinc-950/80 light-mode:bg-zinc-50 border border-zinc-800 light-mode:border-zinc-200 text-zinc-100 light-mode:text-zinc-900 placeholder:text-zinc-600 focus:outline-hidden focus:border-[#33E092]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Trung Kien, I'd like to discuss an opportunity..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-zinc-950/80 light-mode:bg-zinc-50 border border-zinc-800 light-mode:border-zinc-200 text-zinc-100 light-mode:text-zinc-900 placeholder:text-zinc-600 focus:outline-hidden focus:border-[#33E092] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#33E092] text-zinc-950 font-semibold text-xs hover:bg-[#0CCE6B] transition-colors shadow-sm primary-glow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={13} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
