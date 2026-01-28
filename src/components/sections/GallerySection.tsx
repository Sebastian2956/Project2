import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TiltCard from "@/components/motion/TiltCard";
import { PexelsPhoto } from "@/lib/pexels";

export default function GallerySection({ images }: { images: PexelsPhoto[] }) {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Selected work</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Spaces shaped by precision and restraint.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Handpicked project imagery sourced through the Pexels API or cached locally for quick previews.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {images.slice(0, 3).map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <TiltCard className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                <div className="relative aspect-[3/4]">
                  <Image src={image.src.large2x} alt={image.alt} fill className="object-cover" />
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Project</p>
                  <p className="mt-2 text-sm text-white/80">{image.alt}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
