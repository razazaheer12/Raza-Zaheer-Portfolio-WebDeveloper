# 🚀 Raza Zaheer — Modern Portfolio (React + TypeScript)

A modern, responsive portfolio website built with **React + TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The site is designed as a single-page experience with smooth section navigation, scroll-linked UI, rich hover effects, and dark/light theming.

---

## ✨ Live Experience (What You’ll See)

### Hero (Home)
- **Animated particle background** that subtly moves with the mouse.
- **Cycling typing headline** (role text changes automatically):
  - Gradient-filled role text (`Full-Stack Developer → MERN Stack Developer → Computer Science Graduate`).
  - Blinking cursor animation.
- **Theme-aware visual system** (dark and light mode tokens for colors, glows, borders, cursor, etc.).
- **Ambient grid + glow orbs** behind the hero.
- **Social icon links** (GitHub/LinkedIn/Email):
  - Hover lift + scale, border + glow changes.
- **CTA buttons** with hover transitions:
  - “View My Work” scrolls to Projects.
  - “Contact Me” jumps to Contact.
- **Animated scroll hint** at the bottom of the hero.

### Navbar
- **Fixed glassmorphism navbar** with smooth desktop/mobile interactions.
- **Scroll progress bar**:
  - Uses `useScroll()` + `useTransform()` to fill a gradient line as you scroll.
- **Desktop nav hover glow** with gradient “ink” hover effect.
- **Mobile menu**:
  - Opens/closes with Framer Motion animations.
  - Includes the theme toggle inside the menu.

### About
- **Animated heading**:
  - Letter-by-letter reveal.
- **Animated gradient divider** (draw-in effect).
- **Rotating conic-gradient ring** behind the profile image.
- **Hover sheen sweep** on the avatar card.
- **Recruiter-friendly proof cards** with staggered entrance + hover lift.
- **Resume download button**:
  - Gradient slide-in on hover.
  - Downloads: `Raza_Zaheer_Resume.pdf`.

### Skills
- Section is built as a **full “skills dashboard”**:
- **Animated section heading** (character reveal via Framer Motion).
- **Accent line draw-in** divider.
- **Category tabs** (Frontend / Backend & DB / Real-Time & AI / Tools):
  - Active tab uses a smooth gradient background with `layoutId`.
  - Tab content swaps with `AnimatePresence`.
- **Skill cards**:
  - Animate into view (`whileInView`).
  - Hover lift + scale.
  - Hover glow + wash gradient.
- **Two-row technology marquee**:
  - Uses duplicated arrays to create continuous motion.
  - Masked with a gradient mask so the marquee fades at edges.
  - Second row runs in reverse for a premium “motion balance”.

### Projects
- Projects are split into:
  - **Hero Projects (Featured)**: top 2 in a bigger, more detailed card layout.
  - **More Projects**: remaining projects in a responsive grid.
- **Featured cards include**:
  - Gradient overlays + hover sheen sweep.
  - “AI Project / Full-Stack” badge.
  - Action buttons:
    - **Live** (if available)
    - **Code (GitHub)**
  - Hover transforms (image zoom, card lift, shadows).
- **Regular project cards include**:
  - Action buttons appear on hover (Live + Code).
  - Technology tags displayed as pill badges.
- **Show All / Show Less toggle**:
  - Expands/collapses the regular projects list.
  - On toggle, the section scrolls smoothly back into view.

### Experience & Education
- A **center timeline** with scroll-linked progress:
  - Timeline line fill grows using `useScroll({ target, offset })` + `useTransform()`.
- Timeline entries alternate left/right:
  - Cards slide in from their side on scroll.
- Each card includes:
  - Pulsing timeline icon ring.
  - Hover effects:
    - Gradient wash overlay
    - Sheen sweep across the card
    - Side border “grows” in height
    - Tech chips animate in (staggered)

### Contact
- **Fully functional contact form** using:
  - `react-hook-form`
  - `EmailJS` (client-side email sending)
  - `react-hot-toast` notifications
