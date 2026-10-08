import React, { useState } from 'react';
import WarpCanvas from './components/WarpCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import PythonPlayground from './components/PythonPlayground';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#131C33] text-[#F1EADA] font-['Karla',sans-serif] selection:bg-[#E3A32B] selection:text-[#131C33]">
      {/* Interactive Loom Warp Canvas */}
      <WarpCanvas />

      {/* App Shell Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        
        <main id="top" className="flex-grow">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <ProjectsSection />
          <PythonPlayground />
          <SkillsSection />
          <TimelineSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
