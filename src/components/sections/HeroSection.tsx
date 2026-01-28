import Image from "next/image";
import Badge from "@/components/ui/Badge";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import FlipText from "@/components/motion/FlipText";
import TiltCard from "@/components/motion/TiltCard";
import { PexelsPhoto } from "@/lib/pexels";

export default function HeroSection({ images }: { images: PexelsPhoto[] }) {
  const heroImage = images[0];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-20 md:flex-row md:items-center md:gap-16">
        <div className="relative z-10 flex-1">
          <Badge label="Modern contractor studio" />
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Build a home with the precision of a tech lab.
          </h1>
          <div className="mt-4 text-white/80">
            <div className="font-display">
              <FlipText />
            </div>
          </div>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Top Tier Services is the supplementary general contractor arm of a next-gen countertop manufacturer, delivering
            design-forward renovations, construction, and maintenance with manufacturing-level rigor.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton>Book a walkthrough</PrimaryButton>
            <SecondaryButton>View capabilities</SecondaryButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/50">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Availability</p>
              <p className="mt-2">New projects starting in 3 weeks</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Coverage</p>
              <p className="mt-2">Design + build teams across the Southwest</p>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <TiltCard className="glass relative overflow-hidden rounded-3xl p-3">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full border border-white/10 bg-white/5 backdrop-blur" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={heroImage.src.large2x}
                alt={heroImage.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/70">
              <span>Precision builds</span>
              <span className="text-white/40">2026</span>
            </div>
          </TiltCard>
          <div className="absolute -bottom-10 -left-10 hidden h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl md:block" />
        </div>
      </div>
    </section>
  );
}
