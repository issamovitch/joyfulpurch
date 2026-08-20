import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | 3D Product Modeling Tips & Guides",
  description:
    "Learn how to convert product photos to 3D models, add interactive 3D viewers to Shopify, and reduce returns with 3D product visualization.",
  alternates: { canonical: "https://joyfulpurch.com/blog" },
  openGraph: {
    title: "Blog | Joyfulpurch 3D Modeling Guides",
    description: "Tips, guides, and insights on 3D product modeling for ecommerce.",
    url: "https://joyfulpurch.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-[#0e0f13] border-b border-white/[0.06]">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            Joyfulpurch
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
