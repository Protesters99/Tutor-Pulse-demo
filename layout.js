import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TutorPulse - Automated Home-Lesson Job Matching",
  description:
    "Never miss a tutoring opportunity again. TutorPulse automatically finds and applies to perfect tutoring jobs for you.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}