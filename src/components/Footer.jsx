import React from 'react';
import { ArrowUp, Heart, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2c3a64] bg-[#0f172a] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#96a0c0]">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
          <span>&bull;</span>
          <span className="text-[#e3a32b]">Chennai, Tamil Nadu</span>
        </div>

        <div className="flex items-center gap-2 text-center sm:text-right">
          <span>Built with <span className="text-[#f1eada] font-semibold">React</span>, <span className="text-[#4e9c8a] font-semibold">Python</span> &amp; modern CSS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-[#182240] hover:bg-[#2c3a64] text-[#f1eada] transition-all hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#e3a32b]" />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
