# Noël Rasam | Portfolio

This repository contains a polished, desktop-inspired portfolio website built with React and Vite. It is designed to present my background, projects, and technical skills in an interactive format that feels more like a product experience than a traditional resume.

## Overview

This project serves as both a personal portfolio and a demonstration of frontend engineering skills. The experience is modeled as a desktop operating system with draggable windows, a taskbar, themed UI, and app-like sections for About, Experience, Projects, Skills, Education, and Contact.

It reflects a strong focus on:

- Clean, modular component architecture
- Responsive and polished UI/UX
- React-based state management and reusable logic
- Building practical, user-facing web experiences

## What this project demonstrates

- A custom window-management experience with open, minimize, close, and focus interactions
- Reusable theming and desktop-style visual design
- Structured content sections for professional experience and projects
- A contact form integrated with EmailJS
- A modern frontend stack with Vite and React

## Tech stack

- React 19
- Vite
- JavaScript
- CSS Modules
- Lucide React
- React Icons
- EmailJS

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Environment variables

If you want to use the contact form locally, create a `.env` file and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Project structure

- `src/` — application source code
- `src/apps/` — portfolio app sections such as About, Projects, Skills, and Contact
- `src/components/` — reusable UI components like the desktop, taskbar, and window system
- `src/context/` and `src/hooks/` — shared state and custom logic

## About me

I am a Software Developer and Computer Science student with hands-on experience building practical software solutions and a strong interest in web development, UI/UX, and product-oriented engineering. This portfolio is one example of how I combine technical execution with thoughtful design.

## Contact

- Email: novell.rasam@gmail.com
- GitHub: https://github.com/nrasam
- LinkedIn: https://www.linkedin.com/in/novell-rasam-085467204/
