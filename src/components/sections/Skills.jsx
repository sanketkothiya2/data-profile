"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills Galaxy
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I work with
        </motion.p>

        <div className="skills-grid">
          {categories.map(([category, data], i) => (
            <motion.div
              key={category}
              className="skill-category glass glass-hover"
              style={{ "--cat-color": data.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3>
                <span className="cat-dot" />
                {category}
              </h3>
              <div className="skill-items">
                {data.items.map((skill) => (
                  <span key={skill} className="skill-tag" style={{
                    borderColor: `${data.color}44`,
                    background: `${data.color}15`,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
