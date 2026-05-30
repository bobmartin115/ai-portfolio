import type { ProjectDetail } from "@/lib/notion/types"

export async function getProjectDetails(): Promise<ProjectDetail[]> {
  // Mock data  replace with your own projects
  return [
    {
      id: "2",
      title: "RIOS Intelligent Machines",
      Keyprojects: [
        {
          id: "1",
          title: "Metaflow Workflow for Video Processing & Anomaly Detection",
          description:
            "Redesigned video processing pipeline using Metaflow to create scalable, reproducible ML workflows for anomaly detection.",
          implementation: [
            "Refactored standalone scripts into structured Metaflow workflows with clear separation of concerns.",
            "Implemented YOLObased frame filtering with configurable confidence thresholds.",
            "Created parallel processing architecture using FrameServerHandler for improved throughput.",
            "Added Kubernetes support for elastic scaling of computation resources",
            "Integrated comprehensive logging and statistics tracking for performance monitoring",
          ],
          impact: [
            "Enabled reliable, scalable processing of video data across multiple environments from development to production.",
          ],
        },
        {
          id: "2",
          title: "Dynamic Dataset Management System",
          description:
            "Created advanced data handling infrastructure for sequential video data with temporal relationships.",
          implementation: [
            "Developed factory data loaders for dynamically batched datasets.",
            "Designed systems to organize data samples based on sequence_id while maintaining temporal relationships.",
            "Implemented timestampbased ordering for accurate sequence representation.",
            "Created flexible frame organization by multiple attributes (timestamp, camera, metadata).",
            "Built infrastructure for consistent dataset creation with proper field types and tags.",
          ],
          impact: [
            "Dramatically improved organization of video data, enabling more effective model training on sequential data.",
          ],
        },
        {
          id: "3",
          title: "Bidirectional FiftyOneEncord Integration Pipeline",
          description:
            "Built seamless integration between FiftyOne (dataset management) and Encord (annotation) to create a continuous ML workflow.",
          implementation: [
            "Developed 'Thoth v0' delegated operations pipeline architecture.",
            "Created 5step ML workflow from data sampling to annotation integration.",
            "Implemented automated transfer of filtered datasets for annotation.",
            "Built annotation reimport system for model retraining.",
            "Added video stitching capabilities with configurable parameters.",
          ],
          impact: [
            "Closed the loop between data management and annotation, creating a streamlined workflow for the ML team.",
          ],
        },
        {
          id: "4",
          title: "Custom FiftyOne Data Lens Plugin",
          description:
            "Created a specialized plugin for video frame management and processing.",
          implementation: [
            "Developed 'Thoth Frames Retriever' plugin for efficient frame retrieval.",
            "Implemented multicamera support and complex video sequence handling.",
            "Created batch processing with configurable parameters for performance optimization.",
            "Added automatic sequence stitching for video assembly.",
            "Provided comprehensive installation guides and documentation.",
          ],
          impact: [
            "Enhanced the team's ability to work with complex video data, creating a specialized tool tailored to robotics applications.",
          ],
        },
        {
          id: "5",
          title: "Computer Vision Operators for ML Pipeline",
          description:
            "Designed core ML pipeline components for computer vision workflows.",
          implementation: [
            "Implemented five critical operators for ML pipeline.",
            "Created comprehensive documentation and usage examples.",
          ],
          impact: [
            "Standardized key ML operations, making them accessible through both UI and API interfaces.",
          ],
        },
      ],
      technicalskills: [
        "ML Orchestration: Metaflow, Roboflow, MLFlow",
        "Computer Vision: YOLObased models",
        "Dataset Management: FiftyOne",
        "Annotation: Encord",
        "Infrastructure: Kubernetes, Docker",
        "Video Processing: Custom frame handling",
        "Cloud Storage: AWS S3",
        "Databases: MongoDB",
      ],
    },
    {
      id: "1",
      title: "Medici Land Governance",
      Keyprojects: [
        {
          id: "1",
          title: "Land and Court Document Intelligence",
          description:
            "Powering Land Title Administration with Generative AI and Blockchain to drive financial inclusion in developing nations. The AI platform automates the digitization and validation of land and court records, enabling secure property rights and transparent land registries.",
          implementation: [
            "Computer Vision & Historical Document Restoration.",
            "NLP Bias Detection & Semantic Analysis.",
            "Land Title Administration & Recordability.",
            "MLOps & Production Engineering.",
          ],
          impact: [
            "DocAI Core (Document Intelligence Pipeline): Secondhighest commit contributor on the intelligent document processing (IDP) pipeline.",
            "Drove critical outcomes for document understanding and information extraction: enabled processing of ~200,000 Hamilton County SCAD historical court pages (1850s–1920s) by solving entity extraction correctness (preventing LLM from conflating filename sequence with pagenumber extraction), and established document ontology standards as single source of truth for prompt engineering and schemadriven generation.",
            "Impact includes cost optimization via Anthropic Batch API integration and tierbased ML processing so premium vision/LLM models are used only where needed for production ML at scale.",
            "DocAI:  Substantial feature and reliability contributions to the document processing stack: Hamilton County court document classification and OCR pipeline (PRIA rules, business logic, PII redaction, confidence scoring)",
            "DocAI:  Baltimore largedocument processing (chunking, recovery, GCS retries), Vertex AI migration for Anthropic models, and Shelby County document/organization handling. ",
            "Improved production readiness and multicounty document intelligence support.",
          ],
        },
      ],
      technicalskills: [
        "Generative AI: LLMs (Claude 4.5 Sonnet, Claude 4.5 Haiku, GPT5), VLMs, Prompt Engineering",
        "Computer Vision: OpenCV, Tesseract, PaddleOCR, Layout Analysis",
        "MLOps & Infrastructure: Kubernetes (GKE), KEDA, Kafka, Docker, Prometheus/Grafana",
        "Backend: FastAPI, Celery (Distributed Task Models), Redis, PostgreSQL, ElasticSearch",
        "DevOps & Tooling: Poetry, Ruff, CI/CD, Helm, GitLab CI",
        "Domain: Land Title Systems, Court Systems, Intelligent Document Processing (IDP), NLP, OCR, Semantic Search",
        "Cloud Storage: AWS S3",
        "Databases: MongoDB",
      ],
    },
  ]
}
