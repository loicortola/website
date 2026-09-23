export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Markdown */
  body: string;
  website?: string;
  stack: string[];
  images?: { src: string; alt: string }[];
  /** Card image on the home page; defaults to the first image. */
  cover?: string;
};

export const featured: Project[] = [
  {
    slug: "decoupano",
    title: "DécouPano",
    summary: "Free online cutting plans for wood panels, from your first cabinet to a whole kitchen.",
    body: "**DécouPano** plans panel cuts in the browser, for free and without an account: enter your panels and parts, or describe a cabinet or a drawer by its overall dimensions, and it builds the cutting plan, the list of panels to order and a 3D preview.\n\nIt doesn't hand you just one plan: it compares several on price, number of cuts, offcut area and largest reusable offcut, and flags the best one. Edge banding, saw kerf, grain direction and every common panel type (melamine, MDF, plywood, chipboard, solid wood) are supported. The site is in French.",
    website: "https://decoupano.com",
    cover: "/images/decoupano-cover.jpg",
    stack: ["Next.js", "React"],
    images: [
      { src: "/images/decoupano-home.jpg", alt: "Cutting plans laid out in 3D on the DécouPano home page" },
      { src: "/images/decoupano-app.jpg", alt: "Designing a tall cabinet by its overall dimensions" },
    ],
  },
  {
    slug: "surroundify",
    title: "Surroundify",
    summary: "A self-hosted spatial audio player: build a room, place your sounds in it, drive it from your phone.",
    body: "**Surroundify** turns the computer wired to your speakers into a spatial audio player. Describe your room once, drag each speaker to where it really stands, then place every layer of a soundscape where you want to hear it: a forest with the stream on your left, rain outside every window.\n\nIt works with whatever you own, from a built-in output to an 8-output USB interface, an HDMI receiver or a Bluetooth speaker. Any phone on the network is the remote, with nothing to install. No cloud, no telemetry, no account: it installs with one `npx` command and runs on macOS, Linux and Windows.",
    website: "https://surroundify.co",
    cover: "/images/surroundify-room.jpg",
    stack: ["Next.js", "React", "Node.js", "SQLite", "WebSockets", "ffmpeg"],
    images: [
      { src: "/images/surroundify-home.jpg", alt: "The Surroundify home page" },
      { src: "/images/surroundify-room.jpg", alt: "A 5.0 living room with wind, stream and birds placed around the listener" },
    ],
  },
  {
    slug: "homex",
    title: "Homex",
    summary: "Room automations for Home Assistant, built from one panel, without YAML.",
    body: "**Homex** is a Home Assistant integration that turns each room into a switch, a light group and native scenes. Wall switches, remotes and roller shutters are wired up in a few clicks from a single sidebar panel, and you never open a YAML file.\n\nEvery room and group gets plain, predictably named entities you can use in dashboards, voice assistants or your own automations. It runs entirely on your own instance: no cloud service, no outside network calls. Free, with its source on GitHub, and installed through HACS.",
    website: "https://homex.resourcepool.io",
    cover: "/images/homex-cover.jpg",
    stack: ["Home Assistant", "Python", "TypeScript"],
    images: [
      { src: "/images/homex-demo.jpg", alt: "Room switches driving the lights and shutters of a floor plan" },
      { src: "/images/homex-panel.jpg", alt: "The Homex panel in Home Assistant, with a room's lights, switches and shutters" },
    ],
  },
  {
    slug: "deadlock",
    title: "Deadlock",
    summary: "An open-source coding and hacking game platform.",
    body: "My biggest project. **Deadlock** is the first open-source coding and hacking game platform. The goal: reinvent the way people learn computer science, and the way companies find their new recruits.\n\nWant to take part? Send me a message. Want to try it? It's live.",
    website: "https://www.deadlock.io",
    stack: ["Java", "JavaFX", "Spring Boot", "Docker", "Ansible", "React", "Redux", "Webpack", "Sass"],
    images: [
      { src: "/images/deadlock-1.jpg", alt: "Deadlock player dashboard" },
      { src: "/images/deadlock-2.jpg", alt: "Deadlock story hall" },
    ],
  },
  {
    slug: "takahoot",
    title: "Takahoot",
    summary: "A physical, Nerf-proof controller for Kahoot quizzes.",
    body: "[Kahoot](https://www.kahoot.com) is a great quiz platform, mostly used in education. For Takima we wanted a better, cooler controller than a phone, so we made [Takahoot](https://github.com/resourcepool/takahoot): a physical target that plays Kahoot like a normal player and is triggered by a nice shot from your favourite Nerf gun.\n\nEverything was made from scratch: 3D STL models, 3D-printed and laser-cut parts, an Arduino controller speaking a simple serial protocol, and a friendly Electron and Angular client.",
    website: "https://github.com/resourcepool/takahoot",
    stack: ["Electron", "Angular", "WebSockets", "SolidWorks", "Arduino"],
    images: [
      { src: "/images/takahoot-box.jpg", alt: "The Takahoot box" },
      { src: "/images/takahoot-triggers.jpg", alt: "Takahoot triggers before mounting" },
    ],
  },
  {
    slug: "blindtest-live",
    title: "Blindtest Live",
    summary: "Live blind tests for 500 people, with a real-time app.",
    body: "I love playing live music, and with some friends we came up with a concept: live blind tests. Guessing is easy and fun with 20 people. Not so with 500.\n\nSo we built an app to answer live, play jokers and follow the leaderboard, while everyone sings their favourite songs out loud. Come and join us at a concert around Paris: the band is **[The Bold Heads](https://www.facebook.com/TheBoldHeads)**.",
    website: "https://www.blindtest.live",
    stack: ["Java", "Spring WebFlux", "Netty", "Firebase", "Angular", "Ansible", "WebSockets"],
    images: [
      { src: "/images/blindtest-live-1.jpg", alt: "Blindtest Live player app" },
      { src: "/images/blindtest-live-2.jpg", alt: "Blindtest Live leaderboard" },
    ],
  },
  {
    slug: "iot",
    title: "IoT projects",
    summary: "Libraries and hardware from my Fablab evenings.",
    body: "- **[SSDP Java client](https://github.com/resourcepool/ssdp-client)**: asynchronous, lightweight and bullet-proof, because I couldn't find a good one.\n- **[JSON-RPC 2.0 Java client](https://github.com/resourcepool/jarpic-client)**: a full, lightweight implementation, compatible with Java 6+ and available on Maven Central.\n- **[nodemcu-espress](https://github.com/loicortola/nodemcu-espress)**: a memory-efficient Lua HTTP server for NodeMCU and ESP8266, with a Node-like, middleware-compatible API.\n- **[LED controller](https://github.com/loicortola/led-controller)**: an end-to-end 5050 LED controller with PCB, hardware list, firmware and Android app.",
    stack: ["C++", "PCB", "Lua", "Java", "Android"],
    images: [
      { src: "/images/ledcontroller-remote-app.jpg", alt: "Remote control app for the LED controller" },
      { src: "/images/ledcontroller-pcb.jpg", alt: "LED controller PCB v1 and v2" },
    ],
  },
];

