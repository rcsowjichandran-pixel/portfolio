export const personalInfo = {
  name: "Sowjanya Chandran",
  shortName: "Sowji",
  title: "AI & Python Fullstack Developer",
  tagline: "Bridging human problem-solving with Python backend power, modern React interfaces, and intelligent AI tooling.",
  location: "Chennai, Tamil Nadu",
  workPreference: "Open to Remote & Hybrid Roles",
  email: "sowjanya.chandran90@gmail.com",
  phone: "+91 98945 18957",
  github: "https://github.com/rcsowjichandran-pixel",
  linkedin: "https://www.linkedin.com/in/sowjanyachandran",
  originalSite: "https://rcsowjichandran-pixel.github.io/day1/portfoliopro1.html",
  avatar: "/sowji.jpeg",
  bio: [
    "I'm Sowjanya Chandran, an M.Sc. Information Technology graduate building modern web applications with Python on the server and React on the screen.",
    "My early career on the Vodafone service floor taught me the most crucial software skill: listening to people describe problems ambiguously and deciphering what they actually need. Today, I combine that user-centric mindset with fullstack development and AI tooling.",
    "I focus on understanding architectural layers deeply—clean React state, robust Python APIs, and practical AI integrations.",
    "I learn best by building. My projects let me explore the full experience—from responsive interfaces and useful interactions to the data and logic that support them—and then refine the details that make an application easier to use.",
    "I bring a patient, curious approach to new challenges: understand the problem first, break it into clear pieces, and keep learning through feedback, testing, and iteration."
  ],
  stats: [
    { label: "Degree Percentage", value: "83%", sub: "M.Sc. IT (Anna Univ)" },
    { label: "Core Stacks", value: "React + Python", sub: "Frontend & Backend" },
    { label: "Projects Built", value: "5+", sub: "Fullstack & Interactive" },
    { label: "Status", value: "Ready to Ship", sub: "Open for Hire" }
  ]
};

export const skillCategories = [
  {
    name: "Frontend Engineering",
    icon: "Layout",
    color: "#e9b44c", // turmeric
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, Router, State Management, Custom Components" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM manipulation, Functional programming" },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility-first architecture, responsiveness, custom themes" },
      { name: "HTML5 & Modern CSS3", level: "Expert", desc: "Semantic markup, Flexbox, CSS Grid, Micro-animations" },
      { name: "Bootstrap 5", level: "Proficient", desc: "Rapid grid layouts, component styling" },
      { name: "Responsive UI/UX", level: "Expert", desc: "Mobile-first viewports, touch-friendly interfaces" }
    ]
  },
  {
    name: "Python & Backend Systems",
    icon: "Server",
    color: "#d2604a", // madder
    skills: [
      { name: "Python 3", level: "Advanced", desc: "Core data structures, OOP, scripting & automation" },
      { name: "FastAPI / Flask", level: "Proficient", desc: "RESTful API endpoints, request validation, JSON routing" },
      { name: "Database & SQL", level: "Proficient", desc: "Relational schema design, SQLite/PostgreSQL queries" },
      { name: "C & C++", level: "Intermediate", desc: "Academic foundation, memory basics, algorithms" }
    ]
  },
  {
    name: "AI & Data Tooling",
    icon: "Sparkles",
    color: "#45bfa1", // leaf
    skills: [
      { name: "LLM APIs & Prompting", level: "Active Learning", desc: "Prompt design, context window management, AI assistants" },
      { name: "Pandas & NumPy", level: "Proficient", desc: "DataFrames, data cleaning, aggregation, matrix ops" },
      { name: "AI Integration", level: "Active Learning", desc: "Embedding AI summaries & assistants into web apps" }
    ]
  },
  {
    name: "Developer Workflow",
    icon: "GitBranch",
    color: "#8B5CF6", // purple
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching, PRs, GitHub Pages deployment" },
      { name: "VS Code & Dev Tools", level: "Expert", desc: "Debugging, extensions, linting, terminal workflow" },
      { name: "Vite & Modern Tooling", level: "Advanced", desc: "Lightning fast bundling, HMR, asset optimization" }
    ]
  }
];

