import React, { useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { projectsData, liveDeployments } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectPreviewModal from './ProjectPreviewModal';
import Reveal from './Reveal';
import { Layers, Sparkles, MousePointerClick } from 'lucide-react';

export default function ProjectsSection({ activeSkill = '' }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);

  const filters = useMemo(
    () => [
      { label: 'All Projects', value: 'All', count: projectsData.length },
      {
        label: 'React & Frontend',
        value: 'React & Frontend',
        count: projectsData.filter((p) => p.category === 'React & Frontend').length
      },
      {
        label: 'Fullstack & Python',
        value: 'Fullstack & Python',
        count: projectsData.filter((p) => p.category === 'Fullstack & Python').length
      },
      { label: 'Live Now', value: 'Live Now', count: liveDeployments.length }
    ],
    []
  );

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Live Now') return Boolean(project.liveUrl);
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <Reveal className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#d2604a] tracking-widest uppercase mb-2">
            <span>/ 01 work &amp; live deployments</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edefe6] tracking-tight">
                Things I've built &amp; shipped
              </h2>
              <p className="text-sm sm:text-base text-[#8ca79f] mt-2 max-w-xl">
                Every row below is wired to a real deployment &mdash; click it and the live
                application opens in a new tab. Each build carries its own interactive
                signature animation.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <motion.button
                  layout
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`relative px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeFilter === f.value
                      ? 'bg-[#e9b44c] text-[#0a1413] font-bold shadow-md'
                      : 'bg-[#10201e] text-[#8ca79f] hover:text-[#edefe6] border border-[#1f3a36]'
                  }`}
                >
                  {f.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeFilter === f.value
                        ? 'bg-[#0a1413] text-[#e9b44c]'
                        : 'bg-[#0a1413] text-[#8ca79f]'
                    }`}
                  >
                    {f.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Live-deployment summary ribbon */}
        <Reveal delay={80} className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[#1f3a36] bg-[#10201e]/70 px-4 py-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#45bfa1]">
            <MousePointerClick className="w-3.5 h-3.5" />
            Click any project row to launch the live site
          </span>
          <span className="hidden sm:inline text-[#1f3a36]">|</span>
          <span className="font-mono text-[11px] text-[#8ca79f]">
            {filteredProjects.length} shown of {projectsData.length} builds
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#45bfa1]/12 text-[#45bfa1] border border-[#45bfa1]/30">
            <Sparkles className="w-3 h-3" />
            {liveDeployments.length} live deployments
          </span>
        </Reveal>

        {/* Editorial project rows */}
        <MotionConfig reducedMotion="user">
          <div className="flex flex-col gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 22, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.985 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 340, damping: 34 },
                    opacity: { duration: 0.2 },
                    y: { duration: 0.24 }
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    activeSkill={activeSkill}
                    onOpenPreview={(p) => setSelectedPreviewProject(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </MotionConfig>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#1f3a36] p-10 text-center">
            <Layers className="w-6 h-6 mx-auto text-[#8ca79f] mb-3" />
            <p className="font-mono text-xs text-[#8ca79f]">
              No projects match this filter yet.
            </p>
          </div>
        )}

        {/* Modal Prototype */}
        {selectedPreviewProject && (
          <ProjectPreviewModal
            project={selectedPreviewProject}
            onClose={() => setSelectedPreviewProject(null)}
          />
        )}

      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
