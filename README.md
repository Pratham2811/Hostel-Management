📦 Hostel Management — Repository Overview

A modular full-stack hostel browsing and visit-scheduling system built with React (frontend) and Node.js/Express (backend).
This repository is organized so you can develop the frontend UI features first using dummy/mock data, and later plug in your actual backend API easily.

🗂 Repository Structure
/ (project root)
│
├── client/                   # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── app/              # App entry, routing config
│   │   ├── components/       # Reusable UI components
│   │   ├── features/         # Feature-based folders
│   │   │   ├── listings/     # Hostel listings pages, components, hooks
│   │   │   ├── hostelDetails/# Hostel details page + components
│   │   │   ├── visits/       # User visit scheduling & viewing
│   │   │   └── owner/        # Owner dashboard (approve visits)
│   │   ├── hooks/            # Custom hooks
│   │   ├── services/         # API clients (real + mock mode)
│   │   └── index.css         # Tailwind styles
│   └── public/mock/          # Mock JSON data for development
│
├── server/                   # Backend API (Node + Express)
│   ├── server.js             # Entry point
│   ├── controllers/          # Request handlers
│   ├── routes/               # API routes
│   ├── utils/                # Dummy data + helpers
│   └── services/             # Business logic
│
└── README.md                 # Project documentation


This structure ensures clean separation of:

UI layout & pages

Feature-specific logic

Mock data & backend integration

API services

React components

🚀 Features (Current + In Progress)
✔ 1. Hostel Listings (User)

Display hostels based on selected city

Tailwind-designed cards (HostelCard)

Filters (UI only)

Uses dummy backend (dummydata.js)

✔ 2. Hostel Details (User)

Detailed view for a hostel

Image, price, features, amenities

CTA to schedule a visit

✔ 3. Visit Scheduling

POST request simulation

Visit form component

UI feedback states

✔ 4. Owner Dashboard (Partial)

View pending visit requests

Approve / Reject logic (supported in backend mock)

🛠 Installation & Setup
1. Clone the repo
git clone <repo-url>
cd hostel-management

▶ Frontend Setup (client)
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:5173

Mock Data Mode

Frontend uses mock JSON from public/mock/* until the backend is fully ready.

Switch between mock mode and real API in:

client/src/services/apiClient.js

▶ Backend Setup (server)
cd server
npm install
npm run dev


Backend runs at:

http://localhost:5000


Available API endpoints:

GET    /api/hostels
GET    /api/hostels/:id
POST   /api/visits
PUT    /api/visits/:id/approve

🌐 Data Flow (Simple Overview)
Frontend UI (React Pages)
    ↓ calls
services/apiClient.js
    ↓ makes HTTP requests
Express Backend (server/)
    ↓ fetches / mock data
utils/dummydata.js


This setup lets you:

Fully develop the frontend without backend being finished

Swap mock data → real DB/API when ready

Keep features isolated & modular

📌 Frontend Features Under Development

Filters logic: price range, room type

Pagination & infinite scrolling

Search bar with debounce

User authentication (later)

Owner CRUD for listings

⭐ Goals of This Repo

Learn feature-based architecture

Practise React + Tailwind UI design

Build Express-style backend

Understand frontend ⇆ backend data flow

Prepare for production-level structure