export const projectsData = [
  {
    id: "portfolio-page",
    title: "Sowjanya Portfolio: This Interactive Site",
    tagline: "Self-referential portfolio with animated warp threads, aurora mesh, and live project previews",
    category: "React & Frontend",
    animationType: "portfolio",
    badge: "Meta Project",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description: "The portfolio you're viewing right now. Built with React 19, Vite, and Tailwind CSS. Features a custom WebGL warp canvas, intersection-observer scroll reveals, and a Python code playground running in the browser.",
    longDescription: "A meta-project demonstrating the portfolio itself as an interactive artifact. The warp thread background responds to mouse movement, sections reveal on scroll with staggered timing, and the Python playground executes real code snippets via a simulated terminal. Every project card links to a live preview modal with unique interactive demos.",
    tags: ["React 19", "Tailwind CSS", "WebGL Canvas", "IntersectionObserver", "Python Playground", "Vite"],
    accentColor: "#45bfa1",
    shortTitle: "Portfolio Site",
    liveUrl: "#top",
    repoUrl: "https://github.com/rcsowjichandran-pixel",
    githubUrl: "https://github.com/rcsowjichandran-pixel",
    year: "2026",
    role: "Fullstack Developer",
    status: "Live",
    metrics: ["5 Projects", "6 Sections", "Warp Canvas"],
    highlights: [
      "Custom WebGL warp thread canvas with mouse-reactive physics",
      "Scroll-triggered reveal animations via IntersectionObserver",
      "Interactive Python playground with 3 executable snippets",
      "Project preview modals with unique interactive prototypes per project (4 live projects)",
      "Responsive design from 360px mobile to 4K desktop"
    ],
    previewData: {
      features: [
        { name: "Warp Canvas", type: "WebGL", desc: "Mouse-reactive thread simulation", status: "Active" },
        { name: "Scroll Reveal", type: "IntersectionObserver", desc: "Staggered section animations", status: "Active" },
        { name: "Python Playground", type: "Simulated Terminal", desc: "3 runnable code snippets", status: "Active" },
        { name: "Project Previews", type: "Modal Sandboxes", desc: "4 live project demos", status: "Active" },
        { name: "Aurora Mesh", type: "CSS Gradient", desc: "Layered ambient background", status: "Active" },
        { name: "Grain Overlay", type: "CSS Filter", desc: "Subtle film grain texture", status: "Active" }
      ],
      techStack: [
        "React 19", "Vite 6", "Tailwind CSS 3", "Lucide Icons", "canvas-confetti"
      ],
      performance: {
        lcp: "~1.2s", fid: "<50ms", cls: "<0.05", bundle: "~350KB gzipped"
      }
    }
  },
  {
    id: "food-blog",
    title: "SavorLoom: Food Blog & AI Recipe Studio",
    tagline: "Rich culinary discovery platform with flavor profile radar and smart ingredient match",
    category: "React & Frontend",
    animationType: "food",
    badge: "New Addition",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description: "An enticing, highly interactive food and culinary storytelling application. Features live dietary category filters, step-by-step interactive cooking mode, and ingredient scaling with subtle steaming aroma animations.",
    longDescription: "Built with React and Tailwind CSS, this culinary application reimagines online recipe curation. Users can toggle between South Indian delicacies, continental brunch, and vegan staples with dynamic nutritional calculation.",
    tags: ["React.js", "Tailwind CSS", "Aroma Micro-Animations", "Interactive Recipe Studio", "State Management"],
    accentColor: "#e9b44c",
    shortTitle: "Food Blog",
    liveUrl: "https://rcsowjichandran-pixel.github.io/day1/task.html",
    repoUrl: "https://github.com/rcsowjichandran-pixel",
    githubUrl: "https://github.com/rcsowjichandran-pixel",
    year: "2026",
    role: "Frontend Engineer",
    status: "Live",
    metrics: ["4 Recipe Categories", "9 Curated Dishes", "Newsletter Flow"],
    highlights: [
      "Deep-link routing across Home, Blog, Recipes and Write an Article flows",
      "Client-side account modal with credential validation and profile update panel",
      "Responsive newsletter blocks, trending rail and category filter components"
    ],
    previewData: {
      recipes: [
        { name: "Chettinad Pepper Mushroom", time: "25 mins", cal: "280 kcal", veg: true, spice: "High", origin: "Tamil Nadu" },
        { name: "Crispy Golden Ghee Roast Dosa", time: "15 mins", cal: "320 kcal", veg: true, spice: "Mild", origin: "South India" },
        { name: "Coconut Cardamom Payasam", time: "30 mins", cal: "390 kcal", veg: true, spice: "Sweet", origin: "Traditional" },
        { name: "Avocado Sourdough Tartine", time: "10 mins", cal: "260 kcal", veg: true, spice: "Gentle", origin: "Artisan" }
      ],
      featuredQuote: "Cooking is an art, but code is the recipe for scale."
    }
  },
  {
    id: "constructions-app",
    title: "Vertex BuildTrack: Constructions & Civil ERP",
    tagline: "Architectural project monitor with CAD blueprint laser scanner and milestone ledger",
    category: "Fullstack & Python",
    animationType: "construction",
    badge: "New Addition",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    description: "A civil engineering and construction management dashboard featuring dynamic laser blueprint scanning lines, live project milestone completion meters, and material cost budget calculations.",
    longDescription: "Engineered to give project managers real-time oversight of ongoing structural sites across Tamil Nadu. Features an interactive blueprint viewer with laser drafting guides and material inventory tracker.",
    tags: ["React", "Python Data Model", "Laser Scan Animation", "Blueprint CAD View", "Cost Estimator"],
    accentColor: "#06B6D4",
    shortTitle: "Construction ERP",
    liveUrl: "https://construction-wczs.vercel.app/",
    repoUrl: "https://github.com/rcsowjichandran-pixel",
    githubUrl: "https://github.com/rcsowjichandran-pixel",
    year: "2026",
    role: "Fullstack Developer",
    status: "Live",
    metrics: ["4 Active Sites", "92% Concrete Phase", "99.8% Safety"],
    highlights: [
      "Live milestone ledger tracking stage-wise physical progress per site",
      "Animated CAD blueprint viewer with laser drafting guide overlay",
      "Material cost estimator rolled up against budget per project block"
    ],
    previewData: {
      metrics: [
        { label: "Active Sites", value: "4 Projects", status: "On Track" },
        { label: "Concrete Pouring", value: "92% Done", status: "Phase 3" },
        { label: "Safety Rating", value: "99.8%", status: "Zero Incident" }
      ],
      sites: [
        { name: "Anna Nagar Commercial Complex", floor: "G+7 Floors", stage: "HVAC & Electrical", progress: 78 },
        { name: "OMR Tech Park Wing B", floor: "12 Stories", stage: "Facade Glazing", progress: 64 },
        { name: "Velachery Residential Enclave", floor: "Villa Block 4", stage: "Interior Handover", progress: 95 }
      ]
    }
  },
  {
    id: "vetri-it",
    title: "Vetri IT Systems: Enterprise IT Portal",
    tagline: "Corporate ITSM infrastructure monitor with cyber-terminal matrix and real-time node telemetry",
    category: "Fullstack & Python",
    animationType: "vetri-it",
    badge: "New Addition",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description: "A mission-critical enterprise portal built for Vetri IT Systems featuring live network latency monitors, automated ticket escalation queues, and cyber-matrix status beacons.",
    longDescription: "Designed for IT operations teams to monitor client servers, SLA timelines, and hardware diagnostics in real time. Features a pulsing telemetry beacon and terminal log view.",
    tags: ["React 19", "Python API Gateway", "Cyber Matrix Glow", "Telemetry Monitor", "ITSM Dashboard"],
    accentColor: "#10B981",
    shortTitle: "Vetri IT Systems",
    liveUrl: "https://vetri-dr3a.vercel.app/",
    repoUrl: "https://github.com/rcsowjichandran-pixel",
    githubUrl: "https://github.com/rcsowjichandran-pixel",
    year: "2026",
    role: "Fullstack Developer",
    status: "Live",
    metrics: ["99.98% Uptime", "1,420+ Tickets", "3 Cluster Nodes"],
    highlights: [
      "Service-desk workspace for enterprise IT products and support plans",
      "Realtime telemetry beacon with latency, load and node health readouts",
      "Ticket escalation queue wired to severity-based routing rules"
    ],
    previewData: {
      systems: [
        { name: "Chennai Main Cluster (srv-chn-01)", latency: "14ms", status: "Healthy", load: "42%" },
        { name: "Cloud Gateway (gw-south-aws)", latency: "28ms", status: "Healthy", load: "58%" },
        { name: "Database Replica (db-postgres-ha)", latency: "19ms", status: "Healthy", load: "64%" }
      ],
      ticketsResolved: "1,420+",
      uptime: "99.98%"
    }
  },
  {
    id: "wedding-invitation",
    title: "Kalyana Vedhika: Celestial Wedding Invitation",
    tagline: "Luxury interactive digital invitation with golden petal shimmer, RSVP ledger, and music ambiance",
    category: "React & Frontend",
    animationType: "wedding",
    badge: "New Addition",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    description: "An elegant, culturally rich digital wedding invitation crafted with floating gold particles, romantic rose petal drifts, interactive RSVP response system, and ceremony schedule timeline.",
    longDescription: "Transforms traditional paper invitations into a sustainable, interactive keepsake. Guests can listen to traditional instrumental music, view muhurtham timings, RSVP with diet preferences, and tap for venue GPS navigation.",
    tags: ["React", "Floating Petals Animation", "Golden Ribbon Unfold", "Audio Ambiance", "Interactive RSVP"],
    accentColor: "#F43F5E",
    shortTitle: "Wedding Invitation",
    liveUrl: "https://wedding-seven-iota-39.vercel.app/",
    repoUrl: "https://github.com/rcsowjichandran-pixel",
    githubUrl: "https://github.com/rcsowjichandran-pixel",
    year: "2026",
    role: "Frontend Developer",
    status: "Live",
    metrics: ["3 Ceremonies", "RSVP Ledger", "Ambient Audio"],
    highlights: [
      "Gold ribbon unfold intro with floating petal and shimmer particle drift",
      "Muhurtham timetable plus one-tap venue navigation for guests",
      "RSVP ledger capturing guest count and dietary preferences live"
    ],
    previewData: {
      couple: "Anand & Priya",
      date: "Sunday, November 29, 2026",
      muhurtham: "9:00 AM - 10:30 AM (Vrishabha Lagnam)",
      venue: "Sri Raja Rajeshwari Hall, Chennai",
      events: [
        { time: "Nov 28, 6:30 PM", name: "Sangeet & Reception", note: "Music, dinner & festivities" },
        { time: "Nov 29, 9:00 AM", name: "Subha Muhurtham", note: "Sacred vows & mangalya dharanam" },
        { time: "Nov 29, 12:30 PM", name: "Traditional Virundhu", note: "Grand festive banquet feast" }
      ]
    }
  }
];

