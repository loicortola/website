# syntax=docker/dockerfile:1

# Base image pinned to a Node minor and Alpine release: security patches still
# arrive through the tag, but nothing jumps a version unexpectedly.
ARG NODE_IMAGE=node:22.23-alpine3.24

# ---- Build --------------------------------------------------------------
FROM ${NODE_IMAGE} AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
# --ignore-scripts: dependencies can't run install hooks during the build.
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts
COPY . .
# Needs network access: next/font downloads the fonts at build time and bundles them.
RUN npm run build

# ---- Run ----------------------------------------------------------------
FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
# tini runs as PID 1 so stop signals from Docker / Dokploy reach Node and shutdowns are clean.
RUN apk add --no-cache tini \
 && addgroup -S app && adduser -S -G app -H -s /sbin/nologin app
COPY --from=build --chown=app:app /app/.next/standalone ./
COPY --from=build --chown=app:app /app/.next/static ./.next/static
COPY --from=build --chown=app:app /app/public ./public
USER app
EXPOSE 3000
# The alpine image has no curl: probe /health/ with Node's fetch instead.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:3000/health/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
