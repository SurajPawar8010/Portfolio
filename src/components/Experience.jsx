import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  FileText,
  Building,
  ExternalLink
} from "lucide-react";
import { experienceData, personalData } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function Experience({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    playClickSound();
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tested in High-Stakes <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              Production Environments
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Professional engineering journey from foundational computer science at KBP Mahavidyalaya to Full-Stack development and enterprise Software Engineering at Nebula Technology, Pune.
          </p>
        </div>

        {/* Tab Switcher: Work Experience vs Education (Scrollable on mobile) */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-full overflow-x-auto no-scrollbar backdrop-blur-md">
            <button
              onClick={() => {
                playClickSound();
                setActiveTab("experience");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "experience"
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                setActiveTab("education");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "education"
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Honors</span>
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === "experience" ? (
          <div className="max-w-4xl mx-auto space-y-4">
            {experienceData.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-gray-950/90 border-violet-500/40 shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Clickable Header Bar */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-400 border border-violet-500/20 shrink-0 mt-0.5">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {item.role}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="text-left sm:text-right font-mono text-xs text-gray-400">
                        <span className="block font-medium text-gray-200">{item.period}</span>
                        <span className="text-gray-500">{item.location}</span>
                      </div>
                      <div
                        className={`p-2 rounded-xl bg-white/5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-90 text-violet-400 bg-violet-500/20" : ""
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Body Drawer */}
                  {isExpanded && (
                    <div className="px-5 pb-5 sm:px-7 sm:pb-7 border-t border-white/5 pt-4 space-y-4 animate-fade-in">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-violet-400">
                          Key Accomplishments
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Used */}
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((t, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Education & Honors View */
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 rounded-3xl bg-gray-950/80 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personalData.resume.education}</h3>
                  <p className="text-xs text-cyan-400 font-mono">Academic Distinction & Honors</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Undergraduate student in Computer Science (June 2022 — May 2025) with a strong foundation in Object-Oriented Programming with Core Java, Relational Database Management in MySQL, Data Structures, and Modern Web Engineering.
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Professional Certifications & Job Simulations
              </h4>
              <div className="space-y-4">
                {personalData.resume.certifications.map((cert, idx) => {
                  const isObject = typeof cert === "object";
                  const title = isObject ? cert.title : cert;
                  return (
                    <div 
                      key={idx} 
                      className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-violet-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h5 className="text-sm font-bold text-white">{title}</h5>
                            {isObject && cert.issuer && (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono">
                                {cert.issuer} • {cert.platform}
                              </span>
                            )}
                          </div>
                          {isObject && cert.description && (
                            <p className="text-xs text-gray-300 mb-2 leading-relaxed">{cert.description}</p>
                          )}
                          {isObject && cert.tasks && (
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {cert.tasks.map((task, tIdx) => (
                                <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-300 border border-white/5 font-mono">
                                  ✓ {task}
                                </span>
                              ))}
                            </div>
                          )}
                          {isObject && cert.enrolmentCode && (
                            <p className="text-[10px] text-gray-400 font-mono">
                              Verification Code: <span className="text-cyan-400">{cert.enrolmentCode}</span> • Issued: {cert.issueDate}
                            </p>
                          )}
                        </div>
                      </div>

                      {isObject && cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 text-xs font-semibold border border-white/10 transition-colors shrink-0 self-start sm:self-center"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View PDF</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA to view full CV */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all hover:border-violet-500/40"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Open Complete Credentials & Resume Document</span>
          </button>
        </div>

      </div>
    </section>
  );
}
