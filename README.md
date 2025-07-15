# 🏆 Leaderboard System

A full-stack leaderboard system where users can be added, selected, and awarded random points. Rankings are displayed dynamically with a top-3 podium layout and claim history. Built with **React.js**, **Node.js**, **MongoDB**, and **TanStack Query v5**.

---

## 🚀 Features

- 🔟 Display users in batches of 10 with "Show More"
- 👤 Add users from the frontend
- 🎯 Claim random points (1–10) for selected users
- 📈 Dynamic leaderboard sorted by total points
- 👑 Top 3 users displayed in podium style
- 📜 Claim history stored and shown in modal
- 💡 Real-time UI updates with TanStack Query
- 🎨 Fully responsive UI using Tailwind CSS

---

## 🧱 Tech Stack

### Frontend

- React (Vite)
- TanStack Query v5
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose

---

## ⚙️ Backend Setup

1. Navigate to backend and install dependencies:

```bash
cd backend
npm install
```

2. Connect MongoDB:  
   Edit `config/db.js` (default uses `mongodb://127.0.0.1:27017/leaderboard`)

3. Start the server:

```bash
npm run dev
```

Backend will run at: `http://localhost:5000`

---

## 🌐 Frontend Setup

1. Navigate to frontend and install dependencies:

```bash
cd frontend
npm install
```

2. Start the React app:

```bash
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | `/api/users`       | Get all users                  |
| POST   | `/api/users`       | Add a new user                 |
| POST   | `/api/users/claim` | Claim random points for a user |
| GET    | `/api/history`     | Get all point claim history    |

---

```
📍 Top 3 Podium UI
📍 History Modal Popup
📍 User Claim & Leaderboard View
```

---

## 📌 Bonus Ideas

- User avatars upload
- Claim limits per user/day
- Real-time sync using Socket.IO
- Leaderboard filters and CSV export

---

## 🙌 Author

**Developer:** Raushan Kumar
**Contact:** raushankumarguptag@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
