# TaskFlow — Full-Stack Task Workspace

TaskFlow is a full-stack task management application. Users register, receive a private workspace, create tasks, set priorities and due dates, update progress, search, filter, and delete tasks. Data is stored in PostgreSQL.

## Stack

React 18, TypeScript, Vite, Node.js, Express, PostgreSQL, Prisma, Zod, bcrypt, signed HTTP-only cookies, Vitest and Docker.

## Run locally

1. Copy .env.example to .env and set a long random JWT_SECRET.
2. Start PostgreSQL with docker compose up -d database.
3. Install dependencies with npm install.
4. Generate Prisma Client with npm run db:generate.
5. Apply the committed migration with npm run db:migrate.
6. Start the API and web client with npm run dev.

The web client runs at http://localhost:5173. The API runs at http://localhost:4000.

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | /api/health | Health check |
| POST | /api/auth/register | Register and create a private workspace |
| POST | /api/auth/login | Sign in |
| GET | /api/auth/me | Read the current session |
| POST | /api/auth/logout | Clear the session cookie |
| GET | /api/tasks | List tasks in the current workspace |
| POST | /api/tasks | Create a task |
| PATCH | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Engineering decisions

- Passwords are stored as bcrypt hashes, not plain text.
- The session is held in a signed HTTP-only cookie.
- Task queries are scoped by the workspace ID in the verified session. The browser cannot choose another workspace by sending a different workspace ID.
- Request bodies are validated with Zod before reaching Prisma.
- Authentication endpoints are rate limited. Helmet and a CORS allow-list are enabled.
- PostgreSQL changes are tracked in a committed Prisma migration.

## Quality checks

Run npm test for request-schema tests and npm run build for TypeScript checks and production builds. GitHub Actions runs these checks on changes to this project.

## Production hardening still required

This is a portfolio demonstration, not a production SaaS. Before production use, add CSRF protection appropriate to the deployment, password recovery, email verification, workspace invitations, role administration, structured logging, end-to-end tests and managed database backups.

## Author

Built by [Donald Mwashegha](https://github.com/donaldmwash).
