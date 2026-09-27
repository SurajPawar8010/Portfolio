import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Phone
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { personalData } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/soundEffects";

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "$10k - $25k",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    playSuccessSound();
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("8010613284");
    setCopiedPhone(true);
    playSuccessSound();
    showToast("WhatsApp / Mobile number 8010613284 copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    playClickSound();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessSound();

      // Trigger multi-stage confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);

      showToast("🎉 Message received! I will reply within 24 hours.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">
              Extraordinary Together?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Whether you are looking to architect a new product, scale distributed systems, or elevate your design engineering, my inbox is open.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Local Time Card */}
            <div className="p-6 rounded-3xl bg-gray-950/80 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Local Time</span>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentTime || "01:30:00 PM"} IST (Pune, India)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Current Status</h4>
                  <p className="text-xs text-gray-400">Available for Software Engineering Roles & Inquiries</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-gray-950/80 to-gray-950/90 border border-emerald-500/30 backdrop-blur-xl space-y-3.5 shadow-[0_10px_30px_rgba(16,185,129,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <WhatsappIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-300">WhatsApp Direct DM</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Response
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Need a quick response or prefer messaging directly on WhatsApp? DM me on <span className="font-semibold text-emerald-400">+91 8010613284</span> to connect instantly.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/50 border border-emerald-500/20">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-mono font-bold text-white tracking-wide">
                    +91 8010613284
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>DM on WhatsApp</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-950/30 to-gray-950/80 border border-violet-500/20 backdrop-blur-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-violet-300">Direct Inquiries</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Response in &lt; 24h
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-xs sm:text-sm font-mono text-gray-200 truncate">
                  {personalData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-3xl bg-gray-950/80 border border-white/10 backdrop-blur-xl space-y-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Connect Online
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href="https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/40 flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-emerald-400 transition-all group cursor-pointer"
                >
                  <WhatsappIcon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">WhatsApp</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-all group cursor-pointer"
                >
                  <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>

                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-violet-400 transition-all group cursor-pointer"
                >
                  <GithubIcon className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>

                <a
                  href={personalData.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-pink-500/10 border border-white/5 hover:border-pink-500/30 flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-white transition-all group cursor-pointer"
                >
                  <TwitterIcon className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono">Twitter / X</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-gray-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
                  <p className="text-sm text-gray-300 max-w-md">
                    Thank you for reaching out, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your dispatch has been recorded and I will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => {
                      playClickSound();
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Full-Stack Web App",
                        budget: "$10k - $25k",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all mt-4"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-white text-sm placeholder-gray-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-white text-sm placeholder-gray-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 focus:border-violet-500 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web Application</option>
                        <option value="Generative AI & Agent Workflows">Generative AI & Agent Workflows</option>
                        <option value="Creative WebGL / 3D Experience">Creative WebGL / 3D Experience</option>
                        <option value="Architecture Advisory & Audit">Architecture Advisory & Audit</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Anticipated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 focus:border-violet-500 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="$5k - $10k">$5k – $10k</option>
                        <option value="$10k - $25k">$10k – $25k</option>
                        <option value="$25k - $50k">$25k – $50k</option>
                        <option value="$50k+">$50k+ (Enterprise Scope)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Project Vision / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your goals, timeline, and what you're looking to build..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-white text-sm placeholder-gray-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-sm shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Quick Direct WhatsApp Alternative */}
                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-gray-400">
                    <span>Need immediate response?</span>
                    <a
                      href="https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClickSound}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors cursor-pointer"
                    >
                      <WhatsappIcon className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp (+91 8010613284)</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
