# Backend Integration Blueprint

This guide outlines the standard operating procedures for developing and deploying decoupled backend architectures within the ecosystem.

## 1. Modular Architecture Philosophy

Backends should be strictly decoupled from the frontend presentation layer.
- Treat the backend as a headless API service.
- Return structured, deterministic JSON payloads.
- Handle all business logic, LLM orchestration, and parsing on the server; the frontend should only handle presentation state.

## 2. Deployment Matrix

Consult this matrix when deciding where to host components of an evolving project:

- **Next.js Frontend Routes**: Deploy to **Vercel** as part of the core portfolio build.
- **FastAPI / Node.js Backends**: Deploy to **Render** (or equivalent PaaS) as decoupled microservices.
- **Lightweight Prototypes / Data Science**: Use **Streamlit** for rapid internal testing before refactoring to FastAPI.
- **Scalable / High-Traffic APIs**: Migrate from PaaS to dedicated infrastructure (AWS/GCP) when traffic dictates.

## 3. Subdomains vs. Modular Deployments

- **Modular Route (`/project`)**: Use when the frontend requires the calm luxury typography and ecosystem navigation. The backend API is hosted elsewhere.
- **Subdomain (`app.surajkumar.space`)**: Use when the project evolves into an independent SaaS, requires a completely different frontend architecture (e.g., complex dashboards), or requires entirely separate authentication.

## 4. FastAPI Setup Conventions

When building Python backends, adhere to these standards:

### CORS Configuration
Strictly configure CORS to allow local development and the production portfolio domain.

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://surajkumar.space",
        "https://www.surajkumar.space"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Environment Handling
- Never hardcode API keys (OpenAI, DB URLs). Use `python-dotenv` or environment variables injected by the hosting provider.
- Keep a `.env.example` file in the backend repository.

### API Structure
- Use Pydantic models for request and response validation.
- Provide descriptive `HTTPException` error messages; the frontend will gracefully catch and display these to the user.
