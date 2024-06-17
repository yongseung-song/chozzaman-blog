import { ReactNode } from "react"

function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <h1 className="text-xl font-bold">Blog Posts</h1>
      {children}
    </main>
  )
}

export default BlogLayout