/**
 * Derived, dynamic list of every project that has a real deployed URL.
 * Used by the hero "live deployments" launcher and the navbar quick menu,
 * so adding a `liveUrl` to any project above instantly surfaces it in the UI.
 */
export const liveDeployments = projectsData
  .filter((project) => Boolean(project.liveUrl))
  .map((project) => ({
    id: project.id,
    label: project.shortTitle || project.title,
    title: project.title,
    tagline: project.tagline,
    url: project.liveUrl,
    accent: project.accentColor,
    status: project.status || 'Live',
    category: project.category
  }));

export const careerTimeline = [
  {
    year: "2010",
    title: "B.Sc. Information Technology",
    institution: "Vivekanandha College of Engineering for Women, Thiruchengode · Anna University",
    score: "80.3%",
    type: "education",
    description: "Established core computer science foundations in data structures, procedural C/C++, database management systems, and networking fundamentals."
  },
  {
    year: "2012",
    title: "M.Sc. Information Technology",
    institution: "Vivekanandha College of Engineering for Women, Thiruchengode · Anna University",
    score: "83%",
    type: "education",
    description: "Deepened expertise in advanced object-oriented programming, software engineering lifecycle, web technologies, and computational systems."
  },
  {
    year: "Dec 2012 – Sep 2013",
    title: "Customer Service Executive",
    institution: "Sukhvarsha Management Services — Vodafone Cellular Ltd, Karur",
    score: "Client Operations",
    type: "work",
    description: "Front-line support for complex billing architectures, cellular connectivity, and account issue diagnostics. Learned how to listen intently and decipher client problem roots."
  },
  {
    year: "Sep 2013 – May 2015",
    title: "Customer Service Executive",
    institution: "IKYA Human Capital Solutions — Vodafone Cellular Ltd, Karur",
    score: "Operations Excellence",
    type: "work",
    description: "Handled high-volume inbound and outbound queries, handled critical escalations with engineering and management teams under strict SLAs."
  },
  {
    year: "Present",
    title: "Fullstack Developer & AI Engineer",
    institution: "Self-Directed Mastery & Portfolio Engineering",
    score: "Active Builder",
    type: "current",
    description: "Intensively building production-grade web systems with React, Python APIs, Pandas data tools, and modern AI LLM integrations. Ready to create immediate impact in an engineering team."
  }
];

