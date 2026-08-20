"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

/* ── Exact port of the original vanilla Three.js hero ── */

const COUNT = 30000;
const R = (a: number, b: number) => a + Math.random() * (b - a);
const hx = (h: string): [number, number, number] => {
  const c = new THREE.Color(h);
  return [c.r, c.g, c.b];
};

const WOOD = hx("#d9b48a"),
  WOOD2 = hx("#c49a68"),
  WHITE = hx("#f2f0eb"),
  DARK = hx("#3c3a37"),
  METAL = hx("#2a2b2e"),
  FABRIC = hx("#9fb0ab"),
  FABRIC2 = hx("#b7c6c1"),
  SHADE = hx("#f4dca6"),
  TERRA = hx("#c07a4e"),
  LEAF = hx("#5fae7f"),
  LEAF2 = hx("#7ee0b0"),
  SOIL = hx("#4a3b30");

function onBox(
  w: number, h: number, d: number,
  cx = 0, cy = 0, cz = 0
): [number, number, number] {
  const f = (Math.random() * 6) | 0;
  const u = R(-0.5, 0.5), v = R(-0.5, 0.5);
  let x: number, y: number, z: number;
  if (f === 0) { x = u * w; y = v * h; z = d / 2; }
  else if (f === 1) { x = u * w; y = v * h; z = -d / 2; }
  else if (f === 2) { x = w / 2; y = v * h; z = u * d; }
  else if (f === 3) { x = -w / 2; y = v * h; z = u * d; }
  else if (f === 4) { x = u * w; y = h / 2; z = v * d; }
  else { x = u * w; y = -h / 2; z = v * d; }
  return [x + cx, y + cy, z + cz];
}
function onCyl(
  r: number, h: number,
  cx = 0, cy = 0, cz = 0, rTop: number | null = null
): [number, number, number] {
  rTop = rTop == null ? r : rTop;
  const a = R(0, Math.PI * 2), t = R(0, 1), rr = r + (rTop - r) * t;
  return [cx + Math.cos(a) * rr, cy - h / 2 + t * h, cz + Math.sin(a) * rr];
}
function onDisc(
  r: number, cx = 0, cy = 0, cz = 0
): [number, number, number] {
  const a = R(0, Math.PI * 2), rr = Math.sqrt(Math.random()) * r;
  return [cx + Math.cos(a) * rr, cy, cz + Math.sin(a) * rr];
}
function onCone(
  r: number, h: number,
  cx = 0, cy = 0, cz = 0
): [number, number, number] {
  const a = R(0, Math.PI * 2), t = R(0, 1), rr = r * (1 - t);
  return [cx + Math.cos(a) * rr, cy + t * h, cz + Math.sin(a) * rr];
}
function onSphere(
  r: number, cx = 0, cy = 0, cz = 0
): [number, number, number] {
  const u = R(0, Math.PI * 2), v = Math.acos(R(-1, 1)),
    rr = r * (0.55 + 0.45 * Math.random());
  return [
    cx + rr * Math.sin(v) * Math.cos(u),
    cy + rr * Math.cos(v),
    cz + rr * Math.sin(v) * Math.sin(u),
  ];
}

