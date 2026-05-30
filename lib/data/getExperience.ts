import type { Experience } from "@/lib/notion/types"

export async function getExperience(): Promise<Experience[]> {
  // Mock data - replace with your own experience
  return [
    {
      id: "1",
      time: "07/2025 - Present",
      title: "Senior AI Engineer",
      description: [
        "-Processed 300K+ legal records with multimodal AI document intelligence systems.",
        "-Reduced AI inference costs by 70% through intelligent VLM routing.",
        "-Achieved 97% OCR accuracy using PaddleOCR, Claude Vision, and automated quality scoring.",
        "-Architected scalable GCP-based AI infrastructure for enterprise workflows.",
        "-Reduced deployment time by 70% with Kubernetes and Metaflow MLOps automation.",
      ],
      experienceUrl: "https://www.mediciland.com",
      experienceName: "Medici Land Governance.",
    },
    {
      id: "2",
      time: "11/2024 - 07/2025",
      title: "Machine Learning Engineer (Contract)",
      description: [
        "-Processed 10M+ daily images with scalable anomaly-detection infrastructure.",
        "-Reduced deployment time by 70% through MLOps automation.",
        "-Cut annotation effort by 60% with active-learning workflows.",
        "-Improved YOLO inference speed by 5× using TensorRT optimization.",
        "-Increased model-training throughput by 40% with mixed-precision training.",
      ],
      experienceUrl: "https://rios.ai/",
      experienceName: "RIOS Intelligent Machines.",
    },
    {
      id: "3",
      time: "02/2022 – 04/2024",
      title: "Senior Full-Stack Software Engineer",
      description: [
        "-Developed AI identity verification and fraud-detection systems using RAG and vector search.",
        "-Built Pinecone-powered GraphQL APIs for semantic entity matching.",
        "-Designed scalable LLM-driven enrichment and retrieval services.",
        "-Reduced verification false positives by 32% with GPT-based entity resolution.",
        "-Supported 100K+ concurrent users with AWS authentication infrastructure.",
        "-Reduced infrastructure costs by 20% through AWS serverless migration.",
        "-Cut identity verification time by 40% with a React Native platform."
      ],
      experienceUrl: "https://www.redviolet.com/",
      experienceName: "Red Violet",
    },
    {
      id: "4",
      time: "02/2021 – 02/2022",
      title: "Senior Full-Stack Software Engineer",
      description: [
        "-Built SaaS platform serving 50K+ users and generating $100K+ quarterly revenue.",
        "-Designed Pinecone-powered AI enrichment APIs for semantic search.",
        "-Developed real-time entity visualization systems using React, D3.js, and Kafka.",
        "-Automated CI/CD with GitHub Actions and Terraform, enabling zero-downtime releases.",
        "-Reduced infra overhead by 25% via AWS Fargate microservices.",
        "-Mentored engineers in scalable frontend and backend architecture."
      ],
      experienceUrl: "https://www.peopledatalabs.com",
      experienceName: "People Data Labs",
    },
    {
      id: "5",
      time: "08/2020 – 01/2021",
      title: "Full-Stack Software Engineer",
      description: [
        "-Built AWS/Python backend for customs automation, reducing processing time by 25%.",
        "-Provisioned cloud infrastructure using Terraform (EC2, RDS, DynamoDB, serverless).",
        "-Improved backend performance, cutting response times by 35%.",
        "-Enhanced reliability with AWS X-Ray observability and Pytest testing pipelines.",
      ],
      experienceUrl: "https://www.nike.com",
      experienceName: "Nike",
    },
    {
      id: "6",
      time: "03/2018 – 08/2020",
      title: "Full-Stack Software Engineer",
      description: [
        "-Built fundraising platforms generating $1M+ weekly donations using React, Next.js, and Node.js.",
        "-Developed real-time donation analytics systems with Node.js and MongoDB.",
        "-Increased organic traffic by 50% via Next.js SSR optimization.",
        "-Reduced bugs by 40% using Jest and Cypress automation.",
        "-Achieved 98% Lighthouse score and WCAG 2.1 accessibility compliance."
      ],
      experienceUrl: "https://www.insite.net",
      experienceName: "Insite",
    },
    {
      id: "7",
      time: "06/2016 – 02/2018",
      title: "Software Engineer",
      description: [
        "-Built React dashboards for portfolio managers, reducing decision latency by 25%.",
        "-Migrated legacy Backbone.js systems to modern React architecture.",
        "-Developed Node.js + PostgreSQL APIs for financial data systems.",
        "-Built Kafka real-time notification pipelines for market updates.",
        "-Improved PostgreSQL query performance by 35% through optimization."
      ],
      experienceUrl: "https://www.mackeyrms.com/",
      experienceName: "MackeyRMS",
    },
  ]
}
