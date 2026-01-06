import Link from "next/link"
import { getAllPosts } from "../lib/posts"
import { getAllProjects } from "../lib/projects"
import ClientHome from "../components/client-home"

export default function Home() {
  const posts = getAllPosts()
  const projects = getAllProjects()

  return (
    <ClientHome posts={posts} projects={projects} />
  )
}