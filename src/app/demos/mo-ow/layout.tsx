import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MO-OW 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for MO-OW. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/mo-ow" },
  openGraph: {
    title: "MO-OW 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for MO-OW.",
    url: "https://joyfulpurch.com/demos/mo-ow",
  },
};

export default function MoOwDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}