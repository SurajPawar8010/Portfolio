import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  FlaskConical, 
  Wand2, 
  Sliders, 
  Music, 
  Copy, 
  Check, 
  RefreshCw,
  Eye,
  Radio
} from "lucide-react";
import { playClickSound, playSuccessSound } from "../utils/soundEffects";

export default function CreativeLab({ showToast }) {
  const [activeTab, setActiveTab] = useState("physics");

  // Tab 1: Particle Gravity Simulation
  const canvasRef = useRef(null);
  const [particleColor, setParticleColor] = useState("cyan");
  const [particleSpeed, setParticleSpeed] = useState(1.5);
  const [gravityPull, setGravityPull] = useState(false);

  useEffect(() => {
    if (activeTab !== "physics") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 360);

    const particles = [];
    const count = 60;
    const center = { x: width / 2, y: height / 2 };

    const colorPalettes = {
      cyan: ["#38bdf8", "#818cf8", "#c084fc"],
      matrix: ["#34d399", "#10b981", "#a7f3d0"],
      sunset: ["#f43f5e", "#fb923c", "#facc15"]
    };

    class LabParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 3 + 1.5;
        this.palette = colorPalettes[particleColor] || colorPalettes.cyan;
        this.color = this.palette[Math.floor(Math.random() * this.palette.length)];
      }

      update() {
        if (gravityPull) {
          const dx = center.x - this.x;
          const dy = center.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          this.vx += (dx / dist) * 0.4;
          this.vy += (dy / dist) * 0.4;
          this.vx *= 0.96;
          this.vy *= 0.96;
        }

        this.x += this.vx * particleSpeed;
        this.y += this.vy * particleSpeed;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new LabParticle());
    }

    const render = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Connect filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - dist / 80})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      center.x = e.clientX - rect.left;
      center.y = e.clientY - rect.top;
      setGravityPull((prev) => !prev);
      playClickSound();
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [activeTab, particleColor, particleSpeed, gravityPull]);

  // Tab 2: Live Glassmorphism Studio
  const [blurVal, setBlurVal] = useState(16);
  const [opacityVal, setOpacityVal] = useState(12);
  const [borderVal, setBorderVal] = useState(20);
  const [copiedCSS, setCopiedCSS] = useState(false);

  const glassStyle = {
    backdropFilter: `blur(${blurVal}px)`,
    WebkitBackdropFilter: `blur(${blurVal}px)`,
    backgroundColor: `rgba(255, 255, 255, ${opacityVal / 100})`,
    borderRadius: `${borderVal}px`,
    border: `1px solid rgba(255, 255, 255, 0.18)`
  };

  const cssString = `/* Modern Ultra Glassmorphism */
background: rgba(255, 255, 255, ${opacityVal / 100});
backdrop-filter: blur(${blurVal}px);
-webkit-backdrop-filter: blur(${blurVal}px);
border-radius: ${borderVal}px;
border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);`;

  const copyGlassCSS = () => {
    navigator.clipboard.writeText(cssString);
    setCopiedCSS(true);
    playSuccessSound();
    showToast("Glassmorphism CSS copied to clipboard!");
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  // Tab 3: Audio Harmonic Synth Pad
  const [activeHarmonic, setActiveHarmonic] = useState(null);
  const playHarmonic = (freq, index) => {
    setActiveHarmonic(index);
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
      setTimeout(() => setActiveHarmonic(null), 300);
    } catch (e) {}
  };

  const chords = [
    { name: "C4 (261Hz)", freq: 261.63, note: "C" },
    { name: "D4 (293Hz)", freq: 293.66, note: "D" },
    { name: "E4 (329Hz)", freq: 329.63, note: "E" },
    { name: "F#4 (369Hz)", freq: 369.99, note: "F#" },
    { name: "G4 (392Hz)", freq: 392.00, note: "G" },
    { name: "A4 (440Hz)", freq: 440.00, note: "A" },
    { name: "B4 (493Hz)", freq: 493.88, note: "B" },
    { name: "C5 (523Hz)", freq: 523.25, note: "C5" }
  ];

  return (
    <section id="creativelab" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>INTERACTIVE PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Creative <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400">
              Laboratory & Experiments
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Live interactive widgets demonstrating physics simulation, generative audio synthesis, and real-time design systems.
          </p>
        </div>

        {/* Experiment Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                playClickSound();
                setActiveTab("physics");
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "physics"
                  ? "bg-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Particle Vortex</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab("glass");
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "glass"
                  ? "bg-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Glassmorphism Studio</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab("audio");
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "audio"
                  ? "bg-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Music className="w-4 h-4" />
              <span>Audio Synth Pad</span>
            </button>
          </div>
        </div>

        {/* Main Lab Showcase Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gray-950/90 border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 backdrop-blur-2xl">
          
          {/* TAB 1: Particle Gravity Field */}
          {activeTab === "physics" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Particle Gravity Well</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Click anywhere on the canvas to toggle gravitational vortex attraction!
                  </p>
                </div>

                {/* Palette picker */}
                <div className="flex items-center gap-2">
                  {["cyan", "matrix", "sunset"].map((palette) => (
                    <button
                      key={palette}
                      onClick={() => {
                        playClickSound();
                        setParticleColor(palette);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                        particleColor === palette
                          ? "bg-white/20 text-white border border-white/30"
                          : "bg-white/5 text-gray-400 border border-transparent"
                      }`}
                    >
                      {palette}
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas viewport */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black cursor-crosshair">
                <canvas ref={canvasRef} className="w-full h-80 block" />
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded bg-black/60 text-pink-300 border border-pink-500/20">
                  {gravityPull ? "⚡ Gravity Vortex ACTIVE" : "Click anywhere to engage Gravity"}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Glassmorphism Studio */}
          {activeTab === "glass" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Live Glassmorphism CSS Studio</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Adjust blur, opacity, and curvature to generate production-ready CSS.
                  </p>
                </div>

                <button
                  onClick={copyGlassCSS}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  {copiedCSS ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCSS ? "CSS Copied!" : "Copy CSS Code"}</span>
                </button>
              </div>

              {/* Interactive Preview Canvas */}
              <div className="relative h-64 rounded-2xl overflow-hidden p-6 flex items-center justify-center bg-gradient-to-tr from-violet-900 via-indigo-950 to-pink-900 border border-white/10">
                <div className="absolute w-40 h-40 bg-pink-500 rounded-full blur-xl -top-10 -left-10 opacity-70 animate-pulse" />
                <div className="absolute w-40 h-40 bg-cyan-400 rounded-full blur-xl -bottom-10 -right-10 opacity-70" />

                {/* The dynamic glass card */}
                <div 
                  style={glassStyle} 
                  className="relative z-10 p-6 max-w-sm w-full text-center shadow-2xl transition-all"
                >
                  <Sparkles className="w-6 h-6 text-white mx-auto mb-2 drop-shadow" />
                  <h4 className="text-white font-bold text-base">Ultra Modern Glass</h4>
                  <p className="text-xs text-white/80 mt-1">
                    Blur: {blurVal}px • Opacity: {opacityVal}% • Radius: {borderVal}px
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Backdrop Blur</span>
                    <span className="font-mono text-cyan-400">{blurVal}px</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    value={blurVal}
                    onChange={(e) => setBlurVal(Number(e.target.value))}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Surface Opacity</span>
                    <span className="font-mono text-cyan-400">{opacityVal}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={opacityVal}
                    onChange={(e) => setOpacityVal(Number(e.target.value))}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Border Radius</span>
                    <span className="font-mono text-cyan-400">{borderVal}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="40"
                    value={borderVal}
                    onChange={(e) => setBorderVal(Number(e.target.value))}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Audio Harmonic Synth */}
          {activeTab === "audio" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-white">Synthesized Harmonic Soundboard</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Click or tap any key below to synthesize real-time sine wave harmonics via Web Audio API.
                </p>
              </div>

              {/* Chords Keyboard Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {chords.map((chord, idx) => {
                  const isActive = activeHarmonic === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => playHarmonic(chord.freq, idx)}
                      className={`h-28 rounded-2xl flex flex-col items-center justify-between p-3 transition-all ${
                        isActive
                          ? "bg-pink-500 text-white -translate-y-2 shadow-[0_0_25px_#f43f5e]"
                          : "bg-white/[0.04] hover:bg-white/10 text-gray-300 border border-white/10 hover:border-pink-500/40"
                      }`}
                    >
                      <span className="text-xs font-mono opacity-50">{chord.freq.toFixed(0)}Hz</span>
                      <span className="text-xl font-extrabold">{chord.note}</span>
                      <Radio className="w-3.5 h-3.5 text-pink-400 opacity-60" />
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 text-center font-mono">
                🎵 Pure Web Audio Oscillators • 0ms latency • No external sound assets
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
