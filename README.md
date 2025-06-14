
# 💸 Paytm Project – Payment & P2P Transfer App

A full-stack **Next.js** (TypeScript) project that simulates core functionalities of a payment platform like Paytm. This app includes **on-ramp transactions**, **P2P transfers**, a custom **bank webhook server**, and a clean, responsive UI.

Built with a modern stack: **Next.js App Router**, **Tailwind CSS**, **Prisma (PostgreSQL)**, and **TypeScript**.

---

## 🚀 Features

- 🏦 **Bank Webhook Server** to handle incoming transaction events
- 💳 **On-Ramp Transaction** flow (add funds to wallet)
- 🔁 **Peer-to-Peer (P2P) Money Transfer** logic
- 🧾 **Transaction history** with timestamps and metadata
- 🖥️ **Clean Landing Page UI** built with Tailwind CSS
- 🧑‍💻 Built using **Next.js App Router**, **Prisma**, and **TypeScript**

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| **Next.js (App Router)** | Full-stack React framework |
| **TypeScript** | Static typing for better DX |
| **Tailwind CSS** | Utility-first CSS framework for responsive UI |
| **Prisma ORM** | Database ORM for PostgreSQL |
| **PostgreSQL** | Relational DB to store users, balances, and transactions |

---



- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)