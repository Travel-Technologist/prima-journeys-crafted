export const COMPANY = {
  name: "PT PRIMA GEN INTERNATIONAL",
  shortName: "Prima Gen International",
  tagline: "Crafting Exceptional Journeys Across Southeast Asia",
  email: "info@xxxxxxx",
  phone: "+62 XXX XXX XXXX",
  hours: ["Monday – Friday", "09:00 AM – 06:00 PM"],
  address: [
    "AXA Tower 45th Floor",
    "Jl. Prof. Dr. Satrio Kav.18",
    "Karet Kuningan, Setiabudi",
    "South Jakarta 12940",
    "Indonesia",
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "WhatsApp", href: "https://wa.me/62000000000" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Contact", to: "/contact" },
] as const;
