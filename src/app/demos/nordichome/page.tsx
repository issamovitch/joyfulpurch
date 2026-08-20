import type { Metadata } from "next";
import { PlaceholderClientPage } from "@/components/placeholder-client-page";

export const metadata: Metadata = {
  title: "Nordic Home 3D Furniture Models | Scandinavian Product Viewer",
  description: "Interactive 3D Scandinavian furniture models for Nordic Home. See how to turn 2D images into 3D models for a minimalist online store.",
  alternates: { canonical: "https://joyfulpurch.com/demos/nordichome" },
};

export default function NordicHomePage() {
  return (
    <PlaceholderClientPage
      name="Nordic Home"
      tagline="Scandinavian-inspired minimalist furniture for modern living spaces."
      website="#"
    />
  );
}
