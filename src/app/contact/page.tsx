import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Let’s build the next space together."
        subtitle="Share your project details and we will assemble a dedicated crew within 24 hours."
        kicker="Contact"
      />
      <section className="section-spacing">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <form className="glass rounded-3xl px-6 py-8">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  First name
                  <input
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
                    placeholder="Sienna"
                  />
                </label>
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Last name
                  <input
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
                    placeholder="Morales"
                  />
                </label>
              </div>
              <label className="mt-6 block text-xs uppercase tracking-[0.3em] text-white/50">
                Email
                <input
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
                  placeholder="hello@toptierservices.com"
                />
              </label>
              <label className="mt-6 block text-xs uppercase tracking-[0.3em] text-white/50">
                Project details
                <textarea
                  className="mt-3 min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-white/40"
                  placeholder="Tell us about the scope, timeline, and goals."
                />
              </label>
              <div className="mt-6">
                <PrimaryButton>Send request</PrimaryButton>
              </div>
            </form>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-black/50 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
                <p className="mt-3 text-sm text-white/70">hello@toptierservices.com</p>
                <p className="mt-2 text-sm text-white/70">(512) 555-0142</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Studios</p>
                <p className="mt-3 text-sm text-white/70">Austin · Scottsdale · Denver</p>
                <p className="mt-2 text-sm text-white/50">On-site consultations by appointment</p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="absolute inset-0 page-gradient opacity-30" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Availability</p>
                  <p className="mt-3 text-sm text-white/70">Currently booking for March 2026.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
