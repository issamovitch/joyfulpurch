import Link from "next/link";
import { Box } from "lucide-react";
import Image from 'next/image';

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/demos", label: "Demo Gallery" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog/how-to-add-3d-models-to-shopify", label: "3D Models for Shopify" },
      { href: "/blog/2d-to-3d-product-photos-guide", label: "2D to 3D Guide" },
      { href: "/blog/do-3d-product-viewers-reduce-returns", label: "3D & Returns Data" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0e0f13] border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-white"
            >
              <Image src="/logo.png" alt="Joyfulpurch" width={30} height={30} />
              Joyfulpurch
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/40 max-w-xs">
              Turn flat product photos into interactive 3D and AR models that
              boost conversions and cut returns.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-3">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Joyfulpurch. All rights
            reserved.
          </p>
          <a
            href="https://joyfulpurch.com"
            className="hover:text-white/60 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            joyfulpurch.com
          </a>
        </div>
      </div>
    </footer>
  );
}
