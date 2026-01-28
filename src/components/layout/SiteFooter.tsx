import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Top Tier Services</p>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Supplementary contractor work powered by advanced fabrication roots and a modern execution model.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/50">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-white/40">
          <p>hello@toptierservices.com</p>
          <p className="mt-2">(512) 555-0142</p>
        </div>
      </div>
    </footer>
  );
}
