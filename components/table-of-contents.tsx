"use client"

import { useEffect, useState, useRef } from "react"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 1500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block transition-opacity duration-300 ${
      isScrolling ? "opacity-100" : "opacity-0"
    }`}>
      <div className="flex flex-col gap-3 border-border/20">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className="flex items-center gap-3 group"
            aria-label={`Navigate to ${heading.text}`}
          >
            <div className={`w-0.5 h-6 transition-all duration-500 ${
              activeId === heading.id ? "bg-foreground" : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`} />
            <span className={`text-xs font-mono transition-all duration-500 max-w-[120px] truncate ${
              activeId === heading.id ? "text-foreground" : "text-muted-foreground/30 group-hover:text-muted-foreground/60"
            } ${heading.level === 3 ? "ml-2" : ""}`}>
              {heading.text}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
