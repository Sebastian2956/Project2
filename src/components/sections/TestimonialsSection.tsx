import { testimonials } from "@/data/content";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section className="section-spacing bg-black/30">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Client voices</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by homeowners who love modern precision.
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <div className="glass h-full rounded-3xl px-6 py-8">
                <p className="text-lg text-white/80">“{testimonial.quote}”</p>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/50">
                  {testimonial.name}
                </div>
                <p className="mt-2 text-sm text-white/40">{testimonial.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
