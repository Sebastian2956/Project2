import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-8 py-14">
            <div className="absolute inset-0 page-gradient opacity-40" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Start now</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Transform your space with Top Tier Services.
              </h2>
              <p className="mt-4 max-w-xl text-white/60">
                Request a custom scope, meet our build captains, and experience a renovation workflow designed for modern
                homeowners.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>Request a proposal</PrimaryButton>
                <SecondaryButton>Explore services</SecondaryButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
