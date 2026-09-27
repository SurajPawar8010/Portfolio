import React, { useState } from "react";
import { 
  User, 
  Cpu, 
  Sparkles, 
  Layers, 
  Zap, 
  ShieldCheck, 
  HeartHandshake, 
  Terminal, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { personalData } from "../data/portfolioData";
import { playClickSound } from "../utils/soundEffects";

export default function About({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState("philosophy");

  const pillars = [
    {
      id: "philosophy",
      label: "Philosophy",
      icon: Sparkles,
      title: "Perfection at the Intersection of Art & Code",
      content: personalData.about.paragraphs[0]
    },
    {
      id: "architecture",
      label: "Architecture",
      icon: Cpu,
      title: "Resilient Distributed Systems Built for Scale",
      content: personalData.about.paragraphs[1]
    },
    {
      id: "passions",
      label: "Beyond Code",
      icon: HeartHandshake,
      title: "Mentorship, Audio Synthesis & Open-Source",
      content: personalData.about.paragraphs[2]
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Precision. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
              Artistic Sensibility.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            {personalData.about.heading}
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Value Pillar Tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Buttons - Mobile horizontally scrollable with no-scrollbar */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-full sm:w-fit overflow-x-auto no-scrollbar backdrop-blur-md">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => {
                      playClickSound();
                      setActiveTab(pillar.id);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{pillar.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

              {pillars.map((pillar) => {
                if (pillar.id !== activeTab) return null;
                return (
                  <div key={pillar.id} className="space-y-4 animate-fade-in">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {pillar.content}
                    </p>
                  </div>
                );
              })}

              {/* Highlights 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                {personalData.about.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{h.label}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  playClickSound();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all hover:border-violet-500/40"
              >
                <span>Read Full Resume & Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
              </button>
            </div>
          </div>

          {/* Right Side: Philosophy Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Card 1: Performance Obsession */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10">
                  &lt; 16ms Frames
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Sub-Frame Rendering</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Zero jank, hardware-accelerated animations, and aggressive memoization ensure smooth 60fps across every device.
              </p>
            </div>

            {/* Card 2: Distributed Cloud Scale */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-violet-400 px-2 py-0.5 rounded-full bg-violet-500/10">
                  99.99% Uptime
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Fault-Tolerant Distributed APIs</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Decoupled microservices, resilient queue brokers, and automated failovers built to absorb traffic spikes without breaking a sweat.
              </p>
            </div>

            {/* Card 3: Generative AI Orchestration */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
                  Streaming LLMs
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Next-Gen AI Systems</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Embedding autonomous agent loops, vector memory pipelines, and streaming token graphs into real-world commercial workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
