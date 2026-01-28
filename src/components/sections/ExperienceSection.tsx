import ScrollReveal from "@/components/motion/ScrollReveal";
import PhysicsOrb from "@/components/motion/PhysicsOrb";
import TextMarquee from "@/components/motion/TextMarquee";

export default function ExperienceSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Experience layer</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Motion, physics, and a tactile digital build.
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                We simulate real-world forces to make the interface feel responsive, architectural, and alive.
              </p>
            </div>
            <div className="h-56 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50 md:h-64 md:w-2/5">
              <PhysicsOrb />
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-12">
          <TextMarquee text="Precision / Technology / Craft / Detail / Build /" />
        </div>
      </div>
    </section>
  );
}
