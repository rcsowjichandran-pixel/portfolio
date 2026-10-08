import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles, Activity, Layers, Terminal, HeartHandshake, Compass, Utensils, Heart } from 'lucide-react';

export default function ProjectCard({ project, onOpenPreview }) {
  const [isHovered, setIsHovered] = useState(false);

  // Render distinct custom animation & visual header per project
  const renderUniqueAnimationHeader = () => {
    switch (project.animationType) {
      case 'food':
        return (
          <div className="relative h-44 rounded-t-xl bg-gradient-to-br from-[#2a1708] via-[#1f1624] to-[#182240] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            {/* Floating steam aroma particles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 blur-xl animate-pulse"></div>
              {/* Steam waves */}
              <div className="absolute -top-1 w-6 h-14 bg-gradient-to-t from-amber-400/30 to-transparent blur-sm rounded-full animate-steam"></div>
              <div className="absolute top-2 left-1/3 w-4 h-12 bg-gradient-to-t from-orange-400/20 to-transparent blur-sm rounded-full animate-steam" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-1 right-1/3 w-5 h-10 bg-gradient-to-t from-yellow-300/20 to-transparent blur-sm rounded-full animate-steam" style={{ animationDelay: '1.4s' }}></div>
            </div>

            {/* Central Visual Showcase */}
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e3a32b]/20 border border-[#e3a32b]/40 flex items-center justify-center text-[#e3a32b] shadow-lg shadow-amber-900/30">
                <Utensils className="w-8 h-8" />
              </div>
              <div className="mt-2 text-xs font-mono text-amber-300/90 tracking-wider uppercase">
                Aroma & Flavor Studio
              </div>
            </div>

            {/* Floating spice dots */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-amber-400 border border-amber-500/20">
              Spice Radar Active
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Steam & Sizzle
            </div>
          </div>
        );

      case 'construction':
        return (
          <div className="relative h-44 rounded-t-xl bg-[#081826] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            {/* Blueprint Grid Lines */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            ></div>

            {/* Laser scanning beam line */}
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent shadow-[0_0_15px_#06b6d4] animate-laser"></div>

            {/* Blueprint elevation icon */}
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-900/40 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-950/60">
                <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '18s' }} />
              </div>
              <div className="mt-2 text-xs font-mono text-cyan-300 tracking-wider uppercase">
                CAD Blueprint Laser Scan
              </div>
            </div>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-cyan-400 border border-cyan-500/30">
              G+7 Milestone Tracker
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Structural CAD
            </div>
          </div>
        );

      case 'vetri-it':
        return (
          <div className="relative h-44 rounded-t-xl bg-[#091f1a] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            {/* Matrix terminal background text */}
            <div className="absolute inset-0 opacity-15 font-mono text-[9px] text-emerald-400 select-none overflow-hidden p-2 leading-tight">
              01001001 01010100 00100000 01010011 01111001 01110011 01110100 01100101 01101101 01110011<br />
              srv-chn-01: OK latency 14ms uptime 99.98% port 443<br />
              gw-south-aws: ACTIVE ping 28ms packet_loss 0.00%<br />
              db-postgres-ha: REPLICA_IN_SYNC cluster healthy
            </div>

            {/* Glowing cyber pulse & server node */}
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-950/60 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Terminal className="w-8 h-8 animate-cyber" />
              </div>
              <div className="mt-2 text-xs font-mono text-emerald-300 tracking-wider uppercase flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Node Ping: 14ms Healthy
              </div>
            </div>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-emerald-400 border border-emerald-500/30">
              99.98% High Availability
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              ITSM Core
            </div>
          </div>
        );

      case 'wedding':
        return (
          <div className="relative h-44 rounded-t-xl bg-gradient-to-br from-[#2d111b] via-[#241320] to-[#182240] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            {/* Shimmering golden & pink floral petal float */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-rose-400/40 blur-[1px] animate-float"></div>
              <div className="absolute bottom-6 right-8 w-2.5 h-2.5 rounded-full bg-amber-300/40 blur-[1px] animate-float" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-rose-300/30 blur-[2px] animate-float" style={{ animationDelay: '2.1s' }}></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* Golden Wax Seal & Rings Emblem */}
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 p-0.5 shadow-[0_0_20px_rgba(244,63,94,0.35)]">
                <div className="w-full h-full rounded-full bg-[#200e16] flex items-center justify-center text-amber-300">
                  <Heart className="w-8 h-8 fill-rose-500/60 text-amber-300 animate-pulse" />
                </div>
              </div>
              <div className="mt-2 text-xs font-mono text-rose-300 tracking-wider uppercase">
                Celestial Muhurtham Shimmer
              </div>
            </div>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-rose-300 border border-rose-500/30">
              Interactive RSVP & Audio
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
              Digital Keepsake
            </div>
          </div>
        );

      case 'hospital':
        return (
          <div className="relative h-44 rounded-t-xl bg-[#210f13] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            {/* Animated EKG pulse line */}
            <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 300 100">
              <path
                d="M0,50 L70,50 L85,20 L100,80 L115,35 L130,50 L200,50 L215,10 L230,90 L245,40 L260,50 L300,50"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>

            {/* Heartbeat Vital Indicator */}
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-red-950/60 border border-red-500/50 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.35)]">
                <Activity className="w-8 h-8 animate-heartbeat text-red-400" />
              </div>
              <div className="mt-2 text-xs font-mono text-red-300 tracking-wider uppercase">
                Pulse Rhythm & OPD Triage
              </div>
            </div>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-red-400 border border-red-500/30">
              Form Validation & Persistence
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40">
              24 Active Slots
            </div>
          </div>
        );

      case 'shopping':
        return (
          <div className="relative h-44 rounded-t-xl bg-[#261c0d] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-950/60 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                <Layers className="w-8 h-8 text-amber-400 animate-float" />
              </div>
              <div className="mt-2 text-xs font-mono text-amber-300 tracking-wider uppercase">
                3D Perspective Storefront
              </div>
            </div>
            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-amber-400 border border-amber-500/30">
              Tailwind Grid & Filters
            </div>
          </div>
        );

      case 'course':
      default:
        return (
          <div className="relative h-44 rounded-t-xl bg-[#141a33] overflow-hidden flex items-center justify-center border-b border-[#2c3a64]/60">
            <div className="z-10 text-center transform transition duration-500 group-hover:scale-105">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-950/60 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <Sparkles className="w-8 h-8 text-indigo-300 animate-spin" style={{ animationDuration: '14s' }} />
              </div>
              <div className="mt-2 text-xs font-mono text-indigo-300 tracking-wider uppercase">
                Breakpoint Accelerator
              </div>
            </div>
            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-indigo-300 border border-indigo-500/30">
              Marketing Hero & CTA
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-xl bg-[#182240] border border-[#2c3a64] hover:border-[#e3a32b]/80 shadow-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Visual Animation Header */}
      {renderUniqueAnimationHeader()}

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row: category + badge */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#e3a32b] font-medium">
              {project.category}
            </span>
            <span className={`font-mono text-[11px] px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1eada] group-hover:text-[#e3a32b] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs font-mono text-[#4e9c8a] mb-3">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-[#c6c0b4] leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 pb-4 border-t border-[#2c3a64]/70">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#131c33] border border-[#2c3a64] text-[#96a0c0]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 pt-2">
            <button
              onClick={() => onOpenPreview(project)}
              className="flex-1 py-2 px-3 rounded-lg bg-[#e3a32b] hover:bg-[#f2b53c] text-[#131c33] font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              Live Interactive Preview
            </button>

            {project.originalUrl ? (
              <a
                href={project.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View original practice build"
                className="p-2 rounded-lg bg-[#131c33] hover:bg-[#1d2a4d] border border-[#2c3a64] text-[#96a0c0] hover:text-[#f1eada] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View source on GitHub"
                className="p-2 rounded-lg bg-[#131c33] hover:bg-[#1d2a4d] border border-[#2c3a64] text-[#96a0c0] hover:text-[#f1eada] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
