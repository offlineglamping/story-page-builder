export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] tracking-[0.32em] uppercase text-muted-foreground mb-6">
      <span>{number}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}
