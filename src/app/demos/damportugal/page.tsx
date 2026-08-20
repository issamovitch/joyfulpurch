"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rotate3d, Info, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────────────────────────
   DAM PORTUGAL — PRODUCT CONFIG

   Drop .glb files into /public/GLB/damportugal/ and update filenames below.
   For iOS AR, also place a .usdz file and set iosSrc.

   File structure expected:
     public/GLB/damportugal/MAGMA small low - Rosa Negrais limestone.glb
     public/GLB/damportugal/Mario - Natural.glb
     public/GLB/damportugal/striped pot 3d model_Clone1.glb
     public/GLB/damportugal/Flora small tall - Warm WhiteOak Venner.glb
     public/GLB/damportugal/Varina Tall - ArrowGrumpy Black.glb
   ────────────────────────────────────────────────────────────────────────────── */
const products = [
  {
    name: "MAGMA Small Low — Rosa Negrais Limestone",
    glbUrl: "/GLB/damportugal/MAGMA small low - Rosa Negrais limestone.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Mario — Natural",
    glbUrl: "/GLB/damportugal/Mario - Natural.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Striped Pot",
    glbUrl: "/GLB/damportugal/striped pot 3d model_Clone1.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Flora Small Tall — Warm WhiteOak Veneer",
    glbUrl: "/GLB/damportugal/Flora small tall - Warm WhiteOak Venner.glb",
    posterUrl: "",
    iosSrc: "",
  },
  {
    name: "Varina Tall — ArrowGrumpy Black",
    glbUrl: "/GLB/damportugal/Varina Tall - ArrowGrumpy Black.glb",
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

function ModelViewerCard({
  name,
  glbUrl,
  posterUrl,
  iosSrc,
  index,
}: {
  name: string;
  glbUrl: string;
  posterUrl: string;
  iosSrc: string;
  index: number;
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
          {hasModel && mounted ? (
            /*
              Google <model-viewer> web component
              Docs: https://modelviewer.dev

              Key attributes:
              - src        : .glb 3D model file
              - ios-src    : .usdz for AR on iOS
              - ar         : enables AR quicklook button
              - camera-controls : orbit / zoom
              - auto-rotate : slow spin on load
              - shadow-intensity : ground shadow
              - exposure   : brightness
              - poster     : loading fallback image
            */
            // @ts-expect-error — <model-viewer> is a custom web element loaded via CDN
            <model-viewer
              src={glbUrl}
              ios-src={iosSrc || undefined}
              ar
              camera-controls
              auto-rotate
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

        <CardContent className="p-4">
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

export default function DamportugalPage() {
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
                  DAM Portugal
                </h1>
                <p className="mt-2 text-muted-foreground max-w-xl">
                  Design furniture, accessories and textiles for eco-friendly
                  homes. Ethically crafted in Portugal from natural and
                  sustainable materials.
                </p>
              </div>
              <a
                href="https://shop.damportugal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors shrink-0"
              >
                shop.damportugal.com
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
                zoom, or tap the AR button to view any piece in your space.
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
              />
            ))}
          </motion.div>
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
