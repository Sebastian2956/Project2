import { metrics } from "@/data/content";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function MetricsSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-ink/50 px-6 py-10 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-semibold text-white md:text-3xl">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
