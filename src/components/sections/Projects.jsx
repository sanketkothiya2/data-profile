"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

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

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {project.image && (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "16px",
                      border: "1px solid var(--glass-border)",
                    }}
                  />
                </div>
              )}
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <div className="project-org">{project.organization}</div>
              <p>{project.description}</p>
              <p style={{ fontSize: "0.9rem" }}>{project.details}</p>

              <div className="project-metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: "20px", display: "inline-flex" }}
                >
                  🔗 Live Demo
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
