import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Quote, CheckCircle, Globe, MapPin, Languages, Award } from 'lucide-react';

export default function AboutSection() {
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
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4e9c8a] tracking-widest uppercase mb-2">
            <span>/ 05 narrative & context</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
            A little more
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#dcd6c8] leading-relaxed font-['Karla',sans-serif]">
            <p>
              My degrees are in information technology, but my first working years were spent on a Vodafone service floor in Karur—listening to people describe a problem badly and working out what they actually meant.
            </p>
            <p>
              That turns out to be most of software. I've returned to development deliberately: mastering <span className="text-[#4e9c8a] font-semibold">Python</span> properly, architecting responsive <span className="text-[#e3a32b] font-semibold">React interfaces</span>, and integrating <span className="text-[#c8483c] font-semibold">AI tooling</span> into production workflows.
            </p>
            
            {/* Pull Quote Box */}
            <div className="border-l-4 border-[#e3a32b] pl-4 sm:pl-5 py-2 my-6 bg-[#182240]/50 rounded-r-xl">
              <p className="font-['Bricolage_Grotesque',sans-serif] text-lg sm:text-xl font-semibold text-[#f1eada] italic leading-snug">
                "I'm looking for a developer role on a team that reviews code, solves challenging problems, and expects me to grow fast."
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#96a0c0]">
              I believe in deep layer comprehension over superficial buzzwords. Whether building stateful components, crafting performant database schemas, or debugging edge cases, I bring grit, attention to detail, and a user-first mindset.
            </p>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-[#2c3a64] space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#e3a32b] border-b border-[#2c3a64] pb-2">
                Candidate Profile Matrix
              </h3>
              
              <div className="space-y-4">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#131c33] border border-[#2c3a64] flex items-center justify-center text-[#e3a32b] flex-none">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-[#96a0c0] uppercase">{fact.label}</div>
                        <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm sm:text-base text-[#f1eada]">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ready to interview banner */}
              <div className="mt-6 pt-4 border-t border-[#2c3a64] flex items-center gap-2.5 text-xs font-mono text-[#4e9c8a]">
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
