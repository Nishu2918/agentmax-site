import { VideoBackground } from "./components/VideoBackground";
import { CountdownTimer } from "./components/CountdownTimer";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "The Event", href: "#event" },
  { label: "Award", href: "#award" },
  { label: "AI Max", href: "#aimax" },
  { label: "FAQs", href: "#faqs" },
];

const INFO_ITEMS = [
  { label: "Grand finale", value: "3rd December, 2026" },
  { label: "Venue", value: "Slohh by Roach, Hilton, Bengaluru." },
  { label: "Team size", value: "A maximum of 3 people are allowed per team" },
  {
    label: "Registration fees",
    value: "INR 45,000/-",
    sub: "This includes delegate passes for AI MAX Conclave 2026",
  },
];

const WHY_JOIN = [
  "Solve real-world enterprise challenges with AI agents.",
  "Learn & be mentored by industry AI leaders.",
  "Collaborate with innovators & developers.",
  "Showcase your work and validate it from AI leaders.",
  "Win awards and create brand visibility",
];

const ABOUT_BULLETS = [
  "Upskill teams on cutting-edge agentic AI frameworks and enterprise use cases",
  "Build next-gen digital teammates that transform enterprises, GCCs, and startups",
  "Rapidly prototype solutions that compress 6 - 12 months of work into 3 weeks",
  "Know-how to run production-grade AI agents",
  "Boost talent engagement, brand visibility, and innovation",
];

const EVENT_DETAILS = [
  {
    title: "Registration Fees",
    desc: "INR 45,000/- (This includes delegate passes for AI MAX Conclave 2026)",
  },
  {
    title: "Team Size",
    desc: "A maximum of 3 people are allowed per team",
  },
  {
    title: "Who can attend",
    desc: "GCCs, Enterprises, Startups, Provider firms, Students and, well, all AI enthusiasts!",
  },
  {
    title: "Expected Outputs:",
    desc: "Prototype, Demo, Presentation Deck, Short Video, Codes in GitHub Repo",
  },
];

const JUDGING_CRITERIA = [
  {
    title: "Innovation",
    desc: "Originality, creativity, and differentiation",
  },
  {
    title: "Relevance",
    desc: "Alignment to GCC transformation outcomes",
  },
  {
    title: "Technical Execution",
    desc: "Architecture, code quality, scalability",
  },
  {
    title: "Experience Design",
    desc: "Usability, clarity, adoption readiness",
  },
  {
    title: "Demo & Storytelling",
    desc: "Impact narrative and presentation quality",
  },
];

const AWARDS = [
  {
    title: "Winner (First Place)",
    desc: "This is the flagship award of AgentMaX, awarded to the overall best-performing team that stands out across all judging criteria, recognising the team whose solution demonstrates both vision and execution excellence.",
  },
  {
    title: "First Runner-Up (Second Place)",
    desc: "Given to a team that delivers an exceptional solution with strong creativity, technical soundness, and enterprise relevance, but narrowly misses the top spot.",
  },
  {
    title: "Second Runner-Up (Third Place)",
    desc: "Recognises a team that shows remarkable innovation and execution, demonstrating unique strengths in areas such as technical architecture, problem-solving, or user experience.",
  },
];

const PLACEHOLDER_PHOTO_2 =
  "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800";