- **Typing animation** in the form header (“Get In Touch”)
- **Validation**:
  - Name required
  - Email required + regex validation
  - Message required
  - Inline error messages for each field
- **Submit states**:
  - Loading state (“Sending…”) while EmailJS is sending
  - Success state: confirmation panel with icon
- **Toaster styling** is theme-aware (dark/light toast background & borders).

### Footer
- Animated footer content with:
  - Gradient ambient glows
  - Staggered nav links
  - Social icons with hover lift + border/glow changes
  - “Made with ❤️” heartbeat animation
  - Back-to-top button

### Scroll to Top Button
- Appears when scrolling past **280px**.
- Smoothly scrolls back to the **Hero section (#home)**.
- Animated entrance/exit using `AnimatePresence`.

---

## 🧩 Features Summary (Highlights)
- Scroll progress bar in the navbar
- Theme toggle powered by **Zustand**
- Dark-mode tokenized design system (Hero + Contact styling)
- Particle background + mouse interaction
- Multiple Framer Motion animation styles:
  - entrance on view (`whileInView`)
  - hover wash + sheen sweeps
  - scroll-linked timeline progress
  - tab layout transitions (`layoutId`)
- Skill marquee with edge masking
- Projects featured vs regular cards + show-all toggle
- Contact form with EmailJS + form validation + toast feedback
- SEO metadata via React Helmet (Open Graph + Twitter cards)

---

 ## 🛠️ Tech Stack

### Core
- **React**
- **TypeScript**
- **Vite**

### Styling & UI
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** + **React Icons** (icons)

### Functionality
- **Zustand** (theme state)
- **EmailJS** (client-side contact sending)
- **React Hook Form** (form validation)
- **React Hot Toast** (notifications)
- **React Helmet** (SEO metadata)

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/razazaheer12/raza-zaheer-portfolio-WebDeveloper.git
   ```

2. Go to the project directory:
   ```bash
   cd project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

5. Open in your browser:
   - http://localhost:5173

---

## 📧 EmailJS Configuration (Required)
The Contact form sends emails using environment variables.
Create a `.env` file in the `project/` folder with:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Then restart the dev server.

---

## 📌 Sections & Navigation
Use the navbar to jump to:
- **Home** (`#home`)
- **About** (`#about`)
- **Skills** (`#skills`)
- **Projects** (`#projects`)
- **Experience** (`#experience`)
- **Contact** (`#contact`)

---

## 🎯 Featured Projects (From the Current Portfolio)

### Hero Projects
1. **PDF RAG Chatbot**
   - RAG chat using Pinecone Vector DB + Google Gemma AI
   - Tech: Next.js, TypeScript, LangChain, RAG, LLM integration, Shadcn

2. **Real-Time Chat App**
   - Topic-based chat rooms, private DMs, real-time presence with Socket.io
   - Tech: React, Node.js, MongoDB, Socket.io, JWT, Zustand, Cloudinary

### Other Projects
- **Quizlett - MCQ Platform** (Next.js + TypeScript)
- **WeatherFlow NextGen** (Next.js + OpenWeather + Chart.js)
- **Sun & Moon Tracker** (React + Date-fns)
- **MyPDF - Free PDF Toolkit** (Next.js + drag/drop + progress tracking)
- **Recipe Finder** (MealDB API)
- **Cocktail Explorer** (Express + EJS + TheCocktailDB)
- **Neural Canvas - AI Art Studio** (vanilla JS/CSS/HTML)
- **Modern Snake Game** (vanilla JS + pause/speed/sound)

---

## 🧾 SEO
SEO tags are managed through `react-helmet`:
- Title
- Meta description
- Keywords
- Canonical link
- Open Graph (Facebook)
- Twitter card metadata

---

## 📄 License
This project is open source and available under the **MIT License**.

---

⭐ **Star this repo** if you found it helpful or inspiring.

**Built with ❤️ by Raza Zaheer**

