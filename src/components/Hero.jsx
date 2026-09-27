import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Code2, 
  Cpu, 
  Zap, 
  Copy, 
  Check, 
  Download, 
  Play,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalData } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/soundEffects";

export default function Hero({ onOpenResume, showToast, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("Status: 200 OK • Architecture: Optimal • All systems operational.");

  const currentRole = personalData.roles[roleIndex];

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 60;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, currentRole]);

  const codeSnippet = `// Software Engineer Manifest
const engineer = new SoftwareEngineer({
  name: "${personalData.name}",
  backend: ["Core Java", "Spring Boot", "Hibernate", "JDBC"],
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3"],
  database: "MySQL",
  status: "Available for Roles"
});

await engineer.buildScalableApplication();`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    playSuccessSound();
    showToast("Code snippet copied to clipboard!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunCode = () => {
    playSuccessSound();
    setTerminalOutput(`⚡ [200 OK] Spring Boot microservices initialized with Kafka streams & Redis cache!`);
    showToast("Microservices simulation executed!");
  };

  const quickTechStack = [
    "Core Java", "Spring Boot", "Microservices", "Apache Kafka", "Redis", "Docker", "React.js", "MySQL", "Hibernate", "JDBC", "REST APIs", "Git"
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Radar Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono w-fit backdrop-blur-md shadow-[0_0_20px_rgba(52,211,153,0.15)] animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.badge}</span>
            </div>

            {/* Main Greeting & Animated Title */}
            <div>
              <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-1">
                {personalData.greeting} <span className="text-white font-semibold">{personalData.name}</span>
              </p>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Sculpting <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                  Digital Realities
                </span>
                <br />
                & Scale.
              </h1>

              {/* Dynamic Cycling Role */}
              <div className="h-10 mt-3 flex items-center">
                <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-400 flex items-center">
                  &gt; {text}
                  <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 inline-block animate-pulse" />
                </span>
              </div>
            </div>

            {/* Punchy Bio */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              {personalData.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  onNavigate ? onNavigate("projects") : null;
                }}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Masterpieces</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onNavigate ? onNavigate("contact") : null;
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Initiate Contact</span>
                <Sparkles className="w-4 h-4 text-violet-400" />
              </button>

              <a
                href="/Suraj_Pawar_Resume.pdf"
                download="Suraj_Pawar_Resume.pdf"
                onClick={() => {
                  playClickSound();
                  showToast("Downloading Suraj Pawar's Resume PDF...");
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/5 text-gray-300 font-medium text-sm border border-white/5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Stats Pill Strip */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 max-w-xs">
              <div>
                <p className="text-2xl font-extrabold text-white font-mono">{personalData.yearsExperience}</p>
                <p className="text-xs text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan-400 font-mono">{personalData.projectsCompleted}</p>
                <p className="text-xs text-gray-400">Shipped Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Avatar Card + Live Terminal */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Interactive Portrait Card */}
            <div className="relative group">
              {/* Animated Glowing border halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-700" />

              <div className="relative rounded-3xl bg-gray-950/80 border border-white/15 overflow-hidden backdrop-blur-xl shadow-2xl p-4 sm:p-5">
                
                {/* Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-white/10 group-hover:border-violet-500/40 transition-colors">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-[center_15%] transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                  {/* Floating Metric Badges over Avatar */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-medium text-white shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sub-15ms Latency</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {personalData.name}
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </h3>
                      <p className="text-xs text-gray-400 font-mono">{personalData.location}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={personalData.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={personalData.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Interactive Code Terminal Drawer */}
                <div className="mt-4 rounded-xl bg-gray-950 border border-white/10 overflow-hidden font-mono text-xs">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] text-gray-400">Architect.ts</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleRunCode}
                        title="Execute Code"
                        className="p-1 rounded hover:bg-white/10 text-emerald-400 transition-colors flex items-center gap-1 text-[10px]"
                      >
                        <Play className="w-3 h-3 fill-current" /> Run
                      </button>
                      <button
                        onClick={handleCopyCode}
                        title="Copy Code"
                        className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>

                  {/* Code Display */}
                  <div className="p-3 text-[11px] overflow-x-auto text-gray-300 leading-relaxed max-h-36 overflow-y-auto">
                    <pre>
                      <code>
                        <span className="text-violet-400">const</span>{" "}
                        <span className="text-cyan-300">engineer</span> ={" "}
                        <span className="text-emerald-400">new</span>{" "}
                        <span className="text-yellow-300">SoftwareEngineer</span>
                        ({"{\n"}
                        {"  "}name: <span className="text-emerald-300">"{personalData.name}"</span>,{"\n"}
                        {"  "}stack: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"Spring Boot"</span>, <span className="text-amber-300">"Kafka"</span>, <span className="text-amber-300">"Redis"</span>, <span className="text-amber-300">"Docker"</span>, <span className="text-amber-300">"React"</span>],{"\n"}
                        {"  "}status: <span className="text-emerald-400">"Available for Roles"</span>{"\n"}
                        {"}"});{"\n"}
                        <span className="text-violet-400">await</span> engineer.<span className="text-cyan-400">buildScalableApplication</span>();
                      </code>
                    </pre>
                  </div>

                  {/* Console Output Bar */}
                  <div className="px-3 py-1.5 bg-black/50 border-t border-white/5 text-[10px] text-emerald-400/90 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">{terminalOutput}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Tech Stack Ticker Strip */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-4">
            Specialized Tech Ecosystem & Tooling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickTechStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all cursor-default"
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
