import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1f3a36] bg-[#0a1413] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8ca79f]">
        <div className="flex items-center gap-2">
          <span>&copy; {currentYear} {personalInfo.name}</span>
          <span>&bull;</span>
          <span className="text-[#e9b44c]">Chennai, Tamil Nadu</span>
        </div>

        <div className="flex items-center gap-2 text-center sm:text-right">
          <span>Built with <span className="text-[#edefe6] font-semibold">React</span>, <span className="text-[#45bfa1] font-semibold">Python</span> &amp; modern CSS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-[#10201e] hover:bg-[#1f3a36] text-[#edefe6] transition-all hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#e9b44c]" />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
