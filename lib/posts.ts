export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // MDX
};

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'blogs')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  const allPosts = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const slug = name.replace(/\.mdx$/, '')
      const fullPath = path.join(blogsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        tags: data.tags || [],
        content,
      } as Post
    })

  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      content,
    } as Post
  } catch {
    return undefined
  }
}
