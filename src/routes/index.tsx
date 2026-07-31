import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Building2, Compass, Globe2, Heart, HeartHandshake, Hotel, LifeBuoy, Map, Mountain,
  Palmtree, Quote, Route as RouteIcon, Sparkles, Star, Users,
} from "lucide-react";
import { Container, LuxeImage, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { HeroSlider } from "@/components/site/HeroSlider";
import { CTASection } from "@/components/site/CTASection";
import { IMG } from "@/lib/images";
import { DESTINATIONS } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Prima Gen International | Luxury DMC in Indonesia" },
      { name: "description", content: "Indonesia-based Destination Management Company crafting luxury journeys across Indonesia, Thailand and Malaysia. Tailor-made itineraries, MICE and private travel." },
      { property: "og:title", content: "PT Prima Gen International | Luxury DMC in Indonesia" },
      { property: "og:description", content: "Indonesia-based Destination Management Company crafting luxury journeys across Indonesia, Thailand and Malaysia. Tailor-made itineraries, MICE and private travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STATS = [
  { icon: Globe2, value: "3", label: "Countries Covered" },
  { icon: Sparkles, value: "180+", label: "Luxury Experiences" },
  { icon: HeartHandshake, value: "250+", label: "Local Partners" },
  { icon: RouteIcon, value: "1,200+", label: "Custom Itineraries" },
  { icon: Users, value: "15,000+", label: "Happy Travellers" },
  { icon: LifeBuoy, value: "24/7", label: "Guest Assistance" },
];

const EXPERIENCES = [
  { icon: Palmtree, title: "Island Escapes", text: "Private beaches, overwater suites and charter sailing across the archipelago." },
  { icon: Mountain, title: "Adventure Tours", text: "Volcano sunrises, rainforest treks and reef expeditions with certified guides." },
  { icon: Users, title: "Family Holidays", text: "Paced itineraries, connecting suites and activities that work for every age." },
  { icon: Building2, title: "Corporate Travel", text: "Executive handling, conference logistics and incentive programmes." },
  { icon: Hotel, title: "Luxury Retreats", text: "Wellness residencies, spa journeys and restorative jungle sanctuaries." },
  { icon: Compass, title: "Cultural Tours", text: "Temples, palaces, artisan ateliers and heritage circuits with expert historians." },
  { icon: Map, title: "Nature Exploration", text: "Wildlife safaris, marine parks and protected rainforest reserves." },
  { icon: Heart, title: "Honeymoon Packages", text: "Private dinners, villa stays and quiet corners designed for two." },
];

const WHY = [
  "Professional Local Experts", "Tailor-made Itineraries", "Luxury Hotels", "Professional Guides",
  "Private Transportation", "Reliable Local Partners", "Fast Support", "24/7 Assistance",
];

const PACKAGES = [
  { title: "Bali Signature Escape", duration: "4 Nights / 5 Days", place: "Indonesia", img: IMG.bali },
  { title: "Java Heritage Journey", duration: "5 Nights / 6 Days", place: "Indonesia", img: IMG.borobudur },
  { title: "Andaman Island Luxury", duration: "6 Nights / 7 Days", place: "Thailand", img: IMG.phuket },
  { title: "Northern Thailand Culture", duration: "5 Nights / 6 Days", place: "Thailand", img: IMG.chiangMai },
  { title: "Langkawi Island Luxury", duration: "7 Nights / 8 Days", place: "Malaysia", img: IMG.langkawi },
  { title: "Borneo Wildlife Expedition", duration: "8 Nights / 9 Days", place: "Malaysia", img: IMG.sabah },
];

const TESTIMONIALS = [
  { name: "Charlotte Reyes", role: "Private Client, London", text: "Three countries in eleven days and not one moment felt rushed. Every driver was waiting, every guide was excellent, and the villa in Uluwatu was beyond what the photographs promised." },
  { name: "Daniel Weiss", role: "Head of Events, Zurich", text: "We brought 140 delegates to Jakarta and Bali. The site inspections, the gala production and the airport handling were handled with a precision we rarely see anywhere in Asia." },
  { name: "Aisha Rahman", role: "Honeymoon Traveller, Dubai", text: "They listened carefully and then quietly upgraded everything that mattered. The private dinner on the sand in Samui is something we will talk about for years." },
];

const GALLERY = [
  { src: IMG.rajaAmpat, alt: "Karst islands of Raja Ampat" },
  { src: IMG.krabi, alt: "Limestone cliffs in Krabi, Thailand" },
  { src: IMG.ubud, alt: "Rice terraces near Ubud, Bali" },
  { src: IMG.penang, alt: "Heritage shophouses in George Town, Penang" },
  { src: IMG.bromo, alt: "Mount Bromo above the clouds" },
  { src: IMG.samui, alt: "Beachfront pool on Koh Samui" },
  { src: IMG.culture, alt: "Traditional dancer performing at dusk" },
  { src: IMG.waterfall, alt: "Hidden jungle waterfall" },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <HeroSlider
          slides={[
            { src: IMG.bali, alt: "Clifftop luxury resort above the ocean in Bali, Indonesia" },
            { src: IMG.phiPhi, alt: "Turquoise lagoon in the Phi Phi Islands, Thailand" },
            { src: IMG.langkawi, alt: "Aerial view of the Langkawi archipelago, Malaysia" },
          ]}
        />
        <Container className="py-32">
          <div className="max-w-3xl">
            <p className="eyebrow animate-rise">Indonesia-Based Destination Management Company</p>
            <h1
              className="mt-6 text-4xl leading-[1.08] text-background animate-rise sm:text-5xl lg:text-6xl xl:text-[4.2rem]"
              style={{ animationDelay: "120ms" }}
            >
              Discover Southeast Asia Beyond Expectations
            </h1>
            <p
              className="mt-7 max-w-2xl text-base leading-relaxed text-background/85 animate-rise sm:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              Experience carefully crafted journeys across Indonesia, Thailand and Malaysia with a trusted
              Indonesia-based Destination Management Company.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "360ms" }}>
              <Link
                to="/destinations"
                className="bg-gold px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-foreground transition-transform duration-500 hover:-translate-y-1"
              >
                Explore Destinations
              </Link>
              <Link
                to="/contact"
                className="border border-background/60 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-background transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Reveal><LuxeImage src={IMG.baliTemple} alt="Balinese sea temple at sunset" ratio="aspect-[3/4]" /></Reveal>
            <Reveal delay={140} className="mt-10"><LuxeImage src={IMG.villa} alt="Luxury tropical pool villa interior" ratio="aspect-[3/4]" /></Reveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Jakarta house of travel, built on local knowledge"
              intro="PT PRIMA GEN INTERNATIONAL is a Destination Management Company headquartered in South Jakarta, designing private journeys across Indonesia, Thailand and Malaysia for travellers who expect precision as much as beauty."
            />
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  We are not a booking platform. Every itinerary we release has been walked, driven and sailed by our
                  own team — from the pre-dawn road to the Bromo caldera to the tide tables that govern access to
                  Railay. That first-hand knowledge is what allows us to promise timings other operators avoid.
                </p>
                <p>
                  Our specialists handle luxury FIT travel, group tours, corporate programmes, MICE, honeymoons and
                  adventure holidays, supported by a multilingual guiding team, an inspected private transport fleet
                  and direct contracts with the region's finest hotels and resorts.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-9 inline-block border-b border-gold pb-1 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary transition-colors hover:text-gold"
              >
                More About Our Company
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20 lg:py-24">
        <Container>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80} className="text-center">
                <s.icon className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-background lg:text-4xl">{s.value}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-background/65">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Three countries. One trusted ground operation."
            intro="We specialise deeply rather than broadly — which is why our itineraries in these three destinations run with a level of detail generalist operators cannot match."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={d.slug} delay={i * 120}>
                <Link to="/destinations/$slug" params={{ slug: d.slug }} className="group block hover-lift bg-background">
                  <LuxeImage src={d.hero} alt={`${d.name} travel landscape`} ratio="aspect-[4/5]" />
                  <div className="p-7">
                    <p className="eyebrow">{d.cities.length} Signature Regions</p>
                    <h3 className="mt-3 text-2xl text-ink">{d.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                    <span className="mt-6 inline-block border-b border-gold pb-1 text-[0.68rem] uppercase tracking-[0.24em] text-primary">
                      View Destination Guide
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Luxury Experiences" title="Journeys shaped around how you travel" />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.title} delay={i * 60} className="bg-background p-8 transition-colors duration-500 hover:bg-sand">
                <e.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-6 text-lg text-ink">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Sample Tour Packages"
            title="Itinerary frameworks we tailor to you"
            intro="Each programme below is a starting point. Durations are indicative and every element is rebuilt around your dates, pace and preferences."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="hover-lift bg-background">
                <LuxeImage src={p.img} alt={`${p.title} — ${p.place}`} ratio="aspect-[16/11]" />
                <div className="p-7">
                  <p className="eyebrow">{p.place}</p>
                  <h3 className="mt-3 text-xl text-ink">{p.title}</h3>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">{p.duration}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal><LuxeImage src={IMG.komodo} alt="Sailing boat anchored in Komodo National Park" ratio="aspect-[4/5]" /></Reveal>
          <div>
            <SectionHeading eyebrow="Why Choose Us" title="The difference is in the ground operation" />
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {WHY.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 60} className="flex items-start gap-3 border-b border-border pb-4">
                  <Star className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-ink">{w}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-primary-deep py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What our travellers say" align="center" tone="light" />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} className="border border-background/15 bg-background/[0.04] p-9">
                <Quote className="h-7 w-7 text-gold" />
                <p className="mt-6 text-sm leading-relaxed text-background/85">“{t.text}”</p>
                <p className="mt-8 font-[family-name:var(--font-display)] text-lg text-background">{t.name}</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-gold">{t.role}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-14 flex items-center justify-center gap-3 text-background/70">
            <Award className="h-5 w-5 text-gold" />
            <p className="text-xs uppercase tracking-[0.24em]">Trusted by private travellers and corporate groups worldwide</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Gallery" title="Scenes from our journeys" align="center" />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src + i} delay={i * 70} className={i % 5 === 0 ? "lg:row-span-2" : ""}>
                <LuxeImage src={g.src} alt={g.alt} ratio={i % 5 === 0 ? "aspect-[3/4] lg:aspect-[3/5]" : "aspect-square"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
