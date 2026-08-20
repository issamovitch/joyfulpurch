"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HolographicShape() {
  const groupRef = useRef<THREE.Group>(null!);
  const edgesRef = useRef<THREE.LineSegments>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.2 + 0.3;
    }
    if (edgesRef.current) {
      (edgesRef.current.material as THREE.LineBasicMaterial).opacity =
        0.6 + Math.sin(t * 2) * 0.2;
    }
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 1.5) * 0.05;
      glowRef.current.scale.set(s, s, s);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.03 + Math.sin(t * 2) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner solid - very subtle */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#f28c38"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Wireframe edges */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.52, 1)]} />
        <lineBasicMaterial color="#f28c38" transparent opacity={0.7} />
      </lineSegments>
      {/* Outer glow mesh */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function ScanRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.6) * 1.8;
    ref.current.rotation.x = Math.PI / 2;
    const s = 1 + Math.sin(t * 0.6) * 0.2;
    ref.current.scale.set(s, s, 1);
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.15 + Math.sin(t * 0.6) * 0.1;
  });
  return (
    <mesh ref={ref}>
      <ringGeometry args={[1.2, 1.25, 64]} />
      <meshBasicMaterial color="#fbbf24" transparent opacity={0.2} side={THREE.DoubleSide} />
    </mesh>
  );
}

function DataPoints() {
  const ref = useRef<THREE.Points>(null!);
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 1.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#f28c38" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function Hero4HolographicWireframe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#f28c38" />
      <HolographicShape />
      <ScanRing />
      <DataPoints />
    </Canvas>
  );
}
