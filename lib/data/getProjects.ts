import type { Project } from "@/lib/notion/types"

export async function getProjects(): Promise<Project[]> {
  // Mock data - replace with your own projects
  return [
    {
      id: "1",
      title: "Medici Land Governance(Land and Court Document Intelligence)",
      description:
        "Powering Land Title Administration with Generative AI and Blockchain to drive financial inclusion in developing nations. The AI platform automates the digitization and validation of land and court records, enabling secure property rights and transparent land registries.",
      tags: [],
      previewLink: "",
    },
    {
      id: "2",
      title: "RIOS Intelligent Machines",
      description:
        "Developing advanced computer vision and ML infrastructure for robotics applications at RIOS Intelligent Machines.",
      tags: [],
      previewLink: "",
    },
  ]
}
