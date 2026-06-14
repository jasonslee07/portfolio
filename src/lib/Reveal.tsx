import { useEffect, useRef, useState } from "react"
import type { CSSProperties, ElementType, ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(() => typeof IntersectionObserver === "undefined")

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return

    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShown(true)
            observer?.disconnect()
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      )
      observer.observe(el)
    }

    const fallback = window.setTimeout(() => {
      const viewport = window.innerHeight || document.documentElement.clientHeight
      if (el.getBoundingClientRect().top < viewport) setShown(true)
    }, 1200)

    return () => {
      observer?.disconnect()
      window.clearTimeout(fallback)
    }
  }, [shown])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
