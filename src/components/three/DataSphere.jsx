"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataSphere() {
  const meshRef = useRef();
  const pointsRef = useRef();
  const ringsRef = useRef();

  const orbitPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.8;
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return pts;
  }, []);

  const ringGeometry = useMemo(() => {
    const curves = [];
    for (let i = 0; i < 3; i++) {
      const points = [];
      const radius = 2.5 + i * 0.4;
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * 0.3 * (i + 1),
            Math.sin(angle) * radius
          )
        );
      }
      curves.push(points);
    }
    return curves;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -t * 0.15;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.y = t * 0.1;
      ringsRef.current.rotation.x = Math.sin(t * 0.15) * 0.15;
    }
  });

  return (
    <group>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#7b2ff7"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#2d7ff9"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Orbiting data points */}
      <group ref={pointsRef}>
        {orbitPoints.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#7b2ff7" : "#ff2d95"}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        {ringGeometry.map((points, i) => (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={points.length}
                array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={i === 0 ? "#7b2ff7" : i === 1 ? "#00d4ff" : "#ff2d95"}
              transparent
              opacity={0.2}
            />
          </line>
        ))}
      </group>
    </group>
  );
}