export const more: Project[] = [
  {
    slug: "student-trainings",
    title: "Student trainings",
    summary: "Hackathon-style Java and JEE projects for university students.",
    body: "[Code review scheduler](https://github.com/resourcepool/training-welcomepool) (1 week), [Mood of the month](https://github.com/resourcepool/training-welcomepool-2) (1 week), [Room booking](https://github.com/resourcepool/training-welcomepool-3) (2 weeks), [CV administration](https://github.com/resourcepool/training-welcomepool-cv) (2 weeks).",
    website: "https://github.com/resourcepool",
    stack: ["Java", "JEE", "HTML5", "CSS3", "Git"],
  },
  {
    slug: "handson",
    title: "Hands-on training material",
    summary: "Workshops you can run on your own.",
    body: "[Android training](https://github.com/resourcepool/handson-android) and [DevOps, Docker and CI/CD pipeline](https://github.com/resourcepool/handson-your-delivery-pipeline).",
    stack: ["Java", "Android", "DevOps", "CI"],
  },
  {
    slug: "little-bob",
    title: "Little Bob",
    summary: "Random name and sentence generator for Java, in English and French.",
    body: "",
    website: "https://github.com/resourcepool/little-bob",
    stack: ["Java"],
  },
  {
    slug: "this-website",
    title: "This website",
    summary: "A statically exported Next.js and shadcn/ui site, rebuilt from a 2018 React and Redux one.",
    body: "",
    website: "https://github.com/loicortola/website",
    stack: ["Next.js", "React", "shadcn/ui", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "other",
    title: "Other contributions",
    summary: "Android libraries, Gulp plugins, a NodeMCU library, a Spotify Java API for Docker, a dashboard TV, and more.",
    body: "",
    website: "https://github.com/loicortola",
    stack: ["Java", "Android", "IoT"],
  },
];

/** Projects currently showcased on the About page. */
export const showcased = ["decoupano", "surroundify", "homex", "deadlock"].map((slug) => {
  const project = featured.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown showcased project: ${slug}`);
  return project;
});
