import { steps } from "@/data/content";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ProcessSection() {
  return (
    <section className="section-spacing bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Process</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              A four-phase build flow that keeps momentum high.
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <div className="relative rounded-3xl border border-white/10 bg-ink/60 px-5 py-6">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs uppercase tracking-[0.3em] text-white/70">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/60">{step.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
