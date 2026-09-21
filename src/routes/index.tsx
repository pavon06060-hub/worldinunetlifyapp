import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Globe2,
  LockKeyhole,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const xUrl = 'https://x.com/XWORLDINU'
const pumpUrl = 'https://join.pump.fun/HSag/l9zvl1sd'
const whitepaperUrl = '/WorldInu_Whitepaper_v1.0.pdf'
const tokenCA = '9w4yMoU9vgsUGdp923Q8T7oGbTzpstj2aEi7vu58pump'

const features = [
  { icon: Globe2, name: 'INU Explorer', copy: 'Discover Inu projects and navigate the wider ecosystem from one hub.', action: 'Explore' },
  { icon: BookOpenCheck, name: 'INU Passport', copy: 'Structured project profiles with source-backed information and review status.', action: 'Get your Passport' },
  { icon: ScanSearch, name: 'INU Scanner', copy: 'Review token details, project signals and community-submitted information before you ape in.', action: 'Scan a Project' },
  { icon: WalletCards, name: 'INU Vault', copy: 'A future home for ecosystem tools, resources and community utilities.', action: 'Open Vault' },
  { icon: Users, name: 'Community', copy: 'Join a global community of Inu lovers, builders and contributors.', action: 'Join on X' },
]

const roadmap = [
  ['01', 'Launch $WINU on Pump.fun', 'Solana'],
  ['02', 'INU Explorer + Passport', 'v1'],
  ['03', 'Scanner tools + Community Hub', 'Build'],
  ['04', 'INU Vault + ecosystem partnerships', 'Expand'],
  ['∞', 'Multi-chain expansion', 'Base · HyperEVM · more'],
]

function WorldInuMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'worldinu-mark small' : 'worldinu-mark'} viewBox="0 0 220 220" role="img" aria-label="WorldInu globe mascot">
      <defs>
        <linearGradient id="globeGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#1ce3ff" />
          <stop offset=".48" stopColor="#6d5cff" />
          <stop offset="1" stopColor="#9b43ff" />
        </linearGradient>
        <linearGradient id="dogGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#c98450" />
          <stop offset=".5" stopColor="#f0bd7f" />
          <stop offset="1" stopColor="#9f5e3c" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="110" cy="110" r="101" fill="#06111f" stroke="url(#globeGradient)" strokeWidth="3" />
      <circle cx="110" cy="110" r="86" fill="none" stroke="#35d9ff" strokeOpacity=".22" strokeWidth="1.5" />
      <path d="M31 102c26 10 53 15 79 15 29 0 55-5 79-16M42 69c20 8 43 11 68 11 25 0 48-4 68-12M44 150c21-8 44-12 67-12 25 0 48 4 67 12M110 24c-21 23-31 52-31 86s10 63 31 86M110 24c22 23 32 52 32 86s-10 63-32 86" fill="none" stroke="#2adcf8" strokeOpacity=".33" strokeWidth="2" />
      <path d="M62 84 78 43l28 31M158 84l-16-41-28 31" fill="url(#dogGradient)" stroke="#d99a61" strokeWidth="4" strokeLinejoin="round" />
      <path d="M66 82c3 58 84 61 88 0-20-18-67-19-88 0Z" fill="url(#dogGradient)" stroke="#e7b479" strokeWidth="4" />
      <path d="M75 95c11-13 58-14 70 0-4 38-61 38-70 0Z" fill="#f2c792" opacity=".88" />
      <circle cx="92" cy="91" r="6" fill="#35e5ff" filter="url(#glow)" />
      <circle cx="128" cy="91" r="6" fill="#35e5ff" filter="url(#glow)" />
      <path d="m103 111 7 6 8-6" fill="#15191f" />
      <path d="M110 117v9m-17 0c9 10 25 10 34 0" fill="none" stroke="#2b211c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="110" cy="110" r="101" fill="none" stroke="#7b61ff" strokeOpacity=".45" strokeWidth="1" strokeDasharray="5 10" />
    </svg>
  )
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const Icon = feature.icon
  const isCommunity = feature.name === 'Community'
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={34} strokeWidth={1.7} /></div>
      <h3>{feature.name}</h3>
      <p>{feature.copy}</p>
      {isCommunity ? (
        <a className="feature-action" href={xUrl} target="_blank" rel="noreferrer">{feature.action} <ArrowUpRight size={15} /></a>
      ) : (
        <span className="feature-action disabled">{feature.action} <ArrowRight size={15} /></span>
      )}
    </article>
  )
}

