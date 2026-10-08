import React from 'react';
import { ArrowDown, Code, Sparkles, Terminal, FileText, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Avatar & Badge Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer decorative glow rings */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#e3a32b] via-[#c8483c] to-[#4e9c8a] rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse-glow"></div>
              
              {/* Avatar Image Frame */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#e3a32b] to-[#c8483c] shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#131c33] bg-[#182240]"
                  onError={(e) => {
                    // Fallback to high quality monogram if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden w-full h-full rounded-full bg-gradient-to-br from-[#182240] to-[#131c33] border-4 border-[#131c33] items-center justify-center text-4xl font-bold font-['Bricolage_Grotesque',sans-serif] text-[#e3a32b]"
                >
                  SC
                </div>
              </div>

              {/* Status Tag Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#182240] border border-[#2c3a64] px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4e9c8a] animate-ping"></span>
                <span className="text-xs font-mono font-medium text-[#f1eada]">Open for Developer Roles</span>
              </div>
            </div>

            {/* Quick Metrics Bar below avatar */}
            <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-sm">
              <div className="glass-panel p-3 rounded-xl border border-[#2c3a64] text-center">
                <div className="text-xl sm:text-2xl font-bold font-['Bricolage_Grotesque',sans-serif] text-[#e3a32b]">
                  83%
                </div>
                <div className="text-[11px] font-mono text-[#96a0c0]">M.Sc. IT (Anna Univ)</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-[#2c3a64] text-center">
                <div className="text-xl sm:text-2xl font-bold font-['Bricolage_Grotesque',sans-serif] text-[#4e9c8a]">
                  7+
                </div>
                <div className="text-[11px] font-mono text-[#96a0c0]">Interactive Projects</div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Location & Status Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#e3a32b] mb-4 bg-[#e3a32b]/10 px-3 py-1 rounded-full border border-[#e3a32b]/30">
              <MapPin className="w-3.5 h-3.5 text-[#e3a32b]" />
              <span>{personalInfo.location} &bull; {personalInfo.workPreference}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#f1eada] mb-4">
              Aspiring <span className="text-[#c8483c] underline decoration-[#e3a32b] decoration-wavy decoration-2 underline-offset-6">AI & Python</span> Fullstack Developer
            </h1>

            {/* Bio text */}
            <p className="text-base sm:text-lg text-[#dcd6c8] leading-relaxed mb-6 max-w-2xl font-['Karla',sans-serif]">
              I'm <strong className="text-[#f1eada] font-semibold">{personalInfo.name}</strong>, an <span className="text-[#e3a32b] font-medium">M.Sc. Information Technology</span> graduate building web applications with <span className="text-[#4e9c8a] font-medium">Python</span> on the server and <span className="text-[#e3a32b] font-medium">React</span> on the screen. Now extending that stack into <span className="text-[#c8483c] font-medium">AI-assisted tooling</span> and fullstack systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#contact"
                className="px-5 py-3 rounded-lg bg-[#c8483c] hover:bg-[#d65346] text-white font-mono text-sm font-semibold transition-all shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Start a conversation
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-lg bg-[#182240] hover:bg-[#1d2a4d] border border-[#2c3a64] hover:border-[#e3a32b] text-[#f1eada] font-mono text-sm font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-[#e3a32b]" />
                Explore Projects
              </a>

              <a
                href="#python-lab"
                className="px-5 py-3 rounded-lg bg-[#182240] hover:bg-[#1d2a4d] border border-[#2c3a64] hover:border-[#4e9c8a] text-[#f1eada] font-mono text-sm font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#4e9c8a]" />
                Python Playground
              </a>
            </div>

            {/* Technology Stack Pills */}
            <div className="pt-4 border-t border-[#2c3a64]/60">
              <div className="text-xs font-mono text-[#96a0c0] mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#e3a32b]" />
                Specialized in core modern tools:
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Python 3', 'FastAPI', 'Tailwind CSS', 'Pandas & NumPy', 'Bootstrap', 'LLM Prompting'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#182240]/80 border border-[#2c3a64] text-[#d5cfc2] hover:border-[#e3a32b] hover:text-[#f1eada] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-16 sm:mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
