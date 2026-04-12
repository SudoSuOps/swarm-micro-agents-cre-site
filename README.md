# SwarmCore — Audit Layer for Serious AI

Landing page and demo surface for SwarmCore by Swarm & Bee. Built with React 19 + Vite 8 + Tailwind CSS v4.

## What it is

SwarmCore is the mechanics and audit layer for building agent systems that survive scrutiny. The site presents:

- **Chain Integrity Map** — interactive graph of 6 agent failure modes (Scaffold, Memory, Retrieval, Verifier, Governance, Audit)
- **Live run inspector** — each node click creates a real run on the sovereign backend and displays receipts
- **Asset marketplace** — live assets from the backend (datasets, fine-tunes, eval packs)
- **Contact / intake** — writes to the backend first, server-side email delivery (key stays off the frontend)

## Setup

```bash
cp .env.example .env.local
# Edit .env.local — set VITE_API_BASE_URL to your backend

npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Environment variables

See `.env.example` for all variables. The only required one is `VITE_API_BASE_URL`.

## Backend API surface

The frontend expects these routes on the backend:

| Route | Method | Description |
|-------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/assets` | GET | List marketplace assets |
| `/api/runs` | POST | Create a new run |
| `/api/runs/:id/receipts` | GET | Get receipts for a run |
| `/api/contact` | POST | Submit contact form |

## Deploy

Build outputs to `dist/`. Deploy to any static host or serve behind nginx. For swarmandbee.ai deployment use the `/deploy` skill.
