import Link from "next/link"
import { getAllPosts } from "../lib/posts"
import ClientHome from "../components/client-home"

export default function Home() {
  const posts = getAllPosts()

  return (
    <ClientHome posts={posts} />
  )
}