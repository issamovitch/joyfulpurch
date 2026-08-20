"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-5 bg-background">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f28c38]/10">
        <AlertTriangle className="h-8 w-8 text-[#f28c38]" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          An unexpected error occurred. Please try again or head back to the
          homepage.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-[#f28c38] text-white hover:bg-[#e07a2a] transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
