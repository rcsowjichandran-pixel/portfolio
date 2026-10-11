import React, { useState } from 'react';
import { X, ExternalLink, Play, Pause, Sparkles, Terminal, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectPreviewModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#10201e] border border-[#1f3a36] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#1f3a36] bg-[#0a1413]/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-sm bg-[#e9b44c]"></span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-['Bricolage_Grotesque',sans-serif] text-lg sm:text-2xl font-bold text-[#edefe6]">
                  {project.title}
                </h2>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>
              <p className="text-xs font-mono text-[#8ca79f] mt-0.5">
                Interactive Live Prototype &bull; {project.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#10201e] hover:bg-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6] transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Custom Interactive Sandbox per Project */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {project.id === 'portfolio-page' && <PortfolioInteractivePreview data={project.previewData} />}
          {project.id === 'wedding-invitation' && <WeddingInteractivePreview data={project.previewData} />}
          {project.id === 'food-blog' && <FoodBlogInteractivePreview data={project.previewData} />}
          {project.id === 'constructions-app' && <ConstructionInteractivePreview data={project.previewData} />}
          {project.id === 'vetri-it' && <VetriITInteractivePreview data={project.previewData} />}
          {project.id === 'hospital-system' && <HospitalInteractivePreview data={project.previewData} />}
          {project.id === 'product-shopping' && <ShoppingInteractivePreview />}
          {project.id === 'course-landing' && <CourseInteractivePreview data={project.previewData} />}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1f3a36] bg-[#0a1413] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="text-[#8ca79f]">
            Stack: <span className="text-[#e9b44c]">{project.tags.join(' • ')}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#10201e] hover:bg-[#1f3a36] text-[#edefe6] transition-colors cursor-pointer"
            >
              Close Prototype
            </button>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#10201e] hover:bg-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6] border border-[#1f3a36] transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Source Repository
              </a>
            )}
            <a
              href={project.liveUrl || project.originalUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#e9b44c] text-[#0a1413] font-bold hover:bg-[#f3c362] transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open Live App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1. Wedding Invitation Interactive Preview Component
function WeddingInteractivePreview({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState(2);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpStatus('confirmed');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e9b44c', '#F43F5E', '#edefe6']
    });
  };

  return (
    <div className="space-y-6">
      {/* Wedding Card Frame */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#2a111b] via-[#1f0e16] to-[#10201e] p-6 sm:p-8 border-2 border-[#e9b44c]/40 text-center shadow-xl">
        {/* Floating petals animation hint */}
        <div className="flex justify-center mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e9b44c] bg-[#e9b44c]/10 px-3 py-1 rounded-full border border-[#e9b44c]/30">
            Subha Muhurtham &bull; Celestial Wedding
          </span>
        </div>

        <h3 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#edefe6] mb-1">
          {data.couple}
        </h3>
        <p className="text-sm font-['Karla',sans-serif] text-rose-200/80 italic mb-4">
          Request the honour of your presence at the celebration of their holy matrimony
        </p>

        {/* Date & Muhurtham Badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto my-6 text-left">
          <div className="p-3.5 rounded-xl bg-[#0a1413]/80 border border-[#e9b44c]/30">
            <div className="text-xs font-mono text-[#e9b44c] uppercase">Ceremony Date</div>
            <div className="text-sm font-bold text-[#edefe6] mt-1">{data.date}</div>
            <div className="text-xs text-[#8ca79f] mt-0.5">{data.muhurtham}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0a1413]/80 border border-[#e9b44c]/30">
            <div className="text-xs font-mono text-[#e9b44c] uppercase">Sacred Venue</div>
            <div className="text-sm font-bold text-[#edefe6] mt-1">{data.venue}</div>
            <div className="text-xs text-[#8ca79f] mt-0.5">Chennai, Tamil Nadu</div>
          </div>
        </div>

        {/* Traditional Music Simulator */}
        <div className="max-w-md mx-auto p-3 rounded-xl bg-black/40 border border-rose-500/30 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-left">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <div className="text-xs font-bold text-[#edefe6]">Traditional Nadaswaram & Melam</div>
              <div className="text-[11px] font-mono text-rose-300">
                {isPlaying ? '♪ Audio Playing (Ambiance On)' : 'Click to preview auspicious melody'}
              </div>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse"></span>
        </div>

        {/* Schedule of Events */}
        <div className="border-t border-[#1f3a36] pt-5 text-left max-w-lg mx-auto">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#e9b44c] mb-3">Ceremony Schedule</h4>
          <div className="space-y-2.5">
            {data.events.map((ev, idx) => (
              <div key={idx} className="flex items-start justify-between text-xs p-2 rounded bg-[#0a1413]/50 border border-[#1f3a36]">
                <div>
                  <span className="font-bold text-[#edefe6]">{ev.name}</span>
                  <p className="text-[11px] text-[#8ca79f]">{ev.note}</p>
                </div>
                <span className="font-mono text-[#e9b44c] font-medium whitespace-nowrap ml-2">{ev.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive RSVP Form */}
      <div className="p-5 rounded-xl bg-[#0a1413] border border-[#1f3a36]">
        <h4 className="font-['Bricolage_Grotesque',sans-serif] text-lg font-bold text-[#edefe6] mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#e9b44c]" />
          Instant Digital RSVP
        </h4>
        <p className="text-xs text-[#8ca79f] mb-4">
          Simulate guest confirmation with dynamic seat reservation and celebration confetti.
        </p>

        {rsvpStatus === 'confirmed' ? (
          <div className="p-4 rounded-lg bg-emerald-900/30 border border-emerald-500/40 text-emerald-300 flex items-center justify-between">
            <div>
              <div className="font-bold">RSVP Recorded for {guestName}!</div>
              <div className="text-xs opacity-90">{guestCount} Guests Confirmed &bull; Dining Pass Generated</div>
            </div>
            <button
              onClick={() => { setRsvpStatus(null); setGuestName(''); }}
              className="text-xs font-mono underline hover:text-white"
            >
              Reset
            </button>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Guest Full Name..."
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="p-2.5 rounded-lg bg-[#10201e] border border-[#1f3a36] text-[#edefe6] text-xs focus:outline-none focus:border-[#e9b44c]"
              required
            />
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="p-2.5 rounded-lg bg-[#10201e] border border-[#1f3a36] text-[#edefe6] text-xs focus:outline-none focus:border-[#e9b44c]"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">Family (4+ Guests)</option>
            </select>
            <button
              type="submit"
              className="p-2.5 rounded-lg bg-[#d2604a] hover:bg-[#e07358] text-white font-mono text-xs font-bold transition-all shadow cursor-pointer"
            >
              Confirm Attendance & Celebration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// 2. Food Blog Interactive Preview Component
function FoodBlogInteractivePreview({ data }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [servings, setServings] = useState(2);
  const [activeDish, setActiveDish] = useState(data.recipes[0]);

  const filters = ['All', 'South Indian', 'Chettinad', 'Artisan'];

  const filteredRecipes = selectedFilter === 'All'
    ? data.recipes
    : data.recipes.filter(r => r.origin.includes(selectedFilter) || r.name.includes(selectedFilter));

  return (
    <div className="space-y-6">
      {/* Recipe Header & Quote */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#10201e] to-orange-950/30 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Culinary Lab</div>
          <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#edefe6]">
            Interactive South Indian Recipe Studio
          </h3>
          <p className="text-xs text-[#8ca79f] mt-0.5">{data.featuredQuote}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-1.5">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                selectedFilter === f
                  ? 'bg-[#e9b44c] text-[#0a1413] font-bold'
                  : 'bg-[#0a1413] text-[#8ca79f] hover:text-[#edefe6] border border-[#1f3a36]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredRecipes.map((r) => (
          <div
            key={r.name}
            onClick={() => setActiveDish(r)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeDish.name === r.name
                ? 'bg-[#162c29] border-[#e9b44c] shadow-lg'
                : 'bg-[#0a1413] border-[#1f3a36] hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {r.origin}
                </span>
                <h4 className="font-bold text-sm text-[#edefe6] mt-1.5">{r.name}</h4>
              </div>
              <span className="text-xs font-mono text-[#e9b44c]">{r.time}</span>
            </div>
            <div className="flex items-center gap-3 mt-3 text-xs font-mono text-[#8ca79f]">
              <span>🔥 {r.cal}</span>
              <span>🌶️ Spice: {r.spice}</span>
              <span className="text-emerald-400">✓ Pure Veg</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Dish Recipe Workbench */}
      <div className="p-5 rounded-xl bg-[#0a1413] border border-[#1f3a36]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="font-['Bricolage_Grotesque',sans-serif] text-lg font-bold text-[#e9b44c]">
              Recipe Workbench: {activeDish.name}
            </h4>
            <p className="text-xs text-[#8ca79f]">Dynamic portion recalculator</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-[#8ca79f]">Portion Size:</span>
            <button
              onClick={() => setServings(Math.max(1, servings - 1))}
              className="w-7 h-7 rounded bg-[#10201e] text-[#edefe6] border border-[#1f3a36] hover:border-[#e9b44c]"
            >
              -
            </button>
            <span className="px-2 font-bold text-[#e9b44c]">{servings} Servings</span>
            <button
              onClick={() => setServings(servings + 1)}
              className="w-7 h-7 rounded bg-[#10201e] text-[#edefe6] border border-[#1f3a36] hover:border-[#e9b44c]"
            >
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36]">
            <div className="text-[#8ca79f]">Black Peppercorns</div>
            <div className="text-sm font-bold text-[#edefe6] mt-1">{servings * 1.5} tbsp (Freshly Ground)</div>
          </div>
          <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36]">
            <div className="text-[#8ca79f]">Button Mushrooms / Veg</div>
            <div className="text-sm font-bold text-[#edefe6] mt-1">{servings * 150} grams</div>
          </div>
          <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36]">
            <div className="text-[#8ca79f]">Curry Leaves & Mustard</div>
            <div className="text-sm font-bold text-[#edefe6] mt-1">{servings * 2} Sprigs Fresh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Construction App Interactive Preview Component
function ConstructionInteractivePreview({ data }) {
  const [laserActive, setLaserActive] = useState(true);
  const [selectedSite, setSelectedSite] = useState(data.sites[0]);

  return (
    <div className="space-y-6">
      {/* Site Metrics Banner */}
      <div className="grid grid-cols-3 gap-3">
        {data.metrics.map((m, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-[#071c1a] border border-cyan-500/30 text-center">
            <div className="text-[10px] font-mono text-cyan-400 uppercase">{m.label}</div>
            <div className="text-lg font-bold text-[#edefe6] mt-0.5">{m.value}</div>
            <div className="text-[11px] font-mono text-emerald-400">{m.status}</div>
          </div>
        ))}
      </div>

      {/* Blueprint CAD Laser View */}
      <div className="relative rounded-xl bg-[#061413] border-2 border-cyan-500/40 p-5 overflow-hidden">
        {/* CAD Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        ></div>

        {laserActive && (
          <div className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-laser"></div>
        )}

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
              STRUCTURAL BLUEPRINT VIEWER &bull; {selectedSite.floor}
            </span>
            <h4 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-cyan-200 mt-1">
              {selectedSite.name}
            </h4>
          </div>

          <button
            onClick={() => setLaserActive(!laserActive)}
            className="px-3 py-1.5 rounded-lg bg-cyan-900/60 hover:bg-cyan-800 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-colors"
          >
            {laserActive ? '⏸ Pause Laser Scan' : '▶ Resume Laser Scan'}
          </button>
        </div>

        {/* Progress Bar & Milestone Status */}
        <div className="relative z-10 space-y-2 mt-4 bg-[#08191a]/80 p-4 rounded-lg border border-cyan-500/20">
          <div className="flex justify-between text-xs font-mono text-cyan-300">
            <span>Milestone: {selectedSite.stage}</span>
            <span className="font-bold">{selectedSite.progress}% Structural Completion</span>
          </div>
          <div className="w-full h-3 rounded-full bg-cyan-950 border border-cyan-500/30 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-700"
              style={{ width: `${selectedSite.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Site Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {data.sites.map((site) => (
          <button
            key={site.name}
            onClick={() => setSelectedSite(site)}
            className={`p-3 rounded-xl text-left border font-mono text-xs transition-all ${
              selectedSite.name === site.name
                ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-md'
                : 'bg-[#0a1413] border-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6]'
            }`}
          >
            <div className="font-bold text-sm text-[#edefe6] mb-1">{site.name}</div>
            <div>{site.floor}</div>
            <div className="text-cyan-400 mt-1">{site.progress}% Completed</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// 4. Vetri IT System Interactive Preview Component
function VetriITInteractivePreview({ data }) {
  const [logs, setLogs] = useState([
    '[14:22:01] [srv-chn-01] Health ping: 14ms. All 64 microservices online.',
    '[14:22:03] [gw-south-aws] Traffic load normal. 2,430 requests/sec.',
    '[14:22:06] [ITSM Queue] Ticket #VT-8920 assigned to Tier-2 support team.'
  ]);
  const [alertDispatched, setAlertDispatched] = useState(false);

  const handleSimulateAlert = () => {
    setAlertDispatched(true);
    setLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] [SIMULATION] Simulated load test passed with zero packet loss!`,
      ...prev
    ]);
    setTimeout(() => setAlertDispatched(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* SLA Telemetry Header */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-[#07241c] border border-emerald-500/30">
          <div className="text-[10px] font-mono text-emerald-400 uppercase">Uptime Reliability</div>
          <div className="text-xl font-bold text-emerald-300 mt-0.5">{data.uptime}</div>
          <div className="text-[11px] font-mono text-[#8ca79f]">Zero unmanaged downtime</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#07241c] border border-emerald-500/30">
          <div className="text-[10px] font-mono text-emerald-400 uppercase">ITSM Tickets Solved</div>
          <div className="text-xl font-bold text-emerald-300 mt-0.5">{data.ticketsResolved}</div>
          <div className="text-[11px] font-mono text-[#8ca79f]">Average MTTR: 18 mins</div>
        </div>
        <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#07241c] border border-emerald-500/30">
          <div className="text-[10px] font-mono text-emerald-400 uppercase">Gateway Health</div>
          <div className="text-xl font-bold text-emerald-300 mt-0.5">NOMINAL</div>
          <div className="text-[11px] font-mono text-emerald-400">All SSL certs valid</div>
        </div>
      </div>

      {/* Cluster Nodes Status */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-[#8ca79f] uppercase tracking-wider">
          Managed Infrastructure Nodes
        </div>
        {data.systems.map((s) => (
          <div key={s.name} className="p-3 rounded-lg bg-[#0a1413] border border-[#1f3a36] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-[#edefe6]">{s.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400">Ping: {s.latency}</span>
              <span className="text-cyan-400">Load: {s.load}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {s.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Telemetry Log & Simulate Button */}
      <div className="p-4 rounded-xl bg-black/70 border border-emerald-500/30 font-mono text-xs">
        <div className="flex items-center justify-between mb-3 border-b border-emerald-500/20 pb-2">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <Terminal className="w-4 h-4" /> Live Node Telemetry Feed
          </span>
          <button
            onClick={handleSimulateAlert}
            className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-[11px] transition-colors"
          >
            {alertDispatched ? 'Simulating...' : 'Test Network Ping'}
          </button>
        </div>
        <div className="space-y-1.5 text-emerald-300/80 max-h-32 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="leading-relaxed">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. Hospital System Interactive Preview Component
function HospitalInteractivePreview({ data }) {
  const [selectedDept, setSelectedDept] = useState(data.departments[0]);
  const [patientName, setPatientName] = useState('');
  const [slotBooked, setSlotBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    setSlotBooked(true);
  };

  return (
    <div className="space-y-6">
      {/* Heartbeat EKG waveform banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-[#10201e] to-red-950/20 border border-red-500/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-red-400 animate-heartbeat" />
          <div>
            <h4 className="font-['Bricolage_Grotesque',sans-serif] text-lg font-bold text-[#edefe6]">
              CarePulse Appointment Dispatcher
            </h4>
            <p className="text-xs text-[#8ca79f]">Patient satisfaction: {data.patientSatisfaction}</p>
          </div>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30">
          {data.activeSlotsToday} Slots Remaining Today
        </span>
      </div>

      {slotBooked ? (
        <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-2">
          <div className="text-lg font-bold">Appointment Confirmed!</div>
          <div className="text-xs font-mono">
            Patient: <span className="text-white">{patientName}</span> &bull; Dept: <span className="text-white">{selectedDept}</span> &bull; Time: 10:30 AM Tomorrow
          </div>
          <div className="text-xs text-[#8ca79f]">Token ID #CP-2026-9041 sent via SMS notification.</div>
          <button
            onClick={() => { setSlotBooked(false); setPatientName(''); }}
            className="mt-3 px-3 py-1.5 rounded bg-emerald-600 text-black font-bold text-xs font-mono"
          >
            Book Another Slot
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="p-5 rounded-xl bg-[#0a1413] border border-[#1f3a36] space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-wider text-[#e9b44c]">Book Instant OPD Consultation</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-[#8ca79f] mb-1">Select Specialty</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-[#10201e] border border-[#1f3a36] text-[#edefe6] text-xs"
              >
                {data.departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#8ca79f] mb-1">Patient Full Name</label>
              <input
                type="text"
                placeholder="E.g. Sowjanya / Anand..."
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full p-2.5 rounded-lg bg-[#10201e] border border-[#1f3a36] text-[#edefe6] text-xs"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
          >
            Validate & Reserve Doctor Appointment
          </button>
        </form>
      )}
    </div>
  );
}

// 6. Shopping Preview
function ShoppingInteractivePreview() {
  const [cart, setCart] = useState(0);
  const products = [
    { name: 'Artisan Loom Saree', price: 2400 },
    { name: 'Ergonomic Developer Chair', price: 8500 },
    { name: 'Mechanical Keyboard (Brown)', price: 3200 }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-[#0a1413] p-3 rounded-lg border border-[#1f3a36]">
        <span className="font-bold text-sm text-[#edefe6]">LoomKart Storefront Catalog</span>
        <span className="font-mono text-xs text-[#e9b44c] bg-[#e9b44c]/10 px-2.5 py-1 rounded-md border border-[#e9b44c]/30">
          Items in Cart: {cart}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {products.map((p) => (
          <div key={p.name} className="p-4 rounded-xl bg-[#10201e] border border-[#1f3a36] text-center">
            <div className="font-bold text-sm text-[#edefe6] mb-1">{p.name}</div>
            <div className="text-xs font-mono text-[#45bfa1] mb-3">₹{p.price.toLocaleString()}</div>
            <button
              onClick={() => setCart(cart + 1)}
              className="w-full py-1.5 rounded bg-[#e9b44c] hover:bg-[#f3c362] text-[#0a1413] font-bold text-xs font-mono cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. Course Preview
function CourseInteractivePreview({ data }) {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
        <h4 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-indigo-300">
          TechSprint Fullstack Bootcamp Landing
        </h4>
        <p className="text-xs text-[#8ca79f] mt-1">
          {data.enrolledStudents} Students Enrolled &bull; {data.courseModules}
        </p>
      </div>
      <div className="space-y-2">
        {['Module 1: Semantic HTML5 & Modern Flexbox', 'Module 2: Tailwind CSS Utility Architecture', 'Module 3: React 19 State, Hooks & Custom Routers', 'Module 4: Python Backend & AI LLM Integration'].map((m, i) => (
          <div key={i} className="p-3 rounded-lg bg-[#0a1413] border border-[#1f3a36] flex items-center justify-between text-xs font-mono text-[#edefe6]">
            <span>{m}</span>
            <span className="text-[#45bfa1]">Unlocked</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 8. Portfolio Interactive Preview (Meta Project)
function PortfolioInteractivePreview({ data }) {
  const [activeTab, setActiveTab] = useState('features');
  const [scrollProgress, setScrollProgress] = useState(0);

  const tabs = [
    { id: 'features', label: 'Features', icon: Sparkles },
    { id: 'tech', label: 'Tech Stack', icon: Terminal },
    { id: 'perf', label: 'Performance', icon: Activity }
  ];

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setScrollProgress(scrollHeight > clientHeight ? Math.min(scrollTop / (scrollHeight - clientHeight), 1) : 0);
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex gap-1 bg-[#0a1413] p-1 rounded-xl border border-[#1f3a36]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === tab.id
                ? 'bg-[#45bfa1] text-[#0a1413] font-bold shadow-sm'
                : 'text-[#8ca79f] hover:text-[#edefe6]'
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panels */}
      <div className="p-4 rounded-xl bg-[#0a1413] border border-[#1f3a36] max-h-[500px] overflow-y-auto" onScroll={handleScroll}>
        {/* Scroll Progress Indicator */}
        <div className="mb-4 flex items-center justify-between text-[10px] font-mono text-[#8ca79f]">
          <span>Scroll Depth</span>
          <div className="w-32 h-1.5 bg-[#1f3a36] rounded-full overflow-hidden ml-4">
            <div
              className="h-full bg-gradient-to-r from-[#45bfa1] via-[#e9b44c] to-[#d2604a] transition-[width] duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {activeTab === 'features' && (
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#edefe6] border-b border-[#1f3a36] pb-2">
              Live Portfolio Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feature) => (
                <div
                  key={feature.name}
                  className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36] hover:border-[#45bfa1]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#edefe6]">{feature.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#45bfa1]/20 text-[#45bfa1] border border-[#45bfa1]/30">
                      {feature.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#8ca79f] font-mono">{feature.type}</div>
                  <div className="text-[11px] text-[#bfc9c1] mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#edefe6] border-b border-[#1f3a36] pb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#10201e] border border-[#1f3a36] text-xs font-mono text-[#e9b44c]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[#10201e] border border-[#1f3a36]">
              <div className="text-[10px] font-mono text-[#8ca79f] uppercase tracking-wider mb-2">
                Architecture Overview
              </div>
              <div className="font-mono text-[11px] text-[#bfc9c1] leading-relaxed">
                React 19 SPA with Vite bundling. Tailwind CSS for utility-first styling.
                Custom WebGL canvas (WarpCanvas) for ambient background.
                IntersectionObserver-based scroll reveals. Simulated Python terminal.
                Project preview modals with per-project interactive sandboxes.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'perf' && (
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#edefe6] border-b border-[#1f3a36] pb-2">
              Performance Metrics
            </h4>
            <div className="grid grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36] text-center">
                <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl font-bold text-[#45bfa1]">{data.performance.lcp}</div>
                <div className="text-[10px] font-mono text-[#8ca79f] uppercase">LCP</div>
              </div>
              <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36] text-center">
                <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl font-bold text-[#e9b44c]">{data.performance.fid}</div>
                <div className="text-[10px] font-mono text-[#8ca79f] uppercase">FID</div>
              </div>
              <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36] text-center">
                <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl font-bold text-[#d2604a]">{data.performance.cls}</div>
                <div className="text-[10px] font-mono text-[#8ca79f] uppercase">CLS</div>
              </div>
              <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36] text-center">
                <div className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#edefe6]">{data.performance.bundle}</div>
                <div className="text-[10px] font-mono text-[#8ca79f] uppercase">Bundle</div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#10201e] border border-[#1f3a36]">
              <div className="text-[10px] font-mono text-[#8ca79f] uppercase tracking-wider mb-2">
                Core Web Vitals (Simulated)
              </div>
              <div className="font-mono text-[11px] text-[#bfc9c1] leading-relaxed">
                Measured on localhost with Lighthouse CI. Warp canvas uses requestAnimationFrame
                with GPU-accelerated shaders. Code splitting via dynamic imports for preview modals.
                Gzip compressed bundle ~350KB, ~105KB over network.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
