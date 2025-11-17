# 🧩 DevTasks API – Task Manager Backend

Welcome to the **DevTasks API** – a **Node.js + Express + TypeScript + MongoDB** backend for a modern task management app.  
This repo is focused **only on the API**. The React frontend will live in a separate repository.

---

## ✨ Overview

DevTasks is a simple but realistic **task management** backend designed to mimic what you’d see in a real-world project:

- 👤 Users can register and log in
- 📁 Users can create and manage **projects**
- ✅ Each project has multiple **tasks**
- 📊 Tasks have **status, priority, due dates, and assignees**
- 🔐 All protected routes are secured using **JWT authentication**
- 🧾 Built with **TypeScript** for type safety and better DX

Perfect for:

- Learning **TypeScript + Express** with a real API
- Practicing **REST API design**
- Hooking up a **React / Next.js frontend** later
- Showing off in your portfolio

---

## 🏗 Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Auth:** JSON Web Tokens (JWT)
- **Security & Utilities:**
  - bcrypt (password hashing)
  - dotenv (environment variables)
  - cors, helmet (if added for security)

---

## 📂 Project Structure (Planned)

> This is the planned structure for the API repo:

```bash
devtasks-api/
  src/
    config/
      db.ts          # MongoDB connection
      env.ts         # Environment variables helper
    models/
      User.ts
      Project.ts
      Task.ts
    routes/
      auth.routes.ts
      project.routes.ts
      task.routes.ts
    controllers/
      auth.controller.ts
      project.controller.ts
      task.controller.ts
    middlewares/
      authMiddleware.ts
      errorHandler.ts
    services/
      auth.service.ts
      project.service.ts
      task.service.ts
    types/
      user.ts
      project.ts
      task.ts
      auth.ts
    utils/
      jwt.ts
      password.ts
    app.ts           # Express app setup
    server.ts        # Server entry point
  package.json
  tsconfig.json
  .env (ignored)
