import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Capabilities engineered for modern homes."
        subtitle="From rapid-response maintenance to multi-room transformations, every service is orchestrated through a single Top Tier build team."
        kicker="Services"
      />
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <div className="glass rounded-3xl px-6 py-8">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{service.description}</p>
                  <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.3em] text-white/40">
                    <li>Site inspection</li>
                    <li>Material selection</li>
                    <li>Precision build</li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
