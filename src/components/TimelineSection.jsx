import React from 'react';
import { careerTimeline } from '../data/portfolioData';
import { GraduationCap, Briefcase, Rocket, Calendar, Award } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="path" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-[#c8483c] tracking-widest uppercase mb-2">
            <span>/ 04 timeline & journey</span>
          </div>
          <div>
            <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
              How I got here
            </h2>
            <p className="text-sm sm:text-base text-[#96a0c0] mt-2 max-w-xl">
              In order, because the order is the point. From high-pressure customer problem diagnosis to modern fullstack AI engineering.
            </p>
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-[#2c3a64] ml-4 sm:ml-8 space-y-10 sm:space-y-12">
          {careerTimeline.map((item, idx) => {
            const isCurrent = item.type === 'current';
            const isEducation = item.type === 'education';

            return (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-sm border-2 transition-transform duration-300 group-hover:scale-125 ${
                    isCurrent
                      ? 'bg-[#e3a32b] border-[#e3a32b] ring-4 ring-[#e3a32b]/20 shadow-lg'
                      : isEducation
                      ? 'bg-[#131c33] border-[#4e9c8a] ring-2 ring-[#4e9c8a]/20'
                      : 'bg-[#131c33] border-[#c8483c] ring-2 ring-[#c8483c]/20'
                  }`}
                ></div>

                {/* Card Container */}
                <div className="glass-panel p-5 sm:p-6 rounded-xl border border-[#2c3a64] group-hover:border-[#e3a32b]/60 transition-all shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#e3a32b] font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>

                    <span
                      className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${
                        isCurrent
                          ? 'bg-[#e3a32b]/20 text-[#e3a32b] border-[#e3a32b]/40 animate-pulse'
                          : 'bg-[#4e9c8a]/20 text-[#4e9c8a] border-[#4e9c8a]/40'
                      }`}
                    >
                      {item.score}
                    </span>
                  </div>

                  <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1eada] group-hover:text-[#e3a32b] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#96a0c0] mt-1 mb-3 flex items-center gap-1.5">
                    {isEducation ? <GraduationCap className="w-3.5 h-3.5 text-[#4e9c8a]" /> : <Briefcase className="w-3.5 h-3.5 text-[#c8483c]" />}
                    {item.institution}
                  </p>

                  <p className="text-sm text-[#c6c0b4] leading-relaxed font-['Karla',sans-serif]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
