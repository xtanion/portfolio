import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getProjectBySlug } from "../../../lib/projects"
import { mdxComponents } from "../../../components/mdx-components"
import { BackButton } from "../../../components/back-button"
import { ThemeToggle } from "../../../components/theme-toggle"

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
      <nav className="mb-8 flex items-center justify-between">
        <BackButton />
        <ThemeToggle />
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
