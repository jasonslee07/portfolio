import { useState } from "react"
import { projects } from "../data/content"
import Reveal from "../lib/Reveal"
import Section from "./Section"

function CaseStudyRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-6">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint sm:pt-0.5">{label}</p>
      <p className="text-[0.95rem] leading-relaxed text-ink-soft">{body}</p>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section
      id="projects"
      index="02"
      label="Projects"
      title="Things I’ve shipped on my own"
      lead="Personal and hackathon builds — open one to read the case study."
    >
      <div className="flex flex-col">
        {projects.map((project, i) => {
          const isOpen = open === i
          const panelId = `project-panel-${i}`
          return (
            <Reveal
              key={project.name}
              delay={i * 70}
              className="border-t border-line first:border-t-0"
            >
              <article>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group flex w-full flex-col gap-4 py-8 text-left"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                        {project.domain}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                        {project.name}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className={`mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full border text-ink transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-accent text-accent"
                          : "border-line-strong group-hover:border-ink"
                      }`}
                    >
                      ↓
                    </span>
                  </div>

                  <p className="max-w-xl text-[0.975rem] leading-relaxed text-ink-soft">
                    {project.blurb}
                  </p>

                  <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </button>

                <div
                  id={panelId}
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-5 border-l border-line pb-9 pl-5 sm:pl-7">
                      <CaseStudyRow label="Problem" body={project.caseStudy.problem} />
                      <CaseStudyRow label="Approach" body={project.caseStudy.approach} />
                      <CaseStudyRow label="Result" body={project.caseStudy.result} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
