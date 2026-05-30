import { getProjectDetails } from "@/lib/data/getProjectsDetail"
import { Badge } from "@/components/ui/badge"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const projects = await getProjectDetails()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="space-y-6">
        <h1 className="text-foreground text-3xl font-bold">
          Project not found
        </h1>
        <p className="text-muted-foreground">
          No project data found for id: {id}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold">{project.title}</h1>
        {project.technicalskills && (
          <div className="mt-6 flex flex-col gap-2">
            {project.technicalskills.map((s) => (
              <Badge key={s.toString()} variant="secondary">
                {s.toString()}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <div className="space-y-6">
        {project.Keyprojects.map((kp: any) => (
          <article
            key={kp.id}
            className="border-border bg-background/90 rounded-2xl border p-6 shadow-sm"
          >
            <h2 className="text-foreground text-xl font-semibold">
              {kp.title}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              {kp.description}
            </p>

            {kp.implementation && kp.implementation.length > 0 && (
              <section className="mt-4">
                <h3 className="text-foreground text-sm font-medium">
                  Implementation
                </h3>
                <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1 text-sm">
                  {kp.implementation.map((imp: string, idx: number) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </section>
            )}

            {kp.impact && kp.impact.length > 0 && (
              <section className="mt-4">
                <h3 className="text-foreground text-sm font-medium">Impact</h3>
                <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1 text-sm">
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
