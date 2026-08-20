import type { Metadata } from "next";
import { PlaceholderClientPage } from "@/components/placeholder-client-page";

export const metadata: Metadata = {
  title: "Luz Lighting 3D Models | Pendant Lamp Product Viewer",  description: "Interactive 3D lighting models for Luz Lighting. Explore 360-degree pendant lamp spins and AR product visualization for ecommerce.",
  alternates: { canonical: "https://joyfulpurch.com/demos/luz" },
};

export default function LuzPage() {
  return (
    <PlaceholderClientPage
      name="Luz Lighting"
      tagline="Contemporary pendant lamps and sculptural fixtures for residential and hospitality projects."
      website="#"
    />
  );
}
