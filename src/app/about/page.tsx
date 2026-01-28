import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="A contractor born from fabrication precision."
        subtitle="Top Tier Services scales the craftsmanship of a countertop manufacturer into complete home experiences."
        kicker="About"
      />
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <ScrollReveal>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-black/40 px-6 py-10 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white">Why we exist</h2>
                <p className="mt-4 text-sm text-white/60">
                  Our fabrication team has refined stonework for years. We created Top Tier Services to extend that precision
                  into full-home upgrades, combining meticulous detailing with fast, modern execution.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-white">How we work</h2>
                <p className="mt-4 text-sm text-white/60">
                  Each project runs on a centralized schedule with dedicated crews, transparent milestones, and a real-time
                  client dashboard.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
