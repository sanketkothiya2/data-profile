"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const SpaceScene = dynamic(() => import("@/components/three/SpaceScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Persistent background 3D scene */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <SpaceScene showSphere={false} />
      </div>

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer" style={{ position: "relative", zIndex: 1 }}>
        <p>
          © {new Date().getFullYear()} Sanket Kothiya. Crafted with{" "}
          <span className="heart">♥</span> and data.
        </p>
      </footer>
    </>
  );
}
