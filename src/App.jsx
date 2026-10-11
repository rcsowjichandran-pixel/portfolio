import React, { useEffect, useRef, useState } from 'react';
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
import FloatingReactions from './components/FloatingReactions';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSkill, setActiveSkill] = useState('');
  const cursorGlowRef = useRef(null);

  // Thin thread across the top showing how far down the loom we've travelled.
  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const cursorGlow = cursorGlowRef.current;
      if (!cursorGlow) return;
      const isInteractive = event.target instanceof Element
        && Boolean(event.target.closest('a, button, [role="link"]'));
      cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%) scale(${isInteractive ? 1.65 : 1})`;
      cursorGlow.style.opacity = '1';
    };
    const handlePointerLeave = () => {
      if (cursorGlowRef.current) cursorGlowRef.current.style.opacity = '0';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#edefe6] font-['Karla',sans-serif]">
      {/* Ambient background stack: aurora mesh -> grain wash -> warp thread canvas */}
      <div className="aurora-layer" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />
      <WarpCanvas />
      <div
        ref={cursorGlowRef}
        className="ambient-cursor-glow"
        aria-hidden="true"
      />

      {/* Reading progress thread */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#45bfa1] via-[#e9b44c] to-[#d2604a] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* App Shell Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        
        <main id="top" className="flex-grow">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <ProjectsSection activeSkill={activeSkill} />
          <PythonPlayground />
          <SkillsSection onSkillFocusChange={setActiveSkill} />
          <TimelineSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Floating Recruiter Reaction Delight Widget */}
      <FloatingReactions />
    </div>
  );
}
