"use client"

import { About as AboutType } from "@/lib/notion/types"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Badge } from "../ui/badge"

interface AboutProps {
  about: AboutType | null
}

export function About({ about }: AboutProps) {
  const { theme } = useTheme()

  if (!about) {
    return null
  }

  const avatarSrc = theme === "dark" ? "/images/dark.jpg" : "/images/white.jpg"

  return (
    <section id="about" className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards delay-300 duration-500">
      <div className="space-y-6">
        {/* Header and Content */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          {/* Left: Introduction */}
          <div className="space-y-3">
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              {about.title}
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mt-7">
              {about.description}
            </p>
          </div>

          {/* Right: Avatar */}
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-border shadow-sm md:h-48 md:w-48">
              <Image
                src={avatarSrc}
                alt={about.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        {about.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {about.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0.5 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
