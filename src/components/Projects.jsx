import React, { useState } from "react";
import { 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Maximize2,
  TrendingUp
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Full-Stack", "Fintech & Web3", "Creative Tech & 3D", "Cloud & DevOps"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO & FLAGSHIP WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted for Impact. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">
              Built for Scale.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            A curated collection of autonomous AI platforms, high-frequency financial engines, and spatial computing workspaces.
          </p>
        </div>

        {/* Filter Categories Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-violet-400/50"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-gray-950/80 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] flex flex-col justify-between"
              >
                {/* Image Container with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 border-b border-white/10 cursor-pointer"
                  onClick={() => {
                    playClickSound();
                    onSelectProject(project);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Stats Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.stats}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playClickSound();
                        onSelectProject(project);
                      }}
                      className="p-2 rounded-xl bg-black/70 text-white border border-white/20 hover:bg-violet-600 transition-colors backdrop-blur-md"
                      title="Quick View"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-1.5">
                      <span className="text-violet-400 font-semibold">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 
                      onClick={() => {
                        playClickSound();
                        onSelectProject(project);
                      }}
                      className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.02] text-[10px] font-mono text-gray-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        playClickSound();
                        onSelectProject(project);
                      }}
                      className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClickSound}
                        title="GitHub Code"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClickSound}
                        title="Live Demo"
                        className="p-2 rounded-xl bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
