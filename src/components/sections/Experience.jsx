"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { FiBriefcase, FiClock } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey across organizations
        </motion.p>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline-header">
                <h3>
                  <FiBriefcase
                    size={18}
                    style={{ marginRight: 8, color: "var(--nebula-purple)" }}
                  />
                  {exp.company}
                </h3>
                <div className="role">{exp.role}</div>
                <span className="period">
                  <FiClock size={13} /> {exp.period}
                </span>
              </div>

              <motion.ul className="timeline-bullets">
                {exp.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + j * 0.08 }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
