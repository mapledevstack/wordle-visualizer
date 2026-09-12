import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Wordle Visualizer",
  description:
    "A Wordle strategy visualizer to learn about Information Theory and how to play Wordle optimally.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
