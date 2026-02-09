## Meetme – Modern Video Calling Web App

Meetme is a **modern video calling and meeting management web application** built with **Next.js 14 (App Router)**.  
It uses **Stream Video** for real-time calls and **Kinde** for authentication, offering a secure, clean, and responsive experience with personal rooms, scheduled meetings, and a clear overview of upcoming, previous, and recorded meetings.

### Features

- **Secure authentication** via Kinde (`/api/auth/login`)
- **Personal room** for each user with a shareable invite link
- **Instant and scheduled meetings** with unique meeting IDs
- **Upcoming, previous, and recordings** sections for quick navigation
- **In-browser HD video meetings** powered by `@stream-io/video-react-sdk`
- **Responsive, dark-friendly UI** built with Tailwind CSS and Radix UI primitives

### Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript, `next/font`)
- **UI**: React 18, Tailwind CSS, Radix UI, custom components in `src/components`
- **Video**: `@stream-io/video-react-sdk`, `@stream-io/node-sdk`
- **Auth**: `@kinde-oss/kinde-auth-nextjs`
- **Date & Time**: `react-datepicker`, native `Intl` APIs
- **Tooling**: ESLint, TypeScript, PostCSS, Tailwind plugins

### Prerequisites

- **Node.js** 18+ (recommended)
- **pnpm**, **npm**, **yarn**, or **bun** installed
- Environment variables for **Kinde**, **Stream Video**, and a `NEXT_PUBLIC_BASE_URL` (used to build invite links)

Create an `.env.local` file in the project root and add the relevant variables, for example:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# KINDE_* and STREAM_* variables go here
```

### Installation

From the project root:

```bash
# using pnpm (recommended)
pnpm install

# or using npm
npm install
```

### Running the App

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Available Scripts

- **`pnpm dev` / `npm run dev`**: Run the app in development mode
- **`pnpm build` / `npm run build`**: Create an optimized production build
- **`pnpm start` / `npm start`**: Start the production server (after building)
- **`pnpm lint` / `npm run lint`**: Run ESLint

### Project Structure (High Level)

- `src/app` – App Router layouts and pages (home, meeting pages, personal room, upcoming/previous/recordings)
- `src/components` – Reusable UI components and video call UI pieces
- `src/hooks` – Custom hooks (e.g. user, calls)
- `actions` – Server actions for Stream and Kinde
- `providers` – Global providers (e.g. Stream client)

### Notes

- All authenticated routes rely on Kinde; unauthenticated users are redirected to `/api/auth/login`.
- Date and time handling follows the browser locale on the client and uses ISO strings (e.g. `starts_at`) when creating meetings so that they can be stored and processed consistently across the system.
