import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getProjectBySlug } from "../../../lib/projects"
import { mdxComponents } from "../../../components/mdx-components"
import Link from "next/link"

type PageProps = {
  params: { slug: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Shivam Anand`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-8 lg:px-16 py-24">
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-lg px-3 py-2 hover:border-muted-foreground/50 transition-colors"
          aria-label="Back to Selected Projects"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </Link>
      </nav>

      <header className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>{project.year}</span>
          <span className="px-2 py-1 bg-muted/30 rounded-md">{project.status}</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-balance">{project.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-muted-foreground bg-muted/30 rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <article role="article" className="space-y-6">
        <MDXRemote source={project.content} components={mdxComponents} />
      </article>
    </main>
  )
}
