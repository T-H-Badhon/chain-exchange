# Chain Exchange

A production-oriented blockchain exchange monorepo built with Turborepo, pnpm workspaces, Next.js, and Fastify.

## Structure

```
chain-exchange/
├── apps/
│   ├── api/          # Fastify REST API (port 3001)
│   ├── web/          # Next.js web app (port 3000)
│   └── admin/        # Next.js admin dashboard (port 3002)
├── packages/
│   ├── eslint-config/      # Shared ESLint configuration
│   ├── typescript-config/  # Shared TypeScript configurations
│   └── ui/                 # Shared React component library
├── docker-compose.yml      # PostgreSQL + Redis services
└── turbo.json              # Turborepo pipeline config
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 9
- [Docker](https://www.docker.com/) (for local services)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start local services (PostgreSQL + Redis)
docker-compose up -d

# Copy environment variables
cp .env.example .env

# Run all apps in development mode
pnpm dev
```

## Apps

| App     | Port | Description              |
|---------|------|--------------------------|
| `api`   | 3001 | Fastify REST API         |
| `web`   | 3000 | Next.js web frontend     |
| `admin` | 3002 | Next.js admin dashboard  |

### API Health Check

```bash
curl http://localhost:3001/health
```

## Development

```bash
# Run all apps in dev mode
pnpm dev

# Build all packages and apps
pnpm build

# Lint all workspaces
pnpm lint

# Type-check all workspaces
pnpm typecheck

# Run all tests
pnpm test

# Format code with Prettier
pnpm format
```

## Tech Stack

- **Monorepo**: [Turborepo](https://turbo.build/) + [pnpm workspaces](https://pnpm.io/workspaces)
- **API**: [Fastify](https://fastify.dev/) + [Zod](https://zod.dev/) + TypeScript
- **Web / Admin**: [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **CI**: GitHub Actions
