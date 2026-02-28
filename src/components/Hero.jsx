import { Terminal } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section section">
      <div className="container hero-content">
        <div className="hero-terminal-bg">
          <div className="terminal-code">
            <p>
              <span className="keyword">import</span> {"{"}{" "}
              <span className="variable">Scalability</span>,{" "}
              <span className="variable">Performance</span> {"}"}{" "}
              <span className="keyword">from</span>{" "}
              <span className="string">'@backend/core'</span>;
            </p>
            <p>
              <span className="keyword">const</span> engineer{" "}
              <span className="operator">=</span>{" "}
              <span className="keyword">new</span>{" "}
              <span className="class">SeniorBackendEngineer</span>();
            </p>
            <p>
              engineer.<span className="method">architectSystem</span>({"{"}{" "}
              scale: <span className="number">1000000</span>, reliable:{" "}
              <span className="boolean">true</span> {"}"});
            </p>
            <p className="cursor-line">
              <span className="prompt">$&gt;</span>{" "}
              <span className="command">systemctl status microservices</span>
              <span className="cursor-blink"></span>
            </p>
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting">
            <span className="prompt">~</span>/hello_world
          </p>
          <h1 className="hero-name">
            Aryant Pratap Singh<span>.</span>
          </h1>
          <h2 className="hero-role">Backend Engineer</h2>
          <p className="hero-description">
            Backend Engineer with 4+ years of experience designing and scaling
            distributed systems, APIs, and cloud-native services. Skilled in
            system design, data pipelines, and microservices architecture, with
            a proven track record delivering solutions in logistics, retail, and
            digital twin domains.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <Terminal size={18} />
              View Systems
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
