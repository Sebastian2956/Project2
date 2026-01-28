import { services } from "@/data/content";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Hammer, Paintbrush, Ruler, Leaf, Wrench, LayoutGrid } from "lucide-react";

const icons = [Hammer, LayoutGrid, Ruler, Wrench, Leaf, Paintbrush, Hammer, LayoutGrid];

export default function ServicesSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Services</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                A full-spectrum build studio.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              From structural carpentry to refined finishing, we combine specialist crews with a single integrated project
              plan.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <div className="glass group relative overflow-hidden rounded-3xl px-6 py-8">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/70" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{service.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