function chair(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.16) return { p: onBox(2.0, 0.24, 2.0, 0, -0.2, 0), c: WOOD };
  if (r < 0.44) return { p: onBox(2.0, 2.2, 0.24, 0, 1.0, -0.88), c: WOOD };
  const sx = Math.random() < 0.5 ? -1 : 1,
    sz = Math.random() < 0.5 ? -1 : 1;
  return { p: onBox(0.22, 2.0, 0.22, sx * 0.8, -1.3, sz * 0.8), c: DARK };
}
function sofa(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.34) return { p: onBox(4.2, 0.9, 1.8, 0, -0.5, 0), c: FABRIC };
  if (r < 0.52) return { p: onBox(4.2, 1.2, 0.4, 0, 0.5, -0.7), c: FABRIC };
  if (r < 0.70) {
    const cx = [-1.3, 0, 1.3][(Math.random() * 3) | 0];
    return { p: onBox(1.15, 0.32, 1.5, cx, 0.15, 0.1), c: FABRIC2 };
  }
  if (r < 0.88) {
    const s = Math.random() < 0.5 ? -2.05 : 2.05;
    return { p: onBox(0.5, 1.1, 1.8, s, 0, 0), c: FABRIC };
  }
  const s = Math.random() < 0.5 ? -1.9 : 1.9,
    z = Math.random() < 0.5 ? -0.8 : 0.8;
  return { p: onBox(0.2, 0.5, 0.2, s, -1.15, z), c: DARK };
}
function lamp(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.12) return { p: onDisc(0.85, 0, -2.5, 0), c: METAL };
  if (r < 0.45) return { p: onCyl(0.07, 4.2, 0, -0.4, 0), c: METAL };
  return { p: onCone(1.15, 1.4, 0, 2.0, 0), c: SHADE };
}
function shelf(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.40) {
    const s = Math.random() < 0.5 ? -1.7 : 1.7;
    return { p: onBox(0.2, 4.2, 1.4, s, 0, 0), c: WOOD2 };
  }
  const y = [-2.0, -0.7, 0.7, 2.0][(Math.random() * 4) | 0];
  const col = y > 0 && Math.random() < 0.25 ? LEAF2 : WOOD;
  return { p: onBox(3.6, 0.16, 1.4, 0, y, 0), c: col };
}
function roundTable(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.34) return { p: onDisc(2.1, 0, 1.2, 0), c: WOOD };
  if (r < 0.46) return { p: onCyl(2.1, 0.24, 0, 1.06, 0), c: WOOD2 };
  if (r < 0.66) return { p: onCyl(0.3, 2.2, 0, 0.0, 0), c: WOOD2 };
  return { p: onDisc(1.1, 0, -1.05, 0), c: WOOD2 };
}
function plant(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.24) return { p: onCyl(0.6, 1.5, 0, -1.7, 0, 0.95), c: TERRA };
  if (r < 0.32) return { p: onDisc(0.85, 0, -0.95, 0), c: SOIL };
  if (r < 0.40) return { p: onCyl(0.06, 1.2, 0, -0.2, 0), c: LEAF };
  const col = Math.random() < 0.35 ? LEAF2 : LEAF;
  return { p: onSphere(1.5, 0, 0.7, 0), c: col };
}
function nightstand(): { p: [number, number, number]; c: [number, number, number] } {
  const r = Math.random();
  if (r < 0.55) {
    const p = onBox(3.0, 2.2, 3.0, 0, 0.4, 0);
    const c = p[2] > 1.4 ? WHITE : WOOD;
    return { p, c };
  }
  if (r < 0.66) return { p: onBox(3.0, 0.06, 3.0, 0, 1.5, 0), c: WOOD };
  const s = Math.random() < 0.5 ? -1.1 : 1.1,
    z = Math.random() < 0.5 ? -1.1 : 1.1;
  return { p: onBox(0.28, 1.4, 0.28, s, -1.4, z), c: WHITE };
}

const SHAPES = [
  { name: "Accent Chair", fn: chair },
  { name: "Sofa", fn: sofa },
  { name: "Floor Lamp", fn: lamp },
  { name: "Bookshelf", fn: shelf },
  { name: "Round Table", fn: roundTable },
  { name: "Potted Plant", fn: plant },
  { name: "Nightstand", fn: nightstand },
];

function makeShape(
  fn: () => { p: [number, number, number]; c: [number, number, number] }
) {
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const o = fn(), i3 = i * 3;
    pos[i3] = o.p[0]; pos[i3 + 1] = o.p[1]; pos[i3 + 2] = o.p[2];
    col[i3] = o.c[0]; col[i3 + 1] = o.c[1]; col[i3 + 2] = o.c[2];
  }
  return { pos, col };
}

const FRAME_C = hx("#aeb7c2"),
  SUN_C = hx("#e9edf1"),
  MTN_C = hx("#c4ccd6"),
  MTN2_C = hx("#b3bcc8");

const FS = 0.5;
const halfW = 6.2,
  halfH = 4.2,
  bottom = -3.6;

function silhouette(x: number) {
  const g = (peak: number, x0: number, sp: number) =>
    bottom + (peak - bottom) * Math.exp(-((x - x0) * (x - x0)) / (2 * sp * sp));
  return Math.max(bottom + 0.01, g(-1.0, -4.0, 1.7), g(1.5, 1.8, 3.0));
}

/* ── React Component ── */

