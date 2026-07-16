<div align="center">

# ✦ Raza Zaheer — Portfolio

### Modern · Animated · Production-Ready

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-raza--zaheer--portfolio-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://raza-zaheer-portfolio-web-developer.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-razazaheer12-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/razazaheer12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-raza--zaheer-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raza-zaheer/)

![Performance](https://img.shields.io/badge/Performance-98%2F100-00c853?style=flat-square&logo=googlechrome)
![SEO](https://img.shields.io/badge/SEO-100%2F100-00c853?style=flat-square&logo=google)
![Best Practices](https://img.shields.io/badge/Best_Practices-100%2F100-00c853?style=flat-square)
![Accessibility](https://img.shields.io/badge/Accessibility-94%2F100-00c853?style=flat-square)

<br/>

![Hero Preview](https://i.ibb.co/sJ5V7yL8/Gemini-Generated-Image-sk1pkdsk1pkdsk1p.png)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Lighthouse Scores](#-lighthouse-scores)
- [Features](#-features)
- [Sections Breakdown](#-sections-breakdown)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [EmailJS Setup](#-emailjs-configuration)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [SEO](#-seo)
- [License](#-license)

---

## 🌟 Overview

A fully production-ready **single-page portfolio** built with **React + TypeScript**, featuring scroll-linked animations, a glassmorphism design system, dark/light theming powered by Zustand, and a fully functional contact form via EmailJS.

Built to stand out — not a template. Every component was custom-designed with **Framer Motion**, **Tailwind CSS**, and a consistent dark navy `#050816` aesthetic with a blue → purple → pink gradient palette.

---

## 🌐 Live Demo

> 🔗 **[raza-zaheer-portfolio-web-developer.vercel.app](https://raza-zaheer-portfolio-web-developer.vercel.app/)**

Deployed on **Vercel** with automatic CI/CD from GitHub.

---

## 🏆 Lighthouse Scores

| Metric | Mobile | Desktop |
|---|---|---|
| ⚡ Performance | **92** | **98** |
| ♿ Accessibility | **94** | **88** |
| ✅ Best Practices | **100** | **100** |
| 🔍 SEO | **100** | **100** |

> Tested on Slow 4G throttling (mobile) — real-world network performance is significantly faster.

---

## ✨ Features

### 🎨 Design & UI
- Dark navy `#050816` base with **blue → purple → pink** gradient palette
- **Glassmorphism** cards with `backdrop-blur` throughout
- **Dark / Light mode** with Zustand-powered theme store
- Fully **responsive** — mobile-first approach
- Consistent hover states, glow effects, and sheen sweeps across all sections

### 🎬 Animations
- **Framer Motion** `whileInView` staggered entrances
- **Scroll-linked progress bar** in navbar (`useScroll` + `useTransform`)
- **Scroll-linked timeline** fill in Experience section
- **Particle background** with mouse parallax in Hero
- **Cycling typing animation** with gradient text fill
- **AnimatePresence** tab transitions in Skills
- **layoutId** spring animations for active tab indicator
- Rotating conic-gradient ring, sheen sweeps, pulse rings

### ⚙️ Functionality
- ✉️ **Fully working contact form** (EmailJS + react-hook-form + toast feedback)
- 📄 **Resume download** button
- 🔍 **100/100 SEO** via React Helmet (Open Graph + Twitter cards)
- ♾️ **Show All / Show Less** toggle for Projects
- ⬆️ **Scroll to Top** button with animated entrance/exit

---

## 📄 Sections Breakdown

<details>
<summary><b>🏠 Hero</b></summary>

- Animated particle background reacting to mouse position
- Cycling typing headline with purple→blue gradient fill
- Theme-aware color system (dark/light tokens)
- Ambient grid + dual floating glow orbs
- Social links (GitHub / LinkedIn / Email) with hover glow
- CTA buttons: "View My Work" + "Contact Me"
- Animated scroll hint indicator

</details>

<details>
<summary><b>🔝 Navbar</b></summary>

- Fixed glassmorphism pill-shaped navbar
- **Scroll progress bar** (fills as you scroll down the page)
- Desktop nav with gradient hover ink effect
- Mobile hamburger menu with Framer Motion open/close
- Theme toggle (sun/moon icon)

</details>

<details>
<summary><b>👤 About</b></summary>

- Letter-by-letter animated heading
- Rotating conic-gradient ring behind profile image
- Hover sheen sweep on avatar card
- Info cards: Full Name, Email, Location, Availability (staggered entrance)
- Quick-scan highlights row: **2 Production Systems · 35% Engagement Boost · 100% On-time Delivery**
- Resume download button with gradient hover fill

</details>

<details>
<summary><b>🧠 Skills</b></summary>

- Category tabs (Frontend / Backend & DB / Real-Time & AI / Tools)
  - `layoutId` spring animation for the active tab pill
  - `AnimatePresence` content swap on tab switch
- Skill cards with hover lift, glow, and gradient wash
- **Two-row infinite marquee** (opposite directions) of all technologies
  - Edge-fade mask for premium feel

</details>

<details>
<summary><b>💼 Projects</b></summary>

- **Hero Projects** (PDF RAG Chatbot + Real-Time Chat App) in featured large cards
- Gradient feature badge (AI Project / Full-Stack)
- Remaining projects in responsive 3-column grid
- Image hover zoom + sheen sweep
- Live Demo + GitHub links on every card
- Show All / Show Less toggle with smooth scroll

</details>

<details>
<summary><b>📅 Experience & Education</b></summary>

- Center timeline with **scroll-linked fill** (`useScroll` + `useTransform`)
- Alternating left/right cards — directional slide-in entrance
- Pulsing icon ring on each timeline node
- Hover: gradient wash + sheen sweep + accent border grows

</details>

<details>
<summary><b>📬 Contact</b></summary>

- Typing animation in section header
- Info cards: Email, Location, Availability status
- Social buttons (GitHub + LinkedIn) with hover glow
- Functional form with validation (react-hook-form)
- EmailJS client-side sending with loading + success states
- Theme-aware toast notifications

</details>

<details>
<summary><b>🦶 Footer</b></summary>

- RZ logo consistent with navbar
- Staggered nav links (all 6 sections)
- Gradient divider
- Social icons with glassmorphism hover
- Animated ❤️ heartbeat in copyright
- Back-to-top button

</details>

---

## 🛠️ Tech Stack

### Core
| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI Library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool |

### Styling & Animation
| Technology | Purpose |
|---|---|
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility-first styling |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=white) | Animations |
| Lucide React + React Icons | Icon library |

### Functionality
| Technology | Purpose |
|---|---|
| ![Zustand](https://img.shields.io/badge/Zustand-brown?style=flat) | Theme state management |
| EmailJS | Client-side email sending |
| React Hook Form | Form validation |
| React Hot Toast | Toast notifications |
| React Helmet | SEO metadata |

### Deployment
| Technology | Purpose |
|---|---|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Hosting + CI/CD |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) | Version control |

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/razazaheer12/raza-zaheer-portfolio-WebDeveloper.git

# 2. Navigate to the project directory
cd project

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 EmailJS Configuration

The contact form requires **EmailJS** environment variables to send emails.

Create a `.env` file in the `project/` root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Template Setup
In your EmailJS template, use these variables:

```
Subject : New message from {{from_name}}
From    : {{from_name}}
Email   : {{from_email}}
Message : {{message}}
Reply To: {{from_email}}
```

> Restart the dev server after creating `.env`.

---

## 📁 Project Structure

```
project/
├── public/
│   ├── raza.png                  # Profile image
│   └── Raza_Zaheer_Resume.pdf    # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── store/
│   │   └── themeStore.ts         # Zustand dark/light state
│   ├── App.tsx
│   └── main.tsx
├── .env                          # EmailJS keys (not committed)
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 Featured Projects

### ⭐ Hero Projects

#### 🤖 PDF RAG Chatbot
> Upload any PDF and have a real conversation with it

- **Stack:** Next.js · TypeScript · NestJS · LangChain · Pinecone · Google Gemma · RAG · Shadcn
- **GitHub:** [Pdf-RAG-Chatbot](https://github.com/razazaheer12/Pdf-RAG-Chatbot)

#### 💬 Real-Time Chat App
> Production-ready messaging platform with live presence

- **Stack:** React · Node.js · MongoDB · Socket.io · JWT · Zustand · Cloudinary
- **Live:** [real-time-chat-app-pi-lake.vercel.app](https://real-time-chat-app-pi-lake.vercel.app)
- **GitHub:** [Real-Time-Chat_App](https://github.com/razazaheer12/Real-Time-Chat_App)

### 📦 Other Projects

| Project | Stack | Links |
|---|---|---|
| 🧠 Quizlett MCQ Platform | Next.js · TypeScript · Shadcn | [Live](https://advanced-mcq-quiz.vercel.app/) · [Code](https://github.com/razazaheer12/Quizlett--advanced-mcq-quiz) |
| 🌤️ WeatherFlow NextGen | Next.js · OpenWeather · Chart.js | [Live](https://advance-weather-app-next-gen.vercel.app/) · [Code](https://github.com/razazaheer12/Advance_Weather_App-Next_Gen) |
| 🌙 Sun & Moon Tracker | React · TypeScript · Date-fns | [Live](https://sun-moon-tracker-a27p.vercel.app/) · [Code](https://github.com/razazaheer12/Sun_Moon-Tracker) |
| 📄 MyPDF Toolkit | Next.js · TypeScript | [Live](https://mypdf-converter.vercel.app/) · [Code](https://github.com/razazaheer12/MyPDF_converter) |
| 🍽️ Recipe Finder | HTML · CSS · JS · MealDB API | [Live](https://recipe-finder-12.netlify.app/) · [Code](https://github.com/razazaheer12/Recipe-Finder) |
| 🍸 Cocktail Explorer | Node.js · Express · EJS | [Live](https://cocktail-explorer-psi.vercel.app/) · [Code](https://github.com/razazaheer12/Cocktail-Explorer) |
| 🎨 Neural Canvas AI | JavaScript · CSS · HTML | [Live](https://canvas-photoeditor-ai.netlify.app/) · [Code](https://github.com/razazaheer12/Neural-Canvas--AI-Art-Style-Transfer-Studio) |
| 🐍 Modern Snake Game | HTML · CSS · JS | [Live](https://snake-game0999.netlify.app/) · [Code](https://github.com/razazaheer12/Snake-game) |

---

## 🔍 SEO

SEO is managed via **React Helmet** with full metadata:

```html
<title>Raza Zaheer — Frontend Developer Portfolio</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<link rel="canonical" href="https://raza-zaheer-portfolio-web-developer.vercel.app/" />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:image" content="..." />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.

---

<div align="center">

**⭐ Star this repo if you found it helpful or inspiring!**

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-razazaheer12-181717?style=for-the-badge&logo=github)](https://github.com/razazaheer12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-raza--zaheer-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/raza-zaheer/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-4f46e5?style=for-the-badge&logo=vercel)](https://raza-zaheer-portfolio-web-developer.vercel.app/)

<br/>

**Built with ❤️ by [Raza Zaheer](https://github.com/razazaheer12)**

</div>
