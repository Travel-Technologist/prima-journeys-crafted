import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "./Primitives";
import { COMPANY, NAV_LINKS } from "@/lib/site";
import { IMG } from "@/lib/images";
import { DESTINATIONS } from "@/lib/destinations";

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
} as const;

export function Footer() {
  return (
    <footer className="bg-primary-deep text-background">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">
          <div>
            <Link to="/" aria-label={`${COMPANY.name} — Home`} className="inline-flex items-center rounded-2xl bg-white p-0.5 shadow-lg">
              <img
                src="/PT-logo.webp"
                alt={`${COMPANY.name} logo`}
                className="h-16 w-auto object-contain lg:h-18"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              An Indonesia-based Destination Management Company creating tailor-made luxury journeys across Indonesia,
              Thailand and Malaysia for discerning travellers, families and corporate groups.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {COMPANY.social.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center border border-background/25 text-background/80 transition-colors duration-300 hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm text-background/75">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Destinations">
            <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Destinations</h3>
            <ul className="mt-6 space-y-3 text-sm text-background/75">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="transition-colors hover:text-gold">
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/destinations" className="transition-colors hover:text-gold">
                  All Destinations
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Contact</h3>
            <address className="mt-6 space-y-4 text-sm not-italic text-background/75">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{COMPANY.address.join(", ")}</span>
              </p>
              <p className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${COMPANY.email}`} className="break-all transition-colors hover:text-gold">
                  {COMPANY.email}
                </a>
              </p>
              <p className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>{COMPANY.phone}</span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-8 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="tracking-[0.18em] uppercase">{COMPANY.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
