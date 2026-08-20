import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-5 bg-background">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f28c38]/10">
        <Search className="h-8 w-8 text-[#f28c38]" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-[#f28c38] text-white hover:bg-[#e07a2a] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
