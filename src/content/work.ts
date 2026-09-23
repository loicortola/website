export type Job = {
  slug: string;
  position: string;
  company: string;
  sector: string;
  about: string;
  logo?: string;
  /** Omitted when the resume gives only a duration. */
  period?: string;
  duration: string;
  place: { name: string; lat: number; lng: number };
  /** Markdown */
  summary?: string;
  highlights?: string[];
  missions: { label: string; details: string; highlight?: string }[];
  references?: { label: string; items: string[] }[];
  stack?: string[];
};

export const jobs: Job[] = [
  {
    slug: "takima",
    position: "CTO and board member",
    company: "Takima",
    sector: "IT consulting",
    about:
      "Takima provides top-10% deep-tech consultants to help large companies and pure players with their digital transformation. In 2026 it employs around 200 people.",
    logo: "/images/logo-takima.png",
    period: "2018 – today",
    duration: "8 years",
    place: { name: "Paris", lat: 48.8647, lng: 2.349 },
    missions: [
      {
        label: "Strategy and management",
        details:
          "I lead the definition and execution of the company's technical and management strategy, through three technology pivots: DevOps, platform engineering, and now **AI**. I created our engineering management, all learning paths, internal training and change management, and crafted the professional services offers that came out of them, fuelled by market vision, hands-on field expertise and client feedback.",
        highlight: "Since 2018: revenue ×3, active clients ×2, 0 to 30 engineering managers, average tenure from 2 to 6 years.",
      },
      {
        label: "Business representation",
        details:
          "For a decade I have shared the company's technical vision as an international speaker: 200+ talks and keynotes at public and private conferences, executive meetings and pre-sales, and in 10+ universities and engineering schools in France. Topics: platform engineering, DevOps, performance engineering and **reliable AI** (harness engineering, durable execution).",
        highlight: "Public ratings at tech conferences average in the top 5%.",
      },
      {
        label: "Platform, AI and transformation expertise",
        details:
          "I provide expertise for major DevOps, platform and AI transformations in France, and CTO advisory for architects, C-level and IT management at more than 20 clients, from startups and scale-ups to enterprise accounts, in luxury, e-commerce, retail, media, energy, transportation, legal and finance. I crafted our AI diagnostic and transformation offers, and lead all executive vision workshops and pilots.",
      },
      {
        label: "Engineering, talent and brand",
        details:
          "I built the system that hires, grows and keeps top-10% engineers: internal tech guilds, a speaker launchpad programme, school recruitment strategy, internal bootcamps and hackathons, and a private community of software engineers.",
        highlight:
          "Since 2017: 300+ engineers recruited, 15+ national speakers trained, 80+ public and 150+ private talks, a community of 2,000+ developers.",
      },
      {
        label: "Business partnerships",
        details:
          "In 2025 I bootstrapped the company's first technical partnerships, with Gatling (leader in load testing) and Temporal (leader in durable execution).",
      },
    ],
    references: [
      { label: "Tech strategy", items: ["RATP", "SNCF", "Huwise", "Aristid", "Société Générale"] },
      { label: "AI", items: ["Editis", "Cartier"] },
    ],
  },
  {
    slug: "frog-connexion",
    position: "Board member & co-founder",
    company: "Frog Connexion",
    sector: "Event agency",
    about:
      "Frog Connexion is an event agency that creates new experiences for seminars, company parties, galas and product launches.",
    logo: "/images/logo-frog.png",
    period: "2021 – 2023",
    duration: "2 years",
    place: { name: "Paris", lat: 48.8647, lng: 2.349 },
    highlights: ["0 to €600k in 9 months, bootstrapped"],
    missions: [
      {
        label: "Go-to-market strategy",
        details:
          "Bootstrapped the company and led its go-to-market strategy from scratch, taking it from 0 to **€600k in 9 months**.",
      },
      {
        label: "Sales, brand and growth",
        details:
          "Set up the CRM, created the sales material and demo content, defined the brand strategy and the growth strategy, and ran their execution.",
      },
      {
        label: "Entertainment platforms for music events",
        details:
          "Developed the entertainment platforms behind our music events: a **live music quiz** and **live karaoke with real bands**.",
      },
    ],
  },
  {
    slug: "jawg",
    position: "CTO & co-founder",
    company: "Jawg Maps",
    sector: "B2B SaaS",
    about:
      "Jawg Maps is a B2B SaaS platform providing geospatial services at scale, for clients such as Decathlon, Fnac, Wonderbox, SNCF and TheFork.",
    logo: "/images/logo-jawg.png",
    period: "2016 – 2018",
    duration: "2 years",
    place: { name: "Paris", lat: 48.8647, lng: 2.349 },
    summary:
      "Geospatial data is very tricky to index and manipulate, especially at scale. Laying the ground of the platform, when DevOps and Docker were still new, was an incredible source of growth: performance engineering, clustering, high availability, automation, orchestration. It was also my first executive role and my first experience as an entrepreneur.",
    highlights: [
      "100k requests per second architecture for dynamic maps, for about €2,000 a month in cloud costs",
      "0 to €400k ARR in 3 years",
    ],
    missions: [
      {
        label: "Platform architecture",
        details:
          "Project **mapsquare** led to the creation of the company, and I was the first developer of the platform: a distributed ecosystem of microservices with a storage API, Tile-edge (a highly efficient map server), a static maps API, authentication and the administration console.",
      },
      {
        label: "Clustering, data processing and geo-caching",
        details:
          "Multi-threaded geo-caching, meta-tile awareness, server-side and multi-layer clustering, and a data import SDK for on-premises deployments with transaction rollback, deduplication and conflict resolution.",
      },
    ],
    stack: ["Java", "Vert.x", "Spring Boot", "Node.js", "PostgreSQL", "PostGIS", "Docker", "Ansible", "Consul", "React"],
  },
  {
    slug: "ebusiness-information",
    position: "Lead software engineer",
    company: "eBusiness Information",
    sector: "IT consulting",
    about: "My first leading technical role in software engineering. The company is now Takima.",
    duration: "2 years",
    place: { name: "Paris", lat: 48.8647, lng: 2.349 },
    missions: [
      {
        label: "Android apps for festivals and conferences",
        details:
          "Live data, geospatial information, augmented reality and city-wide gaming for festivals and conference centres, tried out at the Transmusicales festival in 2014.",
      },
      {
        label: "SDKs for DesignMyApp",
        details:
          "Core engine and open-source Java, JS, Android and iOS SDKs for DesignMyApp, a native app generator and one of the first single-node container orchestrators.",
      },
      {
        label: "Embedded timetables from GTFS open data",
        details:
          "Turned train schedules into a predictive frequency model; the embedded SQLite database ended up 1/290 of the original size.",
      },
    ],
    stack: ["Java", "Android", "AngularJS", "Docker"],
  },
  {
    slug: "dp-technology",
    position: "System administrator",
    company: "Hexagon, DP Technology",
    sector: "Industrial software",
    about: "My first steps in operations and infrastructure, in California.",
    logo: "/images/logo-dp.jpg",
    period: "2011 – 2012",
    duration: "1 year",
    place: { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    missions: [
      {
        label: "Infrastructure and backups",
        details:
          "Ran the network and Hyper-V infrastructure, led the backup system renewal from scratch, and built ASP.NET modules for the EspritWeb platform.",
      },
    ],
    stack: ["Microsoft", "Hyper-V", "PowerShell", "ASP.NET"],
  },
];
