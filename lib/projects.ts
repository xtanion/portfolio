export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  status: string;
  tech: string[];
  content: string;
};

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjects = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const slug = name.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        year: data.year,
        status: data.status,
        tech: data.tech || [],
        content,
      } as Project
    })

  return allProjects.sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year)
  })
}

export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      year: data.year,
      status: data.status,
      tech: data.tech || [],
      content,
    } as Project
  } catch {
    return undefined
  }
}
