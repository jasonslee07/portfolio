import { hero, profile, RESUME_PATH } from "../data/content"
import Reveal from "../lib/Reveal"
import { GitHubIcon, LinkedInIcon, PhoneIcon } from "./BrandIcons"
import EmailCopy from "./EmailCopy"

const FACTS = ["B.S. Computer Science", "3.97 GPA", "College Park, MD", "U.S. Citizen"]

const CONTACTS = [
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28">
        <Reveal className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.eyebrow}
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="mt-8 max-w-4xl text-balance font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-7 max-w-2xl font-serif text-xl italic leading-relaxed text-ink-soft sm:text-2xl"
        >
          {hero.subhead}
        </Reveal>

        <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <EmailCopy />
          <span className="inline-flex items-center gap-2 text-sm text-ink-soft">
            <PhoneIcon className="h-[18px] w-[18px] shrink-0" />
            {profile.phone}
          </span>
          {CONTACTS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              <span className="link-underline">{label}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={300} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            See the work
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Download résumé
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={320} className="mt-14 flex items-center gap-2 text-sm text-muted">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">Now</span>
          <span aria-hidden className="h-px w-5 bg-line-strong" />
          <span>
            {profile.availability}
          </span>
        </Reveal>
      </div>

      <div className="border-y border-line">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 py-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {FACTS.map((fact) => (
              <li key={fact} className="nums flex items-center gap-8">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
