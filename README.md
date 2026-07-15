# GramSeva

GramSeva is a local civic-service directory for Kerala communities. It helps residents find nearby public services, verified contacts, working hours, locations, emergency support, document checklists, and volunteer-updated records in multiple languages.

## What It Does

- Search services by name, category, location, contact, or phone number.
- Filter by Kerala district and locality, with Kozhikode and Mukkali ready by default.
- View service details, verification history, guidelines, and map context.
- Add community suggestions that are saved locally in the browser.
- Switch between English, Malayalam, Hindi, Telugu, and Kannada.
- Use an offline-ready mode backed by local browser storage.

## Tech Stack

- React 19
- JavaScript / JSX
- Vite
- Tailwind CSS
- Recharts
- Lucide React icons
- Motion animations

## Run Locally

Prerequisite: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Useful Scripts

```bash
npm run dev      # Start the local Vite server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run the build validation script
```

## Environment

The app can run with local data without an API key. If you add Gemini-powered features later, copy `.env.example` to `.env.local` and set:

```bash
GEMINI_API_KEY=your_api_key_here
```
