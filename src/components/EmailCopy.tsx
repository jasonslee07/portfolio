import { useState } from "react"
import { profile } from "../data/content"
import { GmailIcon } from "./BrandIcons"

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function EmailCopy() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {

      const ta = document.createElement("textarea")
      ta.value = profile.email
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      ta.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <span className="inline-flex items-center gap-2 text-sm text-ink-soft">
      <GmailIcon className="h-[18px] w-[18px] shrink-0" />
      <span className="select-all">{profile.email}</span>
      <span className="relative inline-flex">
        <button
          type="button"
          onClick={copy}
          aria-label="Copy email address"
          className="grid h-7 w-7 place-items-center rounded-md border border-line text-muted transition-colors hover:border-ink hover:text-ink"
        >
          {copied ? <CheckIcon className="h-3.5 w-3.5 text-accent" /> : <CopyIcon className="h-3.5 w-3.5" />}
        </button>
        <span
          aria-live="polite"
          className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-ink px-1.5 py-0.5 text-[0.65rem] font-medium text-paper transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          {copied ? "Copied" : ""}
        </span>
      </span>
    </span>
  )
}
