import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Send, FileText, Radio } from 'lucide-react';
import { personalInfo, liveDeployments } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['hero', 'projects', 'python-lab', 'skills', 'path', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Python Lab', href: '#python-lab', id: 'python-lab', icon: Terminal },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Path', href: '#path', id: 'path' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1413]/90 backdrop-blur-md border-b border-[#1f3a36]/80 shadow-lg py-3'
          : 'bg-[#0a1413]/60 backdrop-blur-sm border-b border-[#1f3a36]/40 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-bold text-lg sm:text-xl tracking-tight text-[#edefe6] hover:text-[#e9b44c] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-[#d2604a] ring-4 ring-[#d2604a]/20 animate-pulse"></span>
          <span className="font-['Bricolage_Grotesque',sans-serif]">{personalInfo.name}</span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded bg-[#10201e] text-[#45bfa1] border border-[#1f3a36]">
            <Radio className="w-3 h-3 animate-pulse" />
            {liveDeployments.length} live
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs tracking-wider">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#edefe6] bg-[#edefe6]/10 font-medium border border-[#1f3a36]'
                    : 'text-[#8ca79f] hover:text-[#edefe6] hover:bg-[#edefe6]/5'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-[#e9b44c]" />}
                {link.label}
              </a>
            );
          })}

          <button
            type="button"
            onClick={onOpenResume}
            className="ml-2 px-3 py-2 rounded-md bg-[#10201e] hover:bg-[#162c29] border border-[#1f3a36] hover:border-[#45bfa1] text-[#8ca79f] hover:text-[#edefe6] font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#45bfa1]" />
            CV
          </button>

          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-md bg-[#e9b44c] hover:bg-[#f3c362] text-[#0a1413] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md hover:scale-[1.02] flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            Get in touch
          </a>
        </nav>

        {/* Mobile Burger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded bg-[#e9b44c] text-[#0a1413] font-mono text-xs font-semibold"
          >
            Hire
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#8ca79f] hover:text-[#edefe6] hover:bg-[#10201e] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10201e] border-b border-[#1f3a36] px-5 py-4 animate-fadeIn">
          <nav className="flex flex-col gap-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded text-[#cfd8ce] hover:bg-[#0a1413] hover:text-[#e9b44c] flex items-center gap-2"
              >
                {link.icon && <link.icon className="w-4 h-4 text-[#e9b44c]" />}
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded bg-[#e9b44c] text-[#0a1413] font-bold"
            >
              Start a Conversation
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume?.();
              }}
              className="text-center py-2.5 rounded bg-[#0a1413] border border-[#1f3a36] text-[#8ca79f] font-mono text-sm flex items-center justify-center gap-2 cursor-pointer hover:text-[#edefe6]"
            >
              <FileText className="w-4 h-4 text-[#45bfa1]" />
              View CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
