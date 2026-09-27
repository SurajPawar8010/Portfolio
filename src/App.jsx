import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CreativeLab from "./components/CreativeLab";
import TestimonialsAndServices from "./components/TestimonialsAndServices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Overlays & Micro-Interactions
import BackgroundCanvas from "./components/BackgroundCanvas";
import CustomCursor from "./components/CustomCursor";
import ProjectModal from "./components/ProjectModal";
import ResumeModal from "./components/ResumeModal";
import CommandPalette from "./components/CommandPalette";
import Toast from "./components/Toast";

import { isSoundEnabled, setSoundEnabled as setGlobalSound } from "./utils/soundEffects";

const VALID_TABS = ["home", "about", "projects", "skills", "experience", "creativelab", "contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_TABS.includes(hash)) return hash;
    }
    return "home";
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [soundEnabled, setSoundState] = useState(true);
  const [toast, setToast] = useState(null);

  const setSoundEnabled = (enabled) => {
    setSoundState(enabled);
    setGlobalSound(enabled);
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  // Instant direct navigation to target section without scrolling animation
  const navigateTo = (tab) => {
    const targetId = tab === "hero" ? "home" : tab;
    if (!VALID_TABS.includes(targetId)) return;
    setActiveTab(targetId);

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${targetId}`);
    } else {
      window.location.hash = targetId;
    }

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "instant" });
    }
  };

  // Scroll spy: highlight the active tab in navbar as user scrolls through sections
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveTab("home");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab("contact");
        return;
      }

      const viewportTarget = window.innerHeight * 0.35;
      for (const id of VALID_TABS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTarget && rect.bottom >= viewportTarget) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Instant positioning on initial load if URL contains hash
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const targetId = hash === "hero" ? "home" : hash;
      if (VALID_TABS.includes(targetId) && targetId !== "home") {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "instant" });
          }
        }, 100);
      }
    }
  }, []);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const targetId = hash === "hero" ? "home" : hash;
      if (VALID_TABS.includes(targetId)) {
        setActiveTab(targetId);
        if (targetId === "home") {
          window.scrollTo({ top: 0, behavior: "instant" });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "instant" });
          }
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background scrolling completely when CV modal, command palette, or project modal is open
  useEffect(() => {
    const isModalActive = Boolean(resumeOpen || paletteOpen || selectedProject);
    if (isModalActive) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [resumeOpen, paletteOpen, selectedProject]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-violet-600 selection:text-white flex flex-col justify-between">
      {/* Interactive Constellation Particle Canvas */}
      <BackgroundCanvas />

      {/* Sleek Custom Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={navigateTo}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setResumeOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
        showToast={showToast}
      />

      {/* Continuous Page Sections (Full scroll experience) */}
      <main className="relative z-10 flex-grow">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          showToast={showToast}
          onNavigate={navigateTo}
        />
        <TestimonialsAndServices />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Experience onOpenResume={() => setResumeOpen(true)} />
        <CreativeLab showToast={showToast} />
        <Contact showToast={showToast} />
      </main>

      {/* Footer (with quick page switchers) */}
      <Footer onNavigate={navigateTo} />

      {/* Modals & Dialogs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        showToast={showToast}
      />

      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => {
          setPaletteOpen(false);
          setResumeOpen(true);
        }}
        onNavigate={navigateTo}
        showToast={showToast}
      />

      {/* Global Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
