"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   CLIENT GALLERY CONFIG

   Add a new object to the array below for each client.
   - slug:   URL path for their dedicated demo page (/demos/[slug])
   - name:   Brand name displayed on the card
   - tagline: Short description
   - website: Their real website URL (opens in new tab)
   - sector: Industry tag shown as a badge
   ────────────────────────────────────────────────────────────────────── */

const clients = [
  {
    slug: "damportugal",
    name: "DAM Portugal",
    tagline:
        "Design furniture, accessories and textiles for eco-friendly homes. Ethically crafted in Portugal.",
    website: "https://shop.damportugal.com",
    sector: "Home Decor & Furniture",
  },
  {
    slug: "wewood",
    name: "Wewood",
    tagline:
        "Handcrafted Portuguese solid wood furniture since 1964.",
    website: "https://www.wewood.eu",
    sector: "Solid Wood Furniture",
  },
  {
    slug: "duistt",
    name: "Duistt",
    tagline:
        "Portuguese high-end furniture blending traditional craftsmanship with contemporary design. Handmade in Porto since 2014.",
    website: "https://duistt.com",
    sector: "Luxury Furniture",
  },
  {
    slug: "mercadodamadeira",
    name: "Mercado da Madeira",
    tagline:
        "Solid wood tables and furniture made in Portugal using traditional carpentry methods.",
    website: "https://www.mercadodamadeira.pt",
    sector: "Tables & Solid Wood",
  },
  {
    slug: "mo-ow",
    name: "MO-OW",
    tagline:
        "Handcrafted furniture made in a centennial factory in northern Portugal using traditional woodworking techniques.",
    website: "https://www.mo-ow.com",
    sector: "Design Furniture",
  },
  {
    slug: "totalcenter",
    name: "Total Center",
    tagline:
        "Handcrafted solid pine furniture made in Portugal. Tables, benches, dressers and shelving for home and hospitality.",
    website: "https://loja.totalcenter.pt",
    sector: "Furniture & Hospitality",
  },
];

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

export default function DemosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 py-20">
        <motion.div
          className="mx-auto max-w-6xl px-5"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Page heading */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Client Demo Gallery
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Interactive 3D previews we have created for our clients. Click any
              card to explore their products in 3D and AR.
            </p>
          </motion.div>

          {/* Client grid */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.slug}
                variants={fadeUp}
                custom={i + 2}
                className="h-full"
              >
                <Link href={`/demos/${client.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-lg transition-all overflow-hidden">
                    {/* Visual header strip */}
                    <div className="h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                      <span className="text-5xl font-extrabold text-primary/15 select-none group-hover:text-primary/25 transition-colors">
                        {client.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                            {client.name}
                          </h3>
                          <span className="mt-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                            {client.sector}
                          </span>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary transition-colors mt-0.5 shrink-0" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {client.tagline}
                      </p>

                      {/* Website link */}
                      {client.website !== "#" && (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-4 inline-block text-xs font-medium text-primary/80 hover:text-primary transition-colors"
                        >
                          {client.website.replace("https://", "").replace("/", "")}
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA for new clients */}
          <motion.div
            variants={fadeUp}
            custom={clients.length + 3}
            className="mt-40 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Want your products here?{" "}
              <Link
                href="/contact"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Get in touch
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
