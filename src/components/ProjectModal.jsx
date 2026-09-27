import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle, Sparkles, Layers, Cpu, Activity } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { playClickSound } from "../utils/soundEffects";

export default function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-modal-overlay"
      className="fixed inset-0 z-[9996] flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto cursor-pointer"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      <div 
        id="project-modal-card"
        className="w-full max-w-4xl max-h-[92vh] bg-gray-950 border border-white/10 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden text-gray-200 cursor-default"
        style={{ overscrollBehavior: "contain" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              Client: {project.client} • {project.year}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-video bg-black/40">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {project.stats}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-white text-xs font-medium border border-white/10 backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GitHub Repository</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium backdrop-blur-md flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Live Production Demo</span>
                  <span className="sm:hidden">Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-violet-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics?.map((metric, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center"
              >
                <span className="text-xs text-gray-400">{metric.label}</span>
                <span className="text-lg font-bold text-white font-mono mt-0.5">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* Deep Dive Description */}
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>{project.description}</p>
            <p className="text-gray-400">{project.longDescription}</p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" /> Technologies & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 hover:border-cyan-400/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
