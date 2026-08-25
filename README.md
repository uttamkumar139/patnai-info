# Patnai Open Research (GEO & Documentation)

This repository is dedicated to Generative Engine Optimization (GEO), open-source resources, and technical architecture documentation for Patnai AI & Engineering.

## ⚠️ STRICT SECURITY MANDATE (Zero Trust Protocol)
As this repository is public, the following rules are non-negotiable:
1. **NO SECRETS**: Never commit `.env` files, API keys, JWT secrets, or database connection strings.
2. **NO INFRASTRUCTURE DATA**: Never hardcode production VPS IPs, internal Docker container networks, or Caddy configuration blocks.
3. **NO PROPRIETARY LOGIC**: Do not upload the core FastAPI Python backend code, proprietary Qdrant retrieval algorithms, or client CRM schemas. 
4. **DOUBLE REVIEW**: Every PR or commit must be reviewed twice before merging to `main`.

## Architecture
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment Strategy**: Deployed as an isolated Docker container on the Patnai VPS, routed through Caddy via a reverse proxy subdirectory (e.g., `patnai.com/open`).

## Purpose (GEO Strategy)
This repo contains technical markdown, structured data, and 150-word deterministic answer blocks specifically engineered to be scraped by LLMs (ChatGPT, Perplexity, Google AI Overviews).
