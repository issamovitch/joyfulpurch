"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ExtrudedBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scanRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.25) * 0.4 - 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1 + 0.1;
      // Breathing scale
      const s = 1 + Math.sin(t * 0.5) * 0.03;
      meshRef.current.scale.set(s, s, s);
    }
    if (scanRef.current) {
      // Scan line moves back and forth along Z
      scanRef.current.position.z = Math.sin(t * 0.8) * 1.2;
      scanRef.current.material.opacity = 0.15 + Math.sin(t * 2) * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.4, 2.4, 0.05, 12, 12, 1]} />
        <meshStandardMaterial
          color="#f28c38"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>
      {/* Solid inner box that pulses */}
      <mesh ref={meshRef as React.RefObject<THREE.Mesh>}>
        <boxGeometry args={[2, 2, 1.6, 1, 1, 8]} />
        <meshStandardMaterial
          color="#f28c38"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Scan plane */}
      <mesh ref={scanRef} rotation={[0, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function DepthLines() {
  const groupRef = useRef<THREE.Group>(null!);
  const lines = useMemo(() => {
    const arr: { start: THREE.Vector3; end: THREE.Vector3; speed: number }[] = [];
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 3;
      const y = (Math.random() - 0.5) * 3;
      arr.push({
        start: new THREE.Vector3(x, y, -0.5),
        end: new THREE.Vector3(x, y, 2),
        speed: 0.5 + Math.random() * 1.5,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const progress = ((state.clock.elapsedTime * lines[i].speed) % 2) / 2;
        mesh.position.z = -0.5 + progress * 2.5;
        (mesh.material as THREE.MeshBasicMaterial).opacity =
          Math.sin(progress * Math.PI) * 0.4;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((_, i) => (
        <mesh key={i} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.015, 0.6]} />
          <meshBasicMaterial color="#f28c38" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3DepthExtrusion() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#f28c38" />
      <ExtrudedBox />
      <DepthLines />
    </Canvas>
  );
}