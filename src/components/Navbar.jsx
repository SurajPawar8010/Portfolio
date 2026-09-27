import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Terminal, 
  Volume2, 
  VolumeX, 
  FileText, 
  ArrowUpRight 
} from "lucide-react";
import { personalData } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function Navbar({ 
  activeTab,
  onNavigate,
  soundEnabled, 
  setSoundEnabled, 
  onOpenResume, 
  onOpenPalette,
  showToast 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Lab", id: "creativelab" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    playClickSound();
    setSoundEnabled(!soundEnabled);
    showToast(soundEnabled ? "Audio muted" : "Tactile audio enabled");
  };

  const handleTabClick = (tabId) => {
    playClickSound();
    setMobileMenuOpen(false);
    onNavigate(tabId);
  };

  // Get initials for monogram (SP for Suraj Pawar)
  const initials = personalData.name
    ? personalData.name.split(" ").map(n => n[0]).join("")
    : "SP";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-gray-950/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          : "py-4 bg-gray-950/40 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name (Clicks to Home Page) */}
        <button
          onClick={() => handleTabClick("home")}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform group-hover:scale-105 shrink-0">
            <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 text-base font-mono">
                {initials}
              </span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-gray-950 animate-pulse" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[11px] text-cyan-400 font-mono tracking-wider">
              Software Engineer
            </span>
          </div>
        </button>

        {/* Center Navigation Tabs (Direct Page Switchers) */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg" style={{ gap: "0.375rem" }}>
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-500 text-white shadow-[0_0_16px_rgba(139,92,246,0.6)] border border-violet-400/40"
                    : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls (Always in a horizontal row) */}
        <div className="hidden sm:flex flex-row items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenPalette();
            }}
            title="Command Palette (Ctrl + K)"
            className="flex flex-row items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-gray-300 border border-white/10 text-xs transition-all hover:border-violet-500/40 shadow-sm cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-mono text-gray-400">⌘K</span>
          </button>

          {/* Tactile Audio Mute/Unmute */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? "Mute Tactile Audio" : "Enable Tactile Audio"}
            className={`p-2 rounded-xl border text-xs transition-all flex items-center justify-center cursor-pointer ${
              soundEnabled
                ? "bg-violet-600/20 border-violet-500/40 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Resume / CV Modal Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="flex flex-row items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-semibold transition-all hover:border-cyan-400/40 shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </button>

          {/* Hire Me / Contact CTA Button */}
          <button
            onClick={() => handleTabClick("contact")}
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all flex flex-row items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-violet-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-gray-950/98 border-b border-white/10 backdrop-blur-2xl animate-fade-in space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                  activeTab === link.id
                    ? "bg-violet-600 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-xs text-gray-300 font-mono cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-violet-400" /> Command Palette (⌘K)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-xs text-cyan-300 font-medium cursor-pointer"
            >
              <FileText className="w-4 h-4" /> View Full Resume / CV
            </button>
            <button
              onClick={() => handleTabClick("contact")}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold cursor-pointer"
            >
              <span>Get in Touch / Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
