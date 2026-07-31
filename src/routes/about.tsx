import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Gem, HeartHandshake, Languages, LifeBuoy, ShieldCheck, Target } from "lucide-react";
import { Container, LuxeImage, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PT Prima Gen International | Indonesian DMC" },
      { name: "description", content: "Learn about PT Prima Gen International — an Indonesia-based DMC delivering luxury FIT travel, group tours, MICE, honeymoons and corporate journeys across Southeast Asia." },
      { property: "og:title", content: "About PT Prima Gen International | Indonesian DMC" },
      { property: "og:description", content: "Our story, mission, vision and values as an Indonesia-based Destination Management Company." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", text: "Transparent quotations, honest advice on what a destination can and cannot deliver." },
  { icon: Gem, title: "Craftsmanship", text: "Every itinerary is written by hand, then tested against real road, tide and flight conditions." },
  { icon: HeartHandshake, title: "Partnership", text: "Long-term relationships with hotels, guides and drivers who share our standards." },
  { icon: LifeBuoy, title: "Responsibility", text: "Ethical wildlife policies, community-owned suppliers and respect for sacred sites." },
];

const CAPABILITIES = [
  "Luxury FIT Travel", "Group Tours", "Corporate Travel", "MICE & Incentives",
  "Luxury Holidays", "Family Tours", "Honeymoon Packages", "Adventure Holidays",
];

const STRENGTHS = [
  { icon: Languages, title: "Professional Multilingual Team", text: "Guides and coordinators working in English, Mandarin, Japanese, Arabic and major European languages." },
  { icon: Compass, title: "Professional Destination Planning", text: "Route logic built on first-hand field knowledge across all three destinations." },
  { icon: ShieldCheck, title: "Reliable Transportation", text: "An inspected private fleet with vetted, uniformed and insured chauffeurs." },
  { icon: Gem, title: "Luxury Accommodations", text: "Direct contracts and upgrade access with leading resorts, villas and heritage hotels." },
  { icon: HeartHandshake, title: "Trusted Local Suppliers", text: "Boat operators, restaurants and artisans we work with year after year." },
  { icon: LifeBuoy, title: "24/7 Travel Assistance", text: "A duty officer reachable at any hour, in every destination we operate." },
];

function About() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img src={IMG.ubud} alt="Rice terraces at sunrise in Bali, Indonesia" width={1600} height={1000} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,32,25,0.7)_0%,rgba(8,32,25,0.45)_50%,rgba(8,32,25,0.85)_100%)]" />
        <Container className="pb-20 pt-40">
          <p className="eyebrow animate-rise">About Our Company</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-background animate-rise sm:text-5xl lg:text-6xl" style={{ animationDelay: "120ms" }}>
            {COMPANY.tagline}
          </h1>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who We Are" title="An Indonesia-based Destination Management Company" />
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  {COMPANY.name} operates from the 45th floor of AXA Tower in South Jakarta as a full-service
                  Destination Management Company. We plan, contract and operate travel on the ground in Indonesia,
                  Thailand and Malaysia for travel agencies, corporate clients and private travellers.
                </p>
                <p>
                  Our work covers everything that happens after the international flight lands: airport handling,
                  transport, accommodation, guiding, experiences, permits, restaurants, events and the quiet
                  problem-solving that guests never notice because it happens before they do.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="mt-12 text-xl text-ink">Our Story</h3>
              <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  The company was founded by Indonesian travel professionals who had spent years operating programmes
                  for international tour operators and grew frustrated with the gap between the itinerary sold abroad
                  and the experience delivered locally. Prima Gen was created to close that gap.
                </p>
                <p>
                  We began with a small fleet and a handful of guides in Bali and Java. Today we run integrated
                  programmes across three countries, from single-couple honeymoons to conference groups of several
                  hundred delegates — with the same insistence on inspecting everything ourselves.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-6">
            <Reveal><LuxeImage src={IMG.jakarta} alt="Jakarta business district skyline at dusk" ratio="aspect-[16/10]" /></Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-6">
              <LuxeImage src={IMG.culture} alt="Traditional dancer performing in Indonesia" ratio="aspect-[3/4]" />
              <LuxeImage src={IMG.dining} alt="Fine dining experience arranged for guests" ratio="aspect-[3/4]" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="bg-background p-10 hover-lift">
              <Target className="h-7 w-7 text-gold" />
              <h2 className="mt-6 text-2xl text-ink">Our Mission</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                To design and operate journeys that reflect the true character of Southeast Asia — accurate in detail,
                generous in hospitality and delivered by local professionals who take personal responsibility for every
                guest in our care.
              </p>
            </Reveal>
            <Reveal delay={120} className="bg-background p-10 hover-lift">
              <Eye className="h-7 w-7 text-gold" />
              <h2 className="mt-6 text-2xl text-ink">Our Vision</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                To be recognised as the most trusted Indonesian Destination Management Company for luxury travel in the
                region — the partner international agencies and corporations rely on when the programme cannot fail.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Core Values" title="What guides every decision we make" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 90} className="bg-background p-8 hover-lift">
                  <v.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-6 text-lg text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="What We Deliver" title="Full-spectrum travel management" intro="A single ground partner across every travel category our clients require." />
          <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 60} className="bg-background px-7 py-8 text-sm font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-sand">
                {c}
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-primary py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Why Choose Us" title={`Why travellers choose ${COMPANY.name}`} tone="light" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STRENGTHS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="border border-background/15 p-8">
                <s.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-6 text-lg text-background">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
