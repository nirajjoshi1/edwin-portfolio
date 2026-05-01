# Edwin Torres Portfolio

Conversion-focused personal brand website for a direct response copywriter.

## Stack

- React + Vite
- Tailwind CSS
- React Router

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

## Lead capture configuration

Create a `.env` file in project root:

```bash
VITE_LEAD_WEBHOOK_URL=https://your-webhook-endpoint.com
VITE_CALENDAR_EMBED_URL=https://calendly.com/your-handle
```

- `VITE_LEAD_WEBHOOK_URL` receives JSON payloads from:
  - `Contact` page form
  - `Book a Call` intake form
- `VITE_CALENDAR_EMBED_URL` is used by the booking CTA button.
