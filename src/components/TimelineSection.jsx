import React from 'react';
import { careerTimeline } from '../data/portfolioData';
import { GraduationCap, Briefcase, Rocket, Calendar } from 'lucide-react';
import Reveal from './Reveal';

const NODE_STYLES = {
  current: {
    dot: 'bg-[#e9b44c] border-[#e9b44c] shadow-[0_0_0_6px_rgba(233,180,76,0.18)]',
    chip: 'bg-[#e9b44c]/15 text-[#e9b44c] border-[#e9b44c]/40',
    icon: Rocket,
    iconColor: 'text-[#e9b44c]'
  },
  education: {
    dot: 'bg-[#0a1413] border-[#45bfa1] shadow-[0_0_0_5px_rgba(69,191,161,0.15)]',
    chip: 'bg-[#45bfa1]/15 text-[#45bfa1] border-[#45bfa1]/40',
    icon: GraduationCap,
    iconColor: 'text-[#45bfa1]'
  },
  work: {
    dot: 'bg-[#0a1413] border-[#d2604a] shadow-[0_0_0_5px_rgba(210,96,74,0.15)]',
    chip: 'bg-[#d2604a]/15 text-[#d2604a] border-[#d2604a]/40',
    icon: Briefcase,
    iconColor: 'text-[#d2604a]'
  }
};

export default function TimelineSection() {
  return (
    <section id="path" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <Reveal className="mb-12 sm:mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-[#d2604a] tracking-widest uppercase mb-2">
            <span>/ 04 timeline &amp; journey</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edefe6] tracking-tight">
                How I got here
              </h2>
              <p className="text-sm sm:text-base text-[#8ca79f] mt-2 max-w-xl">
                In order, because the order is the point &mdash; from high-pressure customer
                problem diagnosis to modern fullstack AI engineering.
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-[#8ca79f]">
              {[
                { label: 'Education', color: '#45bfa1' },
                { label: 'Operations', color: '#d2604a' },
                { label: 'Building Now', color: '#e9b44c' }
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: item.color }}></span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Centered zig-zag spine */}
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(69,191,161,0.7), rgba(233,180,76,0.7), rgba(210,96,74,0.7))'
            }}
          />

          <div className="space-y-7 sm:space-y-9">
            {careerTimeline.map((item, idx) => {
              const style = NODE_STYLES[item.type] || NODE_STYLES.work;
              const Icon = style.icon;
              const isLeft = idx % 2 === 0;

              return (
                <Reveal
                  key={`${item.year}-${item.title}`}
                  delay={40}
                  className={`relative pl-12 lg:pl-0 lg:w-1/2 ${
                    isLeft ? 'lg:pr-14' : 'lg:ml-auto lg:pl-14'
                  }`}
                >
                  {/* Timeline node */}
                  <span
                    className={`absolute top-6 left-[9px] lg:left-auto w-4 h-4 rounded-sm border-2 z-10 ${
                      isLeft ? 'lg:-right-2' : 'lg:-left-2'
                    } ${style.dot}`}
                  ></span>

                  <div className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="font-mono text-[11px] text-[#e9b44c] font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                      <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border ${style.chip}`}>
                        {item.score}
                      </span>
                    </div>

                    <h3 className="font-['Bricolage_Grotesque',sans-serif] text-lg sm:text-xl font-bold text-[#edefe6]">
                      {item.title}
                    </h3>

                    <p className="text-[11px] font-mono text-[#8ca79f] mt-1 mb-3 flex items-start gap-1.5">
                      <Icon className={`w-3.5 h-3.5 flex-none mt-0.5 ${style.iconColor}`} />
                      <span>{item.institution}</span>
                    </p>

                    <p className="text-sm text-[#bfc9c1] leading-relaxed font-['Karla',sans-serif]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
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