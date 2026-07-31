import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PT Prima Gen International | Jakarta, Indonesia" },
      { name: "description", content: "Contact PT Prima Gen International in South Jakarta — address, email, phone and business hours for luxury travel planning across Southeast Asia." },
      { property: "og:title", content: "Contact PT Prima Gen International" },
      { property: "og:description", content: "AXA Tower 45th Floor, South Jakarta. Email info@ptprimagenintl.com. Monday to Friday, 09:00 – 18:00." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin, WhatsApp: MessageCircle } as const;

function Contact() {
  return (
    <>
      <section className="relative flex min-h-[60svh] items-end overflow-hidden">
        <img src={IMG.jakarta} alt="Jakarta skyline at dusk" width={1600} height={1000} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,32,25,0.7)_0%,rgba(8,32,25,0.5)_50%,rgba(8,32,25,0.88)_100%)]" />
        <Container className="pb-20 pt-40">
          <p className="eyebrow animate-rise">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-background animate-rise sm:text-5xl lg:text-6xl" style={{ animationDelay: "120ms" }}>
            Speak with our destination specialists
          </h1>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Head Office" title={COMPANY.name} intro="Our Jakarta head office coordinates every programme we operate across Indonesia, Thailand and Malaysia." />
            <div className="mt-10 space-y-8">
              <Reveal className="flex gap-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <address className="not-italic">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Address</p>
                  {COMPANY.address.map((l) => <p key={l} className="mt-1 text-sm text-ink">{l}</p>)}
                </address>
              </Reveal>
              <Reveal delay={80} className="flex gap-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="mt-1 block break-all text-sm text-ink transition-colors hover:text-primary">{COMPANY.email}</a>
                </div>
              </Reveal>
              <Reveal delay={140} className="flex gap-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Phone</p>
                  <p className="mt-1 text-sm text-ink">{COMPANY.phone}</p>
                </div>
              </Reveal>
              <Reveal delay={200} className="flex gap-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Business Hours</p>
                  {COMPANY.hours.map((h) => <p key={h} className="mt-1 text-sm text-ink">{h}</p>)}
                </div>
              </Reveal>
              <Reveal delay={260}>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Follow Us</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {COMPANY.social.map((s) => {
                    const Icon = socialIcons[s.label as keyof typeof socialIcons];
                    return (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label} className="inline-flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors hover:border-gold hover:text-gold">
                          <Icon className="h-4 w-4" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="bg-sand p-8">
              <img src={IMG.logo} alt={`${COMPANY.name} logo`} className="h-14 w-auto max-w-[260px] object-contain" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Enquiries are answered within one business day. For live programmes already in progress, our duty
                officer is reachable 24 hours a day.
              </p>
            </div>
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title={`Map showing ${COMPANY.name} head office in South Jakarta`}
                src="https://www.google.com/maps?q=AXA%20Tower%20Jl.%20Prof.%20Dr.%20Satrio%20Kav.18%20Jakarta&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
