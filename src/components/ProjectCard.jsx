import React, { useEffect, useState } from 'react';
import {
  ExternalLink,
  Eye,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function ProjectArtwork({ type }) {
  const [constructionProgress, setConstructionProgress] = useState(78);
  useEffect(() => {
    if (type !== 'construction' || constructionProgress >= 100) return undefined;
    const progressTimer = window.setInterval(() => {
      setConstructionProgress((progress) => Math.min(progress + 1, 100));
    }, 150);
    return () => window.clearInterval(progressTimer);
  }, [type, constructionProgress]);

  const scenes = {
    food: {
      surface: '#f5dfba', accent: '#d2604a', detail: '#e9b44c', text: '#3b281e'
    },
    construction: {
      surface: '#0d2a31', accent: '#52d7e8', detail: '#45bfa1', text: '#d9fbff'
    },
    'vetri-it': {
      surface: '#102820', accent: '#45bfa1', detail: '#e9b44c', text: '#dff8e9'
    },
    wedding: {
      surface: '#fff3e1', accent: '#be8d4d', detail: '#cb7880', text: '#493239'
    },
    portfolio: {
      surface: '#142824', accent: '#45bfa1', detail: '#e9b44c', text: '#edefe6'
    }
  };
  const scene = scenes[type] || scenes.portfolio;

  return (
    <svg
      className="project-artwork absolute inset-0 m-auto z-[2] h-[90%] w-[94%] max-w-[440px] transition-transform duration-700 group-hover:scale-[1.04]"
      viewBox="0 0 420 230"
      role="img"
      aria-label={`${type.replace('-', ' ')} project preview`}
    >
      <defs>
        <linearGradient id={`foil-sheen-${type}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff8df" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff8df" stopOpacity=".66" />
          <stop offset="100%" stopColor="#fff8df" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="42" y="17" width="336" height="196" rx="15" fill="#030908" opacity=".58" />
      <rect x="48" y="14" width="324" height="190" rx="13" fill={scene.surface} stroke={scene.accent} strokeOpacity=".7" />
      <path d="M61 14h298a13 13 0 0 1 13 13v17H48V27a13 13 0 0 1 13-13Z" fill="#071412" />
      <circle cx="65" cy="29" r="3" fill="#d2604a" />
      <circle cx="76" cy="29" r="3" fill="#e9b44c" />
      <circle cx="87" cy="29" r="3" fill="#45bfa1" />
      <rect x="137" y="25" width="146" height="8" rx="4" fill="#18312b" />
      <rect x="59" y="53" width="302" height="135" rx="5" fill={scene.surface} />

      {type === 'food' && (
        <>
          <rect x="68" y="62" width="284" height="18" rx="4" fill="#fff7e9" />
          <circle cx="80" cy="71" r="4" fill={scene.accent} />
          <rect x="90" y="68" width="70" height="5" rx="2.5" fill={scene.text} opacity=".6" />
          <rect x="72" y="88" width="127" height="91" rx="5" fill="#e4bd83" />
          <circle cx="135" cy="133" r="37" fill="#fff7e9" />
          <circle cx="135" cy="133" r="30" fill="#496843" />
          <circle cx="124" cy="124" r="9" fill="#e9b44c" />
          <circle cx="145" cy="124" r="8" fill="#d2604a" />
          <circle cx="144" cy="142" r="10" fill="#f0ce76" />
          <circle cx="122" cy="144" r="7" fill="#d2604a" />
          <path d="M130 113c-8-10-15 1-5 6m19-2c1-11 13-7 8 2" fill="none" stroke="#a8c777" strokeWidth="4" strokeLinecap="round" />
          <path className="food-steam" d="M118 105c-8-9 8-11 1-20m17 18c-7-9 7-11 1-19m14 21c-7-8 7-10 1-17" fill="none" stroke="#fff7e9" strokeWidth="2" strokeLinecap="round" opacity=".75" />
          <rect x="210" y="97" width="106" height="7" rx="3" fill={scene.text} opacity=".75" />
          <rect x="210" y="111" width="123" height="4" rx="2" fill={scene.text} opacity=".28" />
          <rect x="210" y="122" width="102" height="4" rx="2" fill={scene.text} opacity=".28" />
          <rect x="210" y="140" width="116" height="23" rx="6" fill={scene.accent} />
          <text x="268" y="155" fill="#fff7e9" textAnchor="middle" fontSize="8" fontFamily="monospace">EXPLORE RECIPES</text>
        </>
      )}

      {type === 'construction' && (
        <>
          <rect x="67" y="63" width="64" height="112" rx="4" fill="#092126" stroke={scene.accent} strokeOpacity=".5" />
          <text x="99" y="76" fill={scene.text} textAnchor="middle" fontSize="7" fontFamily="monospace">SITE PLAN</text>
          <path d="M78 163v-54h12v54m9 0V93h12v70m-33-37h33m-33 17h33" fill="none" stroke={scene.accent} strokeWidth="1.5" />
          <path d="m145 156 33-26 28 13 35-45 33 23 29-17 31 17v43Z" fill="#12363d" stroke={scene.accent} strokeWidth="1.5" />
          <path d="M151 156v-17h9v17m11-18v-25h9v25m12 11v-20h10v20m13-8v-27h10v27m14-39v-25h10v25m13 6v-17h10v17m13 9v-24h10v24m13 0v-12h10v12m-183 30h177" fill="none" stroke={scene.accent} strokeWidth="1.5" />
          <rect x="274" y="64" width="71" height="20" rx="5" fill="#092126" stroke={scene.detail} />
          <text x="309" y="77" fill={scene.text} textAnchor="middle" fontSize="7" fontFamily="monospace">PHASE 03 · {constructionProgress}%</text>
          <rect x="274" y="86" width="71" height="3" rx="1.5" fill="#061a1d" />
          <rect className="construction-progress-fill" x="274" y="86" width="71" height="3" rx="1.5" fill={scene.detail} style={{ transform: `scaleX(${constructionProgress / 100})` }} />
        </>
      )}

      {type === 'vetri-it' && (
        <>
          <rect x="67" y="62" width="58" height="116" rx="4" fill="#091b16" />
          <rect x="76" y="72" width="39" height="6" rx="3" fill={scene.accent} opacity=".7" />
          <rect x="76" y="89" width="33" height="4" rx="2" fill={scene.text} opacity=".3" />
          <rect x="76" y="100" width="39" height="4" rx="2" fill={scene.text} opacity=".3" />
          <rect x="76" y="111" width="28" height="4" rx="2" fill={scene.text} opacity=".3" />
          <rect x="136" y="62" width="208" height="33" rx="5" fill="#0a1d17" />
          <text x="147" y="76" fill={scene.text} fontSize="7" fontFamily="monospace">INFRASTRUCTURE OVERVIEW</text>
          <text x="147" y="88" fill={scene.accent} fontSize="7" fontFamily="monospace">ALL SYSTEMS OPERATIONAL</text>
          <rect x="136" y="103" width="64" height="34" rx="4" fill="#0a1d17" />
          <rect x="208" y="103" width="64" height="34" rx="4" fill="#0a1d17" />
          <rect x="280" y="103" width="64" height="34" rx="4" fill="#0a1d17" />
          <text x="168" y="116" fill={scene.text} textAnchor="middle" fontSize="6" fontFamily="monospace">UPTIME</text>
          <text x="168" y="131" fill={scene.accent} textAnchor="middle" fontSize="10" fontFamily="monospace">99.9%</text>
          <text x="240" y="116" fill={scene.text} textAnchor="middle" fontSize="6" fontFamily="monospace">LATENCY</text>
          <text x="240" y="131" fill={scene.detail} textAnchor="middle" fontSize="10" fontFamily="monospace">14 ms</text>
          <text x="312" y="116" fill={scene.text} textAnchor="middle" fontSize="6" fontFamily="monospace">TICKETS</text>
          <text x="312" y="131" fill={scene.accent} textAnchor="middle" fontSize="10" fontFamily="monospace">08 OPEN</text>
          <rect x="136" y="145" width="208" height="33" rx="4" fill="#0a1d17" />
          <path d="m147 166 23-9 21 5 22-12 20 9 22-7 22 4 21-10 34 8" fill="none" stroke={scene.accent} strokeWidth="2" />
          <path d="M147 170h184" stroke={scene.text} strokeOpacity=".18" />
        </>
      )}

      {type === 'wedding' && (
        <>
          <rect x="68" y="62" width="284" height="116" rx="4" fill={scene.surface} stroke={scene.accent} strokeOpacity=".55" />
          <rect x="75" y="69" width="270" height="102" rx="3" fill="none" stroke={scene.accent} strokeOpacity=".45" />
          <path d="M120 169v-43a90 90 0 0 1 180 0v43" fill={scene.detail} opacity=".12" stroke={scene.accent} strokeWidth="1.5" />
          <path d="M151 169v-41a59 59 0 0 1 118 0v41" fill="none" stroke={scene.accent} strokeOpacity=".7" />
          <circle cx="210" cy="112" r="14" fill={scene.accent} opacity=".2" />
          <path d="M203 112a7 7 0 0 1 14 0c0 7-7 11-7 11s-7-4-7-11Z" fill={scene.detail} />
          <text x="210" y="143" fill={scene.text} textAnchor="middle" fontSize="7" letterSpacing="1.4" fontFamily="serif">TOGETHER WITH THEIR FAMILIES</text>
          <text x="210" y="158" fill={scene.accent} textAnchor="middle" fontSize="13" fontStyle="italic" fontFamily="serif">A Celebration of Love</text>
          <text x="210" y="167" fill={scene.text} textAnchor="middle" fontSize="6" letterSpacing="1.5" fontFamily="monospace">CHENNAI · 2026</text>
          <circle cx="91" cy="83" r="5" fill={scene.detail} opacity=".75" />
          <circle cx="329" cy="83" r="5" fill={scene.detail} opacity=".75" />
          <path className="wedding-foil-sheen" d="M72 66h58l120 109h-58Z" fill={`url(#foil-sheen-${type})`} />
        </>
      )}

      {type === 'portfolio' && (
        <>
          <rect x="67" y="63" width="276" height="17" rx="4" fill="#0b1a18" />
          <circle cx="78" cy="71" r="3" fill={scene.accent} />
          <rect x="87" y="69" width="48" height="4" rx="2" fill={scene.text} opacity=".55" />
          <rect x="71" y="89" width="152" height="75" rx="5" fill={scene.accent} opacity=".2" />
          <path d="M83 145c17-32 34 4 51-19s33 7 75-25" fill="none" stroke={scene.accent} strokeWidth="2" />
          <circle cx="206" cy="101" r="4" fill={scene.detail} />
          <rect x="237" y="94" width="89" height="7" rx="3" fill={scene.text} opacity=".8" />
          <rect x="237" y="108" width="73" height="4" rx="2" fill={scene.text} opacity=".35" />
          <rect x="237" y="118" width="84" height="4" rx="2" fill={scene.text} opacity=".35" />
          <rect x="237" y="133" width="54" height="16" rx="5" fill={scene.detail} />
          <rect x="71" y="171" width="79" height="11" rx="3" fill="#0b1a18" />
          <rect x="158" y="171" width="79" height="11" rx="3" fill="#0b1a18" />
          <rect x="245" y="171" width="79" height="11" rx="3" fill="#0b1a18" />
        </>
      )}
    </svg>
  );
}

/**
 * Editorial project row.
 *
 * The whole row is a live link: clicking anywhere on it opens `project.liveUrl`
 * in a new tab. The Preview button and the GitHub icon are explicit targets that
 * stop propagation so they keep their own behaviour.
 */
export default function ProjectCard({ project, index = 0, activeSkill = '', onOpenPreview }) {

  // Render distinct custom animation & visual header per project
  const renderUniqueAnimationHeader = () => {
    switch (project.animationType) {
      case 'portfolio':
        return (
          <div className="relative h-full min-h-[210px] w-full bg-gradient-to-br from-[#0a1413] via-[#0d1b1a] to-[#081110] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
            {/* Warp thread background hint */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="warpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#45bfa1" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#e9b44c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#d2604a" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="url(#warpGrad)" strokeWidth="1.5" className="animate-warp" />
                <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="url(#warpGrad)" strokeWidth="1" className="animate-warp" style={{ animationDelay: '0.5s' }} />
                <path d="M0,80 Q100,30 200,80 T400,80" fill="none" stroke="url(#warpGrad)" strokeWidth="1" className="animate-warp" style={{ animationDelay: '1s' }} />
              </svg>
            </div>

            <ProjectArtwork type="portfolio" />

            {/* Floating tech tags */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#45bfa1] border border-[#45bfa1]/20">
              WebGL + React 19
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-[#45bfa1]/20 text-[#45bfa1] border border-[#45bfa1]/40">
              Self-Hosted
            </div>
            <div className="absolute bottom-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-[#e9b44c]/20 text-[#e9b44c] border border-[#e9b44c]/40">
              Interactive Preview
            </div>
          </div>
        );

      case 'food':
        return (
          <div className="relative h-full min-h-[210px] w-full bg-gradient-to-br from-[#2a1708] via-[#1f1624] to-[#10201e] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
            {/* Floating steam aroma particles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 blur-xl animate-pulse"></div>
              {/* Steam waves */}
              <div className="absolute -top-1 w-6 h-14 bg-gradient-to-t from-amber-400/30 to-transparent blur-sm rounded-full animate-steam"></div>
              <div className="absolute top-2 left-1/3 w-4 h-12 bg-gradient-to-t from-orange-400/20 to-transparent blur-sm rounded-full animate-steam" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-1 right-1/3 w-5 h-10 bg-gradient-to-t from-yellow-300/20 to-transparent blur-sm rounded-full animate-steam" style={{ animationDelay: '1.4s' }}></div>
            </div>

            <ProjectArtwork type="food" />

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
          <div className="relative h-full min-h-[210px] w-full bg-[#071a18] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
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

            <ProjectArtwork type="construction" />

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
          <div className="relative h-full min-h-[210px] w-full bg-[#07201a] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
            {/* Matrix terminal background text */}
            <div className="absolute inset-0 opacity-15 font-mono text-[9px] text-emerald-400 select-none overflow-hidden p-2 leading-tight">
              01001001 01010100 00100000 01010011 01111001 01110011 01110100 01100101 01101101 01110011<br />
              srv-chn-01: OK latency 14ms uptime 99.98% port 443<br />
              gw-south-aws: ACTIVE ping 28ms packet_loss 0.00%<br />
              db-postgres-ha: REPLICA_IN_SYNC cluster healthy
            </div>

            <ProjectArtwork type="vetri-it" />

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
          <div className="relative h-full min-h-[210px] w-full bg-gradient-to-br from-[#2d111b] via-[#241320] to-[#10201e] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
            {/* Shimmering golden & pink floral petal float */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-rose-400/40 blur-[1px] animate-float"></div>
              <div className="absolute bottom-6 right-8 w-2.5 h-2.5 rounded-full bg-amber-300/40 blur-[1px] animate-float" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-rose-300/30 blur-[2px] animate-float" style={{ animationDelay: '2.1s' }}></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
            </div>

            <ProjectArtwork type="wedding" />

            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-rose-300 border border-rose-500/30">
              Interactive RSVP & Audio
            </div>
            <div className="absolute top-3 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
              Digital Keepsake
            </div>
          </div>
        );

      default:
        return (
          <div className="relative h-full min-h-[210px] w-full bg-[#0f1f1d] overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#1f3a36]/60">
            <ProjectArtwork type="portfolio" />
            <div className="absolute bottom-3 left-4 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-indigo-300 border border-indigo-500/30">
              Marketing Hero & CTA
            </div>
          </div>
        );
    }
  };

  const liveUrl = project.liveUrl || project.originalUrl || project.githubUrl;
  const liveHost = (() => {
    try {
      return new URL(liveUrl).hostname.replace(/^www\./, '');
    } catch {
      return liveUrl;
    }
  })();

  // Odd rows flip the visual panel to the right for an editorial rhythm.
  const isFlipped = index % 2 === 1;
  const normalizedSkill = activeSkill.trim().toLowerCase();
  const skillTerms = normalizedSkill.split(/[^a-z0-9]+/).filter((term) => term.length > 2);
  const projectSearchText = [
    project.title,
    project.tagline,
    project.description,
    ...(project.tags || []),
    ...(project.highlights || [])
  ].join(' ').toLowerCase();
  const isSkillRelevant = skillTerms.some((term) => projectSearchText.includes(term));

  const handleCardPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  const openLive = () => {
    if (liveUrl) window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} live application`}
      title={`Open ${liveHost}`}
      onClick={openLive}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLive();
        }
      }}
      onPointerMove={handleCardPointerMove}
      className={`project-card group relative cursor-pointer overflow-hidden rounded-3xl border border-[#1f3a36] bg-[#10201e] shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 hover:border-[#e9b44c]/70 hover:shadow-2xl hover:shadow-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b44c] ${isSkillRelevant ? 'project-card-skill-relevant' : ''}`}
    >
      {/* Accent thread binding the row */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
        style={{ background: project.accentColor }}
      />

      {/* Visual Animation Header */}
      <div className={`relative lg:col-span-5 min-h-[210px] ${isFlipped ? 'lg:order-2' : 'lg:order-1'}`}>
        {renderUniqueAnimationHeader()}

        {/* Big index numeral */}
        <span className="absolute top-2 left-4 z-20 select-none font-['Bricolage_Grotesque',sans-serif] text-6xl font-black leading-none text-[#edefe6]/10">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Live status pill */}
        <span className="absolute top-3 right-4 z-20 inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded-full bg-black/55 text-[#45bfa1] border border-[#45bfa1]/40 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#45bfa1] animate-ping"></span>
          {project.status || 'Live'}
        </span>
      </div>

      {/* Card Body */}
      <div
        className={`lg:col-span-7 relative flex flex-col justify-between p-6 sm:p-7 ${
          isFlipped ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div>
          {/* Header row: category + badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e9b44c] font-medium">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              ></span>
              {project.category}
            </span>
            <span className={`font-mono text-[11px] px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl sm:text-2xl font-bold text-[#edefe6] group-hover:text-[#e9b44c] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs font-mono text-[#45bfa1] mb-3">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-[#bfc9c1] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights — dynamic list */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#8ca79f]">
                  <CheckCircle2
                    className="w-3.5 h-3.5 flex-none mt-0.5"
                    style={{ color: project.accentColor }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {/* Metric strip — dynamic from project.metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1f3a36]/70">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg bg-[#0a1413]/70 border border-[#1f3a36] px-2.5 py-2 font-mono text-[10px] text-center text-[#8ca79f] leading-tight"
                >
                  {metric}
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 py-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`project-tech-tag font-mono text-[11px] px-2 py-0.5 rounded bg-[#0a1413] border border-[#1f3a36] text-[#8ca79f] ${isSkillRelevant ? 'project-tech-tag-active' : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row — the whole row opens the live app; these are explicit targets too */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="flex-1 min-w-[170px] py-2.5 px-4 rounded-xl bg-[#e9b44c] hover:bg-[#f3c362] text-[#0a1413] font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              Open live app
            </a>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpenPreview(project);
              }}
              className="py-2.5 px-3.5 rounded-xl bg-[#0a1413] hover:bg-[#162c29] border border-[#1f3a36] hover:border-[#45bfa1] text-[#8ca79f] hover:text-[#edefe6] font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              Preview
            </button>

            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-2 rounded-xl border border-dashed border-[#1f3a36] text-[#8ca79f] max-w-[190px] truncate">
              <ExternalLink className="w-3 h-3 flex-none" />
              {liveHost}
            </span>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                title="View source on GitHub"
                className="p-2.5 rounded-xl bg-[#0a1413] hover:bg-[#162c29] border border-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6] transition-colors"
              >
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
