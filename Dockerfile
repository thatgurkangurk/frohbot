FROM oven/bun:1.1.37-alpine AS base
LABEL org.opencontainers.image.source="https://github.com/thatgurkangurk/gurkz.me"
COPY . /app
WORKDIR /app

FROM base AS deps
RUN bun install --frozen-lockfile

FROM base
RUN addgroup --system --gid 1001 bun
RUN adduser --system --uid 1001 frohbot
ENV NODE_ENV production

COPY --from=deps --chown=frohbot:bun /app/node_modules /app/node_modules
COPY --chown=frohbot:bun ./src /app/src

CMD [ "bun", "run", "./src/main.ts" ]