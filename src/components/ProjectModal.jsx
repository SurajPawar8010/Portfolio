import React, { useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Activity, 
  Zap, 
  Database, 
  Clock, 
  ShieldCheck, 
  GitBranch, 
  Building2, 
  ArrowRight,
  Workflow,
  Boxes
} from "lucide-react";
import { playClickSound } from "../utils/soundEffects";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderMetricIcon = (iconName) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-4 h-4 text-amber-400 shrink-0" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-violet-400 shrink-0" />;
      case "Database":
        return <Database className="w-4 h-4 text-cyan-400 shrink-0" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-emerald-400 shrink-0" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-pink-400 shrink-0" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />;
      default:
        return <Activity className="w-4 h-4 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <div 
      id="project-modal-overlay"
      className="fixed inset-0 z-[9996] overflow-y-auto bg-black/85 backdrop-blur-xl p-2 sm:p-4 md:p-6"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      <div className="min-h-full flex items-start sm:items-center justify-center py-2 sm:py-6">
        <div 
          id="project-modal-card"
          className="w-full max-w-4xl bg-gray-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-gray-200 relative my-auto cursor-default"
          style={{ overscrollBehavior: "contain" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Modal Top Header */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/10 bg-gray-950/95 backdrop-blur-md">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {project.category}
              </span>
              <span className="text-xs text-gray-400 font-mono hidden md:flex items-center gap-1.5 truncate">
                <Building2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                {project.client} • {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Close Button */}
              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                aria-label="Close modal"
                className="px-3 py-1.5 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer border border-white/5"
              >
                <span className="text-[10px] font-mono text-gray-400">ESC</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 text-gray-200">
            
            {/* Clean Hero Header Area */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950">
              {/* Banner Image */}
              <div className="h-36 sm:h-48 w-full relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-45 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
                
                {/* Badges on Banner */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono bg-black/75 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Production Service
                  </span>

                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono bg-black/75 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.stats}
                  </span>
                </div>
              </div>

              {/* Title & Tagline Section */}
              <div className="p-4 sm:p-6 space-y-2 border-t border-white/5">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium leading-relaxed max-w-3xl">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Key Architectural Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400">
                  <Activity className="w-3.5 h-3.5 text-violet-400" />
                  <span>Production Metrics & Performance Benchmarks</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="p-3 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] text-gray-400 font-medium truncate">{metric.label}</span>
                        {renderMetricIcon(metric.icon)}
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* System Architecture Flow Pipeline */}
            {project.systemFlow && project.systemFlow.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-950/20 via-gray-900/40 to-cyan-950/20 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>End-to-End System Data Flow Pipeline</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.systemFlow.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-200 flex items-center gap-2 shadow-sm">
                        <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                      {sIdx < project.systemFlow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 shrink-0 hidden sm:inline" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Architectural Implementations & Highlights */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                    <span>Key Architectural Engineering Highlights</span>
                  </h3>
                  <span className="text-[11px] font-mono text-gray-500">
                    {project.features.length} Modules Documented
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.features.map((feat, fIdx) => (
                    <div 
                      key={fIdx} 
                      className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2 group"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[10px] font-mono text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          {String(fIdx + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed pl-7">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Problem & Solution Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300">
                  <Boxes className="w-4 h-4 text-violet-400" />
                  <span>Scope & Engineering Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>Implementation & Scalability</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Technologies & Architecture Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" /> Technologies & Tooling Ecosystem
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Modal Bottom Action Footer */}
          <div className="sticky bottom-0 z-30 px-4 sm:px-6 py-3.5 border-t border-white/10 bg-gray-950/95 backdrop-blur-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="hidden sm:inline">Engineered by Suraj Balu Pawar • Production Verified</span>
              <span className="sm:hidden">{project.client}</span>
            </div>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="px-4 sm:px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Deep Dive</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
