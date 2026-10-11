import React from 'react';
import {
  Award,
  BrainCircuit,
  CheckCircle,
  Globe,
  Languages,
  Layers3,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Reveal from './Reveal';

export default function AboutSection() {
  const strengths = [
    {
      title: 'People-first thinking',
      description: 'Listen closely, clarify the real need, and keep the experience approachable.',
      icon: MessageCircle,
      color: '#45bfa1'
    },
    {
      title: 'Full-stack curiosity',
      description: 'Connect thoughtful React interfaces with the Python logic and data behind them.',
      icon: Layers3,
      color: '#e9b44c'
    },
    {
      title: 'Practical AI',
      description: 'Explore AI as a useful part of an application, with purpose behind the integration.',
      icon: BrainCircuit,
      color: '#d2604a'
    }
  ];

  const quickFacts = [
    { label: 'Based In', value: 'Chennai, Tamil Nadu', icon: MapPin },
    { label: 'Role Flexibility', value: 'Remote & Hybrid Roles', icon: Globe },
    { label: 'Spoken Languages', value: 'English & Tamil', icon: Languages },
    { label: 'Key Certification', value: 'Diploma in Computer Applications', icon: Award }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#45bfa1] tracking-widest uppercase mb-2">
            <span>/ 05 beyond the code</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edefe6] tracking-tight">
              The person behind the problem-solving
            </h2>
            <p className="text-sm sm:text-base text-[#8ca79f] max-w-md leading-relaxed">
              A little about how my experience, curiosity, and approach shape the way I build.
            </p>
          </div>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#45bfa1]/10 border border-[#45bfa1]/25 flex items-center justify-center text-[#45bfa1]">
                  <span className="font-mono text-sm">SC</span>
                </div>
                <div>
                  <h3 className="font-['Bricolage_Grotesque',sans-serif] text-lg font-bold text-[#edefe6]">
                    Hello, I’m {personalInfo.shortName}.
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8ca79f]">
                    Developer · Listener · Lifelong learner
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[15px] sm:text-base text-[#d6ded5] leading-relaxed font-['Karla',sans-serif]">
                {personalInfo.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="border-l-2 border-[#e9b44c] pl-4 sm:pl-5 py-2 mt-6 bg-[#10201e]/50 rounded-r-xl">
                <p className="font-['Bricolage_Grotesque',sans-serif] text-lg sm:text-xl font-semibold text-[#edefe6] leading-snug">
                  “I’m looking for a developer role on a team that reviews code, solves challenging problems, and expects me to grow fast.”
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <Reveal key={strength.title} delay={index * 70}>
                    <article className="glass-panel glass-panel-hover h-full rounded-2xl p-4 sm:p-5">
                      <div
                        className="w-9 h-9 rounded-xl border flex items-center justify-center mb-4"
                        style={{
                          color: strength.color,
                          backgroundColor: `${strength.color}14`,
                          borderColor: `${strength.color}40`
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-['Bricolage_Grotesque',sans-serif] text-sm font-bold text-[#edefe6] mb-2">
                        {strength.title}
                      </h3>
                      <p className="text-xs text-[#8ca79f] leading-relaxed">
                        {strength.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-[#1f3a36] space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#e9b44c] border-b border-[#1f3a36] pb-2">
                A few quick details
              </h3>
              
              <div className="space-y-4">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0a1413] border border-[#1f3a36] flex items-center justify-center text-[#e9b44c] flex-none">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-[#8ca79f] uppercase">{fact.label}</div>
                        <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm sm:text-base text-[#edefe6]">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ready to interview banner */}
              <div className="mt-6 pt-4 border-t border-[#1f3a36] flex items-center gap-2.5 text-xs font-mono text-[#45bfa1]">
                <CheckCircle className="w-4 h-4 flex-none" />
                <span>Notice period: Immediate joiner available</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
