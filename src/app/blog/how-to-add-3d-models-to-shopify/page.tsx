import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Add 3D Models to Shopify | Step-by-Step Guide",
  description: "Learn how to embed interactive 3D product viewers on your Shopify store. Turn 2D images into 3D models for Shopify with GLB files and model-viewer.",
  alternates: { canonical: "https://joyfulpurch.com/blog/how-to-add-3d-models-to-shopify" },
  openGraph: {
    title: "How to Add 3D Models to Shopify | Joyfulpurch",
    description: "Step-by-step guide to embedding interactive 3D product viewers on your Shopify store.",
    url: "https://joyfulpurch.com/blog/how-to-add-3d-models-to-shopify",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        &larr; Back to Blog
      </Link>
      <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
        How to Add 3D Models to Shopify: A Step-by-Step Guide
      </h1>
      <p className="mt-4 text-muted-foreground">August 1, 2025</p>

      <div className="mt-10 prose prose-neutral max-w-none">
        <p className="lead text-lg text-muted-foreground">
          If you run a Shopify store selling furniture, home decor, or any physical product, adding interactive 3D models to your product pages can dramatically improve the shopping experience. In this guide, we walk you through exactly how to embed 3D furniture models for Shopify using GLB files and the Google model-viewer component.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Why Add 3D Models to Your Shopify Store?</h2>
        <p>
          Product 3D models for ecommerce give customers the ability to spin, zoom, and inspect every angle of a product before buying. Studies show that interactive 3D product viewers increase conversion rates by 10-30% and reduce returns by up to 40%. For furniture brands, where customers cannot physically touch the product, a 360 product spin for a furniture store is the next best thing.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">What You Need Before You Start</h2>
        <p>
          To add an interactive 3D product viewer for your Shopify website, you need a GLB file (the standard 3D model format for the web). If you already have 3D models, great. If not, you can convert product photos to 3D models using a 3D product modeling service like Joyfulpurch. The process is simple: send us a few photos of your product, and we deliver a production-ready GLB model optimized for fast web loading.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Step 1: Get Your GLB 3D Model</h2>
        <p>
          Your 3D model should be in GLB format. This is the industry-standard format for web-based 3D viewing. If you need a model created from scratch, affordable 3D product modeling for small brands is available. The key is to ensure your GLB file is optimized for web: compressed textures, reasonable polygon count, and a file size under 5 MB for fast loading.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Step 2: Upload the GLB File to Shopify</h2>
        <p>
          Go to your Shopify Admin, navigate to Settings &gt; Files, and upload your GLB file. Shopify will host the file and give you a URL. Copy this URL as you will need it in the next step.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Step 3: Add the model-viewer Code Snippet</h2>
        <p>
          Google model-viewer is a free, open-source web component that displays 3D models on any website. To embed 3D models on your Shopify product pages, add the following code to your product description or a custom liquid template:
        </p>
        <pre className="mt-4 rounded-xl bg-muted p-4 text-sm overflow-x-auto">
          {`<model-viewer
  src="your-model-url.glb"
  ios-src="your-model-url.usdz"
  camera-controls
  auto-rotate
  shadow-intensity="0.4"
  ar
  style="width: 100%; height: 500px;"
></model-viewer>`}
        </pre>
        <p>
          Replace the src URL with the link to your GLB file from step 2. The ios-src attribute provides an AR experience for iPhone users. The ar attribute enables the AR quick-look button.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Step 4: Add the model-viewer Script</h2>
        <p>
          Include the model-viewer script in your Shopify theme. Go to Online Store &gt; Themes &gt; Edit Code, and add this line inside the &lt;head&gt; tag of your theme.liquid file:
        </p>
        <pre className="mt-4 rounded-xl bg-muted p-4 text-sm overflow-x-auto">
          {`<script type="module"
  src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js">
</script>`}
        </pre>

        <h2 className="mt-10 text-2xl font-semibold">Step 5: Test and Go Live</h2>
        <p>
          Preview your product page. You should see an interactive 3D model that customers can rotate, zoom, and view in AR. Test on both desktop and mobile devices. Your 3D furniture models for Shopify should load in under 2 seconds on a decent connection.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Best Results</h2>
        <p>
          Use descriptive filenames for your 3D models (e.g., 3d-oak-nightstand-model.glb instead of IMG_001.glb). Add alt text describing the product for accessibility and SEO. Ensure your 3D models have proper lighting and shadows for a realistic appearance.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Ready to Get Started?</h2>
        <p>
          If you need help creating GLB 3D models for your furniture brand, <Link href="/contact" className="text-primary hover:underline">get in touch with Joyfulpurch</Link>. We specialize in converting product photos to 3D models that are optimized for Shopify and other ecommerce platforms.
        </p>
      </div>
    </article>
  );
}
