import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wewood 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for Wewood. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/wewood" },
  openGraph: {
    title: "Wewood 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for Wewood.",
    url: "https://joyfulpurch.com/demos/wewood",
  },
};

export default function WewoodDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}