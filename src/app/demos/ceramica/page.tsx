import type { Metadata } from "next";
import { PlaceholderClientPage } from "@/components/placeholder-client-page";

export const metadata: Metadata = {
  title: "Ceramica Studio 3D Models | Ceramic Product Visualization",
  description: "Interactive 3D ceramic product models for Ceramica Studio. See how 2D to 3D conversion brings handmade tableware to life online.",
  alternates: { canonical: "https://joyfulpurch.com/demos/ceramica" },
};

export default function CeramicaPage() {
  return (
    <PlaceholderClientPage
      name="Ceramica Studio"
      tagline="Handmade ceramic tableware and decorative pieces artisan-produced in Southern Europe."
      website="#"
    />
  );
}
