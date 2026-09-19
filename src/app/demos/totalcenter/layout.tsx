import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Total Center 3D Furniture Models | Interactive Demo",
  description:
      "See interactive 3D furniture models created for Total Center. 360-degree product spins with AR-ready GLB models for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/totalcenter" },
  openGraph: {
    title: "Total Center 3D Furniture Models | Joyfulpurch",
    description: "Interactive 3D furniture models for Total Center.",
    url: "https://joyfulpurch.com/demos/totalcenter",
  },
};

export default function TotalcenterDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}