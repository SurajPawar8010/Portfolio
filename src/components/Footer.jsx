import React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { personalData } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleLink = (tabId) => {
    playClickSound();
    if (onNavigate) {
      onNavigate(tabId);
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-gray-950/95 backdrop-blur-xl py-12 overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <button
              onClick={() => handleLink("home")}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 text-sm">
                  {personalData.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <span className="font-bold text-white text-base tracking-wide hover:text-cyan-400 transition-colors">
                {personalData.name}
              </span>
            </button>
          </div>

          {/* Footer Navigation Pill Tabs */}
          <nav aria-label="Footer Quick Links" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" style={{ gap: "0.625rem" }}>
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Creative Lab", id: "creativelab" },
              { name: "Contact", id: "contact" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleLink(tab.id)}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 text-gray-300 hover:text-white border border-white/5 hover:border-violet-500/40 text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm select-none"
              >
                {tab.name}
              </button>
            ))}
          </nav>

          {/* High-Visibility Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              title="Return to top"
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600/30 to-indigo-600/30 hover:from-violet-600 hover:to-indigo-600 text-white border border-violet-500/40 hover:border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all duration-300 flex items-center gap-2.5 text-xs font-bold font-mono tracking-widest group cursor-pointer"
            >
              <span className="text-white font-extrabold tracking-widest text-xs">TOP</span>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} {personalData.name}. Designed & Engineered with React.js.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Pune, Maharashtra, India</span>
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
