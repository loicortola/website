# loicortola.com

Personal website, built with Next.js (App Router), Tailwind CSS, [shadcn/ui](https://ui.shadcn.com) and TypeScript, and exported as a fully static site.

UI components live in `src/components/ui/` and are managed with the shadcn CLI (`npx shadcn@latest add <component>`). The green map palette is defined as shadcn theme tokens in `src/app/globals.css`, with a light and a `.dark` variant.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
```

## Content

All content lives in `src/content/` as typed data:

- `profile.ts`: headline, key figures, expertise, skills, AI tooling, education, teaching, extracurricular, social links
- `work.ts`: experience, shown as a timeline on `/work`
- `projects.ts`: featured projects and the smaller "More on GitHub" list
- `talks.ts`: conference talks; each gets a page at `/talks/<slug>`
- `legal.ts`: publisher, host and mail provider shown on `/legal-notice`, `/privacy` and `/cookies`. Update `lastUpdated` whenever a legal page changes, and keep those pages true to what the site does (no analytics, YouTube loaded on click only).

Images go in `public/images/`.

The hero map is generated at build time (`src/lib/contours.ts`) and served as `/topo.svg`. Change `HERO_MAP` in `src/components/TopoMap.tsx` to move the summit.

## Contact form

`/contact` posts to a server action (`src/app/contact/actions.ts`) that validates the message and sends it to my inbox through the [Mailjet Send API](https://dev.mailjet.com/email/guides/send-api-v31/) (`src/lib/mailjet.ts`). The visitor's address is set as Reply-To, so replying from the inbox answers them.

Configure it with environment variables (see `.env.example`; copy it to `.env.local` for development):

| Variable | Purpose |
| --- | --- |
| `MAILJET_API_KEY`, `MAILJET_API_SECRET` | Mailjet API credentials |
| `CONTACT_FROM_EMAIL` | Sender; must be a validated sender or domain in Mailjet |
| `CONTACT_TO_EMAIL` | Where messages are delivered |

Spam protection: a hidden honeypot field, a minimum time on the page before submitting, and at most 5 messages per IP per hour (in memory, per server instance).

## Build and deploy

The site runs as a Node server (`output: "standalone"`), because the contact form needs one. Every page is still prerendered at build time. `GET /health/` answers `{"status":"ok"}` for health checks.

### Docker

The `Dockerfile` is built for a safe production deploy:

- base image pinned to a Node minor and Alpine release (`node:22.23-alpine3.24`);
- dependencies installed with `npm ci --ignore-scripts`, so packages can't run install hooks;
- `.dockerignore` is an allowlist: only sources, `public/` and config reach the build, never env files or personal documents;
- runs as an unprivileged `app` user, with `tini` as PID 1 for clean shutdowns;
- built-in health check on `/health/`;
- no secrets in the image: Mailjet settings are read from environment variables at runtime.

```sh
docker compose up --build        # uses .env.local if present, then http://localhost:3000
```

Redirects for the URLs of the previous version of the site (`/aboutme`, `/video/:id`, ...) are in `next.config.ts`.

### Dokploy

Create an **Application** (not a Compose service) in your Dokploy project:

1. **Provider**: GitHub, repository `loicortola/website`, branch `master`, **Build Path** `/`.
2. **Build Type**: Dockerfile.
   - Dockerfile Path: `Dockerfile`
   - Docker Context Path: `.`
   - Docker Build Stage: leave empty
3. **Environment**: set these as runtime environment variables, not build arguments (build arguments end up in the image):

   ```
   MAILJET_API_KEY=...
   MAILJET_API_SECRET=...
   CONTACT_FROM_EMAIL=noreply@loicortola.com
   CONTACT_TO_EMAIL=you@example.com
   ```

4. **Domains**: add `www.loicortola.com` (and `loicortola.com`), Path `/`, **Container Port `3000`**, HTTPS on, certificate Let's Encrypt. Point the DNS A records at the Dokploy server first.
5. **Advanced > Swarm Settings > Health Check**, for zero-downtime deploys (the image has no curl, so the check uses Node):

   ```json
   {
     "Test": ["CMD", "node", "-e", "fetch('http://127.0.0.1:3000/health/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"],
     "Interval": 30000000000,
     "Timeout": 5000000000,
     "StartPeriod": 20000000000,
     "Retries": 3
   }
   ```

6. Deploy, then enable **Autodeploy** so each push to `master` redeploys.

The build needs outbound network access (npm packages, and the fonts `next/font` bundles at build time). The contact form's rate limit is kept in memory per container, so keep a single replica or accept a per-replica limit.
