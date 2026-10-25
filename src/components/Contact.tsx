import React, { useState } from "react";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { userProfile } from "../data/githubData";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      const mailtoLink = `mailto:${userProfile.email}?subject=Portfolio Contact from ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(`Name: ${name}\nContact: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
      setSent(true);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="text-center md:text-left mb-6">
            <h1>Contact Me</h1>
            <p className="lead">
              Got an engineering role, capstone project, or open-source idea? Let's collaborate and build something remarkable together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Direct Contact Info */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 text-sm mb-1 text-[#5000ca] dark:text-purple-400 font-bold">
                  <Mail size={18} />
                  <span>Direct Email</span>
                </div>
                <a
                  href={`mailto:${userProfile.email}`}
                  className="text-sm font-mono break-all hover:underline"
                >
                  {userProfile.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 text-sm mb-1 text-[#5000ca] dark:text-purple-400 font-bold">
                  <MapPin size={18} />
                  <span>Location</span>
                </div>
                <div className="text-sm">
                  {userProfile.location} ({userProfile.university})
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 text-sm mb-2 text-[#5000ca] dark:text-purple-400 font-bold">
                  <span>Connect Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://github.com/${userProfile.githubHandle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-purple-500/10 text-[#5000ca] dark:text-purple-300 hover:bg-[#5000ca] hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nguyentotrungkien/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-purple-500/10 text-[#5000ca] dark:text-purple-300 hover:bg-[#5000ca] hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle size={48} className="text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    Message Prepared!
                  </h3>
                  <p className="text-sm opacity-80 max-w-md mx-auto">
                    Your email client has been opened to send your inquiry directly to {userProfile.email}. Thank you for reaching out!
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-[#5000ca] text-white text-sm font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form space-y-4">
                  <div className="form-row">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What's your name?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                        Email / Phone *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="How can I reach you?"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Send me any questions, opportunities, or feedback..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-send">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
