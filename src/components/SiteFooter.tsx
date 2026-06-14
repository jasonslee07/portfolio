import { profile } from "../data/content"

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-mono uppercase tracking-[0.12em]">
          {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-5">
          <span className="font-mono tracking-tight text-faint">
            Last updated June 2026
          </span>
          <a
            href="#top"
            className="font-mono uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
