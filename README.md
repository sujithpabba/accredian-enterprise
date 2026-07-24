# Accredian Enterprise Landing Page

A responsive enterprise learning platform landing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project recreates the Accredian Enterprise website while following modern frontend development practices such as reusable components, responsive design, and API-based data fetching.

## Live Demo

**Website:** https://accredian-enterprise-blond.vercel.app

## GitHub Repository

**Repository:** https://github.com/sujithpabba/accredian-enterprise

---

## Project Overview

The goal of this project was to recreate the Accredian Enterprise landing page with a clean, responsive design while maintaining a scalable project structure. The application also demonstrates frontend interaction with a mock API using Next.js Route Handlers and the Fetch API.

---

## Features

- Responsive design for desktop, tablet, and mobile devices
- Modern enterprise landing page UI
- Reusable UI components
- Interactive FAQ accordion
- Contact form with client-side validation
- Programs section powered by the Fetch API
- Mock backend using Next.js Route Handlers
- Service layer for API communication
- TypeScript interfaces for improved type safety
- Optimized images using the Next.js `Image` component
- Smooth scrolling navigation

---

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

### API

- Next.js Route Handlers
- Fetch API

### Tools

- Git
- GitHub
- Vercel
- Font Awesome

---

## Project Structure

```text
src
│
├── app
│   ├── api
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── layout
│   ├── sections
│   └── ui
│
├── data
├── services
└── types

public
├── images
└── logos
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/sujithpabba/accredian-enterprise.git
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

---

## API

This project includes a mock API built using **Next.js Route Handlers**.

**Endpoint**

```text
/api/programs
```

The Programs section retrieves data using the Fetch API through a dedicated service layer, following a structure similar to a real-world frontend application communicating with a backend service.

---

## AI Usage

AI tools were used for guidance and debugging during development. The project was implemented, reviewed, and tested throughout the development process.

---


## Future Improvements

- Integrate with a backend service
- Store data in a database
- Add authentication and authorization
- Implement search and filtering for programs
- Add automated testing

---

## Author

**Sujith P**

GitHub: https://github.com/sujithpabba
