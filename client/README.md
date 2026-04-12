# Rakshika — MERN Stack Portfolio

A full-stack personal portfolio built with the MERN Stack.

## 🔗 Live Demo
> Add your deployment link here after deploying

---

## 📁 Folder Structure

```
portfolio/
├── client/          ← React frontend (this folder)
│   ├── public/
│   └── src/
│       ├── components/   ← All section components
│       ├── hooks/        ← useCursor, useScrollReveal
│       ├── styles/       ← global.css
│       ├── App.jsx
│       └── index.js
├── .env
├── README.md
└── server/          ← Node.js + Express backend (build next)
    ├── routes/
    ├── models/
    
    └── index.js
```

---

## 🚀 Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Start the React frontend
```bash
cd client
npm install
npm start
```
Runs on `http://localhost:3000`

### 3. Start the Express backend
```bash
cd server
npm install
npm run dev
```
Runs on `http://localhost:5000`

> The React app proxies API calls to `localhost:5000` via the `"proxy"` field in `client/package.json`.

---

## ⚙️ Environment Variables

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> ⚠️ Never push `.env` to GitHub. It is already listed in `.gitignore`.

---

## 🌐 Deployment

| Part     | Platform         |
|----------|-----------------|
| Frontend | Vercel / Netlify |
| Backend  | Render / Railway |

---


Built with React.js · Node.js · Express.js · MongoDB
