import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Joyfulpurch",
  description: "Joyfulpurch privacy policy. Learn how we collect, use, and protect your data when using our 3D product modeling services.",
  alternates: { canonical: "https://joyfulpurch.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 py-20">
        <article className="mx-auto max-w-3xl px-5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
            <p className="text-base text-foreground font-medium">
              Last updated: August 2025
            </p>

            <p>
              Joyfulpurch (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
              joyfulpurch.com and related services. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our
              website or engage our services. Please read this policy carefully. If you do
              not agree with the terms of this privacy policy, please do not access the
              site.
            </p>

            {/* Information We Collect */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect information about you in a variety of ways. The information
                we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Data:</strong> Name, email
                  address, phone number, and other contact information you voluntarily
                  provide when you reach out to us for a quote or project enquiry.
                </li>
                <li>
                  <strong className="text-foreground">Product Data:</strong> Product
                  images, photographs, dimensions, and descriptions you share with us for
                  the purpose of creating 3D models. This data is essential for service
                  delivery and is handled with strict confidentiality.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information
                  about how you use our website, including IP address, browser type,
                  operating system, referring URLs, pages viewed, and the dates and times
                  of your visits. We collect this data automatically through cookies and
                  similar technologies.
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information we collect about you for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To provide, operate, and maintain our 3D modelling and AR services.
                </li>
                <li>
                  To respond to your enquiries, provide quotes, and deliver completed 3D
                  model files.
                </li>
                <li>
                  To improve our website, services, and customer experience.
                </li>
                <li>
                  To analyse website usage trends and measure the effectiveness of our
                  content.
                </li>
                <li>
                  To comply with legal obligations and protect our legal rights.
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our
                website and hold certain information. Cookies are files with a small
                amount of data which may include an anonymous unique identifier. You can
                instruct your browser to refuse all cookies or to indicate when a cookie
                is being sent. However, if you do not accept cookies, you may not be able
                to use some portions of our website. We use the following types of
                cookies:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong> Required
                  for the website to function properly. These cannot be disabled.
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> Help us
                  understand how visitors interact with our website by collecting and
                  reporting information anonymously.
                </li>
              </ul>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted third-party service
                providers who assist us in operating our website, conducting our business,
                or serving you, provided those parties agree to keep this information
                confidential. We may also release your information when we believe release
                is appropriate to comply with the law, enforce our site policies, or
                protect ours or others&apos; rights, property, or safety.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational security measures
                to protect your personal information against unauthorised access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as is necessary for
                the purposes set out in this Privacy Policy. We will retain and use your
                information to the extent necessary to comply with our legal obligations,
                resolve disputes, and enforce our policies. Product images and related
                project files are retained for a reasonable period after project
                completion and may be deleted upon request.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights regarding
                your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The right to access, update, or delete your personal information.
                </li>
                <li>
                  The right to object to or restrict the processing of your data.
                </li>
                <li>
                  The right to data portability.
                </li>
                <li>
                  The right to withdraw consent where we rely on consent to process your
                  data.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:contact@joyfulpurch.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@joyfulpurch.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* GDPR */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. GDPR Compliance
              </h2>
              <p>
                For users within the European Economic Area (EEA), we comply with the
                General Data Protection Regulation (GDPR). Our legal basis for
                processing your data includes consent, legitimate interest, and the
                necessity of processing for the performance of a contract. We do not
                engage in automated decision-making or profiling that produces legal
                effects.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you
                of any changes by posting the new Privacy Policy on this page and
                updating the &quot;Last updated&quot; date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us
                at{" "}
                <a
                  href="mailto:contact@joyfulpurch.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@joyfulpurch.com
                </a>{" "}
                or visit{" "}
                <a
                  href="https://joyfulpurch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  joyfulpurch.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
