import idBali from "@/assets/id-bali.jpg";
import idBorobudur from "@/assets/id-borobudur.jpg";
import idBromo from "@/assets/id-bromo.jpg";
import idJakarta from "@/assets/id-jakarta.jpg";
import idKomodo from "@/assets/id-komodo.jpg";
import idLombok from "@/assets/id-lombok.jpg";
import idNusaPenida from "@/assets/id-nusapenida.jpg";
import idRajaAmpat from "@/assets/id-rajaampat.jpg";
import idTemple from "@/assets/id-temple.jpg";
import idUbud from "@/assets/id-ubud.jpg";
import idYogyakarta from "@/assets/id-yogyakarta.jpg";
import thAyutthaya from "@/assets/th-ayutthaya.jpg";
import thBangkok from "@/assets/th-bangkok.jpg";
import thChiangMai from "@/assets/th-chiangmai.jpg";
import thKrabi from "@/assets/th-krabi.jpg";
import thPattaya from "@/assets/th-pattaya.jpg";
import thPhiPhi from "@/assets/th-phiphi.jpg";
import thPhuket from "@/assets/th-phuket.jpg";
import thSamui from "@/assets/th-samui.jpg";
import myCameron from "@/assets/my-cameron.jpg";
import myGenting from "@/assets/my-genting.jpg";
import myKL from "@/assets/my-kl.jpg";
import myLangkawi from "@/assets/my-langkawi.jpg";
import myMalacca from "@/assets/my-malacca.jpg";
import myPenang from "@/assets/my-penang.jpg";
import mySabah from "@/assets/my-sabah.jpg";
import mySarawak from "@/assets/my-sarawak.jpg";
import luxCulture from "@/assets/lux-culture.jpg";
import luxDining from "@/assets/lux-dining.jpg";
import luxVilla from "@/assets/lux-villa.jpg";
import luxWaterfall from "@/assets/lux-waterfall.jpg";
import luxYacht from "@/assets/lux-yacht.jpg";
const logoAsset = {
  url: "/PT-logo.webp",
};

/**
 * Central image registry. Swapping any photograph later only requires
 * changing the value here (a local import or a remote URL string).
 */
export const IMG = {
  logo: logoAsset.url,
  bali: idBali,
  borobudur: idBorobudur,
  bromo: idBromo,
  jakarta: idJakarta,
  komodo: idKomodo,
  lombok: idLombok,
  nusaPenida: idNusaPenida,
  rajaAmpat: idRajaAmpat,
  baliTemple: idTemple,
  ubud: idUbud,
  yogyakarta: idYogyakarta,
  ayutthaya: thAyutthaya,
  bangkok: thBangkok,
  chiangMai: thChiangMai,
  krabi: thKrabi,
  pattaya: thPattaya,
  phiPhi: thPhiPhi,
  phuket: thPhuket,
  samui: thSamui,
  cameron: myCameron,
  genting: myGenting,
  kualaLumpur: myKL,
  langkawi: myLangkawi,
  malacca: myMalacca,
  penang: myPenang,
  sabah: mySabah,
  sarawak: mySarawak,
  culture: luxCulture,
  dining: luxDining,
  villa: luxVilla,
  waterfall: luxWaterfall,
  yacht: luxYacht,
} as const;
