import React, { useEffect } from "react";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Code2, 
  Mail, 
  Phone,
  MapPin, 
  Globe 
} from "lucide-react";
import { personalData, experienceData, skillsCategories } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function ResumeModal({ isOpen, onClose, showToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleDownload = () => {
    playClickSound();
    showToast("Downloading Suraj Pawar's Resume PDF...");
    const link = document.createElement("a");
    link.href = "/Suraj_Pawar_Resume.pdf";
    link.download = "Suraj_Pawar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-[9996] flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      <div 
        id="resume-modal-card"
        className="w-full max-w-4xl bg-gray-950 border border-white/15 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-gray-200 cursor-default"
        style={{ height: "88vh", maxHeight: "88vh", overscrollBehavior: "contain" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar - stays pinned at the top */}
        <div className="flex items-center justify-between px-3.5 sm:px-7 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.03] shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono font-medium truncate max-w-[130px] sm:max-w-none">
              Software Engineer
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrint}
              title="Print or Save as PDF"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-all text-xs font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <a
              href="/Suraj_Pawar_Resume.pdf"
              download="Suraj_Pawar_Resume.pdf"
              onClick={() => {
                playClickSound();
                showToast("Downloading Suraj Pawar's Resume PDF...");
              }}
              title="Download PDF"
              className="p-2 sm:px-3.5 sm:py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              title="Close (Esc)"
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-0.5 sm:ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body - perfectly scrollable without clipping */}
        <div 
          className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 print:p-0 print:text-black"
          style={{ overflowY: "auto", overscrollBehavior: "contain" }}
        >
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">{personalData.name}</h1>
              <p className="text-violet-400 font-medium text-base mt-1">{personalData.tagline}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-3 font-mono">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {personalData.location}</span>
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"><Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {personalData.email}</a>
                <a href={`tel:${personalData.phoneRaw || "8010613284"}`} className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-emerald-400 font-semibold"><Phone className="w-3.5 h-3.5 shrink-0" /> {personalData.phone || "+91 8010613284"}</a>
                <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Remote Available</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img 
                src={personalData.avatar} 
                alt={personalData.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-violet-500/40 shadow-lg"
              />
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Executive Summary
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {personalData.bio} {personalData.about.paragraphs[0]}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Core Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillsCategories.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <h3 className="text-xs font-semibold text-white mb-2">{cat.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-gray-300 border border-white/5">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-violet-500/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-cyan-400">{exp.company} • <span className="text-gray-400 font-normal">{exp.location}</span></p>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full w-fit mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 mb-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <h3 className="text-sm font-bold text-white">{personalData.resume.education}</h3>
                <p className="text-xs text-gray-400 mt-1">Core Java, Spring Boot, MySQL Database Management & Full-Stack Web Development</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Professional Certifications & Simulations
              </h2>
              <div className="space-y-2.5">
                {personalData.resume.certifications.map((cert, idx) => {
                  const isObject = typeof cert === "object";
                  const title = isObject ? cert.title : cert;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 text-xs text-gray-300">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-white truncate">{title}</p>
                          {isObject && cert.issuer && (
                            <p className="text-[10px] text-gray-400 font-mono">{cert.issuer} • {cert.platform} ({cert.issueDate})</p>
                          )}
                        </div>
                      </div>
                      {isObject && cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] text-cyan-400 hover:text-cyan-300 font-mono shrink-0 transition-colors"
                        >
                          PDF ↗
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
