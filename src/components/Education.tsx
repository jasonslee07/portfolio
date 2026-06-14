import { education } from "../data/content"
import Reveal from "../lib/Reveal"
import Section from "./Section"

export default function Education() {
  return (
    <Section id="education" index="03" label="Education" title="Schooling">
      <Reveal className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{education.school}</h3>
            <p className="mt-1 text-ink-soft">
              {education.degree} <span className="text-faint">·</span> {education.minor}
            </p>
            <p className="mt-1 text-sm text-muted">{education.location}</p>
          </div>
          <div className="flex shrink-0 gap-8 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">GPA</p>
              <p className="nums mt-0.5 text-lg font-semibold text-ink">{education.gpa}</p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">Graduates</p>
              <p className="nums mt-0.5 text-lg font-semibold text-ink">{education.grad.replace("Expected ", "")}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-line pt-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint sm:pt-1">
            Coursework
          </p>
          <ul className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded-full border border-line bg-paper-raised px-3 py-1.5 text-sm text-muted"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