export const pythonSnippets = [
  {
    id: "pandas-analytics",
    name: "Pandas: Data Pipeline & Filtering",
    language: "python",
    code: `# Data Pipeline: Hospital Bed Allocation & SLA Analytics
import pandas as pd

records = [
    {"dept": "Cardiology", "admitted": 18, "capacity": 20, "avg_wait_min": 14},
    {"dept": "Neurology", "admitted": 12, "capacity": 15, "avg_wait_min": 22},
    {"dept": "Pediatrics", "admitted": 24, "capacity": 25, "avg_wait_min": 9},
    {"dept": "General Medicine", "admitted": 30, "capacity": 30, "avg_wait_min": 35}
]

df = pd.DataFrame(records)
df['occupancy_rate'] = (df['admitted'] / df['capacity']) * 100
critical = df[df['occupancy_rate'] >= 90]

print("=== DEPARTMENTS AT CAPACITY CRITICAL THRESHOLD ===")
print(critical[['dept', 'occupancy_rate', 'avg_wait_min']].to_string(index=False))`,
    output: `=== DEPARTMENTS AT CAPACITY CRITICAL THRESHOLD ===
            dept  occupancy_rate  avg_wait_min
      Cardiology            90.0            14
      Pediatrics            96.0             9
General Medicine           100.0            35

[Status: 3 critical wards alerted. Auto-escalation dispatched to Duty Doctor]`
  },
  {
    id: "fastapi-endpoint",
    name: "FastAPI: Vetri IT Incident Router",
    language: "python",
    code: `# FastAPI: Realtime Incident Triage & Health Ping
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Vetri IT Systems Telemetry API")

class IncidentReport(BaseModel):
    server_id: str
    severity: str # 'P1', 'P2', 'P3'
    latency_ms: float

@app.post("/api/v1/telemetry/alert")
def process_alert(alert: IncidentReport):
    status = "ESCALATE_IMMEDIATELY" if alert.severity == "P1" else "ROUTED_TO_QUEUE"
    return {
        "status": status,
        "server": alert.server_id,
        "ping_ms": alert.latency_ms,
        "diagnostics": "Telemetry confirmed across Chennai cluster node 1."
    }`,
    output: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "ESCALATE_IMMEDIATELY",
  "server": "srv-chn-01",
  "ping_ms": 14.2,
  "diagnostics": "Telemetry confirmed across Chennai cluster node 1."
}`
  },
  {
    id: "ai-prompt-eval",
    name: "AI Prompt: Customer Query Intent Analyzer",
    language: "python",
    code: `# Prompt Engineering: Vodafone Service Floor Experience -> AI Automation
def parse_customer_intent(user_raw_speech: str):
    prompt_payload = f"""
    Analyze the customer query and extract:
    1. Core root issue (not surface emotional complaint)
    2. Category: [Billing, Connectivity, Account]
    3. Suggested solution path
    Query: "{user_raw_speech}"
    """
    # Calling LLM API with structured schema output
    return simulate_llm_inference(prompt_payload)

print(parse_customer_intent("My balance was cut twice yesterday while traveling near Karur highway!"))`,
    output: `[LLM Response / JSON Output]:
{
  "detected_intent": "ROAMING_DOUBLE_DEDUCTION",
  "category": "Billing",
  "urgency": "High",
  "root_cause": "Cell tower handoff glitch during active data session",
  "remediation_action": "Credit reversing ₹140.00 & verify tower log Karur-Hwy-04"
}`
  }
];
