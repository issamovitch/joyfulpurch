import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service | Joyfulpurch",
  description: "Terms of service for Joyfulpurch 3D product modeling services. Read the terms governing 2D to 3D conversion, GLB model delivery, and IP transfer.",
  alternates: { canonical: "https://joyfulpurch.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 py-20">
        <article className="mx-auto max-w-3xl px-5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Terms of Service
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <p className="text-base text-foreground font-medium">
              Last updated: August 2025
            </p>

            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
              website joyfulpurch.com and the 3D modelling and augmented reality (AR)
              services provided by Joyfulpurch (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our
              website or engaging our services, you agree to be bound by these Terms. If
              you do not agree, please do not use our services.
            </p>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Services
              </h2>
              <p>
                Joyfulpurch provides 3D modelling and AR visualisation services. We
                convert 2D product photographs into interactive 3D models (GLB/USDZ
                format) suitable for web embedding, augmented reality experiences, and
                e-commerce integration. The specific scope, deliverables, timeline, and
                pricing for each project are defined in a separate project agreement or
                quote provided before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Client Obligations
              </h2>
              <p className="mb-3">
                When engaging our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide product photographs of sufficient quality, resolution, and
                  coverage (multiple angles where possible) to enable accurate 3D
                  reconstruction.
                </li>
                <li>
                  Ensure you have the rights to the photographs and product designs you
                  provide, and that they do not infringe any third-party intellectual
                  property rights.
                </li>
                <li>
                  Review and provide timely feedback on draft deliverables within the
                  agreed revision windows.
                </li>
                <li>
                  Make payment in accordance with the terms agreed in the project
                  quote or agreement.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Intellectual Property
              </h2>
              <p className="mb-3">
                Upon full payment, the client receives ownership of the delivered 3D
                model files for their own commercial use. The following conditions apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Client content:</strong> You
                  retain all rights to the original product photographs and designs you
                  provide to us.
                </li>
                <li>
                  <strong className="text-foreground">3D models:</strong> Ownership of
                  the final, paid-for 3D model files transfers to the client upon
                  project completion and payment in full.
                </li>
                <li>
                  <strong className="text-foreground">Portfolio use:</strong> We
                  reserve the right to use anonymised or watermarked versions of 3D
                  models in our portfolio, marketing materials, and case studies unless
                  a written NDA or confidentiality agreement states otherwise.
                </li>
                <li>
                  <strong className="text-foreground">Tools and methods:</strong> Our
                  proprietary processes, tools, and techniques remain our intellectual
                  property.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Payment Terms
              </h2>
              <p>
                Payment terms are specified in the project quote or agreement. Unless
                otherwise stated, standard terms are 50% upfront before work commences
                and 50% upon delivery of final files. Late payments may incur interest
                at a rate of 2% per month on the outstanding balance. All prices are
                exclusive of applicable taxes unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Revisions
              </h2>
              <p>
                Each project includes a defined number of revision rounds as specified in
                the project agreement. Additional revisions beyond the agreed scope may
                incur extra charges, which will be communicated and approved before work
                proceeds. Revisions requested due to a change in the original product
                photographs or specifications are considered a scope change.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Confidentiality
              </h2>
              <p>
                We treat all client-provided materials and project details as
                confidential. We will not share, distribute, or disclose your product
                images, designs, pricing, or project details to any third party without
                your written consent, except as required by law or as necessary to
                deliver the services (for example, subcontracting specialised tasks under
                equivalent confidentiality obligations).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Joyfulpurch shall not
                be liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits, data, or
                business opportunities, arising out of or related to the use of our
                services or deliverables. Our total liability for any claim shall not
                exceed the total fees paid by you for the specific project in question.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Termination
              </h2>
              <p>
                Either party may terminate a project engagement by providing 14 days’
                written notice. In the event of termination, the client shall pay for all
                work completed up to the date of termination. Any upfront payments for
                work not yet commenced will be refunded on a pro-rata basis. We reserve
                the right to terminate immediately if the client breaches these Terms or
                fails to make payment when due.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Website Use
              </h2>
              <p>
                You may use our website for lawful purposes only. You agree not to misuse
                our website by attempting to gain unauthorised access, transmitting
                malicious code, or engaging in any activity that could damage, disable,
                or impair the website. We reserve the right to restrict access to any
                user who violates these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of
                Portugal, without regard to its conflict of law provisions. Any disputes
                arising from these Terms or our services shall be resolved in the
                competent courts of Portugal. For clients within the EU, you may
                additionally have the right to seek resolution through your local
                consumer dispute resolution mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                11. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes become
                effective upon posting the updated Terms on our website with a revised
                &quot;Last updated&quot; date. Continued use of our services after such changes
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                12. Contact Us
              </h2>
              <p>
                Questions about these Terms? Reach us at{" "}
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