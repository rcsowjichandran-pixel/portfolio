import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Server, Sparkles, GitBranch } from 'lucide-react';
import Reveal from './Reveal';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Sparkles: Sparkles,
  GitBranch: GitBranch
};

/** Map the human-readable level onto a bar width so the matrix stays dynamic. */
const LEVEL_SCORE = {
  Expert: 95,
  Advanced: 86,
  Proficient: 72,
  Intermediate: 58,
  'Active Learning': 46
};

const scoreFor = (level) => LEVEL_SCORE[level] ?? 62;

export default function SkillsSection({ onSkillFocusChange = () => {} }) {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <Reveal className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#e9b44c] tracking-widest uppercase mb-2">
            <span>/ 03 capability matrix</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edefe6] tracking-tight">
                What I work with
              </h2>
              <p className="text-sm sm:text-base text-[#8ca79f] mt-2 max-w-xl">
                Grouped by where it sits in the technical stack, with a candid read on
                depth of experience so engineering leads can gauge fit quickly.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-full bg-[#10201e] border border-[#1f3a36] text-[#45bfa1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45bfa1] animate-pulse"></span>
              {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)} tracked competencies
            </div>
          </div>
        </Reveal>

        {/* Capability matrix — two columns of category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layout;
            return (
              <Reveal
                key={cat.name}
                delay={(idx % 2) * 90}
                className="glass-panel glass-panel-hover rounded-3xl p-5 sm:p-6"
              >
                {/* Card header */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[#1f3a36]">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-none"
                      style={{
                        backgroundColor: `${cat.color}22`,
                        border: `1px solid ${cat.color}55`,
                        color: cat.color
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-['Bricolage_Grotesque',sans-serif] text-base sm:text-lg font-bold text-[#edefe6] leading-tight">
                        {cat.name}
                      </h3>
                      <span className="font-mono text-[10px] text-[#8ca79f]">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full flex-none"
                    style={{
                      backgroundColor: `${cat.color}18`,
                      border: `1px solid ${cat.color}44`,
                      color: cat.color
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Competency rows */}
                <ul className="space-y-4">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      tabIndex={0}
                      onMouseEnter={() => onSkillFocusChange(skill.name)}
                      onMouseLeave={() => onSkillFocusChange('')}
                      onFocus={() => onSkillFocusChange(skill.name)}
                      onBlur={() => onSkillFocusChange('')}
                      className="skill-row rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#e9b44c]"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-xs font-semibold text-[#edefe6]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#8ca79f] whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-bar mt-2 h-1.5 rounded-full bg-[#0a1413] border border-[#1f3a36] overflow-hidden">
                        <span
                          style={{ '--bar-width': `${scoreFor(skill.level)}%`, background: cat.color }}
                        />
                      </div>
                      <p className="text-[11px] text-[#8ca79f] mt-1.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
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