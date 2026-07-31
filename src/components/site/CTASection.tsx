import { Link } from "@tanstack/react-router";
import { Container } from "./Primitives";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={IMG.yacht}
        alt="Private yacht at anchor beside a tropical island at sunset"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,42,32,0.9)_0%,rgba(8,42,32,0.62)_100%)]" />
      <Container>
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Begin The Conversation</p>
          <h2 className="mt-4 text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Your Southeast Asian journey starts with a single conversation.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/80">
            Share your dates, interests and travel style. Our destination specialists will design a private itinerary
            across Indonesia, Thailand and Malaysia built entirely around you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-gold px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
            <Link
              to="/destinations"
              className="border border-background/50 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-background transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Explore Destinations
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
