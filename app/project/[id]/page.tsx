import { getProjectDetails } from "@/lib/data/getProjectsDetail"
import { Badge } from "@/components/ui/badge"

export default async function ProjectPage({
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const projects = await getProjectDetails()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Project not found</h1>
        <p className="text-muted-foreground">No project data found for id: {id}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
        {project.technicalskills && (
          <div className="flex flex-col gap-2 mt-6">
            {project.technicalskills.map((s: string) => (
              <Badge
                key={s}
                variant="secondary"
                className="h-6 px-2 py-0 text-xs w-fit"
              >
                {s}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <div className="space-y-6">
        {project.Keyprojects.map((kp: any) => (
          <article
            key={kp.id}
            className="rounded-2xl border border-border bg-background/90 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground">{kp.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{kp.description}</p>

            {kp.implementation && kp.implementation.length > 0 && (
              <section className="mt-4">
                <h3 className="text-sm font-medium text-foreground">Implementation</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {kp.implementation.map((imp: string, idx: number) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </section>
            )}

            {kp.impact && kp.impact.length > 0 && (
              <section className="mt-4">
                <h3 className="text-sm font-medium text-foreground">Impact</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {kp.impact.map((imp: string, idx: number) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
