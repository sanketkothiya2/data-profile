"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: <FiMail />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiMapPin />, label: "Location", value: personalInfo.location, href: null },
    { icon: <FiLinkedin />, label: "LinkedIn", value: "Connect on LinkedIn", href: personalInfo.linkedin },
    { icon: <FiGithub />, label: "GitHub", value: "View Repositories", href: personalInfo.github },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss how I can help with your data challenges
        </motion.p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Let&apos;s Connect</h3>
            <p>
              I&apos;m always interested in hearing about new opportunities in data analytics,
              business intelligence, and data engineering. Feel free to reach out!
            </p>

            <div className="contact-links">
              {contactItems.map((item, i) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Tag
                      className="contact-link"
                      {...(item.href
                        ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className="link-icon">{item.icon}</div>
                      <div>
                        <div className="link-label">{item.label}</div>
                        <div className="link-value">{item.value}</div>
                      </div>
                    </Tag>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="How can I help?" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              {submitted ? "✓ Message Sent!" : <><FiSend /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
