"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Code,
  RotateCcw,
  Smartphone,
  Zap,
  Eye,
  TrendingUp,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Dynamic import for Three.js hero (no SSR)
const HeroJoyfulpurch = dynamic(
  () => import("@/components/heroes/HeroJoyfulpurch"),
  { ssr: false }
);

const slideUp = {
  hidden: { y: 30 },
  visible: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "3D Product Modeling Services",
            description: "Convert product photos to 3D models. We build interactive 3D product viewers, AR-ready GLB models, and 360-degree product spins for ecommerce stores.",
            provider: {
              "@type": "Organization",
              name: "Joyfulpurch",
              url: "https://joyfulpurch.com",
            },
            areaServed: "Worldwide",
            serviceType: "3D Product Modeling",
            keywords: [
              "2D to 3D product conversion",
              "3D product visualization",
              "product 3D models for ecommerce",
              "AR product viewer for ecommerce",
              "interactive 3D product viewer for website",
              "360 product spin for furniture store",
              "GLB 3D models for furniture brands",
              "embed 3D models on product pages",
            ],
          }),
        }}
      />

      <main className="flex-1">
        {/* ── Hero (Dark Theme — Joyfulpurch 3D) ── */}
        <section className="relative overflow-hidden bg-[#0e0f13]" style={{ minHeight: "100svh" }}>
          {/* 3D Canvas */}
          <div className="absolute inset-0 z-0">
            <HeroJoyfulpurch />
          </div>

          {/* Text overlay — matches original hero design */}
          <div className="relative z-20 flex flex-col justify-center px-[8vw] pointer-events-none" style={{ minHeight: "100svh" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              {...stagger}
            >
              <motion.span
                variants={slideUp}
                custom={0}
                className="inline-block w-fit text-[13px] tracking-[2px] uppercase text-[#fbbf60] px-3.5 py-1.5 border border-[rgba(251,191,96,0.3)] rounded-full mb-5 backdrop-blur-[4px] bg-[rgba(14,15,19,0.35)]"
              >
                Image &rarr; 3D
              </motion.span>

              <motion.h1
                variants={slideUp}
                custom={1}
                className="text-[clamp(38px,6vw,76px)] leading-[1.02] font-extrabold text-white max-w-[12ch] tracking-[-1.5px]"
                style={{ textShadow: "0 4px 40px rgba(0,0,0,.6)" }}
              >
                Turn Your Product Photos Into{" "}
                <span className="text-[#f28c38]">Interactive 3D Models</span>.
              </motion.h1>

              <motion.p
                variants={slideUp}
                custom={2}
                className="mt-5 text-[clamp(15px,1.5vw,19px)] text-[#c7cbd6] max-w-[46ch] leading-[1.5]"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,.6)" }}
              >
                Send us a product image. We hand you an interactive, spinnable
                3D model your customers can explore and place in their room.
              </motion.p>

              <motion.div variants={slideUp} custom={3} className="mt-8 pointer-events-auto">
                <a
                  href="/demos"
                  className="inline-flex items-center gap-2.5 bg-[#f28c38] text-white font-bold text-base px-6 py-3.5 rounded-[14px] no-underline transition-transform duration-150 ease-out"
                  style={{ boxShadow: "0 12px 40px rgba(242,140,56,.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 16px 50px rgba(242,140,56,.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(242,140,56,.3)";
                  }}
                >
                  See a live 3D furniture demo &rarr;
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────── */}
        <section className="border-t border-border/50 bg-muted/30 py-24">
          <motion.div
            className="mx-auto max-w-5xl px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            {...stagger}
          >
            <motion.h2
              variants={slideUp}
              custom={0}
              className="text-center text-3xl sm:text-4xl font-bold tracking-tight"
            >
              How 2D to 3D Conversion Works
            </motion.h2>
            <motion.p
              variants={slideUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
            >
              Three simple steps from flat photo to interactive 3D on your storefront.
            </motion.p>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Camera,
                  title: "Send us your photos",
                  desc: "Upload a few angles of your product — or point us to your existing catalogue images. No special hardware needed.",
                  step: "01",
                },
                {
                  icon: Code,
                  title: "We build the 3D model",
                  desc: "Our team recreates your product as a production-ready GLB model optimized for web — fast load, stunning detail.",
                  step: "02",
                },
                {
                  icon: Code,
                  title: "Embed on your site",
                  desc: "Drop a single code snippet into any product page. That is all you need — your customers can spin, zoom, and view in AR.",
                  step: "03",
                },
              ].map((item, i) => (
                <motion.div key={item.step} variants={slideUp} custom={i + 2}>
                  <Card className="relative h-full rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 pt-8">
                      <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/10 select-none">
                        {item.step}
                      </span>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Benefits ──────────────────────────── */}
        <section className="py-24">
          <motion.div
            className="mx-auto max-w-5xl px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            {...stagger}
          >
            <motion.h2
              variants={slideUp}
              custom={0}
              className="text-center text-3xl sm:text-4xl font-bold tracking-tight"
            >
              3D Product Visualization for Furniture Brands
            </motion.h2>
            <motion.p
              variants={slideUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
            >
              Real business impact, powered by cutting-edge 3D technology.
            </motion.p>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: RotateCcw,
                  title: "360\u00b0 Interactive Views",
                  desc: "Customers can spin, zoom, and inspect every detail — building confidence before they buy.",
                },
                {
                  icon: Smartphone,
                  title: 'AR "View in Your Room"',
                  desc: "Shoppers see true-to-scale products in their own space via their phone camera.",
                },
                {
                  icon: Zap,
                  title: "Lightning-Fast Loading",
                  desc: "Optimized GLB models load in under 2 seconds on any device — no plugins, no wait.",
                },
                {
                  icon: TrendingUp,
                  title: "Reduce Returns with 3D",
                  desc: "Reduce returns with 3D product visualization. When customers know exactly what they are getting, return rates drop by up to 40%.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={slideUp}
                  custom={i + 2}
                >
                  <Card className="h-full rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Showcase Strip ────────────────────── */}
        <section className="border-t border-border/50 bg-muted/30 py-24">
          <motion.div
            className="mx-auto max-w-5xl px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            {...stagger}
          >
            <motion.h2
              variants={slideUp}
              custom={0}
              className="text-center text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Embed 3D Models on Product Pages
            </motion.h2>
            <motion.p
              variants={slideUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
            >
              Real products, real 3D models — product 3D models for ecommerce, ready to embed on any storefront.
            </motion.p>
            <motion.div
                variants={slideUp}
                custom={2}
                className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {[
                { name: "Bedside Table", glb: "/GLB/wewood/Criado-Mudo Bedside Table Light.glb", alt: "3D furniture model of wooden bedside table for ecommerce" },
                { name: "Cabinet", glb: "/GLB/duistt/Geometry Cabinet.glb", alt: "Interactive 3D cabinet model for online store" },
                { name: "Lounge Chair", glb: "/GLB/wewood/Nido Lounge Chair Green.glb", alt: "3D lounge chair model with 360 product spin for furniture store" },
                { name: "Sideboard", glb: "/GLB/wewood/Scarpa Sideboard.glb", alt: "GLB 3D model of wooden sideboard for furniture brand" },
                { name: "Side Table", glb: "/GLB/duistt/Moon Side Table.glb", alt: "3D product visualization of side table for ecommerce" },
              ].map(
                  ({ name, glb, alt }) => (
                      <div
                          key={name}
                          className="group relative aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 border border-border/40 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow"
                      >
                        {/* @ts-expect-error — <model-viewer> is a custom web element loaded via CDN */}
                        <model-viewer
                            src={glb}
                            camera-controls
                            auto-rotate
                            loading="lazy"
                            reveal="auto"
                            shadow-intensity="0.3"
                            exposure="1.1"
                            alt={alt}
                            style={{ width: "100%", height: "100%", backgroundColor: "#fafaf8" }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-3 pb-3 pt-8 pointer-events-none">
                          <p className="text-sm font-medium text-white truncate">{name}</p>
                        </div>
                      </div>
                  )
              )}
            </motion.div>

            <motion.div variants={slideUp} custom={3} className="mt-10 text-center">
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link href="/demos">
                  View all interactive 3D product demos
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Contact CTA ───────────────────────── */}
        <section className="py-24">
          <motion.div
            className="mx-auto max-w-2xl px-5 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            {...stagger}
          >
            <motion.div variants={slideUp} custom={0} className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Eye className="h-7 w-7" />
              </div>
            </motion.div>
            <motion.h2
              variants={slideUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              AR Product Viewer That Reduces Returns
            </motion.h2>
            <motion.p
              variants={slideUp}
              custom={2}
              className="mt-4 text-lg text-muted-foreground"
            >
              Send us a couple of product photos and we will send back a free sample
              3D model so you can see the quality for yourself.
            </motion.p>
            <motion.div variants={slideUp} custom={3} className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}