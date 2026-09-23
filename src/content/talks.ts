export type Talk = {
  slug: string;
  title: string;
  event: string;
  year?: number;
  language: "French" | "English";
  description: string;
  youtubeId: string;
  /** Seconds into the video where the talk starts. */
  start?: number;
  thumbnail: string;
  /** seconds */
  duration?: number;
  featured?: boolean;
};

export const talks: Talk[] = [
  {
    slug: "load-testing-guide",
    title: "45 minutes to bring your app to its knees: the complete guide to load testing",
    event: "Devoxx France",
    year: 2025,
    language: "French",
    description:
      "With Mathilde Lorrain. Load testing is often the test you run too late. We share what teams we trained learned about threads, the JVM, databases, configuration and isolating bottlenecks, so you leave able to load test a complex system.",
    youtubeId: "rXYq4Mhe80M",
    thumbnail: "/images/talk-load-testing.jpg",
    duration: 2639,
    featured: true,
  },
  {
    slug: "platform-engineering",
    title: "Platform engineering: the graduation of DevOps",
    event: "Devoxx France",
    year: 2024,
    language: "French",
    description:
      "Why platform engineering is where DevOps grows up. Part of the “How Kubernetes changed the world of Ops” session; the video starts at my part.",
    youtubeId: "36iJtvJmqhc",
    start: 930,
    thumbnail: "/images/talk-platform-engineering.jpg",
    featured: true,
  },
  {
    slug: "gitops-from-scratch",
    title: "An end-to-end GitOps architecture from scratch",
    event: "Devoxx France",
    year: 2023,
    language: "French",
    description:
      "Built live with A. Moreau: GitLab, Ansible, Terraform, Kubernetes and AWS. The most viewed video of Devoxx France 2023, and now a reference implementation.",
    youtubeId: "FyAD_-LAMLo",
    start: 4143,
    thumbnail: "/images/talk-gitops.jpg",
    featured: true,
  },
  {
    slug: "maps-under-high-load",
    title: "Maps performing under high load",
    event: "Devoxx France",
    year: 2018,
    language: "French",
    description: "High performance and load testing of map services, from the trenches of Jawg Maps.",
    youtubeId: "wN-UjP7GCmg",
    thumbnail: "/images/devoxx-maps-haute-perf.jpg",
    duration: 2399,
  },
  {
    slug: "devops-in-wonderland",
    title: "Chaos engineering: DevOps in Wonderland",
    event: "DevOps D-Day",
    year: 2018,
    language: "French",
    description: "What happens when you break your own production on purpose, and why you should.",
    youtubeId: "t_K8x78ONrg",
    thumbnail: "/images/conf-devops-au-pays-des-merveilles.jpg",
    duration: 1660,
  },
  {
    slug: "the-tale-of-the-web",
    title: "The amazing tale of the web",
    event: "DevFest Toulouse",
    year: 2019,
    language: "French",
    description:
      "How did we go from JavaScript shooting stars trailing your mouse to frontend frameworks and APIs everywhere? The arrival of the web, Netscape, the browser wars, the birth of the application server and dynamic web, and JavaScript taking over.",
    youtubeId: "wPRwD4rLOVo",
    thumbnail: "/images/talk-rise-of-the-web.jpg",
    duration: 2328,
  },
];

export const formatDuration = (s?: number) => (s ? `${Math.round(s / 60)} min` : "");
