import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['hero', 'projects', 'skills', 'python-lab', 'path', 'about', 'contact'];
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
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Python Lab', href: '#python-lab', id: 'python-lab', icon: Terminal },
    { label: 'Path', href: '#path', id: 'path' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#131c33]/90 backdrop-blur-md border-b border-[#2c3a64]/80 shadow-lg py-3'
          : 'bg-[#131c33]/60 backdrop-blur-sm border-b border-[#2c3a64]/40 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-bold text-lg sm:text-xl tracking-tight text-[#f1eada] hover:text-[#e3a32b] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-[#c8483c] ring-4 ring-[#c8483c]/20 animate-pulse"></span>
          <span className="font-['Bricolage_Grotesque',sans-serif]">{personalInfo.name}</span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-[#182240] text-[#4e9c8a] border border-[#2c3a64]">
            React &bull; Python
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
                    ? 'text-[#f1eada] bg-[#f1eada]/10 font-medium border border-[#2c3a64]'
                    : 'text-[#96a0c0] hover:text-[#f1eada] hover:bg-[#f1eada]/5'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-[#e3a32b]" />}
                {link.label}
              </a>
            );
          })}

          <a
            href="#contact"
            className="ml-3 px-4 py-2 rounded-md bg-[#e3a32b] hover:bg-[#f2b53c] text-[#131c33] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md hover:scale-[1.02] flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            Get in touch
          </a>
        </nav>

        {/* Mobile Burger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded bg-[#e3a32b] text-[#131c33] font-mono text-xs font-semibold"
          >
            Hire
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#96a0c0] hover:text-[#f1eada] hover:bg-[#182240] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#182240] border-b border-[#2c3a64] px-5 py-4 animate-fadeIn">
          <nav className="flex flex-col gap-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded text-[#d5cfc2] hover:bg-[#131c33] hover:text-[#e3a32b] flex items-center gap-2"
              >
                {link.icon && <link.icon className="w-4 h-4 text-[#e3a32b]" />}
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded bg-[#e3a32b] text-[#131c33] font-bold"
            >
              Start a Conversation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
