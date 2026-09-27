import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Cloud, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  Compass
} from "lucide-react";
import { skillsCategories } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const displayedCategories = selectedCategory === "all" 
    ? skillsCategories 
    : skillsCategories.filter(c => c.id === selectedCategory);

  const currentlyExploring = [
    "Spring Cloud & Microservices",
    "Docker & Containerization",
    "Full-Stack Next.js 15",
    "Spring Security 6 & JWT",
    "Redis Caching with Spring Boot",
    "Kafka Event-Driven Architecture"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mastery Across The <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Modern Technology Spectrum
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            A comprehensive matrix of tools, languages, and distributed cloud primitives honed through years of enterprise shipping.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              playClickSound();
              setSelectedCategory("all");
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-emerald-500 text-gray-950 font-bold shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
            }`}
          >
            All Disciplines
          </button>
          {skillsCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-emerald-500 text-gray-950 font-bold shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                    : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-3xl bg-gray-950/80 border border-white/10 backdrop-blur-xl hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">{cat.description}</p>

                {/* Skills Bar List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-gray-200">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-gray-400 border border-white/5">
                            {skill.tag}
                          </span>
                          <span className="font-mono text-emerald-400 font-bold">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Production Verified
                </span>
                <span className="font-mono text-[11px] text-gray-500">6 Core Tools</span>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring / Researching Marquee Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-violet-950/20 to-cyan-950/20 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Current Technical Inquiries & R&D</h4>
              <p className="text-xs text-gray-400">Emerging frontiers I am actively prototyping with this quarter</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {currentlyExploring.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
