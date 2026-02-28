import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">
        <a href="#" className="nav-brand">
          <Terminal size={24} className="brand-icon" />
          <span className="brand-text">std::backend</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              <span className="nav-link-prefix">/</span>
              {link.name}
            </a>
          ))}
          <a href="#projects" className="btn btn-primary btn-sm ml-4">
            View Systems
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-link-prefix">~/</span>
              {link.name}
            </a>
          ))}
          <a
            href="#projects"
            className="btn btn-primary w-full mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            View Systems
          </a>
        </div>
      )}
    </nav>
  );
}
