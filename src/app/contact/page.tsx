import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Clock, Globe, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | 3D Product Modeling Services",
  description:
    "Get in touch with Joyfulpurch for affordable 3D product modeling for small brands. Request a free sample 3D model from your product photos.",
  alternates: { canonical: "https://joyfulpurch.com/contact" },
  openGraph: {
    title: "Contact Joyfulpurch | 3D Product Modeling Services",
    description: "Request a free 3D model sample. Convert product photos to 3D models for your ecommerce store.",
    url: "https://joyfulpurch.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 py-20">
        <div className="mx-auto max-w-3xl px-5">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MessageSquare className="h-7 w-7" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get in touch
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
              Have a question, want a quote, or ready to start a project?
              Drop us an email and we will get back to you within one business day.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-2xl border-border/60 bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Email us</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For enquiries, quotes, or project kick-offs.
                </p>
                <a
                  href="mailto:contact@joyfulpurch.com"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  contact@joyfulpurch.com
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Response time</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We typically reply within one business day. Urgent requests
                  are prioritised.
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Mon – Fri, 9 AM – 6 PM (WET)
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Website</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Learn more about our services and see case studies.
                </p>
                <a
                  href="https://joyfulpurch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  joyfulpurch.com
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">What to expect</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send us a few product photos and we will reply with a free
                  sample 3D model so you can evaluate the quality before
                  committing.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Big email CTA at the bottom */}
          <div className="mt-12 text-center">
            <a
              href="mailto:contact@joyfulpurch.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              <Mail className="h-4 w-4" />
              contact@joyfulpurch.com
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
