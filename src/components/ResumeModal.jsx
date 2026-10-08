import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, careerTimeline, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#182240] border border-[#2c3a64] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#2c3a64] bg-[#131c33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-sm bg-[#c8483c]"></span>
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1eada]">
                Curriculum Vitae: {personalInfo.name}
              </h2>
              <p className="text-xs font-mono text-[#96a0c0]">
                M.Sc. Information Technology &bull; Fullstack Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#182240] hover:bg-[#2c3a64] text-[#96a0c0] hover:text-[#f1eada] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-[#dcd6c8] font-['Karla',sans-serif] text-sm">
          {/* Contact summary */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#131c33] border border-[#2c3a64] text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#f1eada]">
              <Mail className="w-3.5 h-3.5 text-[#e3a32b]" /> {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5 text-[#f1eada]">
              <Phone className="w-3.5 h-3.5 text-[#4e9c8a]" /> {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1.5 text-[#f1eada]">
              <MapPin className="w-3.5 h-3.5 text-[#c8483c]" /> {personalInfo.location}
            </span>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] text-base font-bold text-[#e3a32b] mb-2 uppercase tracking-wider font-mono text-xs">
              Executive Summary
            </h3>
            <p className="leading-relaxed">
              M.Sc. IT graduate with a strong dual background in high-touch operations and fullstack web engineering. Proficient in crafting responsive React frontends with Tailwind CSS and developing scalable Python backend services. Passionate about applying AI tooling to optimize real-world workflows.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] text-base font-bold text-[#e3a32b] mb-2 uppercase tracking-wider font-mono text-xs flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#131c33]/70 border border-[#2c3a64]">
                <div className="flex justify-between font-bold text-[#f1eada]">
                  <span>M.Sc. Information Technology (83%)</span>
                  <span className="font-mono text-xs text-[#4e9c8a]">2012</span>
                </div>
                <div className="text-xs text-[#96a0c0]">Vivekanandha College of Engineering for Women &bull; Anna University</div>
              </div>
              <div className="p-3 rounded-lg bg-[#131c33]/70 border border-[#2c3a64]">
                <div className="flex justify-between font-bold text-[#f1eada]">
                  <span>B.Sc. Information Technology (80.3%)</span>
                  <span className="font-mono text-xs text-[#4e9c8a]">2010</span>
                </div>
                <div className="text-xs text-[#96a0c0]">Vivekanandha College of Engineering for Women &bull; Anna University</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] text-base font-bold text-[#e3a32b] mb-2 uppercase tracking-wider font-mono text-xs flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#131c33]/70 border border-[#2c3a64]">
                <div className="flex justify-between font-bold text-[#f1eada]">
                  <span>Customer Service Executive &bull; IKYA / Vodafone Cellular Ltd</span>
                  <span className="font-mono text-xs text-[#96a0c0]">Sep 2013 – May 2015</span>
                </div>
                <div className="text-xs text-[#c6c0b4] mt-1">
                  Diagnosed complex user network and billing issues; coordinated cross-tier technical escalations.
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#131c33]/70 border border-[#2c3a64]">
                <div className="flex justify-between font-bold text-[#f1eada]">
                  <span>Customer Service Executive &bull; Sukhvarsha / Vodafone Cellular Ltd</span>
                  <span className="font-mono text-xs text-[#96a0c0]">Dec 2012 – Sep 2013</span>
                </div>
                <div className="text-xs text-[#c6c0b4] mt-1">
                  Provided front-line support for customer accounts, data plan configurations, and connectivity troubleshooting.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2c3a64] bg-[#131c33] flex items-center justify-between text-xs font-mono">
          <span className="text-[#96a0c0]">Candidate: Sowjanya Chandran</span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-[#e3a32b] text-[#131c33] font-bold hover:bg-[#f2b53c] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>
  );
}
