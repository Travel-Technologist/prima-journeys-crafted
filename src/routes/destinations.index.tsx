import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, LuxeImage, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { DESTINATIONS } from "@/lib/destinations";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations | Indonesia, Thailand & Malaysia Travel Guides" },
      { name: "description", content: "Explore our complete luxury travel guides to Indonesia, Thailand and Malaysia — cities, attractions, seasons, travel tips and sample itineraries." },
      { property: "og:title", content: "Destinations | Indonesia, Thailand & Malaysia" },
      { property: "og:description", content: "Complete destination guides across Southeast Asia by PT Prima Gen International." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsIndex,
});

function DestinationsIndex() {
  return (
    <>
      <section className="relative flex min-h-[68svh] items-end overflow-hidden">
        <img src={IMG.rajaAmpat} alt="Karst islands and turquoise lagoons of Raja Ampat" width={1600} height={1000} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,32,25,0.68)_0%,rgba(8,32,25,0.4)_50%,rgba(8,32,25,0.85)_100%)]" />
        <Container className="pb-20 pt-40">
          <p className="eyebrow animate-rise">Our Destinations</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-background animate-rise sm:text-5xl lg:text-6xl" style={{ animationDelay: "120ms" }}>
            Three countries we know in extraordinary detail
          </h1>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Destination Guides"
            title="Indonesia, Thailand and Malaysia"
            intro="Each guide covers the cities we operate, the attractions worth your time, seasonal advice, travel tips and sample itinerary durations."
            align="center"
          />
          <div className="mt-16 space-y-16">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <LuxeImage src={d.hero} alt={`${d.name} landscape`} ratio="aspect-[4/3]" />
                  <div>
                    <p className="eyebrow">{d.heroKicker}</p>
                    <h3 className="mt-4 text-3xl text-ink lg:text-4xl">{d.name}</h3>
                    <span className="gold-rule mt-6" />
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">{d.summary}</p>
                    <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-primary">
                      {d.cities.slice(0, 5).map((c) => <li key={c.name}>{c.name}</li>)}
                    </ul>
                    <Link
                      to="/destinations/$slug"
                      params={{ slug: d.slug }}
                      className="mt-9 inline-block bg-primary px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
                    >
                      Explore {d.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
