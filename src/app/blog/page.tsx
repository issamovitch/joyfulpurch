import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "how-to-add-3d-models-to-shopify",
    title: "How to Add 3D Models to Shopify: A Step-by-Step Guide",
    description:
      "Learn how to embed interactive 3D product viewers on your Shopify store. Turn 2D product images into 3D models for Shopify and boost conversions.",
    date: "2025-08-01",
  },
  {
    slug: "2d-to-3d-product-photos-guide",
    title: "The Complete Guide: Turn 2D Product Photos into 3D Models",
    description:
      "Discover how 2D to 3D product conversion works, what makes a good source photo, and how to get started with affordable 3D product modeling for small brands.",
    date: "2025-07-25",
  },
  {
    slug: "do-3d-product-viewers-reduce-returns",
    title: "Do 3D Product Viewers Reduce Returns? Data and Case Studies",
    description:
      "Can interactive 3D product visualization and AR product viewers actually reduce returns? We look at the data from furniture and home decor brands.",
    date: "2025-07-18",
  },
];

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold tracking-tight">3D Product Modeling Blog</h1>
      <p className="mt-3 text-muted-foreground">
        Guides, tips, and insights on converting product photos to 3D models, embedding interactive 3D viewers on product pages, and reducing returns with product 3D models for ecommerce.
      </p>

      <div className="mt-12 flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-border/60 bg-card p-6 hover:shadow-md transition-shadow no-underline"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}