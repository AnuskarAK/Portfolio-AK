# Personal Portfolio

A modern, responsive, and minimalist personal portfolio built on the MERN stack (MongoDB, Express, React, Node.js) to showcase projects, skills, and experience.

## 🚀 Technologies Used

**Frontend (`/client`)**
* React 19 (via Vite)
* Tailwind CSS for styling
* React DOM

**Backend (`/server`)**
* Node.js & Express.js
* MongoDB & Mongoose
* dotenv for environment variables
* cors for cross-origin requests

## ✨ Features

* **SaaS-Inspired Design:** Clean, minimal, and professional UI with slate-based neutral tones and a vibrant blue accent color.
* **Responsive Layout:** Mobile-friendly design that adapts smoothly to screens of all sizes.
* **Modern Aesthetics:** Subtle gradient lighting effects, blurred background shapes, and accessible contrast.
* **Interactive Contact Form:** Features real-time input validation, interactive visual feedback, and a seamless backend integration to save messages securely to MongoDB.
* **MERN Architecture:** Organized into a clean client-server structure.

## 📁 Project Structure

```
Portfolio/
├── client/          # React frontend built with Vite
│   ├── public/
│   ├── src/         # React components, styles, and assets
│   ├── package.json
│   └── vite.config.js
└── server/          # Express backend API
    ├── controllers/ # Request handlers
    ├── models/      # MongoDB schemas
    ├── routes/      # API endpoints
    ├── server.js    # Entry point
    └── package.json
```

## 🛠️ Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* A MongoDB connection URI (local or MongoDB Atlas)

### Installation

1. **Install Client Dependencies:**
   ```bash
   cd client
   npm install
   ```

2. **Install Server Dependencies:**
   ```bash
   cd server
   npm install
   ```

### Configuration

Create a `.env` file in the `server` directory (you can use `.env.example` as a template) and add your environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Running the Application Locally

You will need two separate terminal windows/tabs to run both the frontend and backend servers simultaneously.

**Start the Backend Server:**
```bash
cd server
node server.js
```
*(Runs on http://localhost:5000 by default)*

**Start the Frontend Client:**
```bash
cd client
npm run dev
```
*(Runs on http://localhost:5173 by default)*

## 🤝 Contact
For any inquiries about this project or potential opportunities, please use the contact form within the portfolio itself.
