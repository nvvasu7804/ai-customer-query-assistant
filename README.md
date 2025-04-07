# 🧠 AI-Powered Customer Query Assistant

Welcome to the **AI-Powered Customer Query Assistant** — a full-stack web application built under the **PROPEL5000 program**. This chatbot-driven platform helps automate customer service queries using conversational AI.

> 🛠️ Tech Stack: **MERN (MongoDB, Express, React, Node.js)**  
> 🔐 Authentication: **JWT-based**  
> 📡 Deployed on: **Render (Backend)** & **Netlify (Frontend)**  
> 🧠 AI Integration: **ChatGPT (currently using hardcoded responses for demo)**

---

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment Links](#deployment-links)
- [Demo Video](#demo-video)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

---

## 🚀 Project Overview

The **AI-Powered Customer Query Assistant** is designed to improve customer support by providing **instant, conversational replies** to commonly asked questions.

It mimics real-time human interaction and is capable of handling questions related to:
- Product inquiries
- Order status
- Refunds
- Store policies

The chatbot is integrated into a secure web interface with **role-based access**, allowing **Admins** to manage responses and users to interact seamlessly.

---

## ✅ Core Features

### 💬 AI Chatbot (Simulated with Hardcoded Replies)
- Interprets and responds to customer queries in a conversational format.
- Replies are simulated (for now) to demonstrate AI functionality without requiring an OpenAI API key.

### 🧑‍💼 Role-Based Authentication
- JWT-based login system.
- Two roles: **Core User** and **Admin User**
  - **Core User:** Can register, login, and chat.
  - **Admin User:** Has full control to manage data (future feature placeholder).

### 📊 Secure and Responsive UI
- Built using React + Vite.
- Styled with **custom CSS** for lightweight performance.
- Mobile-responsive design with smooth UX.

### 🔐 Authentication & Session Management
- Secure login & registration flow with hashed passwords.
- Persistent user session using JWT tokens stored in `localStorage`.

---

## 🛠️ Tech Stack

| Layer        | Tech Used                         |
|--------------|-----------------------------------|
| Frontend     | React, Vite, JavaScript, CSS      |
| Backend      | Node.js, Express.js               |
| Database     | MongoDB (Cloud-hosted via Atlas)  |
| Authentication | JWT (JSON Web Tokens)           |
| AI Engine    | Simulated ChatGPT Responses       |
| Deployment   | Netlify (Frontend), Render (Backend) |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nvvasu7804/ai-customer-query-assistant.git
cd ai-customer-query-assistant
```

### 2. Setup Backend
```bash
cd server
npm install
```
Create a .env file:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
node index.js
```
### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

## 🔐 Environment Variables

In your backend .env file:

| Variable    |  Description                         |
|-------------|--------------------------------------|
| PORT        | Server port (default: 5000)          |
| MONGO_URI   | MongoDB connection URI               |
| JWT_SECRET  | Secret key for JWT generation        |

## 🌍 Deployment Links

| Component          |  URL                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| Frontend           | [Frontend Live Link](https://zitharaproject.netlify.app/)                       |
| MONGO_URI          | [Backend Live Link](https://zithara-project-backend.onrender.com)               |
| GitHub Repository  | [GitHub Link](https://github.com/nvvasu7804/ai-customer-query-assistant.git)    |

## 🎬 Demo Video
👉 Watch the full demo here: [Demo Video Link]()
The video showcases user registration, login, chatbot interactions, and role-based access control.

## 💡 Future Improvements
> ✅ Replace hardcoded AI replies with OpenAI ChatGPT API
> ✅ Add Admin dashboard to manage chatbot responses dynamically
> ✅ Support for file/image upload during chat
> ✅ Chat conversation history saved per user in MongoDB
> ✅ Multi-language support
> ✅ Feedback system for chatbot accuracy

## 🤝 Acknowledgments
> PROPEL5000 Program Team
> MongoDB Atlas (for free-tier cloud DB)
> Render & Netlify (for free hosting)
> OpenAI (for GPT capabilities — simulated for now)
