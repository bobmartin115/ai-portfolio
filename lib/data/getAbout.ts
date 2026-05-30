import type { About } from "@/lib/notion/types"

export async function getAbout(): Promise<About | null> {
  // Mock data - replace with your own information
  return {
    id: "1",
    title: "Senior AI Engineer",
    description:
      "I'm William Yamaguchi, a Senior AI Engineer with 8+ years of experience building large-scale AI platforms, distributed systems, and cloud-native applications across document intelligence, robotics, identity verification, fintech, and government technology..",
    contact: "williamyamaguchi@gmail.com",
    tags: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PyTorch",
      "LangChain",
      "AWS",
      "GCP",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Node.js",
      "Django",
      "Flask",
      "GraphQL",
      "REST APIs",
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "D3.js",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Pinecone",
      "Wevaviate",
    ],

    githubUrl: "https://github.com/chickenengineer-ops",
    linkedinUrl: "https://www.linkedin.com/in/william-yamaguchi/",
  }
}
