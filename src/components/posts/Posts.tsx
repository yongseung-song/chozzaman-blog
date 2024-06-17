import { Post } from "@/types/types"

export default async function Posts() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
    method: "GET",
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  return (
    <ul>
      {data.map((post: Post) => (
        <li key={post.sys.id}>
          <h3>{post.fields.postTitle.values}</h3>
          <div></div>
        </li>
      ))}
    </ul>
  )
}
