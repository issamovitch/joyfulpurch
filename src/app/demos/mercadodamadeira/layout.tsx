import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado da Madeira 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for Mercado da Madeira. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/mercadodamadeira" },
  openGraph: {
    title: "Mercado da Madeira 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for Mercado da Madeira.",
    url: "https://joyfulpurch.com/demos/mercadodamadeira",
  },
};

export default function MercadodamadeiraDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}