import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em]">
          TOP TIER <span className="text-white/50">SERVICES</span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <PrimaryButton label="Schedule" />
        </div>
      </div>
    </header>
  );
}
