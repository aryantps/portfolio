import {
  Github,
  ExternalLink,
  Cpu,
  GitBranch,
  Database,
  FileJson,
} from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Process Intelligence & Knowledge Graph",
    icon: <Database size={28} />,
    description:
      "Built a pipeline that converts event logs (XES/JSON) and BPMN process models into an RDF knowledge graph using BBO, enabling trace-level analytics and semantic reasoning.",
    architecture:
      "Event Logs → RDF Pipeline → Config-Driven Ontology Matcher → Semantic Model",
    challenges:
      "Enhanced the semantic model to distinguish process definitions vs. runtime executions for accurate event-to-model alignment across executions.",
    stack: ["Python", "Knowledge Graphs", "ETL", "Ontology Matching"],
    github: "#",
    demo: "#",
  },
  {
    title: "Manufacturing Digital Twin System",
    icon: <Cpu size={28} />,
    description:
      "Built a hierarchical digital twin graph using Azure Digital Twins SDK with automated twin instance generation via customized Pydantic models. Developed FastAPI-based CRUD APIs for digital twin assets and schedules.",
    architecture:
      "Digital Twin Consortium DTDL → Azure Digital Twins → Pydantic Models → FastAPI",
    challenges:
      "Extended DTDL-based manufacturing ontologies for Offshore Wind Farm Development, modeling complex logistics concepts like vessel grillage compatibility and sailing durations.",
    stack: ["FastAPI", "Azure Digital Twins", "Python", "Pydantic"],
    github: "#",
    demo: "#",
  },
  {
    title: "Distributed Airflow Orchestrator Wrapper",
    icon: <FileJson size={28} />,
    description:
      "Architected and developed a RESTful wrapper around AWS Managed Airflow (MWAA) to manage ETL workflows, enabling job submission, status tracking, subtask management, and failed task recovery.",
    architecture: "API Gateway → REST API Wrapper → AWS MWAA → ETL Workflows",
    challenges:
      "Designed cloud infrastructure with Terraform to improve scalability, automation, and security, creating a seamless Airflow experience for end users.",
    stack: ["Python", "AWS MWAA", "Terraform", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Distributed Load Balancer",
    icon: <GitBranch size={28} />,
    description:
      "Implemented a distributed load balancer that routes requests across backend servers using configurable algorithms.",
    architecture:
      "Client → Load Balancer Node → Configurable Routing Algorithm → Target Servers",
    challenges:
      "Developed robust routing algorithms ensuring high availability and fault tolerance across distributed backend nodes.",
    stack: ["Python", "Networking", "Distributed Systems", "Algorithms"],
    github: "https://github.com/",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-header">production_systems</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <div className="project-title-row">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    aria-label="Live System Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <p className="project-desc">{project.description}</p>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Architecture:</span>
                    <code className="detail-value mono">
                      {project.architecture}
                    </code>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Engineering Challenge:</span>
                    <span className="detail-value">{project.challenges}</span>
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
