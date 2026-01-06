import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug } from "../../../lib/posts"
import { mdxComponents } from "../../../components/mdx-components"
import { BackButton } from "../../../components/back-button"
import { ThemeToggle } from "../../../components/theme-toggle"

type PageProps = {
  params: { slug: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Jordan Chen`,
    description: post.excerpt,
  }
}

export default function ThoughtPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-8 lg:px-16 py-24">
      <nav className="mb-8 flex items-center justify-between">
        <BackButton />
        <ThemeToggle />
      </nav>

      <header className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-balance">{post.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-muted-foreground bg-muted/30 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article role="article" className="space-y-6">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  )
}
