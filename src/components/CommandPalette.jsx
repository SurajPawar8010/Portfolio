import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Terminal, 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Phone,
  FileText, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Copy,
  ExternalLink,
  X
} from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { personalData } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/soundEffects";

export default function CommandPalette({
  isOpen,
  onClose,
  soundEnabled,
  setSoundEnabled,
  onOpenResume,
  onNavigate,
  showToast
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);
  const listRef = useRef(null);

  const actions = [
    {
      id: "home",
      title: "Jump to Overview (Home)",
      category: "Navigation",
      icon: Terminal,
      action: () => onNavigate ? onNavigate("home") : null
    },
    {
      id: "about",
      title: "View About & Background",
      category: "Navigation",
      icon: User,
      action: () => onNavigate ? onNavigate("about") : null
    },
    {
      id: "projects",
      title: "Explore Featured Projects",
      category: "Navigation",
      icon: Briefcase,
      action: () => onNavigate ? onNavigate("projects") : null
    },
    {
      id: "skills",
      title: "Inspect Tech Stack & Skills",
      category: "Navigation",
      icon: Code,
      action: () => onNavigate ? onNavigate("skills") : null
    },
    {
      id: "experience",
      title: "Read Career History & Education",
      category: "Navigation",
      icon: Briefcase,
      action: () => onNavigate ? onNavigate("experience") : null
    },
    {
      id: "lab",
      title: "Interactive Creative Lab",
      category: "Navigation",
      icon: Sparkles,
      action: () => onNavigate ? onNavigate("creativelab") : null
    },
    {
      id: "contact",
      title: "Get in Touch & Send Message",
      category: "Navigation",
      icon: Mail,
      action: () => onNavigate ? onNavigate("contact") : null
    },
    {
      id: "resume",
      title: "View Full Resume & Credentials",
      category: "Actions",
      icon: FileText,
      action: () => {
        onOpenResume();
      }
    },
    {
      id: "whatsapp",
      title: "Chat with Suraj on WhatsApp (+91 8010613284)",
      category: "Contact",
      icon: WhatsappIcon,
      action: () => {
        playClickSound();
        window.open("https://wa.me/918010613284?text=Hi%20Suraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", "_blank");
        showToast("Opening WhatsApp chat...");
      }
    },
    {
      id: "copy-phone",
      title: "Copy Mobile Number (8010613284)",
      category: "Contact",
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText("8010613284");
        playSuccessSound();
        showToast("Phone number 8010613284 copied to clipboard!");
      }
    },
    {
      id: "copy-email",
      title: "Copy Contact Email to Clipboard",
      category: "Actions",
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(personalData.email);
        playSuccessSound();
        showToast("Email copied to clipboard!");
      }
    },
    {
      id: "confetti",
      title: "Celebrate! (Trigger Confetti)",
      category: "Actions",
      icon: Sparkles,
      action: () => {
        playSuccessSound();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        showToast("🎉 Celebrations unleashed!");
      }
    },
    {
      id: "sound",
      title: soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects",
      category: "Settings",
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        setSoundEnabled(!soundEnabled);
        showToast(soundEnabled ? "Audio muted" : "Audio enabled");
      }
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
    itemRefs.current = [];
  }, [query]);

  // Automatically scroll selected item into view on Arrow Up / Down navigation
  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="command-palette-overlay"
      className="fixed inset-0 z-[9995] flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 pb-6 sm:pb-8 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto cursor-pointer"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      <div 
        id="command-palette-card"
        className="w-full max-w-xl bg-gray-950/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col cursor-default"
        style={{ 
          maxHeight: "calc(100vh - 120px)",
          overscrollBehavior: "contain" 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02] shrink-0">
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list - bounded with smooth scrollbar */}
        <div 
          ref={listRef}
          className="overflow-y-auto p-2 space-y-1 custom-scrollbar flex-1"
          style={{ 
            maxHeight: "340px",
            minHeight: "100px",
            overflowY: "auto", 
            overscrollBehavior: "contain" 
          }}
        >
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  onClick={() => {
                    playClickSound();
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all cursor-pointer ${
                    isSelected
                      ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-sm"
                      : "text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected ? "bg-violet-500/30 text-violet-300" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{item.category}</span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info (Desktop keyboard navigation hint) */}
        <div className="hidden sm:flex px-4 py-2.5 border-t border-white/10 bg-white/[0.01] items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">↓</kbd>
            <span>Select:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">Enter</kbd>
          </div>
          <div>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">Esc</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
