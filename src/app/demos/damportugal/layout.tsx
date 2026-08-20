import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAM Portugal 3D Furniture Models | Interactive Demo",
  description:
    "See interactive 3D furniture models created for DAM Portugal. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/damportugal" },
  openGraph: {
    title: "DAM Portugal 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for DAM Portugal.",
    url: "https://joyfulpurch.com/demos/damportugal",
  },
};

export default function DamportugalDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
