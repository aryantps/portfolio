import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-header">init_connection</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">
              Let's build scalable systems together.
            </h3>
            <p className="contact-desc">
              I'm currently open to new opportunities. Whether you have a
              question about distributed systems, want to discuss architecture,
              or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="social-links">
              <a
                href="mailto:aryantpratapsingh@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={24} />
                <span>aryantpratapsingh@gmail.com</span>
              </a>
              <a
                href="https://github.com/aryant"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
                <span>github.com/aryant</span>
              </a>
              <a
                href="https://linkedin.com/in/aryant"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
                <span>linkedin.com/in/aryant</span>
              </a>
            </div>

            <div className="resume-download">
              <a href="#" className="btn btn-secondary">
                <FileText size={18} />
                Download Resume.pdf
              </a>
            </div>
          </div>

          <div className="contact-form-container card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="form-input form-textarea"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="footer">
          <p className="footer-text">
            <span className="footer-code">
              while(true) {"{"} code(); {"}"}
            </span>
          </p>
          <p className="footer-copyright">
            Designed & Built by Aryant Pratap Singh &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}
