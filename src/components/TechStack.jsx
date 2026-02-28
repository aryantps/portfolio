import {
  Code2,
  Server,
  Database,
  CloudSnow,
  Workflow,
  Layers,
} from "lucide-react";
import "./TechStack.css";

const stackCategories = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    skills: ["Python", "SQL", "JavaScript/NodeJS"],
    color: "#e2e8f0",
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    skills: [
      "FastAPI",
      "RESTful APIs",
      "gRPC",
      "Protocol Buffers",
      "Microservices",
    ],
    color: "#00e5ff",
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["PostgreSQL", "BigQuery", "Firestore", "Elasticsearch", "Redis"],
    color: "#8a2be2",
  },
  {
    title: "Cloud & DevOps",
    icon: <CloudSnow size={24} />,
    skills: [
      "AWS (MWAA, ECS, S3, EC2)",
      "GCP (Cloud Run)",
      "Docker",
      "Terraform",
      "CI/CD",
    ],
    color: "#ff7b72",
  },
  {
    title: "Data & Orchestration",
    icon: <Workflow size={24} />,
    skills: [
      "Apache Airflow",
      "ETL Pipelines",
      "Knowledge Graphs",
      "Process Mining",
    ],
    color: "#e5c07b",
  },
  {
    title: "Architecture & Tools",
    icon: <Layers size={24} />,
    skills: [
      "Distributed Systems",
      "SAGA Pattern",
      "System Design",
      "JIRA",
      "QGIS",
    ],
    color: "#7ee787",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <h2 className="section-header">tech_stack</h2>

        <div className="stack-grid">
          {stackCategories.map((category, index) => (
            <div key={index} className="stack-card card">
              <div
                className="stack-card-header"
                style={{ color: category.color }}
              >
                {category.icon}
                <h3 className="stack-card-title">{category.title}</h3>
              </div>
              <ul className="stack-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="stack-item">
                    <span
                      className="stack-bullet"
                      style={{ backgroundColor: category.color }}
                    ></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
