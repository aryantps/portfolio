import { Server, Database, CloudSnow } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-header">about_me</h2>

        <div className="about-content">
          <div className="about-text card">
            <p>
              I am a Backend Engineer with{" "}
              <span className="highlight">4+ years of experience</span>{" "}
              designing and scaling distributed systems, APIs, and cloud-native
              services.
            </p>
            <p>
              My expertise lies in building resilient microservices, system
              design, and robust data pipelines. I have a proven track record of
              delivering high-impact solutions across various domains including
              logistics, retail, and manufacturing digital twins.
            </p>
            <p>
              Throughout my career, I've maintained a strong focus on{" "}
              <span className="highlight">
                cross-functional collaboration, performance optimization, and
                detail-oriented architecture.
              </span>
            </p>
          </div>

          <div className="about-metrics">
            <div className="metric-card">
              <Server size={32} className="metric-icon" />
              <h3 className="metric-title">Systems</h3>
              <p className="metric-desc">Distributed & High Availability</p>
            </div>

            <div className="metric-card">
              <Database size={32} className="metric-icon" />
              <h3 className="metric-title">Data</h3>
              <p className="metric-desc">Large-scale Processing</p>
            </div>

            <div className="metric-card">
              <CloudSnow size={32} className="metric-icon" />
              <h3 className="metric-title">Cloud</h3>
              <p className="metric-desc">AWS Native Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
