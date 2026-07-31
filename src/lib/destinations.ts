import { IMG } from "./images";

export type City = {
  name: string;
  image: string;
  overview: string;
  whyVisit: string;
  bestTime: string;
  duration: string;
  thingsToDo: string[];
  experiences: string[];
  tips: string[];
  samplePackage: { title: string; duration: string; highlights: string[] };
};

export type Destination = {
  slug: "indonesia" | "thailand" | "malaysia";
  name: string;
  hero: string;
  heroKicker: string;
  summary: string;
  overview: string[];
  facts: { label: string; value: string }[];
  cities: City[];
  attractions: string[];
  thingsToDo: string[];
  seasons: { label: string; months: string; note: string }[];
  tips: string[];
  packages: { title: string; duration: string; route: string; includes: string[] }[];
  services: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "indonesia",
    name: "Indonesia",
    hero: IMG.bali,
    heroKicker: "17,000 Islands. One Extraordinary Archipelago.",
    summary:
      "From volcanic sunrises in East Java to coral cathedrals in Raja Ampat, Indonesia is our home ground — and the destination we know street by street, island by island.",
    overview: [
      "Indonesia stretches more than 5,000 kilometres from Sumatra to Papua, holding within it active volcanoes, UNESCO temple complexes, rainforest interiors and some of the richest marine biodiversity on the planet. It is a country best travelled slowly, with people who know which road to take at four in the morning and which boat captain to trust when the swell rises.",
      "As an Indonesia-based Destination Management Company headquartered in Jakarta, we operate here every single day. Our guides, drivers, boat operators and hotel partners are contracted directly, inspected regularly and briefed personally — which is why an itinerary that looks effortless on paper actually runs that way on the ground.",
    ],
    facts: [
      { label: "Best Season", value: "April – October" },
      { label: "Ideal Duration", value: "7 – 12 Days" },
      { label: "Currency", value: "Indonesian Rupiah (IDR)" },
      { label: "Language", value: "Bahasa Indonesia, English" },
      { label: "Entry", value: "Visa on Arrival / e-VOA" },
      { label: "Time Zone", value: "GMT +7 to +9" },
    ],
    cities: [
      {
        name: "Bali",
        image: IMG.bali,
        overview:
          "Bali balances clifftop resorts above the Indian Ocean with a living Hindu culture that shapes every village, offering and ceremony. The south delivers polished beach clubs and design hotels; the east and north remain quiet, green and largely unhurried.",
        whyVisit:
          "Nowhere else in Asia combines this density of world-class resorts with a daily spiritual rhythm that has never been staged for visitors.",
        bestTime: "April to October, with clear mornings and calm seas",
        duration: "4 – 7 days",
        thingsToDo: [
          "Sunset ceremony at a clifftop sea temple in Uluwatu",
          "Private surf or paddle session on Bingin and Balangan beaches",
          "Silversmith workshop with a family atelier in Celuk",
          "Sunrise catamaran charter along the Nusa Dua coast",
        ],
        experiences: [
          "Clifftop villa stays with private butler and chef",
          "Balinese purification ritual guided by a temple priest",
          "Chef's table dinner overlooking the Indian Ocean",
        ],
        tips: [
          "Sarongs are required at temples — we provide them in every vehicle.",
          "Travel between the south and Ubud outside 16:00–19:00 to avoid congestion.",
        ],
        samplePackage: {
          title: "Bali Signature Escape",
          duration: "5 Nights / 6 Days",
          highlights: ["Uluwatu", "Seminyak", "Ubud", "Nusa Dua"],
        },
      },
      {
        name: "Jakarta",
        image: IMG.jakarta,
        overview:
          "Indonesia's capital is the country's commercial engine: a skyline of glass towers, a serious dining scene, and colonial-era Kota Tua at its historic heart. It is also the natural base for corporate programmes, MICE events and incentive travel.",
        whyVisit:
          "For business travel and conferences, Jakarta offers international convention capacity, five-star hotel inventory and direct connectivity across Asia.",
        bestTime: "May to September, drier and easier for city movement",
        duration: "2 – 3 days",
        thingsToDo: [
          "Guided walk through Kota Tua and the Fatahillah quarter",
          "National Monument and National Museum heritage circuit",
          "Rooftop dining above the Sudirman business district",
          "Private art and design gallery tour in Menteng",
        ],
        experiences: [
          "Executive transfers with English-speaking chauffeurs",
          "Conference and gala venue sourcing with full site inspection",
          "Curated culinary evening across three neighbourhoods",
        ],
        tips: [
          "Always allow buffer time for traffic; we build it into every transfer.",
          "Business attire is expected in corporate and fine-dining settings.",
        ],
        samplePackage: {
          title: "Jakarta Corporate & Culture",
          duration: "4 Nights / 5 Days",
          highlights: ["Kota Tua", "MICE venues", "Culinary trail", "Bogor day trip"],
        },
      },
      {
        name: "Yogyakarta",
        image: IMG.yogyakarta,
        overview:
          "The cultural capital of Java, Yogyakarta is still governed by a sultanate and remains the centre of Javanese batik, gamelan, silverwork and classical dance — with two of the world's great temple complexes on its doorstep.",
        whyVisit:
          "It is the most rewarding cultural immersion in Indonesia, and the gateway to both Borobudur and Prambanan.",
        bestTime: "May to September for clear temple sunrises",
        duration: "2 – 4 days",
        thingsToDo: [
          "Kraton palace and Taman Sari water castle with a court guide",
          "Prambanan Hindu temple complex at golden hour",
          "Batik workshop with a third-generation artisan",
          "Ramayana ballet performed under open sky",
        ],
        experiences: [
          "Private gamelan and classical dance recital",
          "Heritage hotel stays in restored Javanese houses",
          "Village cycling through rice fields and pottery hamlets",
        ],
        tips: [
          "Start temple visits by 05:30 for soft light and thin crowds.",
          "Carry small notes for artisan villages and local markets.",
        ],
        samplePackage: {
          title: "Java Heritage Journey",
          duration: "4 Nights / 5 Days",
          highlights: ["Borobudur", "Prambanan", "Kraton", "Batik atelier"],
        },
      },
      {
        name: "Borobudur",
        image: IMG.borobudur,
        overview:
          "The largest Buddhist monument on earth rises in nine stone terraces above the Kedu Plain, encircled by volcanoes. Built in the 9th century and carved with more than 2,600 relief panels, it is a walking meditation as much as a monument.",
        whyVisit:
          "Standing on the upper terraces as mist lifts off the plain is, for many travellers, the defining moment of their Indonesian journey.",
        bestTime: "April to October, sunrise access",
        duration: "1 – 2 days",
        thingsToDo: [
          "Sunrise ascent with a licensed heritage interpreter",
          "Mendut and Pawon temple approach walk",
          "Sunset viewpoint over the Menoreh Hills",
          "Village breakfast in the shadow of the monument",
        ],
        experiences: [
          "Private meditation session with a resident monk",
          "Resort stays with direct monument views",
          "Photography programme with a local documentary photographer",
        ],
        tips: [
          "Upper-terrace access is capped daily; we secure permits in advance.",
          "Bring closed shoes — the stone steps are steep and uneven.",
        ],
        samplePackage: {
          title: "Borobudur Sunrise Retreat",
          duration: "4 Nights / 5 Days",
          highlights: ["Sunrise access", "Menoreh Hills", "Mendut", "Yogyakarta"],
        },
      },
      {
        name: "Mount Bromo",
        image: IMG.bromo,
        overview:
          "In the Tengger caldera of East Java, a smoking cone sits inside a vast sea of volcanic sand, with Semeru venting on the horizon. The pre-dawn drive to the viewpoint remains one of Asia's great landscape experiences.",
        whyVisit:
          "Few sunrises anywhere are as theatrical, and it pairs naturally with the Ijen crater and a continuation to Bali.",
        bestTime: "May to September, dry and clear",
        duration: "2 days",
        thingsToDo: [
          "Pre-dawn 4WD ascent to Penanjakan viewpoint",
          "Crossing the Sea of Sand to the crater rim",
          "Tengger village walk and highland breakfast",
          "Optional Ijen blue-fire extension",
        ],
        experiences: [
          "Private jeep convoy with radio-linked drivers",
          "Highland lodge with sunrise-facing rooms",
          "Guided sunrise photography positioning",
        ],
        tips: [
          "Temperatures fall near freezing before dawn — layers are essential.",
          "Wear a dust mask on the caldera floor; we supply them.",
        ],
        samplePackage: {
          title: "Volcanoes of East Java",
          duration: "5 Nights / 6 Days",
          highlights: ["Bromo", "Ijen", "Malang", "Bali transfer"],
        },
      },
      {
        name: "Komodo Island",
        image: IMG.komodo,
        overview:
          "Komodo National Park spans savannah-covered islands, pink-sand beaches and reef channels teeming with manta rays — plus the world's largest lizard, patrolling its only natural habitat.",
        whyVisit:
          "A liveaboard phinisi through the park delivers wildlife, diving and desert-island landscapes in a single itinerary.",
        bestTime: "April to November, calm seas",
        duration: "3 – 5 days",
        thingsToDo: [
          "Padar Island ridge hike at first light",
          "Ranger-guided Komodo dragon tracking on Rinca",
          "Manta ray snorkelling at Karang Makassar",
          "Pink Beach swim and sandbar picnic",
        ],
        experiences: [
          "Private phinisi charter with crew and chef",
          "Sunset paddleboarding in sheltered bays",
          "Underwater photography with a dive instructor",
        ],
        tips: [
          "Rangers must accompany every dragon trek — non-negotiable, and we arrange it.",
          "Currents are strong; snorkel only at guided sites.",
        ],
        samplePackage: {
          title: "Komodo Sailing Expedition",
          duration: "4 Nights / 5 Days",
          highlights: ["Padar", "Rinca", "Pink Beach", "Kanawa"],
        },
      },
      {
        name: "Raja Ampat",
        image: IMG.rajaAmpat,
        overview:
          "At the far western tip of Papua, Raja Ampat holds the highest recorded marine biodiversity on earth: 1,500 karst islets, mirror-flat lagoons and reefs that still look the way reefs are supposed to look.",
        whyVisit:
          "It is the ultimate remote-luxury destination in Indonesia — genuinely wild, and genuinely difficult to organise without local expertise.",
        bestTime: "October to April for the best visibility",
        duration: "5 – 8 days",
        thingsToDo: [
          "Piaynemo viewpoint over the karst lagoons",
          "Drift diving at Cape Kri and Blue Magic",
          "Bird-of-paradise watching at dawn in Waigeo",
          "Kayaking through hidden inland lagoons",
        ],
        experiences: [
          "Overwater eco-resort and private liveaboard options",
          "Dedicated dive guide with nitrox support",
          "Village-hosted lunch on a Papuan island",
        ],
        tips: [
          "Allow two travel days each way from Jakarta or Bali.",
          "A marine park entry permit is mandatory; we issue it for you.",
        ],
        samplePackage: {
          title: "Raja Ampat Marine Discovery",
          duration: "7 Nights / 8 Days",
          highlights: ["Piaynemo", "Cape Kri", "Wayag", "Sorong"],
        },
      },
      {
        name: "Nusa Penida",
        image: IMG.nusaPenida,
        overview:
          "Forty minutes by fast boat from Bali, Nusa Penida is a limestone island of vertical cliffs, hidden coves and the celebrated dinosaur-shaped headland at Kelingking. Beneath the surface, manta rays circle year-round.",
        whyVisit:
          "The most dramatic coastal scenery within easy reach of Bali, and one of the few reliable places to swim with manta rays.",
        bestTime: "May to September, calmest crossings",
        duration: "1 – 3 days",
        thingsToDo: [
          "Kelingking viewpoint before the morning boats arrive",
          "Manta Point snorkelling by private speedboat",
          "Broken Beach and Angel's Billabong circuit",
          "Diamond Beach clifftop staircase descent",
        ],
        experiences: [
          "Private speedboat charter with a licensed skipper",
          "Cliffside villa stay with sunset terrace",
          "Sunrise photography drive with a local guide",
        ],
        tips: [
          "Island roads are narrow — private cars with experienced drivers only.",
          "Depart Bali on the first crossing to stay ahead of day-trippers.",
        ],
        samplePackage: {
          title: "Bali & Nusa Penida",
          duration: "5 Nights / 6 Days",
          highlights: ["Kelingking", "Manta Point", "Ubud", "Sanur"],
        },
      },
      {
        name: "Lombok",
        image: IMG.lombok,
        overview:
          "Lombok offers what Bali offered decades ago: long empty bays in the south, Sasak weaving villages inland, and the Gili islands a short crossing offshore, all under the shadow of Mount Rinjani.",
        whyVisit:
          "Quiet luxury, world-class surf and genuine village culture without the crowds.",
        bestTime: "May to September",
        duration: "3 – 5 days",
        thingsToDo: [
          "Selong Belanak and Tanjung Aan beach circuit",
          "Sasak village visit in Sade with a weaving demonstration",
          "Gili Meno snorkelling with green turtles",
          "Benang Kelambu waterfall trek",
        ],
        experiences: [
          "Beachfront resort stays in Kuta Lombok and Sire",
          "Private catamaran day sail to the Gilis",
          "Rinjani foothills trekking with a certified mountain guide",
        ],
        tips: [
          "Lombok is predominantly Muslim — modest dress in villages is appreciated.",
          "Book Gili crossings in the morning when the channel is calmest.",
        ],
        samplePackage: {
          title: "Lombok & Gili Islands",
          duration: "5 Nights / 6 Days",
          highlights: ["Kuta Lombok", "Sade", "Gili Meno", "Sire Beach"],
        },
      },
      {
        name: "Ubud",
        image: IMG.ubud,
        overview:
          "Set among terraced rice fields and river gorges, Ubud is Bali's centre of art, healing and cuisine — home to painting collectives, jungle spas and some of the most beautiful hotels in Asia.",
        whyVisit:
          "The natural pairing to a beach stay: cool, green, creative and deeply restorative.",
        bestTime: "April to October",
        duration: "2 – 4 days",
        thingsToDo: [
          "Tegallalang rice terrace walk before breakfast",
          "Tirta Empul purification with a temple guide",
          "Balinese cooking class with a market visit",
          "Campuhan ridge walk at first light",
        ],
        experiences: [
          "Jungle valley suites with private pools",
          "Two-hour Balinese massage in an open-air spa pavilion",
          "Private wellness and yoga programme",
        ],
        tips: [
          "Mornings are cool and quiet — schedule outdoor activity early.",
          "Some valley resorts involve steps; tell us about mobility needs.",
        ],
        samplePackage: {
          title: "Ubud Wellness Retreat",
          duration: "4 Nights / 5 Days",
          highlights: ["Tegallalang", "Tirta Empul", "Spa journey", "Cooking class"],
        },
      },
    ],
    attractions: [
      "Borobudur & Prambanan UNESCO temple complexes",
      "Mount Bromo and the Tengger caldera",
      "Komodo National Park",
      "Raja Ampat marine reserve",
      "Uluwatu clifftop temples",
      "Tegallalang rice terraces",
      "Kelingking Beach, Nusa Penida",
      "Kota Tua colonial quarter, Jakarta",
    ],
    thingsToDo: [
      "Sunrise volcano ascents",
      "Private phinisi sailing",
      "Temple and heritage circuits",
      "Reef diving and manta encounters",
      "Balinese wellness and spa journeys",
      "Artisan workshops: batik, silver, woodcarving",
    ],
    seasons: [
      { label: "Peak Dry", months: "June – September", note: "Clearest skies, calm seas, best diving visibility." },
      { label: "Shoulder", months: "April – May, October", note: "Warm, green and noticeably quieter at major sites." },
      { label: "Green Season", months: "November – March", note: "Short afternoon rain, lush landscapes, excellent value." },
    ],
    tips: [
      "Carry a light scarf or sarong for temple entry.",
      "Domestic flights are frequent but tight — we build realistic connections.",
      "Cash remains useful in villages and island markets.",
      "Drink bottled or filtered water; it is provided in all our vehicles.",
    ],
    packages: [
      { title: "Bali Signature Escape", duration: "5 Nights / 6 Days", route: "Uluwatu · Seminyak · Ubud", includes: ["Private transfers", "Clifftop villa", "Temple ceremony", "Chef's table dinner"] },
      { title: "Java Heritage Journey", duration: "4 Nights / 5 Days", route: "Yogyakarta · Borobudur · Prambanan", includes: ["Sunrise access", "Batik atelier", "Heritage hotel", "Classical dance"] },
      { title: "Komodo Sailing Expedition", duration: "4 Nights / 5 Days", route: "Labuan Bajo · Padar · Rinca", includes: ["Private phinisi", "Ranger trek", "Manta snorkel", "Onboard chef"] },
      { title: "Raja Ampat Marine Discovery", duration: "7 Nights / 8 Days", route: "Sorong · Waigeo · Piaynemo", includes: ["Eco-resort stay", "Dive guide", "Marine permits", "Island picnics"] },
    ],
    services: [
      { title: "Private Aviation & Transfers", text: "Charter flights, helicopter transfers and chauffeured fleet across every island we operate." },
      { title: "Luxury Accommodation", text: "Contracted rates and upgrade access at leading resorts, villas and heritage properties." },
      { title: "Expert Guiding", text: "Licensed guides in English, Mandarin, Japanese, Arabic and European languages." },
      { title: "Marine Programmes", text: "Phinisi charters, dive operations and permit handling in protected marine parks." },
    ],
    gallery: [
      { src: IMG.bali, alt: "Clifftop resort above the Indian Ocean in Bali" },
      { src: IMG.ubud, alt: "Rice terraces at sunrise near Ubud" },
      { src: IMG.borobudur, alt: "Borobudur temple stupas at sunrise" },
      { src: IMG.bromo, alt: "Mount Bromo crater above the clouds" },
      { src: IMG.komodo, alt: "Padar Island bays in Komodo National Park" },
      { src: IMG.rajaAmpat, alt: "Karst islands of Raja Ampat from the air" },
      { src: IMG.nusaPenida, alt: "Kelingking Beach cliffs on Nusa Penida" },
      { src: IMG.lombok, alt: "Quiet beach and headlands in Lombok" },
      { src: IMG.baliTemple, alt: "Balinese sea temple at sunset" },
      { src: IMG.yogyakarta, alt: "Javanese temple silhouette at dusk" },
      { src: IMG.jakarta, alt: "Jakarta skyline at blue hour" },
      { src: IMG.waterfall, alt: "Hidden jungle waterfall in Indonesia" },
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    hero: IMG.phiPhi,
    heroKicker: "Gilded Temples, Andaman Blues, Northern Hills",
    summary:
      "Thailand rewards travellers who move between its worlds — a night in Bangkok, a week on the Andaman coast, a slow finish in the northern hills.",
    overview: [
      "Thailand has been refining hospitality for generations, and it shows: in the precision of its hotels, the depth of its cuisine and the ease with which a complex multi-city itinerary comes together. The country moves from the temple-lined Chao Phraya to limestone islands, jungle-clad hills and ancient royal capitals within a few hours' travel.",
      "Our Bangkok-linked ground network handles arrivals, domestic connections, island transfers and guiding across the kingdom. Every guide we assign is nationally licensed, and every vehicle in the programme is inspected before it carries a guest.",
    ],
    facts: [
      { label: "Best Season", value: "November – March" },
      { label: "Ideal Duration", value: "7 – 10 Days" },
      { label: "Currency", value: "Thai Baht (THB)" },
      { label: "Language", value: "Thai, English widely spoken" },
      { label: "Entry", value: "Visa exemption for many nationalities" },
      { label: "Time Zone", value: "GMT +7" },
    ],
    cities: [
      {
        name: "Bangkok",
        image: IMG.bangkok,
        overview:
          "A capital of gilded temples and glass towers, canal neighbourhoods and rooftop bars, Bangkok is one of Asia's great arrival cities and a serious base for conferences and incentives.",
        whyVisit: "Nowhere else offers this concentration of heritage, dining and hotel quality at this level of value.",
        bestTime: "November to February, cooler and dry",
        duration: "2 – 4 days",
        thingsToDo: [
          "Grand Palace and Wat Phra Kaew with a licensed guide",
          "Wat Arun and Wat Pho at first opening",
          "Private longtail cruise through Thonburi canals",
          "Chinatown street-food walk after dark",
        ],
        experiences: ["Riverside suite with Chao Phraya views", "Michelin-recognised tasting menus", "Private art-deco cocktail evening"],
        tips: ["Shoulders and knees must be covered at royal temples.", "River boats beat road traffic between riverside sights."],
        samplePackage: { title: "Bangkok City Signature", duration: "4 Nights / 5 Days", highlights: ["Grand Palace", "Canal cruise", "Chinatown", "Ayutthaya day trip"] },
      },
      {
        name: "Phuket",
        image: IMG.phuket,
        overview:
          "Thailand's largest island combines Sino-Portuguese old town streets with west-coast beaches and the finest concentration of resort inventory in the Andaman.",
        whyVisit: "Direct international access, exceptional resorts and Phang Nga Bay on the doorstep.",
        bestTime: "November to April",
        duration: "3 – 6 days",
        thingsToDo: [
          "Phang Nga Bay by private speedboat",
          "Old Phuket Town heritage and café walk",
          "Sunset at Promthep Cape",
          "Private island-hopping to Coral and Racha",
        ],
        experiences: ["Beachfront pool villas", "Yacht charter with crew and lunch", "Thai cooking class with market tour"],
        tips: ["Respect red flags on west-coast beaches during monsoon months.", "Book Phang Nga departures early to avoid the fleet."],
        samplePackage: { title: "Andaman Island Luxury", duration: "5 Nights / 6 Days", highlights: ["Phang Nga Bay", "Old Town", "Racha Island", "Sunset cruise"] },
      },
      {
        name: "Krabi",
        image: IMG.krabi,
        overview:
          "Krabi's limestone towers rise straight from emerald water, and Railay — reachable only by boat — remains one of the most striking beach settings in Asia.",
        whyVisit: "Dramatic scenery, quieter than Phuket, and superb for kayaking and climbing.",
        bestTime: "November to April",
        duration: "3 – 4 days",
        thingsToDo: [
          "Four Islands tour by private longtail",
          "Railay Beach and Phra Nang cave",
          "Emerald Pool and Hot Springs in Khlong Thom",
          "Sea kayaking through Ao Thalane mangroves",
        ],
        experiences: ["Cliff-facing resort stays in Ao Nang", "Private rock-climbing session with certified guides", "Sunset dinner on Railay sands"],
        tips: ["Tides govern Railay access — we schedule around them.", "Reef shoes are recommended on rocky shorelines."],
        samplePackage: { title: "Krabi Limestone Escape", duration: "4 Nights / 5 Days", highlights: ["Railay", "Four Islands", "Emerald Pool", "Ao Thalane"] },
      },
      {
        name: "Pattaya",
        image: IMG.pattaya,
        overview:
          "Two hours from Bangkok, Pattaya has matured into a family and corporate destination with large-capacity hotels, beach clubs and one of Thailand's finest botanical gardens.",
        whyVisit: "The easiest coastal add-on to a Bangkok programme, and strong for incentive groups.",
        bestTime: "November to March",
        duration: "2 – 3 days",
        thingsToDo: [
          "Nong Nooch tropical garden and cultural show",
          "Sanctuary of Truth carved teak sanctuary",
          "Koh Larn island beach day",
          "Coastal viewpoint and night market evening",
        ],
        experiences: ["Beachfront family suites", "Team-building programmes on private beaches", "Private catamaran sunset sail"],
        tips: ["Choose Jomtien or Wong Amat for quieter beachfronts.", "Weekends draw Bangkok crowds — travel midweek where possible."],
        samplePackage: { title: "Bangkok & Pattaya Family", duration: "5 Nights / 6 Days", highlights: ["Nong Nooch", "Koh Larn", "Safari World", "Bangkok temples"] },
      },
      {
        name: "Chiang Mai",
        image: IMG.chiangMai,
        overview:
          "Ringed by mountains and moated at its centre, Chiang Mai is Thailand's northern cultural capital: Lanna temples, hill-tribe markets, craft villages and cool-season air.",
        whyVisit: "The country's most rewarding cultural and nature pairing, with genuine ethical wildlife options.",
        bestTime: "November to February",
        duration: "3 – 4 days",
        thingsToDo: [
          "Doi Suthep temple at sunrise",
          "Ethical elephant sanctuary visit — observation only",
          "Old City temple and craft-village circuit",
          "Doi Inthanon national park day trip",
        ],
        experiences: ["Lanna-style boutique resorts", "Private Khantoke dinner with northern music", "Hands-on ceramics or textile workshop"],
        tips: ["Evenings are cool from December — bring a light jacket.", "We only work with no-riding, no-bathing elephant sanctuaries."],
        samplePackage: { title: "Northern Thailand Culture", duration: "4 Nights / 5 Days", highlights: ["Doi Suthep", "Elephant sanctuary", "Doi Inthanon", "Craft villages"] },
      },
      {
        name: "Phi Phi Islands",
        image: IMG.phiPhi,
        overview:
          "A cluster of limestone islands between Phuket and Krabi, with Maya Bay, sheer cliffs and reef shallows that glow turquoise in the late morning light.",
        whyVisit: "The definitive Andaman island landscape, best seen from a private boat before the day fleet arrives.",
        bestTime: "November to April",
        duration: "1 – 3 days",
        thingsToDo: [
          "Maya Bay early-access approach",
          "Pileh Lagoon swim and Viking Cave pass",
          "Bamboo Island snorkelling",
          "Phi Phi viewpoint hike at sunrise",
        ],
        experiences: ["Overnight stays on Phi Phi Don", "Private speedboat charter with crew", "Plankton night snorkel"],
        tips: ["National park fees apply and are included in our programmes.", "Maya Bay closes periodically for reef recovery."],
        samplePackage: { title: "Phi Phi Private Charter", duration: "4 Nights / 5 Days", highlights: ["Maya Bay", "Pileh Lagoon", "Bamboo Island", "Phuket"] },
      },
      {
        name: "Koh Samui",
        image: IMG.samui,
        overview:
          "On the Gulf side, Samui pairs coconut-palm coastline with polished resort hospitality, and stays swimmable when the Andaman turns rough.",
        whyVisit: "Ideal for honeymoons and green-season travel, with its own international airport.",
        bestTime: "February to September",
        duration: "3 – 5 days",
        thingsToDo: [
          "Ang Thong Marine Park day cruise",
          "Na Muang waterfalls and island interior drive",
          "Fisherman's Village evening market",
          "Big Buddha and Wat Plai Laem circuit",
        ],
        experiences: ["Hillside pool villas with sea views", "Private beach dinner with chef and staff", "Wellness and detox retreat programmes"],
        tips: ["Samui's wettest month is November — we plan around it.", "Beach roads are narrow; private transfers are recommended."],
        samplePackage: { title: "Samui Honeymoon Retreat", duration: "5 Nights / 6 Days", highlights: ["Ang Thong", "Private dinner", "Spa journey", "Island tour"] },
      },
      {
        name: "Ayutthaya",
        image: IMG.ayutthaya,
        overview:
          "The former Siamese capital, sacked in 1767 and now a UNESCO archaeological park of brick prangs, reclining Buddhas and the famous Buddha head held in banyan roots.",
        whyVisit: "The most atmospheric heritage excursion from Bangkok, ideal by river or road.",
        bestTime: "November to February",
        duration: "1 day",
        thingsToDo: [
          "Wat Mahathat and the banyan Buddha head",
          "Wat Chaiwatthanaram at golden hour",
          "Historical park cycling circuit",
          "Return river cruise to Bangkok",
        ],
        experiences: ["Private guided archaeology walk", "Riverside Thai lunch", "Rice-barge cruise upgrade"],
        tips: ["Shade is limited — hats and water matter.", "Late afternoon gives the warmest light on the brick."],
        samplePackage: { title: "Ayutthaya Heritage Day", duration: "4 Nights / 5 Days", highlights: ["Ayutthaya", "Bang Pa-In", "River cruise", "Bangkok"] },
      },
    ],
    attractions: [
      "The Grand Palace and Wat Phra Kaew",
      "Phang Nga Bay limestone karsts",
      "Railay Beach, Krabi",
      "Maya Bay, Phi Phi",
      "Doi Suthep temple, Chiang Mai",
      "Ayutthaya Historical Park",
      "Ang Thong Marine Park",
      "Nong Nooch Tropical Garden",
    ],
    thingsToDo: [
      "Temple and royal heritage tours",
      "Private island charters",
      "Thai culinary classes and market walks",
      "Ethical wildlife sanctuary visits",
      "Spa and wellness retreats",
      "Golf on championship coastal courses",
    ],
    seasons: [
      { label: "Cool & Dry", months: "November – February", note: "The classic season: comfortable heat, calm Andaman seas." },
      { label: "Hot Season", months: "March – May", note: "Bright and hot; ideal for Gulf islands and early starts." },
      { label: "Green Season", months: "June – October", note: "Brief heavy showers, vivid landscapes, excellent hotel value." },
    ],
    tips: [
      "Dress modestly at temples: covered shoulders and knees.",
      "Never touch a person's head or point your feet at a Buddha image.",
      "Domestic flights are inexpensive and save long road transfers.",
      "Tap water is not for drinking; bottled water is provided throughout.",
    ],
    packages: [
      { title: "Bangkok City Signature", duration: "4 Nights / 5 Days", route: "Bangkok · Ayutthaya", includes: ["Riverside hotel", "Licensed guide", "Canal cruise", "Airport transfers"] },
      { title: "Andaman Island Luxury", duration: "5 Nights / 6 Days", route: "Phuket · Phang Nga · Phi Phi", includes: ["Beach resort", "Private speedboat", "Park fees", "Sunset cruise"] },
      { title: "Northern Thailand Culture", duration: "6 Nights / 7 Days", route: "Bangkok · Chiang Mai · Doi Inthanon", includes: ["Domestic flights", "Ethical sanctuary", "Craft workshop", "Khantoke dinner"] },
      { title: "Grand Thailand Discovery", duration: "8 Nights / 9 Days", route: "Bangkok · Chiang Mai · Krabi · Phuket", includes: ["All internal flights", "Private guiding", "Island days", "Luxury hotels"] },
    ],
    services: [
      { title: "Nationwide Ground Handling", text: "Meet-and-greet, fast-track arrival support and chauffeured transfers in every gateway city." },
      { title: "Island & Marine Charters", text: "Private speedboats, catamarans and licensed skippers with full park permits handled." },
      { title: "Hotel Partnerships", text: "Preferred rates and amenities with leading resort groups across Thailand." },
      { title: "MICE & Incentives", text: "Venue sourcing, gala production and team programmes for corporate groups." },
    ],
    gallery: [
      { src: IMG.bangkok, alt: "Golden temple spires in Bangkok at dusk" },
      { src: IMG.phiPhi, alt: "Turquoise lagoon in the Phi Phi Islands" },
      { src: IMG.krabi, alt: "Longtail boat below Krabi limestone cliffs" },
      { src: IMG.phuket, alt: "Aerial view of a Phuket beach and resort" },
      { src: IMG.chiangMai, alt: "Northern Thai temple in mountain mist" },
      { src: IMG.samui, alt: "Beachfront infinity pool on Koh Samui" },
      { src: IMG.ayutthaya, alt: "Ayutthaya brick temple ruins at sunset" },
      { src: IMG.pattaya, alt: "Pattaya bay skyline at night" },
      { src: IMG.dining, alt: "Fine dining Thai tasting plate" },
      { src: IMG.yacht, alt: "Private yacht at anchor off a tropical island" },
      { src: IMG.waterfall, alt: "Jungle waterfall in northern Thailand" },
      { src: IMG.villa, alt: "Luxury pool villa interior" },
    ],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    hero: IMG.langkawi,
    heroKicker: "Rainforest, Heritage Cities and Island Calm",
    summary:
      "Malaysia moves from a global capital to 130-million-year-old rainforest in a single afternoon — and does it with some of the best food in Asia.",
    overview: [
      "Malaysia is two landmasses and many cultures: Malay, Chinese, Indian and indigenous Bornean traditions layered into one country. Kuala Lumpur delivers world-class infrastructure and shopping, Penang and Malacca carry UNESCO-listed colonial heritage, and Sabah and Sarawak open onto some of the oldest rainforest on earth.",
      "We operate Malaysia as a full-service ground programme: peninsular touring, island resorts, highland retreats and Borneo wildlife expeditions, all coordinated from Jakarta with vetted in-country partners.",
    ],
    facts: [
      { label: "Best Season", value: "December – April (West Coast)" },
      { label: "Ideal Duration", value: "6 – 9 Days" },
      { label: "Currency", value: "Malaysian Ringgit (MYR)" },
      { label: "Language", value: "Bahasa Malaysia, English" },
      { label: "Entry", value: "Visa-free for many nationalities" },
      { label: "Time Zone", value: "GMT +8" },
    ],
    cities: [
      {
        name: "Kuala Lumpur",
        image: IMG.kualaLumpur,
        overview:
          "A skyline capital where the Petronas Towers rise above colonial arcades, night markets and one of Asia's most varied food scenes — and a first-class base for conferences and incentives.",
        whyVisit: "Effortless infrastructure, excellent hotels and superb value at the luxury end.",
        bestTime: "Year-round; May to July is driest",
        duration: "2 – 3 days",
        thingsToDo: [
          "Petronas Towers skybridge and observation deck",
          "Batu Caves limestone temple complex",
          "Merdeka Square colonial heritage walk",
          "Jalan Alor evening food trail",
        ],
        experiences: ["Skyline suites with tower views", "Private hawker-food guided tasting", "Rooftop cocktails above the KLCC skyline"],
        tips: ["Book Petronas tickets well ahead; we hold them in advance.", "Cover shoulders and knees at Batu Caves."],
        samplePackage: { title: "Kuala Lumpur City Break", duration: "4 Nights / 5 Days", highlights: ["Petronas", "Batu Caves", "Food trail", "Putrajaya"] },
      },
      {
        name: "Langkawi",
        image: IMG.langkawi,
        overview:
          "An archipelago of 99 islands off the northwest coast, Langkawi is duty-free, geologically ancient and home to the country's finest beach resorts.",
        whyVisit: "The most refined island escape in Malaysia, with a UNESCO Geopark and mangrove wilderness.",
        bestTime: "December to April",
        duration: "3 – 5 days",
        thingsToDo: [
          "SkyCab cable car and Sky Bridge over rainforest",
          "Kilim Geoforest mangrove cruise",
          "Sunset sailing from Pantai Cenang",
          "Island hopping to Dayang Bunting",
        ],
        experiences: ["Rainforest and beachfront luxury resorts", "Private yacht sunset charter", "Eagle-watching mangrove safari"],
        tips: ["The cable car closes in high wind — we keep a flexible slot.", "Bring reef-safe sunscreen for mangrove and reef days."],
        samplePackage: { title: "Langkawi Island Luxury", duration: "5 Nights / 6 Days", highlights: ["Sky Bridge", "Kilim mangroves", "Island hopping", "Sunset sail"] },
      },
      {
        name: "Penang",
        image: IMG.penang,
        overview:
          "George Town's UNESCO-listed core is a working heritage city: clan houses, shophouses, street art and a hawker culture widely rated the best in Southeast Asia.",
        whyVisit: "Food and heritage in equal measure, walkable and endlessly photogenic.",
        bestTime: "December to April",
        duration: "2 – 3 days",
        thingsToDo: [
          "George Town heritage and street-art walk",
          "Khoo Kongsi clan house and Blue Mansion",
          "Penang Hill funicular at sunset",
          "Guided hawker-centre tasting circuit",
        ],
        experiences: ["Restored heritage mansion hotels", "Private Peranakan cooking class", "Curated antique and craft-shopping tour"],
        tips: ["Walk the old town early — humidity builds by midday.", "Many hawker stalls are cash only."],
        samplePackage: { title: "Penang Heritage & Cuisine", duration: "4 Nights / 5 Days", highlights: ["George Town", "Penang Hill", "Peranakan class", "Blue Mansion"] },
      },
      {
        name: "Genting Highlands",
        image: IMG.genting,
        overview:
          "An hour from Kuala Lumpur, Genting sits 1,800 metres above sea level in permanent cool air, with a cable car gliding above dense montane rainforest.",
        whyVisit: "The easiest highland escape from the capital, and a favourite with families.",
        bestTime: "Year-round; clearest mornings",
        duration: "1 – 2 days",
        thingsToDo: [
          "Awana SkyWay cable car ascent",
          "Chin Swee Caves Temple terraces",
          "Theme park and indoor entertainment complex",
          "Strawberry and lavender farms en route",
        ],
        experiences: ["Peak-level hotels above the cloud line", "Private chauffeured highland day trip", "Family entertainment packages"],
        tips: ["Temperatures drop to 16°C — bring a jacket.", "Weekday visits avoid long cable-car queues."],
        samplePackage: { title: "KL & Highlands Family", duration: "5 Nights / 6 Days", highlights: ["Genting", "Batu Caves", "Theme park", "KL city tour"] },
      },
      {
        name: "Cameron Highlands",
        image: IMG.cameron,
        overview:
          "Rolling tea plantations, mossy cloud forest and colonial-era bungalows make the Cameron Highlands Malaysia's most atmospheric cool-climate retreat.",
        whyVisit: "Green, quiet and restorative — the antidote to a city-and-beach itinerary.",
        bestTime: "March to September",
        duration: "2 days",
        thingsToDo: [
          "Tea estate tour and plantation tasting",
          "Mossy Forest boardwalk with a nature guide",
          "Strawberry and butterfly farm visits",
          "Sunrise viewpoint at Gunung Brinchang",
        ],
        experiences: ["Colonial bungalow stays with fireplaces", "Private tea-tasting session", "Guided highland nature walks"],
        tips: ["Mornings are misty; afternoons clear more often.", "Roads are winding — motion-sensitive guests should sit forward."],
        samplePackage: { title: "Highlands & Tea Country", duration: "4 Nights / 5 Days", highlights: ["Tea estates", "Mossy Forest", "Ipoh", "Kuala Lumpur"] },
      },
      {
        name: "Malacca",
        image: IMG.malacca,
        overview:
          "A UNESCO port city layered with Portuguese, Dutch, British and Peranakan history, best explored on foot along the painted riverfront and Jonker Street.",
        whyVisit: "The richest colonial heritage on the peninsula, an easy two hours from Kuala Lumpur.",
        bestTime: "December to April",
        duration: "1 – 2 days",
        thingsToDo: [
          "Dutch Square and Christ Church",
          "A Famosa fort and St Paul's Hill",
          "Malacca River cruise at dusk",
          "Jonker Street night market",
        ],
        experiences: ["Boutique Peranakan heritage hotels", "Private Baba-Nyonya culinary tour", "Guided architecture walk"],
        tips: ["Jonker Street night market runs Friday to Sunday.", "Riverfront restaurants fill quickly — we reserve ahead."],
        samplePackage: { title: "Malacca Heritage Escape", duration: "4 Nights / 5 Days", highlights: ["Dutch Square", "River cruise", "Jonker Street", "KL"] },
      },
      {
        name: "Sabah",
        image: IMG.sabah,
        overview:
          "Malaysian Borneo's northern state holds Mount Kinabalu, the Kinabatangan River wildlife corridor and the dive reefs of Sipadan and Mabul.",
        whyVisit: "The most accessible genuine wildlife destination in Southeast Asia — orangutans, pygmy elephants and proboscis monkeys.",
        bestTime: "March to September",
        duration: "4 – 6 days",
        thingsToDo: [
          "Kinabatangan River dawn and dusk safaris",
          "Sepilok orangutan rehabilitation centre",
          "Kinabalu Park and Poring hot springs",
          "Island diving from Kota Kinabalu",
        ],
        experiences: ["Riverside eco-lodges with naturalist guides", "Private wildlife photography programmes", "Sunset cruise on the South China Sea"],
        tips: ["Wildlife viewing is best at dawn and dusk — early starts are essential.", "Sipadan permits are strictly limited; book months ahead."],
        samplePackage: { title: "Borneo Wildlife Expedition", duration: "6 Nights / 7 Days", highlights: ["Kinabatangan", "Sepilok", "Kinabalu Park", "Island day"] },
      },
      {
        name: "Sarawak",
        image: IMG.sarawak,
        overview:
          "Sarawak pairs the riverfront charm of Kuching with the vast cave systems of Mulu and the longhouse cultures of the interior.",
        whyVisit: "Deep culture and extraordinary geology, still far off the mass-tourism map.",
        bestTime: "March to October",
        duration: "3 – 5 days",
        thingsToDo: [
          "Kuching waterfront and Sarawak Museum",
          "Bako National Park proboscis monkey trek",
          "Mulu Caves bat exodus at dusk",
          "Iban longhouse visit along the Batang Ai",
        ],
        experiences: ["Heritage riverside hotels in Kuching", "Private caving with certified guides", "Cultural village and craft programme"],
        tips: ["Mulu requires a domestic flight — we build in a buffer night.", "Leech socks and quick-dry clothing are advisable in the interior."],
        samplePackage: { title: "Sarawak Rainforest & Culture", duration: "5 Nights / 6 Days", highlights: ["Kuching", "Bako", "Mulu Caves", "Longhouse stay"] },
      },
    ],
    attractions: [
      "Petronas Twin Towers, Kuala Lumpur",
      "Batu Caves temple complex",
      "Langkawi Sky Bridge and Geopark",
      "George Town UNESCO heritage core",
      "Cameron Highlands tea estates",
      "Malacca Dutch Square and riverfront",
      "Mount Kinabalu, Sabah",
      "Mulu Caves, Sarawak",
    ],
    thingsToDo: [
      "Heritage city walking tours",
      "Rainforest and wildlife safaris",
      "Island resort escapes",
      "Highland tea country retreats",
      "Street-food and Peranakan culinary trails",
      "Diving in Sabah's marine parks",
    ],
    seasons: [
      { label: "West Coast Dry", months: "December – April", note: "Best for Langkawi, Penang and peninsular touring." },
      { label: "Borneo Dry", months: "March – September", note: "Ideal for Sabah and Sarawak wildlife and trekking." },
      { label: "Monsoon", months: "November – February (East Coast)", note: "Affects east-coast islands; the west coast stays open." },
    ],
    tips: [
      "Malaysia is multi-faith; modest dress is appreciated at religious sites.",
      "Ride-hailing is widespread, but private chauffeured transfers are more reliable for touring.",
      "Halal dining is universally available; we handle all dietary requirements.",
      "Borneo itineraries need internal flights — book early in peak season.",
    ],
    packages: [
      { title: "Kuala Lumpur City Break", duration: "4 Nights / 5 Days", route: "Kuala Lumpur · Putrajaya", includes: ["City hotel", "Petronas tickets", "Batu Caves", "Food trail"] },
      { title: "Langkawi Island Luxury", duration: "5 Nights / 6 Days", route: "Kuala Lumpur · Langkawi", includes: ["Beach resort", "Sky Bridge", "Mangrove cruise", "Sunset sail"] },
      { title: "Heritage Trail: Penang & Malacca", duration: "6 Nights / 7 Days", route: "Penang · Ipoh · Malacca · KL", includes: ["Heritage hotels", "Guided walks", "Cooking class", "Private coach"] },
      { title: "Borneo Wildlife Expedition", duration: "7 Nights / 8 Days", route: "Kota Kinabalu · Sepilok · Kinabatangan", includes: ["Eco-lodges", "Naturalist guides", "River safaris", "Domestic flights"] },
    ],
    services: [
      { title: "Peninsular Touring Fleet", text: "Chauffeured sedans, vans and coaches for city, highland and heritage circuits." },
      { title: "Borneo Expedition Logistics", text: "Lodge bookings, permits, naturalist guides and domestic flight coordination." },
      { title: "Resort Partnerships", text: "Preferred agreements with Langkawi, Penang and Kota Kinabalu resort groups." },
      { title: "Group & MICE Handling", text: "Convention support, gala dinners and incentive programmes in Kuala Lumpur." },
    ],
    gallery: [
      { src: IMG.kualaLumpur, alt: "Kuala Lumpur skyline at blue hour" },
      { src: IMG.langkawi, alt: "Aerial view of the Langkawi archipelago" },
      { src: IMG.penang, alt: "Heritage shophouses in George Town, Penang" },
      { src: IMG.cameron, alt: "Tea plantations in the Cameron Highlands" },
      { src: IMG.genting, alt: "Cable car above the Genting Highlands clouds" },
      { src: IMG.malacca, alt: "Malacca riverfront colonial architecture" },
      { src: IMG.sabah, alt: "Mount Kinabalu above Borneo rainforest" },
      { src: IMG.sarawak, alt: "Rainforest river winding through Sarawak" },
      { src: IMG.villa, alt: "Luxury resort villa interior in Malaysia" },
      { src: IMG.waterfall, alt: "Rainforest waterfall in Malaysia" },
      { src: IMG.dining, alt: "Refined Malaysian fine dining plate" },
      { src: IMG.yacht, alt: "Private charter yacht off Langkawi" },
    ],
  },
];

export const getDestination = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);
