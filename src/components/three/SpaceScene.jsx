"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import DataSphere from "./DataSphere";
import FloatingParticles from "./FloatingParticles";

export default function SpaceScene({ showSphere = true }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <StarField count={4000} />
        <FloatingParticles count={150} />
        {showSphere && <DataSphere />}
      </Suspense>
    </Canvas>
  );
}
