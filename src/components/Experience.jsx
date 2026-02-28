import { Briefcase, Calendar } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Founding Engineer",
    company: "CW",
    period: "April 2025 - Present",
    description:
      "Built a process intelligence and semantic knowledge graph pipeline resolving tracing limits in XES/JSON execution logs.",
    highlights: [
      "Built a process intelligence + semantic knowledge graph pipeline that converts event logs and BPMN process models into an RDF knowledge graph.",
      "Designed a config-driven ontology matching framework to map log attributes and process elements into ontology-aligned entities.",
      "Architected a RESTful wrapper around AWS Managed Airflow (MWAA) to manage ETL workflows and job submission.",
      "Engineered an end-to-end plan generator aligning fabrication and installation constraints to produce lifecycle-consistent monopile transport plans.",
    ],
  },
  {
    role: "Software Engineer",
    company: "UNL Global",
    period: "May 2023 - Apr 2025",
    description:
      "Architected geospatial integration features and orchestrated core ETL pipelines.",
    highlights: [
      "Architected and developed a Bring Your Own Data (BYOD) feature, enabling clients to import geospatial datasets.",
      "Built a wrapper service around Apache Airflow’s REST API to orchestrate and monitor ETL and non-ETL pipelines.",
      "Designed an ontology matcher for automated mapping across datasets.",
      "Implemented high-performance geospatial search APIs for Points of Interest data using Elasticsearch.",
    ],
  },
  {
    role: "SDE-1",
    company: "Gobolt",
    period: "Aug 2021 - May 2023",
    description:
      "Developed and optimized microservices and API gateways for logistics operations.",
    highlights: [
      "Developed multiple CRUD-based microservices using REST and gRPC with Protocol Buffers, backed by PostgreSQL and Firestore.",
      "Built real-time dashboards with Redash, integrated with Google BigQuery for analytics and reporting.",
      "Applied the SAGA pattern in Azure Durable Functions to build eventually consistent workflows.",
      "Improved bulk order processing throughput by 115% through parallelization of activity functions.",
    ],
  },
  {
    role: "Trainee Technology",
    company: "Nagarro",
    period: "Feb 2021 - Aug 2021",
    description: "",
    highlights: [
      "Conduct requirement analysis, feasibility studies, and prepared detailed specifications to support efficient development processes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-header">experience_log</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>

              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <div className="timeline-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
