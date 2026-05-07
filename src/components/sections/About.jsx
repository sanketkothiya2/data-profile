"use client";
import { motion } from "framer-motion";
import { summary, education } from "@/data/portfolio";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turning raw data into strategic insights
        </motion.p>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>{summary}</p>

            <div className="about-stats">
              {[
                { number: "4+", label: "Years Exp." },
                { number: "50+", label: "Dashboards" },
                { number: "2", label: "Countries" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card glass"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education-list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                marginBottom: "16px",
                color: "var(--nebula-cyan)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FiAward /> Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                className="edu-card glass"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4>{edu.school}</h4>
                <div className="degree">{edu.degree}</div>
                <div className="edu-meta">
                  <span>
                    <FiMapPin size={13} /> {edu.location}
                  </span>
                  <span>
                    <FiCalendar size={13} /> {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
