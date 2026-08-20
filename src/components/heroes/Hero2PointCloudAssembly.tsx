"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlowCore() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(t * 0.8) * 0.15;
    ref.current.scale.set(pulse, pulse, pulse);
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.12 + Math.sin(t * 1.2) * 0.04;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshBasicMaterial color="#f5a623" transparent opacity={0.12} />
    </mesh>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(t * 1.0 + 1) * 0.1;
    ref.current.scale.set(pulse, pulse, pulse);
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.08 + Math.sin(t * 1.5) * 0.03;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial color="#ffe4a0" transparent opacity={0.08} />
    </mesh>
  );
}

function PointCloudAssembly() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 4000;

  const { positions, targets, randoms, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const targets = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Start: scattered random positions
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Target: torus knot shape
      const t = (i / count) * Math.PI * 4;
      const r = 1.5 + Math.sin(t * 3) * 0.3;
      const tubeR = 0.5 + Math.sin(t * 5) * 0.15;
      const phi = t;
      const theta = (i / count) * Math.PI * 20;

      targets[i * 3] = (r + tubeR * Math.cos(theta)) * Math.cos(phi);
      targets[i * 3 + 1] = (r + tubeR * Math.cos(theta)) * Math.sin(phi);
      targets[i * 3 + 2] = tubeR * Math.sin(theta);

      randoms[i] = Math.random();
      sizes[i] = 0.5 + Math.random() * 1.0;
    }
    return { positions, targets, randoms, sizes };
  }, []);

  const currentPositions = useRef(positions.slice());

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    // Oscillate between scattered and assembled
    const cycle = (Math.sin(t * 0.25) + 1) / 2; // 0 to 1
    const ease = cycle * cycle * (3 - 2 * cycle); // smoothstep

    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const delay = randoms[i] * 0.3;
      const localEase = Math.max(0, Math.min(1, (ease - delay) / (1 - delay)));
      const i3 = i * 3;
      arr[i3] = positions[i3] + (targets[i3] - positions[i3]) * localEase;
      arr[i3 + 1] = positions[i3 + 1] + (targets[i3 + 1] - positions[i3 + 1]) * localEase;
      arr[i3 + 2] = positions[i3 + 2] + (targets[i3 + 2] - positions[i3 + 2]) * localEase;
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.12;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={currentPositions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ffd080"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* Bright accent particles that only appear when assembled */
function AccentParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 600;

  const { positions, targets, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const targets = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      const t = (i / count) * Math.PI * 4;
      const r = 1.5 + Math.sin(t * 3) * 0.3;
      const tubeR = 0.5 + Math.sin(t * 5) * 0.15;
      const phi = t;
      const theta = (i / count) * Math.PI * 20 + 1.0;
      targets[i * 3] = (r + tubeR * Math.cos(theta)) * Math.cos(phi);
      targets[i * 3 + 1] = (r + tubeR * Math.cos(theta)) * Math.sin(phi);
      targets[i * 3 + 2] = tubeR * Math.sin(theta);
      randoms[i] = Math.random();
    }
    return { positions, targets, randoms };
  }, []);

  const currentPositions = useRef(positions.slice());

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const cycle = (Math.sin(t * 0.25) + 1) / 2;
    const ease = cycle * cycle * (3 - 2 * cycle);
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const delay = randoms[i] * 0.3;
      const localEase = Math.max(0, Math.min(1, (ease - delay) / (1 - delay)));
      const i3 = i * 3;
      arr[i3] = positions[i3] + (targets[i3] - positions[i3]) * localEase;
      arr[i3 + 1] = positions[i3 + 1] + (targets[i3 + 1] - positions[i3 + 1]) * localEase;
      arr[i3 + 2] = positions[i3 + 2] + (targets[i3 + 2] - positions[i3 + 2]) * localEase;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = t * 0.12;
    // Fade in when assembled
    (ref.current.material as THREE.PointsMaterial).opacity = ease * 0.7;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={currentPositions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitRing({ radius, speed }: { radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.012, 8, 128]} />
      <meshBasicMaterial
        color="#f5a623"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function Hero2PointCloudAssembly() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <GlowCore />
      <InnerGlow />
      <PointCloudAssembly />
      <AccentParticles />
      <OrbitRing radius={2.5} speed={0.2} />
      <OrbitRing radius={3.2} speed={0.15} />
    </Canvas>
  );
}
