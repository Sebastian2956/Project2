import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  className?: string;
};

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-white/70",
        className
      )}
    >
      {label}
    </span>
  );
}
