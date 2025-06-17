# Portfolio (Netflix-Inspired React Web App)

A modern, visually stunning portfolio web application inspired by Netflix's dark theme, card-based UI, and interactive experience. Built with React, Tailwind CSS, and Vite, this project showcases multiple perspectives (Developer, Recruiter, Friend, Adventurer) and a variety of interactive, themed pages.

## ✨ Features

- **Netflix-style UI:** Dark theme, bold typography, card-based layouts, and smooth hover/transition effects.
- **Multiple Perspectives:** Switch between Developer, Recruiter, Friend, and Adventurer views, each with custom content and navigation.
- **Pinterest-style Meme Page:** Browse memes in a responsive masonry layout with animated MemeCards.
- **Dynamic Card Rows:** Each page features custom card rows for "Top Picks" and "Continue Watching".
- **Rich Component Library:** Modular components for cards, timelines, hero sections, and more.
- **Interactive Terminal:** Built-in fake terminal experience using the `Terminal` component, allowing users to interact with fun commands and see simulated outputs.
- **Spotify Integration:** Embedded Spotify playlists and tracks using the `SpotifyEmbed` component for a modern music experience.
- **Responsive Design:** Fully mobile-friendly and desktop-optimized.

## 🗂️ Project Structure

```
Portfolio/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and media
│   ├── components/        # Reusable UI components (Card, CardRow, MemeCard, Timeline, Terminal, SpotifyEmbed, etc.)
│   ├── pages/             # Main app pages (see below)
│   │   ├── Adventurer/
│   │   ├── Destination/
│   │   ├── Developer/
│   │   ├── Friends/
│   │   ├── Game/
│   │   ├── HireMe/
│   │   ├── Landing/
│   │   ├── Meme/
│   │   ├── Music/
│   │   ├── Professional/
│   │   ├── Project/
│   │   ├── Recruiter/
│   │   └── Skills/
│   ├── App.jsx            # Main app entry
│   └── main.jsx           # React root
├── package.json           # Project metadata and scripts
└── README.md              # This file
```

## 📄 Pages & Components Overview

### Landing Page

- Choose your perspective: Developer, Recruiter, Friend, Adventurer
- Netflix-style grid with animated, square avatar cards

### Developer / Recruiter / Friend / Adventurer Pages

- Each has custom "Today's Top Picks" and "Continue Watching" card rows
- Cards link to relevant sections (Projects, Skills, Memes, Terminal, etc.)
- Unique hero section and avatar for each perspective

### Meme Page

- Pinterest-style masonry layout for memes
- MemeCard component supports images, GIFs, and videos
- Dark theme, animated hover overlays, and tag/category system

### Game Page

- Browse games in a responsive grid
- GameCard component with platform, rating, and image

### Music Page

- Explore music genres, artists, and Spotify embeds
- Modern card layout for genres and artists
- **SpotifyEmbed Component:** Easily embed Spotify playlists and tracks for interactive listening directly in the app.

### Terminal Experience

- **Terminal Component:** Simulated terminal interface where users can type commands and receive fun, pre-programmed responses. Great for showcasing developer skills and adding interactivity.

### Destination Page

- Interactive cards for travel destinations
- Highlighting and navigation bar

### Professional Page

- Timeline of professional/academic experience
- TimelineCard component for each entry

### Project, Skills, HireMe, and More

- Dedicated pages for projects, skills, and contact/hiring
- Consistent card-based UI and dark theme

## 🛠️ Tech Stack

- **React** (with functional components)
- **Tailwind CSS** for rapid, utility-first styling
- **Vite** for fast development and builds
- **React Router** for navigation
- **React Icons** for iconography

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 📦 Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint codebase!

## 🧩 Planned Features & Ideas

- **GSAP or Framer Motion Animations:**
  - Add advanced, smooth animations and transitions for cards, page loads, and interactive elements using GSAP or Framer Motion.
- **Dark/Light Theme Toggle:**
  - Allow users to switch between dark and light modes for accessibility and preference.
- **User Authentication & Personalization:**
  - Add login/signup and personalized dashboards for different user types.
- **Blog/Articles Section:**
  - Share technical blogs, tutorials, and project write-ups.
- **Contact Form with Email Integration:**
  - Enable direct contact via email or integrated messaging.
- **Progressive Web App (PWA) Support:**
  - Make the portfolio installable and offline-ready.
- **Accessibility Improvements:**
  - Enhance keyboard navigation, ARIA labels, and color contrast.
- **More Data Visualizations:**
  - Add charts/graphs for skills, achievements, or project stats.
- **Internationalization (i18n):**
  - Support multiple languages for a global audience.
- **More Integrations:**
  - GitHub activity, LinkedIn, or other social widgets.

## 📢 Credits & Inspiration

- Inspired by Netflix's UI/UX and Pinterest's masonry grid
- Built by Anurag Banerjee
- Open source, feel free to fork and customize
