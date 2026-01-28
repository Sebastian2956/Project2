# Top Tier Services

Modern business website for Top Tier Services, the supplementary general contractor arm of a precision countertop manufacturer. Built to feel like a high-end technology product site with bold typography, immersive motion, and content-rich sections across multiple pages.

## Tech Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Features
- Animated loading screen with progressive SVG draw
- Scroll-triggered section reveals
- 3D tilt cards and animated text treatments
- Custom cursor + magnetic button interactions
- Lightweight physics canvas element
- Page transitions across routes
- Pexels API integration with optional local image caching

## Getting Started

1) Install dependencies
```
npm install
```

2) (Optional) Add Pexels API key
Create `.env.local` in the project root:
```
PEXELS_API_KEY=your_key_here
```

3) Run the dev server
```
npm run dev
```

## Pexels Image Caching (Optional)
You can download a set of images into `public/images` so the site can use local assets instead of fetching on every request.

```
PEXELS_API_KEY=your_key_here \
PEXELS_QUERY="modern home renovation" \
PEXELS_PER_PAGE=6 \
npm run pexels:cache
```

## Production
```
npm run build
npm run start
```

## Project Structure
- `src/app` - Routes and layout
- `src/components` - Reusable UI and motion components
- `src/data` - Content models for services, pricing, team
- `src/lib` - Utility helpers + Pexels API integration
- `scripts` - Pexels caching utility

## Notes
- Remote images are configured for `images.pexels.com` in `next.config.mjs`.
- The Pexels integration automatically falls back to a curated list of Pexels images when no API key is present.

## Preview
<img width="1880" height="942" alt="image" src="https://github.com/user-attachments/assets/f5d5cb9e-0a0c-4334-ba19-f6047a4aae8a" />
<img width="1873" height="940" alt="image" src="https://github.com/user-attachments/assets/70936a45-5303-4256-a3ff-6212080d6451" />
<img width="1880" height="944" alt="image" src="https://github.com/user-attachments/assets/17fa980b-77bc-4031-b79f-53c5c766854d" />
<img width="1876" height="941" alt="image" src="https://github.com/user-attachments/assets/327fcce4-4ad3-47fb-a3ff-aa805f074d55" />
