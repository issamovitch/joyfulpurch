"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rotate3d, Info, ArrowLeft, ExternalLink, Maximize2, X } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useEffect, useState, useCallback } from "react";

/* ──────────────────────────────────────────────────────────────────────────────
   Duistt — PRODUCT CONFIG

   Files live in /public/GLB/duistt/
   ────────────────────────────────────────────────────────────────────────────── */
const products = [
  {
    name: "Geometry Cabinet",
    glbUrl: "/GLB/duistt/Geometry Cabinet.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Geometry Console",
    glbUrl: "/GLB/duistt/Geometry Console.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Titan Cabinet",
    glbUrl: "/GLB/duistt/Titan Cabinet.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Julius Chair 10y",
    glbUrl: "/GLB/duistt/Julius Chair 10y.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Block Side Table",
    glbUrl: "/GLB/duistt/Block Side Table.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Moon Side Table",
    glbUrl: "/GLB/duistt/Moon Side Table.glb",
    posterUrl: "",
    iosSrc: "",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ──────────────────────────────────────────────────────────────────────────────
   Fullscreen modal
   ────────────────────────────────────────────────────────────────────────────── */
function FullscreenModal({
                           name,
                           glbUrl,
                           iosSrc,
                           onClose,
                         }: {
  name: string;
  glbUrl: string;
  iosSrc: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
          onClick={onClose}
      >
        <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[95vw] h-[90vh] rounded-2xl bg-card overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        >
          <button
              onClick={onClose}
              aria-label="Exit fullscreen"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 backdrop-blur text-foreground hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute top-4 left-4 z-10 rounded-full bg-background/70 backdrop-blur px-4 py-1.5">
            <span className="text-sm font-medium">{name}</span>
          </div>

          {/* @ts-expect-error — <model-viewer> is a custom web element loaded via CDN */}
          <model-viewer
              src={glbUrl}
              ios-src={iosSrc || undefined}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              rotation-per-second="30deg"
              shadow-intensity="0.6"
              exposure="1.1"
              camera-orbit="0deg 75deg 105%"
              min-camera-orbit="auto auto 50%"
              max-camera-orbit="auto auto 200%"
              alt={`3D model of ${name}`}
              style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
          />
        </motion.div>
      </motion.div>
  );
}

function ModelViewerCard({
                           name,
                           glbUrl,
                           posterUrl,
                           iosSrc,
                           index,
                           onExpand,
                         }: {
  name: string;
  glbUrl: string;
  posterUrl: string;
  iosSrc: string;
  index: number;
  onExpand: () => void;
}) {
  const hasModel = glbUrl.length > 0;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
      <motion.div variants={fadeUp} custom={index}>
        <Card className="overflow-hidden rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
          <div className="relative aspect-square w-full bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
            {hasModel && mounted && (
                <button
                    onClick={onExpand}
                    aria-label={`View ${name} in fullscreen`}
                    className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur text-foreground hover:bg-background hover:scale-105 transition-all shadow-sm"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
            )}

            {hasModel && mounted ? (
                /* @ts-expect-error — <model-viewer> is a custom web element loaded via CDN */
                <model-viewer
                    src={glbUrl}
                    ios-src={iosSrc || undefined}
                    ar
                    camera-controls
                    auto-rotate
                    loading="lazy"
                    reveal="auto"
                    shadow-intensity="0.4"
                    exposure="1.1"
                    poster={posterUrl || undefined}
                    alt={`3D model of ${name}`}
                    style={{ width: "100%", height: "100%" }}
                />
            ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Rotate3d className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Awaiting 3D model
                  </p>
                  <p className="text-xs text-muted-foreground/70 max-w-[200px]">
                    Drop the .glb file in the folder shown in source code
                  </p>
                </div>
            )}
          </div>

          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">{name}</h3>
              {hasModel && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary whitespace-nowrap">
                3D + AR
              </span>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
  );
}

export default function DuisttPage() {
  const [activeModel, setActiveModel] = useState<
      { name: string; glbUrl: string; iosSrc: string } | null
  >(null);

  const closeModal = useCallback(() => setActiveModel(null), []);

  return (
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />

        <main className="flex-1 py-16">
          <motion.div
              className="mx-auto max-w-6xl px-5"
              initial="hidden"
              animate="visible"
              variants={stagger}
          >
            {/* Back link + client header */}
            <motion.div variants={fadeUp} custom={0} className="mb-10">
              <Link
                  href="/demos"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to gallery
              </Link>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary mb-1">
                    Client Demo
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Duistt
                  </h1>
                  <p className="mt-2 text-muted-foreground max-w-xl">
                    Portuguese high-end furniture blending traditional
                    craftsmanship with contemporary design. Handmade in Porto
                    since 2014.
                  </p>
                </div>
                <a
                    href="https://duistt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors shrink-0"
                >
                  duistt.com
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Info banner */}
            <motion.div variants={fadeUp} custom={1} className="mb-10">
              <div className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/15 p-4">
                <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each card uses Google&apos;s{" "}
                  <a
                      href="https://modelviewer.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    model-viewer
                  </a>{" "}
                  web component. AR is enabled on supported devices. Spin,
                  zoom, tap the fullscreen icon, or use the AR button to view
                  any piece in your space.
                </p>
              </div>
            </motion.div>

            {/* Product grid */}
            <motion.div
                variants={fadeUp}
                custom={2}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product, i) => (
                  <ModelViewerCard
                      key={product.name}
                      name={product.name}
                      glbUrl={product.glbUrl}
                      posterUrl={product.posterUrl}
                      iosSrc={product.iosSrc}
                      index={i}
                      onExpand={() =>
                          setActiveModel({
                            name: product.name,
                            glbUrl: product.glbUrl,
                            iosSrc: product.iosSrc,
                          })
                      }
                  />
              ))}
            </motion.div>
          </motion.div>
        </main>

        <SiteFooter />

        {activeModel && (
            <FullscreenModal
                name={activeModel.name}
                glbUrl={activeModel.glbUrl}
                iosSrc={activeModel.iosSrc}
                onClose={closeModal}
            />
        )}
      </div>
  );
}