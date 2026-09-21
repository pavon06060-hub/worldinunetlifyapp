import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowUpRight, BadgeCheck, BookOpenCheck, Globe2, ScanSearch, ShieldCheck, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const pillars = [
  { number: '01', icon: ScanSearch, name: 'INU Scanner', label: 'VERIFY', copy: 'Cut through the noise. Check project signals, token details, and community-submitted information in one clear view.', tone: 'orange' },
  { number: '02', icon: BookOpenCheck, name: 'INU Passport', label: 'IDENTIFY', copy: 'A living identity for Inu projects—bringing the story, links, milestones, and community presence together.', tone: 'cream' },
  { number: '03', icon: Globe2, name: 'Inu World', label: 'DISCOVER', copy: 'Explore the wider Inu ecosystem without hopping between scattered feeds, lists, and forgotten bookmarks.', tone: 'yellow' },
]

function InuMark({ small = false }: { small?: boolean }) {
  return <svg className={small ? 'inu-mark small' : 'inu-mark'} viewBox="0 0 160 160" role="img" aria-label="WorldInu globe and Inu mark">
    <circle cx="80" cy="80" r="69" fill="#ff5a1f" stroke="currentColor" strokeWidth="7" />
    <path d="M31 47c17 12 33 16 49 15 20-1 36-8 50-20M22 90c36 16 79 17 116-1M80 12c-16 18-24 41-24 68 0 29 8 51 24 68M80 12c17 18 25 41 25 68 0 29-8 51-25 68" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity=".75" />
    <path d="M48 52 62 35l11 20M87 54l12-19 15 17" fill="#fff3d7" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M54 58c5 34 46 37 54-2-16-10-38-11-54 2Z" fill="#fff3d7" stroke="currentColor" strokeWidth="6" />
    <circle cx="70" cy="68" r="4" fill="currentColor" /><circle cx="94" cy="68" r="4" fill="currentColor" />
    <path d="m77 77 6 5 6-5M83 82v7m-10-1c5 6 15 7 21 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="WorldInu home"><InuMark small /><span>WORLD<span>INU</span></span></a>
      <div className="nav-links"><a href="#ecosystem">Ecosystem</a><a href="#mission">Mission</a><a href="#winunomics">$WINU</a></div>
      <a className="nav-cta" href="#join">ENTER THE WORLD <ArrowUpRight size={16} /></a>
    </nav>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span>●</span> SOLANA NATIVE · COMMUNITY POWERED</div>
        <h1>ONE WORLD.<br /><em>EVERY INU.</em></h1>
        <p>Discover Inu projects. Verify what matters. Build identity. Join a community bringing the whole Inu ecosystem into one place.</p>
        <div className="hero-actions"><a className="button primary" href="#ecosystem">EXPLORE THE VISION <ArrowDown size={17} /></a><span className="launch-note"><i /> LAUNCHING ON PUMP.FUN</span></div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-one"><span>SCANNER</span></div><div className="orbit orbit-two"><span>PASSPORT</span></div><InuMark />
        <div className="sticker sticker-one">BORN<br />ON SOL</div><div className="sticker sticker-two">$WINU</div><Sparkles className="spark spark-one" /><Sparkles className="spark spark-two" />
      </div>
      <div className="hero-index"><span>W·01</span><span>THE INU UNIVERSE<br />STARTS HERE</span></div>
    </section>

    <div className="ticker" aria-label="WorldInu principles"><div>DISCOVER <span>✦</span> VERIFY <span>✦</span> CONNECT <span>✦</span> BUILD <span>✦</span> ONE WORLD · EVERY INU <span>✦</span> DISCOVER <span>✦</span> VERIFY <span>✦</span> CONNECT <span>✦</span></div></div>

    <section className="ecosystem shell" id="ecosystem">
      <div className="section-heading"><div><span className="kicker">THE ECOSYSTEM</span><h2>More than<br />a meme.</h2></div><p>WorldInu begins with culture, then builds the tools that make the Inu world easier to explore, understand, and trust.</p></div>
      <div className="pillar-grid">{pillars.map(({ icon: Icon, ...pillar }) => <article className={`pillar ${pillar.tone}`} key={pillar.name}>
        <div className="pillar-top"><span>{pillar.number}</span><Icon size={30} strokeWidth={1.7} /></div><span className="mini-label">{pillar.label}</span><h3>{pillar.name}</h3><p>{pillar.copy}</p><div className="coming"><i /> IN DEVELOPMENT</div>
      </article>)}</div>
    </section>

    <section className="mission" id="mission"><div className="shell mission-inner">
      <div className="mission-seal"><InuMark /><span>WORLDINU<br />EST. ON SOLANA</span></div>
      <div className="mission-copy"><span className="kicker light">WHY WORLDINU</span><h2>The Inu world is massive.<br /><em>It shouldn’t feel scattered.</em></h2><p>WorldInu is the meeting point: a shared layer for discovery, project identity, useful verification, and community energy—built in the open and powered by the people who show up.</p></div>
      <div className="principles"><div><BadgeCheck /><span><b>OPEN BY DESIGN</b>Built around participation, not gatekeeping.</span></div><div><ShieldCheck /><span><b>VERIFY, DON’T HYPE</b>Tools that help people form their own view.</span></div><div><Globe2 /><span><b>ONE INU WORLD</b>A home for every branch of the ecosystem.</span></div></div>
    </div></section>

    <section className="token shell" id="winunomics"><div className="token-title"><span className="kicker">THE COMMUNITY LAYER</span><h2>$WINU</h2></div><div className="token-body"><p>The culture token at the center of WorldInu. It starts on Pump.fun, grows with its community, and connects participation across the ecosystem.</p><div className="fair-note"><Sparkles size={22} /><span><b>MEME FIRST. UTILITY FOLLOWS.</b>No invented promises. No fake roadmap theatre. We build, share, and grow in public.</span></div></div></section>

    <section className="join" id="join"><div className="join-grid" aria-hidden="true" /><div className="join-content"><span className="kicker light">THE WORLD IS FORMING</span><h2>EARLY<br /><em>LOOKS GOOD</em><br />ON YOU.</h2><p>WorldInu is taking shape. Follow the journey, bring your Inu, and help build the place where the whole ecosystem meets.</p><div className="button launch-button">LAUNCHING SOON <span>↗</span></div></div><div className="join-mark"><InuMark /></div></section>
    <footer className="footer shell"><a className="brand" href="#top"><InuMark small /><span>WORLD<span>INU</span></span></a><p>ONE WORLD. EVERY INU.</p><span>© 2026 WORLDINU · BUILT ON SOLANA</span></footer>
  </main>
}
