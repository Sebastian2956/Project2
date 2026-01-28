import { faqs } from "@/data/content";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function FAQSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">FAQ</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Answers, without the fluff.
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-black/40 px-6 py-6">
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-white/60">{faq.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