function Home() {
  return (
    <main id="top">
      <div className="site-glow glow-a" />
      <div className="site-glow glow-b" />

      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">
          <WorldInuMark small />
          <span className="brand-copy"><strong>WorldInu <em>Hub</em></strong><small>One World. Every Inu.</small></span>
        </a>
        <div className="nav-links">
          <a href="#ecosystem">Ecosystem</a>
          <a href="#token">$WINU</a>
          <a href={whitepaperUrl} target="_blank" rel="noreferrer">Whitepaper</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#community">Community</a>
        </div>
        <a className="x-button" href={xUrl} target="_blank" rel="noreferrer"><span>𝕏</span> Join X</a>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">SOLANA <span>✦</span> COMMUNITY <span>✦</span> INUVERSE</div>
          <h1>WorldInu <span>Hub</span></h1>
          <h2>One World. <em>Every Inu.</em></h2>
          <p>WorldInu is building a home for the Inu ecosystem on Solana — discovery, identity, project information and community tools centered around <strong>$WINU</strong>.</p>
          <div className="hero-actions">
            <a className="launch-cta" href={pumpUrl} target="_blank" rel="noreferrer"><Rocket size={18} /> BUY $WINU</a>
            <a className="secondary-cta" href={whitepaperUrl} target="_blank" rel="noreferrer"><BookOpenCheck size={18} /> WHITEPAPER</a>
            <a className="secondary-cta" href={xUrl} target="_blank" rel="noreferrer">𝕏 Follow on X</a>
          </div>
          <div className="hero-proof">
            <span><Globe2 size={19} /> All Inus Welcome</span>
            <span><Users size={19} /> Global Community</span>
            <span><Sparkles size={19} /> Solana Powered</span>
            <span><ShieldCheck size={19} /> Information First</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="planet-ring ring-one" />
          <div className="planet-ring ring-two" />
          <div className="planet-core" />
          <WorldInuMark />
          <div className="orbit-badge badge-one">INU<br />WORLD</div>
          <div className="orbit-badge badge-two">$WINU</div>
          <div className="hero-side-copy">DIFFERENT PROJECTS<br /><strong>ONE HOME</strong><br />WORLDINU</div>
        </div>
      </section>

      <section className="token-panel shell" id="token">
        <div className="token-brand">
          <WorldInuMark small />
          <div><span>THE OFFICIAL TOKEN</span><h2>$WINU <small>WORLDINU</small></h2><p>Community token for the WorldInu ecosystem.</p></div>
        </div>
        <div className="token-meta">
          <span>Network: <strong>Solana</strong></span>
          <span>Launch: <strong>Pump.fun</strong></span>
          <span className="ca-row"><LockKeyhole size={14} /> CA: <strong>{tokenCA}</strong></span>
        </div>
        <div className="token-buy">
          <a className="buy-active" href={pumpUrl} target="_blank" rel="noreferrer"><Rocket size={18} /> Buy $WINU</a>
          <a className="secondary-cta" href={whitepaperUrl} target="_blank" rel="noreferrer"><BookOpenCheck size={16} /> Read Whitepaper</a>
          <small>Official WorldInu launch on Pump.fun.</small>
        </div>
      </section>

      <section className="ecosystem shell" id="ecosystem">
        <div className="section-heading">
          <div><span className="section-kicker">THE INUVERSE</span><h2>More than<br />a meme.</h2></div>
          <p>A community-first ecosystem designed to make Inu projects easier to discover, review and follow.</p>
        </div>
        <div className="feature-grid">{features.map((feature) => <FeatureCard key={feature.name} feature={feature} />)}</div>
      </section>

      <section className="why-roadmap shell">
        <div className="why-panel">
          <span className="section-kicker">WHY WORLDINU?</span>
          <h2>Inu unites<br />the world.</h2>
          <div className="why-list">
            <span><Sparkles /> Built for the wider Inu ecosystem</span>
            <span><BookOpenCheck /> Source-backed project information</span>
            <span><Users /> Community-powered participation</span>
            <span><ScanSearch /> Tools for discovery and review</span>
            <span><Globe2 /> A hub designed to grow across chains</span>
          </div>
          <div className="earth-glow" aria-hidden="true" />
        </div>

        <div className="roadmap-panel" id="roadmap">
          <span className="section-kicker">ROADMAP</span>
          <h2>Build in public.</h2>
          <div className="roadmap-list">
            {roadmap.map(([step, title, meta]) => (
              <div className="roadmap-row" key={step}>
                <span className="roadmap-step">{step}</span>
                <div><strong>{title}</strong><small>{meta}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community shell" id="community">
        <div>
          <span className="section-kicker">FOLLOW THE JOURNEY</span>
          <h2>WorldInu is<br /><em>just getting started.</em></h2>
          <p>Follow the official account for launch updates, product progress and $WINU ecosystem updates.</p>
        </div>
        <a className="community-x" href={xUrl} target="_blank" rel="noreferrer">
          <span>𝕏</span>
          <div><small>OFFICIAL X</small><strong>@XWORLDINU</strong></div>
          <ArrowUpRight />
        </a>
      </section>

      <footer className="footer shell">
        <a className="brand footer-brand" href="#top"><WorldInuMark small /><span className="brand-copy"><strong>WorldInu <em>Hub</em></strong><small>One World. Every Inu.</small></span></a>
        <p>Powered by <strong>Solana</strong> · Live on <strong>Pump.fun</strong></p>
        <span>© 2026 WORLDINU</span>
      </footer>

      <div className="disclaimer shell">WorldInu tools are intended to organize public and community-submitted information. Nothing on this site is financial advice or a guarantee of token or project safety.</div>
    </main>
  )
}
