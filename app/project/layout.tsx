import { getData } from "@/lib/data"
import { Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getData()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-gray-200/80 bg-background/95 backdrop-blur-md shadow-sm dark:border-gray-700 dark:bg-background/95">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <a
              href={data.about?.githubUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1 text-sm font-medium hover:bg-muted dark:border-gray-700"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            {data.about?.linkedinUrl && (
              <a
                href={data.about.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 p-1.5 text-sm font-medium hover:bg-muted dark:border-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/#about" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">About</Link>
            <Link href="/#experience" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Experience</Link>
            <Link href="/#projects" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Projects</Link>
            <Link href="/#contact" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto mt-24 max-w-3xl px-6 py-5 sm:px-8 rounded-lg border-2 border-gray-100 dark:border-gray-600 shadow-md dark:shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2)]">
        {children}
      </div>
    </>
  )
}
