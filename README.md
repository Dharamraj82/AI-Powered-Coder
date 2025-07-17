# ⚡ AI Power Coder

**AI Power Coder** is an intelligent code reviewer and assistant built for developers. It uses advanced AI to analyze, review, and explain code in real time — helping developers write better, faster, and more secure code.

---

## 🌐 Live Demo

👉 [Live Project Link](https://your-live-link-here.com)  

---

## 🎥 Project Video Demo

📺 [Watch Demo Video](https://your-video-link-here.com)  

---

## 🚀 Key Features

- 🧠 **AI Code Review** – Get instant feedback on your code logic, readability, and structure.
- 💡 **Syntax Highlighting** – Markdown + PrismJS to render clean code blocks with color.
- 🔍 **Error Detection** – Pinpoint syntax errors and offer corrections with explanations.
- 📄 **Markdown Output** – All AI responses are formatted in clean, readable `.md` style.
- 📤 **Frontend + Backend Integration** – Built with modular architecture for full-stack performance.

---

## 🛠️ Tech Stack

### 🔹 Frontend – `React + Vite`
- `Axios`: For API communication with the backend.
- `PrismJS`: Syntax highlighting for code blocks.
- `React-Markdown`: To render Markdown-based AI responses.
- `Tailwind CSS` : For clean and responsive UI .

### 🔸 Backend – `Node.js + Express`
- `Gemini Pro API`: Used for AI generation and code understanding.
- `dotenv`: For managing environment variables and API keys securely.
- `CORS`: To handle API calls smoothly from the frontend.

---

## 🧠 Powered By

- **Gemini AI (Google Generative AI)** – Handles all prompt-based AI logic and intelligent review generation.
- **Express Server** – Acts as middleware between frontend and Gemini, processing and forwarding requests.
- **Custom Prompt System** – Pre-defined system instructions enforce code quality and AI personality (trained by Dharamraj).

---

## 📁 Project Structure
AI-Power-Code-Reviewer/
│
├── BACKEND/                        # Node.js + Express Server
│   ├── src/
│   │   ├── controller/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   └── services/
│   │       └── ai.service.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
├── FRONTEND/                       # React + Vite Client
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   │   ├── EditorReviewer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── index.css
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
└── README.md                       # Project documentation