export default function HeroJoyfulpurch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [currentLabel, setCurrentLabel] = useState(SHAPES[SHAPES.length - 1].name);

  const onLabelChange = useCallback((name: string) => {
    setCurrentLabel(name);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ── Build pre-computed shape data ── */
    const built = SHAPES.map((s) => makeShape(s.fn));

    /* ── Build flat (landscape) positions & colors ── */
    const flatPos = new Float32Array(COUNT * 3);
    const flatCol = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      let x: number, y: number, z = R(-0.12, 0.12), c: [number, number, number];
      const r = Math.random();
      if (r < 0.26) {
        const e = (Math.random() * 4) | 0, th = R(0, 0.28);
        if (e === 0) { x = R(-halfW, halfW); y = halfH - th; }
        else if (e === 1) { x = R(-halfW, halfW); y = -halfH + th; }
        else if (e === 2) { x = -halfW + th; y = R(-halfH, halfH); }
        else { x = halfW - th; y = R(-halfH, halfH); }
        c = FRAME_C;
      } else if (r < 0.40) {
        const a = R(0, Math.PI * 2), rr = Math.sqrt(Math.random()) * 0.95;
        x = -2.9 + Math.cos(a) * rr;
        y = 1.7 + Math.sin(a) * rr;
        c = SUN_C;
      } else {
        x = R(-halfW, halfW);
        const top = silhouette(x);
        y = R(bottom, top);
        c = y > (top + bottom) / 2 ? MTN_C : MTN2_C;
      }
      flatPos[i3] = x * FS; flatPos[i3 + 1] = y * FS; flatPos[i3 + 2] = z * FS;
      flatCol[i3] = c[0]; flatCol[i3 + 1] = c[1]; flatCol[i3 + 2] = c[2];
    }

    /* ── Three.js setup ── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(flatPos), 3));
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(flatCol), 3));
    const mat = new THREE.PointsMaterial({
      size: 0.03, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false,
    });
    const cloud = new THREE.Points(geo, mat);
    scene.add(cloud);
    const P = geo.attributes.position.array as Float32Array;
    const C = geo.attributes.color.array as Float32Array;

    /* ── Interaction state ── */
    let dragX = 0, dragY = 0, autoY = 0, dragging = false, px = 0, py = 0, autoOn = true, sx = 0, sy = 0;
    let hoverX = 0, hoverY = 0, hoverActive = false;
    const el = renderer.domElement;

    const getLocalPos = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };
    const down = (x: number, y: number) => { dragging = true; autoOn = false; px = x; py = y; };
    const move = (x: number, y: number) => { if (!dragging) return; sx += (x - px) * 0.006; sy += (y - py) * 0.004; px = x; py = y; };
    const trackHover = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      hoverX = ((clientX - rect.left) / rect.width) * 2 - 1;
      hoverY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      hoverActive = true;
    };
    const up = () => { dragging = false; setTimeout(() => (autoOn = true), 2500); };

    const onMouseDown = (e: MouseEvent) => { const p = getLocalPos(e.clientX, e.clientY); down(p.x, p.y); };
    const onMouseMove = (e: MouseEvent) => {
      const p = getLocalPos(e.clientX, e.clientY);
      move(p.x, p.y);
      trackHover(e.clientX, e.clientY);
    };
    const onMouseUp = () => up();
    const onMouseLeave = () => { hoverActive = false; };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      const p = getLocalPos(t.clientX, t.clientY);
      down(p.x, p.y);
      trackHover(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const p = getLocalPos(t.clientX, t.clientY);
      move(p.x, p.y);
      trackHover(t.clientX, t.clientY);
    };
    const onTouchEnd = () => { up(); hoverActive = false; };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ── */
    let t = 0, prev = 0, idx = SHAPES.length - 1, prevM = -1;
    let smoothHoverX = 0, smoothHoverY = 0;
    const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
    let rafId: number;

    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.0022;
      const cyc = t % 1;
      if (cyc < prev) {
        idx = (idx + 1) % SHAPES.length;
        onLabelChange(SHAPES[idx].name);
      }
      prev = cyc;

      let m: number;
      if (cyc < 0.30) m = ease(cyc / 0.30);
      else if (cyc < 0.62) m = 1;
      else if (cyc < 0.82) m = 1 - ease((cyc - 0.62) / 0.20);
      else m = 0;

      if (autoOn) autoY += 0.0032;
      dragX += (sx - dragX) * 0.08;
      dragY += (sy - dragY) * 0.08;

      // Parallax tilt: smooth mouse-follow rotation
      const targetHX = hoverActive ? -hoverX * 0.25 : 0;
      const targetHY = hoverActive ? hoverY * 0.15 : 0;
      smoothHoverX += (targetHX - smoothHoverX) * 0.06;
      smoothHoverY += (targetHY - smoothHoverY) * 0.06;

      cloud.rotation.y = dragX + autoY + smoothHoverX;
      cloud.rotation.x = dragY * 0.7 + 0.06 * Math.sin(t * 2) + smoothHoverY;

      const activeFrame = m !== prevM;
      if (activeFrame) {
        const sp = built[idx].pos, sc = built[idx].col, colDirty = m !== prevM;
        for (let i = 0; i < COUNT; i++) {
          const i3 = i * 3;
          P[i3] = flatPos[i3] + (sp[i3] - flatPos[i3]) * m;
          P[i3 + 1] = flatPos[i3 + 1] + (sp[i3 + 1] - flatPos[i3 + 1]) * m;
          P[i3 + 2] = flatPos[i3 + 2] + (sp[i3 + 2] - flatPos[i3 + 2]) * m;
          if (colDirty) {
            C[i3] = flatCol[i3] + (sc[i3] - flatCol[i3]) * m;
            C[i3 + 1] = flatCol[i3 + 1] + (sc[i3 + 1] - flatCol[i3 + 1]) * m;
            C[i3 + 2] = flatCol[i3 + 2] + (sc[i3 + 2] - flatCol[i3 + 2]) * m;
          }
        }
        geo.attributes.position.needsUpdate = true;
        if (colDirty) geo.attributes.color.needsUpdate = true;
      }

      if (labelRef.current) {
        labelRef.current.style.opacity = String(0.25 + 0.65 * m);
      }
      prevM = m;
      renderer.render(scene, camera);
    }
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onLabelChange]);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0" />
      <div
        ref={labelRef}
        className="absolute bottom-16 left-[8vw] z-20 text-sm font-semibold tracking-[3px] uppercase text-[#f28c38] opacity-25 transition-opacity duration-400"
        style={{ letterSpacing: "3px" }}
      >
        {currentLabel}
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 text-xs tracking-widest uppercase text-[#6b7080]">
        Drag to rotate
      </div>
    </>
  );
}
