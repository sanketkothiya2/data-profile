"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const allImages = images || [];
  if (allImages.length === 0) return null;

  return (
    <div className="project-carousel">
      <div className="carousel-viewport">
        <img src={allImages[current]} alt={`Screenshot ${current + 1}`} />
      </div>
      {allImages.length > 1 && (
        <div className="carousel-controls">
          <button
            onClick={() => setCurrent((p) => (p === 0 ? allImages.length - 1 : p - 1))}
            aria-label="Previous"
          >
            <FiChevronLeft />
          </button>
          <div className="carousel-dots">
            {allImages.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((p) => (p === allImages.length - 1 ? 0 : p + 1))}
            aria-label="Next"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Key projects that showcase my analytical impact
        </motion.p>

        <div className="projects-list">
          {projects.map((project, i) => {
            const allImages = project.images || (project.image ? [project.image] : []);
            const hasImages = allImages.length > 0;

            return (
              <motion.article
                key={project.title}
                className={`project-featured glass ${hasImages ? "has-image" : "no-image"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Image Side */}
                {hasImages && (
                  <div className="project-visual">
                    <ImageCarousel images={allImages} />
                  </div>
                )}

                {/* Content Side */}
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-icon-badge">{project.icon}</span>
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-org">{project.organization}</span>
                    </div>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                        >
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-metrics-row">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="metric-chip">
                          <span className="metric-chip-value">{m.value}</span>
                          <span className="metric-chip-label">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="project-tech-row">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-cta"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
