"use client";

import Link from "next/link";
import { Box, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/demos", label: "Demo Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0e0f13] border-b border-white/[0.06]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <Image src="/logo.png" alt="Joyfulpurch" width={30} height={30} />
          Joyfulpurch
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden border-t border-white/[0.06] bg-[#0e0f13]">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
