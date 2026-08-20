"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rotate3d } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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

export function PlaceholderClientPage({
  name,
  tagline,
  website,
}: {
  name: string;
  tagline: string;
  website: string;
}) {
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
          <motion.div variants={fadeUp} custom={0} className="mb-10">
            <Link
              href="/demos"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to gallery
            </Link>

            <div>
              <p className="text-sm font-medium text-primary mb-1">
                Client Demo
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {name}
              </h1>
              <p className="mt-2 text-muted-foreground max-w-xl">
                {tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 py-24 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Rotate3d className="h-8 w-8" />
            </div>
            <h2 className="text-lg font-semibold">3D models coming soon</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              We are currently building the interactive 3D catalogue for{" "}
              {name}. Check back soon or{" "}
              <Link
                href="/contact"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                contact us
              </Link>{" "}
              for updates.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
