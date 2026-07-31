import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { COMPANY, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-10"
      >
        <Link to="/" className="flex min-w-0 items-center" aria-label={`${COMPANY.name} — Home`}>
          <img
            src={IMG.logo}
            alt={`${COMPANY.name} logo`}
            className="h-20 w-auto object-contain lg:h-24"
          />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={cn(
                  "relative py-2 text-[13px] font-medium uppercase tracking-[3px] text-gray-800 transition-all duration-300",
                  "hover:text-[#B89B5E]",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#B89B5E] after:transition-transform after:duration-300 hover:after:scale-x-100",
                  "data-[status=active]:text-[#B89B5E] data-[status=active]:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="
border
border-[#C6A35D]
px-8
py-3
text-[13px]
font-medium
uppercase
tracking-[3px]
text-[#C6A35D]
transition-all
duration-300
hover:bg-[#C6A35D]
hover:text-white
"
            >
              Plan a Journey
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5 text-gray-900" />
          ) : (
            <Menu className="h-5 w-5 text-gray-900" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col px-5 py-2 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="block border-b border-border/60 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink data-[status=active]:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-5">
            <Link
              to="/contact"
              className="block bg-primary px-6 py-4 text-center text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-foreground"
            >
              Plan a Journey
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
