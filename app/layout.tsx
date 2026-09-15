import type { Metadata } from "next"
import type { ReactNode } from "react"

import "../src/index.css"
import "../src/styles/App.css"
import "../src/styles/Explanation.css"
import "../src/styles/Wordle.css"

import AppShell from "../src/components/AppShell"

export const metadata: Metadata = {
  title: "Wordle Visualizer",
  description:
    "A Wordle strategy visualizer to learn about Information Theory and how to play Wordle optimally.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
