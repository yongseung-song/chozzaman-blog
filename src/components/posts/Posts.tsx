export default async function fetchPosts() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
    method: "GET",
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  return <div>씨발!</div>
}
