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
├── controllers/          # Business logic
├── routes/               # Route definitions
├── services/             # Google Sheets & other external services
├── utils/                # Utility functions
├── config/               # Configuration (e.g., env, auth setup)
├── .env.example          # Sample environment variables
├── app.js                # Entry point
└── README.md             # Project documentation
