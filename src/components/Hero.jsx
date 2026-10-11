import React, { useEffect, useRef, useState } from 'react';
import {
  Code,
  Terminal,
  Send,
  MapPin,
  Sparkles,
  ExternalLink,
  Radio,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, liveDeployments } from '../data/portfolioData';
import Reveal from './Reveal';

const TECH_TICKER = [
  'React.js',
  'Python 3',
  'FastAPI',
  'Tailwind CSS',
  'Pandas & NumPy',
  'Bootstrap 5',
  'LLM Prompting',
  'Vite',
  'Git & GitHub',
  'REST APIs',
  'SQL & SQLite',
  'Responsive UI'
];

const ROTATING_ROLES = [
  'Aspiring AI & Python Fullstack Developer',
  'FastAPI Backend & Clean Architecture Builder',
  'Modern React & Interactive UI Specialist',
  'Applied LLM & Intelligent Tooling Enthusiast'
];

/** Strip protocol + trailing slash so the URL reads cleanly inside a chip. */
function prettyHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function AnimatedStatValue({ value }) {
  const match = typeof value === 'string' ? value.match(/^(\d+)(.*)$/) : null;
  const [displayNum, setDisplayNum] = useState(match ? 0 : null);

  useEffect(() => {
    if (!match) return;
    const target = parseInt(match[1], 10);
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.round((step / steps) * target);
      setDisplayNum(current);
      if (step >= steps) {
        clearInterval(timer);
        setDisplayNum(target);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  if (!match) return <span>{value}</span>;
  return <span>{displayNum}{match[2]}</span>;
}

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [localTime, setLocalTime] = useState('');
  const identityCardRef = useRef(null);
  const avatarCardRef = useRef(null);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROTATING_ROLES.length);
    }, 3600);
    const updateTime = () => {
      setLocalTime(new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date()));
    };
    updateTime();
    const clockTimer = window.setInterval(updateTime, 60_000);
    return () => {
      window.clearInterval(roleTimer);
      window.clearInterval(clockTimer);
    };
  }, []);

  const handleCardTilt = (event, cardRef) => {
    if (event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty('--tilt-x', `${((0.5 - y) * 4).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${((x - 0.5) * 5).toFixed(2)}deg`);
  };

  const resetCardTilt = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <section id="hero" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Eyebrow strip */}
        <Reveal className="flex flex-wrap items-center gap-2 sm:gap-3 mb-7">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#10201e] border border-[#1f3a36] text-[#8ca79f]">
            <MapPin className="w-3 h-3 text-[#d2604a]" />
            {personalInfo.location}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#10201e] border border-[#1f3a36] text-[#8ca79f]">
            <Globe className="w-3 h-3 text-[#45bfa1]" />
            {personalInfo.workPreference}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#e9b44c]/10 border border-[#e9b44c]/30 text-[#e9b44c]">
            <Radio className="w-3 h-3 animate-pulse" />
            {liveDeployments.length} Live deployments
          </span>
        </Reveal>

        {/* ---------------- Bento grid ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

          {/* Identity card */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <div
              ref={identityCardRef}
              onPointerMove={(event) => handleCardTilt(event, identityCardRef)}
              onPointerLeave={() => resetCardTilt(identityCardRef)}
              className="hero-tilt-card flex h-full flex-col justify-between glass-panel sheen-card hero-identity-card rounded-3xl p-6 sm:p-8 relative"
            >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #e9b44c, transparent)' }}
            />
            <div>
              <p className="hero-kicker font-mono text-[11px] tracking-[0.3em] uppercase text-[#d2604a] mb-4">
                <span className="hero-kicker-dot" aria-hidden="true" />
                / portfolio &mdash; 2026
              </p>
              <h1
                aria-label="Aspiring AI and Python Fullstack Developer"
                className="hero-title font-['Bricolage_Grotesque',sans-serif] font-extrabold text-[2rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] tracking-tight text-[#edefe6]"
              >
                <span className="hero-role-flip hero-title-accent" aria-hidden="true" key={roleIndex}>
                  {ROTATING_ROLES[roleIndex]}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#d6ded5] leading-relaxed mt-5 max-w-xl font-['Karla',sans-serif]">
                I'm{' '}
                <strong className="text-[#edefe6] font-semibold">{personalInfo.name}</strong>, an{' '}
                <span className="text-[#e9b44c] font-medium">M.Sc. Information Technology</span> graduate
                building web applications with{' '}
                <span className="text-[#45bfa1] font-medium">Python</span> on the server and{' '}
                <span className="text-[#e9b44c] font-medium">React</span> on the screen &mdash; now extending
                that stack into{' '}
                <span className="text-[#d2604a] font-medium">AI-assisted tooling</span> and fullstack
                systems.
              </p>
              <p className="text-sm sm:text-base text-[#8ca79f] leading-relaxed mt-4 max-w-xl font-['Karla',sans-serif]">
                I enjoy turning ideas into clear, responsive experiences—from shaping a thoughtful
                interface to understanding the Python logic and data working behind it.
              </p>
              <p className="text-sm sm:text-base text-[#8ca79f] leading-relaxed mt-3 max-w-xl font-['Karla',sans-serif]">
                My approach is simple: listen first, break complex problems into manageable steps,
                and keep improving through hands-on building, testing, and feedback. I’m currently
                growing my skills in practical AI integrations and full-stack application design.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href="#projects"
                className="hero-cta hero-cta-primary px-5 py-3 rounded-xl bg-[#d2604a] hover:bg-[#e07358] text-white font-mono text-sm font-semibold transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                Explore Projects
              </a>
              <a
                href="#contact"
                className="hero-cta px-5 py-3 rounded-xl bg-[#162c29] hover:bg-[#1d3a35] border border-[#1f3a36] hover:border-[#e9b44c] text-[#edefe6] font-mono text-sm font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#e9b44c]" />
                Start a conversation
              </a>
              <a
                href="#python-lab"
                className="hero-cta px-5 py-3 rounded-xl bg-[#162c29] hover:bg-[#1d3a35] border border-[#1f3a36] hover:border-[#45bfa1] text-[#edefe6] font-mono text-sm font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#45bfa1]" />
                Python Playground
              </a>
              <button
                onClick={onOpenResume}
                className="hero-cta px-5 py-3 rounded-xl border border-dashed border-[#1f3a36] hover:border-[#45bfa1] text-[#8ca79f] hover:text-[#edefe6] font-mono text-sm transition-all cursor-pointer"
              >
                View CV
              </button>
            </div>
            </div>
          </Reveal>

          {/* Avatar / status card */}
          <Reveal delay={90} className="lg:col-span-5">
            <div
              ref={avatarCardRef}
              onPointerMove={(event) => handleCardTilt(event, avatarCardRef)}
              onPointerLeave={() => resetCardTilt(avatarCardRef)}
              className="hero-tilt-card glass-panel rounded-3xl p-5 sm:p-6 flex items-center gap-5 h-full"
            >
            <div className="hero-avatar-wrap relative flex-none">
              <span className="hero-avatar-orbit" aria-hidden="true" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#45bfa1] via-[#e9b44c] to-[#d2604a] opacity-45 blur-md animate-pulse-glow"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-[#e9b44c] to-[#d2604a]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full border-[3px] border-[#0a1413] bg-[#162c29]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-[#162c29] to-[#0a1413] border-[3px] border-[#0a1413] items-center justify-center text-3xl font-bold font-['Bricolage_Grotesque',sans-serif] text-[#e9b44c]">
                  SC
                </div>
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#45bfa1] border-[3px] border-[#0a1413]"></span>
            </div>

            <div className="min-w-0">
              <div className="font-['Bricolage_Grotesque',sans-serif] text-lg font-bold text-[#edefe6] truncate">
                {personalInfo.name}
              </div>
              <div className="font-mono text-[11px] text-[#45bfa1] mt-0.5">
                {personalInfo.title}
              </div>
              <div
                className="hero-availability flex items-center gap-1.5 mt-3 text-[11px] font-mono text-[#8ca79f]"
                title={`Available for immediate hire • Chennai (IST / UTC+5:30)${localTime ? ` • ${localTime} IST` : ''}`}
              >
                <span className="hero-status-radar" aria-hidden="true"><span /></span>
                Open for developer roles
                <span className="sr-only">Available for immediate hire in Chennai, India (UTC plus 5 hours 30 minutes)</span>
              </div>
            </div>
            </div>
          </Reveal>

          {/* Live deployments launcher — every entry opens the real deployed app */}
          <Reveal delay={160} className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3.5">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e9b44c] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live deployments
              </h2>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#45bfa1]/15 text-[#45bfa1] border border-[#45bfa1]/30">
                click to open
              </span>
            </div>

            <ul className="space-y-2">
              {liveDeployments.slice(0, 4).map((app) => (
                <li key={app.id}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={app.title}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#0a1413]/70 border border-[#1f3a36] hover:border-[#e9b44c]/70 hover:bg-[#162c29] transition-all"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-none"
                      style={{ backgroundColor: app.accent }}
                    ></span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-xs text-[#edefe6] truncate group-hover:text-[#e9b44c] transition-colors">
                        {app.label}
                      </span>
                      <span className="block font-mono text-[10px] text-[#8ca79f] truncate">
                        {prettyHost(app.url)}
                      </span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8ca79f] group-hover:text-[#e9b44c] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-none" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#projects"
              className="mt-3.5 flex items-center justify-center gap-1.5 font-mono text-[11px] py-2 rounded-xl border border-dashed border-[#1f3a36] hover:border-[#45bfa1] text-[#8ca79f] hover:text-[#edefe6] transition-all"
            >
              <ExternalLink className="w-3 h-3" />
              See all {liveDeployments.length} deployed builds
            </a>
          </Reveal>

          {/* Stat tiles */}
          <Reveal delay={220} className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glass-panel-hover rounded-2xl px-4 py-4 text-center"
              >
                <div className="font-['Bricolage_Grotesque',sans-serif] text-xl sm:text-2xl font-extrabold text-[#e9b44c] leading-none">
                  <AnimatedStatValue value={stat.value} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#8ca79f] mt-1.5">
                  {stat.label}
                </div>
                <div className="font-mono text-[10px] text-[#45bfa1] mt-0.5 truncate">
                  {stat.sub}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Technology ticker — infinite marquee across the full viewport */}
      <div className="ticker-mask overflow-hidden border-y border-[#1f3a36] bg-[#0a1413]/60 py-3.5 mt-12 sm:mt-16">
        <div className="ticker-track flex w-max items-center gap-10">
          {[...TECH_TICKER, ...TECH_TICKER].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8ca79f] whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9b44c]/70"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-14 sm:mt-16">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}