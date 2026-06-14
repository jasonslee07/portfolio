import type { ReactNode } from "react"
import Reveal from "../lib/Reveal"

type SectionProps = {
  id: string
  index: string
  label: string
  title: ReactNode
  lead?: ReactNode
  children: ReactNode
}

export default function Section({ id, index, label, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4 lg:pr-8">
            <Reveal className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                <span className="nums">{index}</span>
                <span aria-hidden className="h-px w-6 bg-line-strong" />
                <span>{label}</span>
              </div>
              <h2 className="mt-5 font-sans text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
              {lead ? (
                <p className="mt-4 max-w-sm font-serif text-lg italic leading-snug text-muted">
                  {lead}
                </p>
              ) : null}
            </Reveal>
          </div>

          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  )
}
