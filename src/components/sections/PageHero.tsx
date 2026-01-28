import Badge from "@/components/ui/Badge";

export default function PageHero({
  title,
  subtitle,
  kicker,
}: {
  title: string;
  subtitle: string;
  kicker?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-16">
      <div className="absolute inset-0 page-gradient opacity-20" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Badge label={kicker ?? "Top Tier Services"} />
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/60">{subtitle}</p>
      </div>
    </section>
  );
}
