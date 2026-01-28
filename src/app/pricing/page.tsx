import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { pricingTiers } from "@/data/content";

export default function PricingPage() {
  return (
    <div>
      <PageHero
        title="Transparent pricing for elevated builds."
        subtitle="Pick a plan based on complexity and scope. Every tier includes direct access to your build captain and daily progress visibility."
        kicker="Pricing"
      />
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.08}>
                <div className="glass flex h-full flex-col rounded-3xl px-6 py-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{tier.name}</p>
                  <p className="mt-4 font-display text-3xl font-semibold text-white">{tier.price}</p>
                  <p className="mt-3 text-sm text-white/60">{tier.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-white/60">
                    {tier.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3">
                    <PrimaryButton>Start {tier.name}</PrimaryButton>
                    <SecondaryButton>Compare</SecondaryButton>
                  </div>
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
