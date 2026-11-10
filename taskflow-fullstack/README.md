# TaskFlow — Full-Stack Team Workspace

A focused full-stack task management application built with React, TypeScript, Express, PostgreSQL and Prisma. Users register, receive a private workspace, create tasks, set priorities and due dates, update progress, search, filter and delete tasks.

## Run locally
Copy .env.example to .env, set a strong JWT_SECRET, start PostgreSQL with Docker Compose, run npm install, npm run db:generate, npm run db:migrate, then npm run dev. The web client runs on port 5173 and the API on port 4000.

## Engineering
Passwords are bcrypt-hashed. Authentication uses an HTTP-only signed cookie. Every task query is scoped to the workspace in the verified session. Request bodies are validated, authentication endpoints are rate limited, and Helmet and a CORS allow-list are enabled.

This is a portfolio demo, not a production SaaS. Add CSRF protection, password recovery, email verification, invitations, role administration, structured logging and end-to-end tests before production use.

Built by Donald Mwashegha — https://github.com/donaldmwash.
