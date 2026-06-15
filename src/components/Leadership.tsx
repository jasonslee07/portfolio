import { leadership } from "../data/content"
import Reveal from "../lib/Reveal"
import Section from "./Section"

export default function Leadership() {
  return (
    <Section
      id="leadership"
      index="05"
      label="Leadership"
      title="Beyond coding"
      // lead="A decade of Scouting and a habit of teaching what I learn."
    >
      <ol className="flex flex-col">
        {leadership.map((role, i) => (
          <Reveal
            as="li"
            key={role.org}
            delay={i * 70}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{role.org}</h3>
                <p className="mt-1 text-ink-soft">{role.role}</p>
              </div>
              <p className="nums shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {role.period}
              </p>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.975rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
