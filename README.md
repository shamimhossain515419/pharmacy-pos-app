# 💊 Pharmacy POS App

A modular and scalable **Point of Sale (POS)** system built with **Node.js**, **Express**, and **Google Sheets API**. Designed for pharmacies to manage inventory, users, sales, and more — with Google Sheets as a lightweight backend store.

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **Google Sheets API** – Used as a database-like layer for simple data operations
- **Module Pattern** – Codebase is structured in a clean, scalable module format
- **dotenv** – For managing environment variables securely

---

## 📁 Project Structure

```bash
pharmacy-pos-app/
├── src/
│ └── app/
│ ├── modules/
│ │ ├── auth/ # Authentication-related logic (coming soon)
│ │ └── users/ # User module
│ │ ├── user.controller.js
│ │ ├── user.model.js
│ │ ├── user.routes.js
│ │ ├── user.service.js
│ │ └── user.validation.js
│ ├── app.js # Main Express app setup
│ └── index.js # Entry point
├── config/ # Configuration (e.g., Google Sheets)
├── middlewares/ # Middleware functions (auth, error handling)
├── utils/ # Utility functions
├── .env # Environment variables (DO NOT commit)
├── .env.example # Example env for setup
├── .gitignore # Git ignore rules
├── google.service.json # Google Service Account credentials
├── package.json
├── package-lock.json
└── README.md # Project documentation
