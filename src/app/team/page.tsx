import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTASection from "@/components/sections/CTASection";
import { teamMembers } from "@/data/content";

export default function TeamPage() {
  return (
    <div>
      <PageHero
        title="A build collective that thinks like a design lab."
        subtitle="Top Tier Services unites fabrication specialists, designers, and field operators into a single modern contractor experience."
        kicker="Team"
      />
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-black/40 px-6 py-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{member.role}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-3 text-sm text-white/60">{member.specialty}</p>
                  <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
                    <span className="rounded-full border border-white/10 px-3 py-1">Austin</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Phoenix</span>
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
