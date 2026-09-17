import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duistt 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for Duistt. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/duistt" },
  openGraph: {
    title: "Duistt 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for Duistt.",
    url: "https://joyfulpurch.com/demos/duistt",
  },
};

export default function DuisttDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}