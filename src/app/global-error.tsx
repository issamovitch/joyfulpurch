"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-5">
          <div className="h-16 w-16 rounded-2xl bg-[#f28c38]/10 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-[#f28c38]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Something went wrong
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-[#f28c38] text-white hover:bg-[#e07a2a] transition-colors"
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  );
}
