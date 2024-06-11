import Navigation from "@/components/navigation"
import type { Metadata } from "next"
import "./globals.css"

//cSpell:ignore Chozzaman's
export const metadata: Metadata = {
  title: "Chozzaman's blog",
  description: "Hi! Thank you for visiting my blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between">
        <Navigation />
        {children}
        <footer className="mt-auto py-4 text-[0.8rem]">
          2024 Song Yongseung
        </footer>
      </body>
    </html>
  )
}
