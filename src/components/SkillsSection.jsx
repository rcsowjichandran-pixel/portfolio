import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Server, Sparkles, GitBranch, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Sparkles: Sparkles,
  GitBranch: GitBranch
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#e3a32b] tracking-widest uppercase mb-2">
            <span>/ 03 skills & expertise</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
                What I work with
              </h2>
              <p className="text-sm sm:text-base text-[#96a0c0] mt-2 max-w-xl">
                Grouped by where it sits in the technical stack, so recruiters and engineering leads can quickly identify core capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Loom Rows Layout (Honoring original loom rows) */}
        <div className="border-t border-[#2c3a64] divide-y divide-[#2c3a64]">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layout;
            return (
              <div
                key={cat.name}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#182240]/40 transition-colors px-2 rounded-xl"
              >
                {/* Category Label Column */}
                <div className="md:col-span-4 flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-sm flex-none"
                    style={{ backgroundColor: cat.color }}
                  ></span>
                  <div>
                    <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1eada] group-hover:text-[#e3a32b] transition-colors flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#96a0c0]" />
                      {cat.name}
                    </h3>
                    <span className="text-xs font-mono text-[#96a0c0]">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Chips Column */}
                <div className="md:col-span-8 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip relative px-3.5 py-2 rounded-lg bg-[#182240] border border-[#2c3a64] hover:border-[#e3a32b] text-[#d5cfc2] hover:text-[#f1eada] transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold">{skill.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#131c33] text-[#4e9c8a] border border-[#2c3a64]">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Tooltip Description */}
                      <div className="text-[11px] text-[#96a0c0] mt-0.5 font-['Karla',sans-serif]">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
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
