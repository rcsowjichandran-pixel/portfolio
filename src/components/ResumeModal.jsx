import React from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  X
} from 'lucide-react';
import { careerTimeline, personalInfo, projectsData, skillCategories } from '../data/portfolioData';

const education = careerTimeline.filter((item) => item.type === 'education');
const experience = careerTimeline.filter((item) => item.type === 'work');
const featuredProjects = projectsData.slice(0, 3);

function ResumeSection({ icon: Icon, title, children }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 border-b border-[#1f3a36] pb-2">
        <Icon className="w-4 h-4 text-[#e9b44c]" aria-hidden="true" />
        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#e9b44c]">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="cv-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="cv-sheet relative w-full max-w-5xl bg-[#0a1413] border border-[#1f3a36] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
      >
        <header className="cv-header p-5 sm:p-7 border-b border-[#1f3a36] bg-[radial-gradient(ellipse_at_top_left,_rgba(69,191,161,0.15),_transparent_55%),#0a1413] flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#45bfa1] mb-2">
              Curriculum vitae
            </p>
            <h2
              id="resume-title"
              className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-4xl font-extrabold tracking-tight text-[#edefe6]"
            >
              {personalInfo.name}
            </h2>
            <p className="text-sm sm:text-base text-[#e9b44c] mt-1">
              {personalInfo.title}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close CV"
            className="cv-close p-2 rounded-lg bg-[#10201e] hover:bg-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="cv-content p-5 sm:p-8 overflow-y-auto flex-1 text-[#d6ded5] font-['Karla',sans-serif]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 space-y-7">
              <section className="rounded-2xl border border-[#1f3a36] bg-[#10201e]/70 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#45bfa1] mb-3">
                  Contact
                </p>
                <div className="space-y-3 text-xs sm:text-sm">
                  <a className="flex items-start gap-2.5 text-[#edefe6] hover:text-[#e9b44c] break-all" href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-4 h-4 text-[#e9b44c] flex-none mt-0.5" />
                    {personalInfo.email}
                  </a>
                  <a className="flex items-center gap-2.5 text-[#edefe6] hover:text-[#e9b44c]" href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-4 h-4 text-[#45bfa1] flex-none" />
                    {personalInfo.phone}
                  </a>
                  <p className="flex items-center gap-2.5 text-[#edefe6]">
                    <MapPin className="w-4 h-4 text-[#d2604a] flex-none" />
                    {personalInfo.location}
                  </p>
                  <a
                    className="flex items-center gap-2.5 text-[#edefe6] hover:text-[#e9b44c]"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 className="w-4 h-4 text-[#8ca79f] flex-none" />
                    GitHub profile
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    className="flex items-center gap-2.5 text-[#edefe6] hover:text-[#e9b44c]"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-4 h-4 flex-none rounded-sm bg-[#45bfa1]/15 text-[#45bfa1] text-[10px] font-bold flex items-center justify-center">in</span>
                    LinkedIn profile
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </section>

              <ResumeSection icon={Sparkles} title="Technical toolkit">
                <div className="space-y-4">
                  {skillCategories.map((category) => (
                    <div key={category.name}>
                      <h4 className="text-xs font-semibold text-[#edefe6] mb-2">{category.name}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-md border border-[#1f3a36] bg-[#10201e] px-2 py-1 text-[10px] text-[#bfc9c1]"
                            title={skill.desc}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <section className="rounded-2xl border border-[#e9b44c]/25 bg-[#e9b44c]/[0.06] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e9b44c] mb-2">
                  Work preference
                </p>
                <p className="text-sm text-[#edefe6]">{personalInfo.workPreference}</p>
              </section>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <ResumeSection icon={Code2} title="Professional profile">
                <p className="text-sm sm:text-base leading-relaxed text-[#d6ded5]">
                  {personalInfo.bio[0]} {personalInfo.bio[1]} {personalInfo.bio[2]}
                </p>
                <p className="text-sm leading-relaxed text-[#8ca79f]">
                  {personalInfo.bio[3]}
                </p>
              </ResumeSection>

              <ResumeSection icon={Briefcase} title="Professional experience">
                <div className="space-y-3">
                  {experience.map((item) => (
                    <article key={item.year} className="rounded-xl border border-[#1f3a36] bg-[#10201e]/55 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                        <div>
                          <h4 className="text-sm font-bold text-[#edefe6]">{item.title}</h4>
                          <p className="text-xs text-[#45bfa1] mt-1">{item.institution}</p>
                        </div>
                        <span className="font-mono text-[10px] text-[#e9b44c] flex-none">{item.year}</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#bfc9c1] mt-3">{item.description}</p>
                    </article>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection icon={GraduationCap} title="Education">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {education.map((item) => (
                    <article key={item.year} className="rounded-xl border border-[#1f3a36] bg-[#10201e]/55 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#edefe6]">{item.title}</h4>
                        <span className="font-mono text-[10px] text-[#45bfa1] flex-none">{item.year}</span>
                      </div>
                      <p className="text-xs font-semibold text-[#e9b44c] mt-1">{item.score}</p>
                      <p className="text-[11px] text-[#8ca79f] mt-2 leading-relaxed">{item.institution}</p>
                      <p className="text-xs text-[#bfc9c1] mt-2 leading-relaxed">{item.description}</p>
                    </article>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection icon={Code2} title="Selected projects">
                <div className="space-y-3">
                  {featuredProjects.map((project) => (
                    <article key={project.id} className="rounded-xl border border-[#1f3a36] bg-[#10201e]/55 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <h4 className="text-sm font-bold text-[#edefe6]">{project.title}</h4>
                        <span className="font-mono text-[10px] text-[#45bfa1] flex-none">{project.year}</span>
                      </div>
                      <p className="text-xs text-[#e9b44c] mt-1">{project.tagline}</p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#bfc9c1] mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="rounded-full bg-[#0a1413] px-2 py-1 text-[10px] text-[#8ca79f]">{tag}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </div>

        <footer className="cv-footer p-4 sm:px-6 border-t border-[#1f3a36] bg-[#0a1413] flex items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#8ca79f] hidden sm:inline">Updated from portfolio profile</span>
          <button
            type="button"
            onClick={() => window.print()}
            className="ml-auto px-4 py-2.5 rounded-lg bg-[#e9b44c] text-[#0a1413] font-bold hover:bg-[#f3c362] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>
        </footer>
      </div>
    </div>
  );
}
