"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function CentralProduct() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
  });
  return (
    <mesh ref={ref}>
      <RoundedBox args={[1.8, 2, 1.2]} radius={0.15} smoothness={4}>
        <meshStandardMaterial
          color="#f28c38"
          transparent
          opacity={0.12}
          roughness={0.3}
          metalness={0.1}
        />
      </RoundedBox>
    </mesh>
  );
}

function CentralWireframe() {
  const ref = useRef<THREE.LineSegments>(null!);
  const geo = useMemo(() => new THREE.BoxGeometry(1.82, 2.02, 1.22, 3, 3, 3), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry attach="geometry" {...edges} />
      <lineBasicMaterial color="#f28c38" transparent opacity={0.5} />
    </lineSegments>
  );
}

interface FragmentProps {
  radius: number;
  speed: number;
  offset: number;
  yOffset: number;
  size: number;
}

function Fragment({ radius, speed, offset, yOffset, size }: FragmentProps) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = yOffset + Math.sin(t * 2) * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.7;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color="#fbbf24"
        transparent
        opacity={0.5}
        roughness={0.5}
      />
    </mesh>
  );
}

function OrbitTrail({ radius, offset }: { radius: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return (
    <mesh ref={ref} position={[0, offset, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
      <meshBasicMaterial color="#f28c38" transparent opacity={0.08} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Hero5OrbitingFragments() {
  const fragments = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        radius: 2 + Math.random() * 1.5,
        speed: 0.2 + Math.random() * 0.4,
        offset: (i / 24) * Math.PI * 2,
        yOffset: (Math.random() - 0.5) * 2,
        size: 0.08 + Math.random() * 0.15,
      })),
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={0.8} color="#f28c38" />
      <pointLight position={[-3, -2, 3]} intensity={0.3} color="#fbbf24" />
      <CentralProduct />
      <CentralWireframe />
      {fragments.map((f, i) => (
        <Fragment key={i} {...f} />
      ))}
      <OrbitTrail radius={2.5} offset={0} />
      <OrbitTrail radius={3.2} offset={0.3} />
    </Canvas>
  );
}
