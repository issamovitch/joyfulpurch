import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Product Demo Gallery | Interactive Furniture Models",
  description:
    "Explore live interactive 3D product viewer demos. See 360 product spins and AR-ready GLB models for furniture brands.",
  alternates: { canonical: "https://joyfulpurch.com/demos" },
  openGraph: {
    title: "3D Product Demo Gallery | Joyfulpurch",
    description:
      "Explore live interactive 3D product viewer demos for furniture brands.",
    url: "https://joyfulpurch.com/demos",
  },
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
