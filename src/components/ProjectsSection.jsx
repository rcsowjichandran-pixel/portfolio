import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectPreviewModal from './ProjectPreviewModal';
import { Layers, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);

  const filters = [
    { label: 'All Projects', value: 'All', count: projectsData.length },
    { label: 'React & Frontend', value: 'React & Frontend', count: projectsData.filter(p => p.category === 'React & Frontend').length },
    { label: 'Fullstack & Python', value: 'Fullstack & Python', count: projectsData.filter(p => p.category === 'Fullstack & Python').length },
    { label: 'New Additions', value: 'New Additions', count: projectsData.filter(p => p.badge === 'New Addition').length }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'New Additions') return project.badge === 'New Addition';
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#c8483c] tracking-widest uppercase mb-2">
            <span>/ 01 work & additions</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
                Things I've built
              </h2>
              <p className="text-sm sm:text-base text-[#96a0c0] mt-2 max-w-xl">
                Showcasing newly engineered apps (Food Blog, Constructions, Vetri IT, Wedding Invitation) alongside core practice systems—each with its own distinct interactive animation.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeFilter === f.value
                      ? 'bg-[#e3a32b] text-[#131c33] font-bold shadow-md'
                      : 'bg-[#182240] text-[#96a0c0] hover:text-[#f1eada] border border-[#2c3a64]'
                  }`}
                >
                  {f.label}
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeFilter === f.value ? 'bg-[#131c33] text-[#e3a32b]' : 'bg-[#131c33] text-[#96a0c0]'}`}>
                    {f.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenPreview={(p) => setSelectedPreviewProject(p)}
            />
          ))}
        </div>

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
