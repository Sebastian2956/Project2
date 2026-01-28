export default function TextMarquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-white/10 py-4">
      <div className="flex w-[200%] animate-marquee gap-8 text-2xl uppercase tracking-[0.4em] text-white/20">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
