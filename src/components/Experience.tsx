import { experience } from "../data/content"
import Reveal from "../lib/Reveal"
import Section from "./Section"

export default function Experience() {
  return (
    <Section
      id="work"
      index="01"
      label="Experience"
      title="Working hard or hardly working?"
      // lead="Internships and research, most recent first."
    >
      <ol className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.company}
            delay={i * 70}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold tracking-tight text-ink">
                  {job.company}
                  {job.current ? (
                    <span className="inline-flex items-center rounded-full bg-accent-wash px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent">
                      Current
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 text-ink-soft">
                  {job.role}
                  <span className="text-faint"> · {job.location}</span>
                </p>
              </div>
              <p className="nums shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {job.period}
              </p>
            </div>

            <ul className="mt-5 flex flex-col gap-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.975rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
