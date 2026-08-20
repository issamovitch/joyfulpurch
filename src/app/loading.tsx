export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-background">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-[3px] border-muted" />
        <div className="absolute inset-0 rounded-full border-[3px] border-t-[#f28c38] animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">Loading&hellip;</p>
    </div>
  );
}