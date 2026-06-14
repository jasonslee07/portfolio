import type { ReactNode } from "react"
import { skills } from "../data/content"
import Reveal from "../lib/Reveal"
import Section from "./Section"

function Row({
  label,
  children,
  delay = 0,
}: {
  label: string
  children: ReactNode
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      className="grid gap-3 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-8"
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint sm:pt-1.5">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </Reveal>
  )
}

const strong =
  "rounded-full border border-ink/25 bg-ink/[0.03] px-3 py-1.5 text-sm font-medium text-ink"
const soft =
  "rounded-full border border-line bg-paper-raised px-3 py-1.5 text-sm text-muted"

export default function Skills() {
  const langs = skills.groups[0]
  return (
    <Section id="skills" index="04" label="Toolbox" title="What I build with">
      <div className="flex flex-col">
        <Row label="Strongest">
          {langs.primary.map((t) => (
            <span key={t} className={strong}>
              {t}
            </span>
          ))}
        </Row>
        <Row label="Familiar" delay={60}>
          {langs.familiar.map((t) => (
            <span key={t} className={soft}>
              {t}
            </span>
          ))}
        </Row>
        <Row label="Web" delay={120}>
          {skills.web.map((t) => (
            <span key={t} className={strong}>
              {t}
            </span>
          ))}
        </Row>
        <Row label="Tools" delay={180}>
          {skills.tools.map((t) => (
            <span key={t} className={soft}>
              {t}
            </span>
          ))}
        </Row>
      </div>
    </Section>
  )
}
