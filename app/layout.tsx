import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "This is my Portfolio",
  keywords: [
    "Next.js",
    "Notion",
    "Portfolio",
    "Template",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Felipe Giraldo" }],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://portfolio-william.vercel.app/"),
  openGraph: {
    title: "This is my Portfolio ",
    description:
      "This is my Portfolio.",
    url: "https://portfolio-william.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "This is my Portfolio ",
    description:
      "This is my Portfolio.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
