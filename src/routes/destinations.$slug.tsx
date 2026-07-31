import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import { Container, LuxeImage, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { DESTINATIONS, getDestination, type Destination } from "@/lib/destinations";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return destination;
  },
  head: ({ loaderData }) => {
    const name = loaderData?.name ?? "Destination";
    const title = `${name} Travel Guide | PT Prima Gen International`;
    const description =
      loaderData?.summary ?? "Luxury destination guides across Southeast Asia by PT Prima Gen International.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData() as Destination;

  return (
    <>
      <section className="relative flex min-h-[82svh] items-end overflow-hidden">
        <img src={d.hero} alt={`${d.name} signature landscape`} width={1600} height={1000} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,32,25,0.65)_0%,rgba(8,32,25,0.35)_45%,rgba(8,32,25,0.88)_100%)]" />
        <Container className="pb-20 pt-40">
          <p className="eyebrow animate-rise">{d.heroKicker}</p>
          <h1 className="mt-5 text-5xl text-background animate-rise sm:text-6xl lg:text-7xl" style={{ animationDelay: "120ms" }}>{d.name}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 animate-rise" style={{ animationDelay: "240ms" }}>{d.summary}</p>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Destination Overview" title={`Travelling ${d.name} with us`} />
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                {d.overview.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <dl className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-1">
              {d.facts.map((f) => (
                <div key={f.label} className="bg-sand px-6 py-5">
                  <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">{f.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Top Attractions" title={`Landmarks that define ${d.name}`} />
              <ul className="mt-8 space-y-4">
                {d.attractions.map((a, i) => (
                  <Reveal as="li" key={a} delay={i * 50} className="flex gap-3 border-b border-border pb-4 text-sm text-ink">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {a}
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Things To Do" title="How our guests spend their days" />
              <ul className="mt-8 space-y-4">
                {d.thingsToDo.map((a, i) => (
                  <Reveal as="li" key={a} delay={i * 50} className="flex gap-3 border-b border-border pb-4 text-sm text-ink">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {a}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Popular Cities & Regions" title={`Where to travel in ${d.name}`} intro="Each region below is fully operated by our own ground team, with guides, transport and accommodation contracted directly." />
          <div className="mt-16 space-y-20">
            {d.cities.map((c, i) => (
              <Reveal as="article" key={c.name} delay={60}>
                <div className={`grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <LuxeImage src={c.image} alt={`${c.name}, ${d.name}`} ratio="aspect-[4/3]" />
                  <div>
                    <h3 className="text-2xl text-ink lg:text-3xl">{c.name}</h3>
                    <span className="gold-rule mt-5" />
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.overview}</p>
                    <p className="mt-5 border-l-2 border-gold pl-5 text-sm italic leading-relaxed text-ink">
                      Why visit: {c.whyVisit}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-primary">
                      <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" />{c.bestTime}</span>
                      <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />Ideal stay: {c.duration}</span>
                    </div>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Things To Do</h4>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {c.thingsToDo.map((t) => <li key={t}>— {t}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">Recommended Experiences</h4>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {c.experiences.map((t) => <li key={t}>— {t}</li>)}
                        </ul>
                        <h4 className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-gold">Travel Tips</h4>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {c.tips.map((t) => <li key={t}>— {t}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 bg-sand p-6">
                      <p className="eyebrow">Sample Package</p>
                      <p className="mt-3 font-[family-name:var(--font-display)] text-xl text-ink">{c.samplePackage.title}</p>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">{c.samplePackage.duration}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{c.samplePackage.highlights.join(" · ")}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Travel Seasons" title="When to travel" tone="light" />
              <ul className="mt-10 space-y-6">
                {d.seasons.map((s, i) => (
                  <Reveal as="li" key={s.label} delay={i * 90} className="border-b border-background/20 pb-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold">{s.months}</p>
                    <p className="mt-2 font-[family-name:var(--font-display)] text-xl text-background">{s.label}</p>
                    <p className="mt-2 text-sm text-background/70">{s.note}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Travel Tips" title="Practical guidance" tone="light" />
              <ul className="mt-10 space-y-5">
                {d.tips.map((t, i) => (
                  <Reveal as="li" key={t} delay={i * 80} className="border-b border-background/20 pb-5 text-sm text-background/80">
                    {t}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Sample Packages" title="Itinerary frameworks" intro="Durations only — every programme is priced and tailored on request." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.packages.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="hover-lift bg-sand p-8">
                <p className="eyebrow">{p.duration}</p>
                <h3 className="mt-4 text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm text-primary">{p.route}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.includes.map((x) => <li key={x}>— {x}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="border-t-2 border-gold pt-6">
                <h3 className="text-lg text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Gallery" title={`${d.name} in photographs`} align="center" />
          <div className="mt-14 columns-2 gap-4 lg:columns-4">
            {d.gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={i * 50} className="mb-4 break-inside-avoid">
                <LuxeImage src={g.src} alt={g.alt} ratio={i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
            {DESTINATIONS.filter((x) => x.slug !== d.slug).map((x) => (
              <Link
                key={x.slug}
                to="/destinations/$slug"
                params={{ slug: x.slug }}
                className="border border-primary px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Discover {x.name}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
