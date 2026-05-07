"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TypeWriter from "@/components/ui/TypeWriter";
import { personalInfo } from "@/data/portfolio";
import { FiArrowDown, FiMail, FiLinkedin } from "react-icons/fi";

const SpaceScene = dynamic(() => import("@/components/three/SpaceScene"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100vh", background: "#0a0a1a" }} />,
});

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <SpaceScene showSphere={true} />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="dot" />
          Available for Opportunities
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          className="hero-typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <TypeWriter phrases={personalInfo.typingPhrases} speed={70} />
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            <FiMail /> Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
