import { Project } from "@/lib/notion/types"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"

export function ProjectItem({
  id,
  title,
  description,
  tags,
}: Project) {
  console.log(id, "id");
  return (
    <div className="border-border bg-background/90 overflow-hidden rounded-3xl border shadow-sm md:grid md:grid-cols-[minmax(240px,40%)_1fr] md:gap-4">
      <div className="border-border bg-muted/70 relative overflow-hidden rounded-t-3xl border-b p-4 md:rounded-l-3xl md:rounded-tr-none md:border-r md:border-b-0 dark:bg-slate-950/70">
        <div className="absolute inset-0 bg-gradient-to-br opacity-95" />
        <div className="relative flex h-56 items-center justify-center overflow-hidden text-center text-slate-950 md:h-full dark:text-slate-100">
          <Image
            src={`/images/${id}.webp`}
            alt={title}
            className="h-full w-full rounded-lg object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-md text-foreground leading-tight font-semibold">
              {title}
            </h3>
          </div>
          <Link
            href={`/project/${id}`}
            aria-label={`View project ${id}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-0"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="h-6 px-2 py-0 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
