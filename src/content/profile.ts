export const profile = {
  firstName: "Loïc",
  lastName: "Ortola",
  photo: "/images/profile.jpg",
  catchline: "What you think, you become",
  headline: "Embracing platforms, automation and AI to change the way we innovate.",
  pitch:
    "Combining a cutting-edge technical vision with strategy and leadership, I am leading company-wide AI transformations at Takima and for its clients.",
  role: "CTO and board member at Takima",
  siteUrl: "https://www.loicortola.com",
  location: { name: "Paris, France", lat: 48.864716, lng: 2.349014 },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/loicortola" },
    { label: "GitHub", href: "https://github.com/loicortola" },
  ],
};

/** Headline figures from my time at Takima. */
export const figures = [
  { value: "×3", label: "revenue since 2018" },
  { value: "300+", label: "engineers recruited since 2017" },
  { value: "200+", label: "talks and keynotes given" },
  { value: "13", label: "years of teaching experience" },
];

export const expertise = [
  {
    title: "Platform engineering",
    text: "Cloud-native platforms, GitOps and automation that let product teams ship on their own.",
  },
  {
    title: "AI transformation",
    text: "AI diagnostics, executive vision workshops and pilots, with reliable AI patterns: agents, RAG, durable execution, observability.",
  },
  {
    title: "DevOps and performance",
    text: "Delivery pipelines, load testing and high-availability architectures, from 100k requests per second maps to enterprise IT.",
  },
  {
    title: "Tech leadership",
    text: "Engineering management, learning paths, hiring and speaker programmes that keep teams in the top 10%.",
  },
];

export const strengths = [
  "Strong leader, doer, with great leadership, tech expertise and public speaking abilities.",
  "Strategy, management and executive experience, always while keeping a foot in tech",
  "Fluent in French and English (C2, near-native)",
  "Teacher, Trainer international Speaker",
  "Entrepreneur: founded 2 companies",
];

export const techSkills = [
  {
    label: "Platform engineering",
    items: ["Cloud native", "Terraform", "Ansible", "Kubernetes", "Crossplane", "Argo CD"],
  },
  { label: "Cloud and DevOps", items: ["GitLab CI", "AWS", "GCP", "DORA"] },
  {
    label: "Development",
    items: ["Java", "Kotlin", "Node.js", "Angular", "React", "Next.js", "NestJS", "SQL and NoSQL", "RabbitMQ"],
  },
  {
    label: "AI",
    items: ["LLM and agent standards", "MCP", "Agents", "RAG", "Durable execution", "Observability"],
  },
  { label: "Architecture", items: ["Distributed systems", "Event-driven architecture"] },
  { label: "Other", items: ["n8n", "Salesforce", "ESP32", "Arduino"] },
];

export const dailyAi = [
  { tool: "Gemini", use: "general purpose, with custom agents and Gems" },
  { tool: "Claude (mostly Opus)", use: "development and tech" },
  { tool: "Claude Cowork", use: "integrations and automations: LinkedIn, email triage and more" },
  { tool: "NotebookLM", use: "business work, RFQs and RFPs" },
];
export const agentTooling = ["Context7", "RTK", "Caveman", "Figma"];

export const education = [
  { title: "Master of Engineering, IT", school: "CPE Lyon", period: "2009 – 2013", place: "Lyon" },
  { title: "Preparatory classes", school: "Les Chartreux", period: "2007 – 2009", place: "Lyon" },
];

export const extracurricular = {
  tech: [
    "Created 10+ open-source projects: JSON-RPC and SSDP clients, libraries, scrapers, Home Assistant automation extensions",
    "Member of the Tech Leaders and Tech.Rocks communities",
  ],
  nonTech: [
    "Woodwork, home renovation, 3D printing and laser engraving",
    "Musician: 150+ concerts, and still playing in a band",
    "Badminton and swimming",
  ],
};

export const teaching = {
  quote: "The best way to learn? Teach.",
  quoteAuthor: "Frank Oppenheimer",
  body: "I love inspiring others by sharing my passion and respect for our job. For a decade I have spoken at public and private conferences, executive meetings and schools, and my ratings at public tech conferences average in the top 5%.",
  schools: [
    "Epita",
    "EPF",
    "INSA Lyon",
    "INSA Rouen",
    "EFREI",
    "Epitech",
    "École 42",
    "ECE Paris",
    "CPE Lyon",
    "UTT Troyes",
    "UTC Compiègne",
    "Kedge",
    "ENSTA ParisTech",
    "Mines de Nantes",
  ],
};

export const maker = {
  body: "When I'm not on stage, I'm usually coding with my agents behind my laptop or doing something with my hands in my workshop: woodwork, 3D printers and laser engravers, and plenty of ESP32 and Arduino hacks.",
  gallery: [
    { src: "/images/ledcontroller-remote-app-sm.jpg", alt: "Remote control app for my custom LED controller" },
    { src: "/images/ledcontroller-pcb-sm.jpg", alt: "Custom-made PCB v1 and v2 for my LED controller" },
    { src: "/images/iron-man.jpg", alt: "Custom LEDs and controller for my Iron Man backlight" },
  ],
};