function Logo({ size = "nav" }: { size?: "nav" | "hero" }) {
  return (
    <img
      src="/images/logo.avif"
      alt="3AI | Sash.Ai"
      className={size === "hero" ? "h-20 w-auto sm:h-24 md:h-28" : "h-14 w-auto"}
    />
  );
}

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent px-8 py-6 md:px-40">
      <Logo size="hero" />
      <ul className="hidden items-center gap-10 text-sm font-medium text-white/80 md:flex">
        {NAV_LINKS.map((link, i) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={
                i === 0
                  ? "text-white underline decoration-2 underline-offset-8"
                  : "text-[#00ffff]/90 transition-colors hover:text-white"
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
      <VideoBackground src="/videos/bg-2.mp4" />
      <div className="relative z-10 flex flex-col items-center">
        <Logo size="hero" />
        <h1 className="mt-2 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#aaffff] to-[#00ffff] drop-shadow-[0_0_25px_rgba(0,255,255,0.35)] sm:text-7xl md:text-8xl">
          AgentMaX
        </h1>

        <p className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#ffffff] sm:text-4xl md:text-5xl">
          India's largest Agentic AI Hackathon
        </p>

        <p className="mt-4 max-w-xl text-base text-[#ffffff] sm:text-lg">
          Embark on a journey to build the next generation of AI agents
        </p>

        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {INFO_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-sm text-[#ffffff]">{item.label}</span>
              <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-[#00ffff]/30 bg-[#0a1a2b]/70 px-3 py-4">
                <span className="text-sm font-semibold text-[#00ffff] sm:text-base">
                  {item.value}
                </span>
                {item.sub && (
                  <span className="mt-1 text-[11px] text-[#00ffff]/70">
                    {item.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="mt-16 rounded-full border border-white/70 px-10 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-[#060b14]"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}

function RegistrationCountdown() {
  return (
    <section className="relative flex flex-col items-center gap-10 px-6 py-24 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Registration countdown</h2>
      <CountdownTimer />
    </section>
  );
}

function About() {
  return (
    <section className="relative grid grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-16">
      <div>
        <h2 className="text-4xl font-extrabold text-[#00ffff] sm:text-5xl">
          About AgentMaX
        </h2>
        <p className="mt-6 text-lg text-white/90">
          A launchpad for <strong>Agentic AI innovation</strong>, where autonomous
          AI agents don't just respond, they reason, act, and collaborate
        </p>
        <p className="mt-4 text-white/80">AgentMaX is more than a hackathon; it's a platform to:</p>
        <ul className="mt-4 space-y-2 text-white/80">
          {ABOUT_BULLETS.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-[#00ffff]">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <img
        src="/images/about.avif"
        alt="AgentMaX participants"
        className="w-full rounded-xl object-cover shadow-xl"
      />
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="relative px-6 py-24 text-center md:px-16">
      <h2 className="text-4xl font-extrabold text-[#00ffff] sm:text-5xl">
        Why join AgentMax?
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-8 rounded-xl bg-[#0a3a3a]/30 p-8 backdrop-blur-sm md:grid-cols-2">
        <img
          src={PLACEHOLDER_PHOTO_2}
          alt="Team collaborating"
          className="w-full rounded-lg object-cover"
        />
        <ul className="space-y-4 text-left text-lg text-[#ffffff]">
          {WHY_JOIN.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#00ffff]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TheEvent() {
  return (
    <section id="event" className="relative px-6 py-24 text-center md:px-16">
      <h2 className="text-4xl font-extrabold text-[#00ffff] sm:text-5xl">The Event</h2>
      <p className="mt-4 text-white/80">The event details and timelines are as follows</p>
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-16 text-left sm:grid-cols-2">
        {EVENT_DETAILS.map((item) => (
          <div key={item.title}>
            <h3 className="text-xl font-bold text-[#00ffff]">{item.title}</h3>
            <p className="mt-2 text-[#ffffff]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-[#0d1733]/60 backdrop-blur-sm">
        <img src="/images/timeline.png" alt="Timeline" className="w-full opacity-95" />
      </div>
    </section>
  );
}

function JudgingCriteria() {
  return (
    <section className="relative px-6 py-24 text-center md:px-16">
      <h2 className="text-4xl font-extrabold text-[#00ffff] sm:text-5xl">
        Judging Criteria
      </h2>
      <p className="mt-4 text-[#ffffff]">20% weightage to each</p>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {JUDGING_CRITERIA.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 rounded-xl bg-[#0a1a2b]/40 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#00ffff] text-xl font-extrabold text-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.35)]">
              20%
            </div>
            <h3 className="text-lg font-bold text-[#00ffff]">{item.title}</h3>
            <p className="text-sm text-[#ffffff]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="award" className="relative px-6 py-24 text-center md:px-16">
      <h2 className="text-4xl font-extrabold text-[#00ffff] sm:text-5xl">Awards</h2>
      <div className="mx-auto mt-12 max-w-3xl space-y-10 rounded-xl bg-[#2a1a63]/30 p-10 backdrop-blur-sm">
        {AWARDS.map((award) => (
          <div key={award.title}>
            <h3 className="text-2xl font-bold text-[#00ffff]">{award.title}</h3>
            <p className="mt-3 text-white/90">{award.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative flex flex-col gap-4 bg-[#0a0f1c] px-6 py-12 text-sm text-white/80 md:flex-row md:items-end md:justify-between md:px-16">
      <div>
        <p className="font-semibold text-white">CONTACT</p>
        <p className="mt-2">+91-89512-80606</p>
        <a href="mailto:punya@sashai.tech" className="underline">
          punya@sashai.tech
        </a>
        <p className="mt-4">
          <a href="/terms" className="underline">
            TERMS AND CONDITIONS
          </a>
        </p>
      </div>
      <p>© 2026. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060b14] text-white">
      <Navbar />
      <Hero />

      <div className="relative">
        <VideoBackground src="/videos/bg-1.mp4" />
        <div className="relative z-10">
          <RegistrationCountdown />
          <About />
          <WhyJoin />
          <TheEvent />
          <Timeline />
          <JudgingCriteria />
          <Awards />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
