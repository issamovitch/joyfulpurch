import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa do Pinho 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for Casa do Pinho. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/casadopinho" },
  openGraph: {
    title: "Casa do Pinho 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for Casa do Pinho.",
    url: "https://joyfulpurch.com/demos/casadopinho",
  },
};

export default function CasadopinhoDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}