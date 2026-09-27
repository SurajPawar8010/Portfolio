import React from "react";
import { 
  Sparkles, 
  CheckCircle, 
  Layout, 
  Bot, 
  Zap 
} from "lucide-react";
import { servicesData } from "../data/portfolioData";

export default function TestimonialsAndServices() {
  const iconMap = {
    Layout: Layout,
    Bot: Bot,
    Sparkles: Sparkles,
    Zap: Zap
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SERVICES SECTION ================= */}
        <div>
          <div className="flex flex-col items-center text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>SERVICES & EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              High-Velocity Solutions for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">
                Ambitious Engineering Teams
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              From scalable microservices to mission-critical backend systems and responsive web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-gray-950/80 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
