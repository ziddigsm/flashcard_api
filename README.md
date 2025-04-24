# 📚 Flashcards Backend API

A RESTful backend service for the Flashcards app that powers flashcard-based games, user scores, topic handling, and API-driven fun facts. Built using **Node.js**, **Express**, and **PostgreSQL**.

## 🚀 Features

- CRUD operations for flashcard questions
- Topic-based question filtering
- Fun facts API for game engagement
- Score tracking per user
- RESTful architecture
- Environment-based configuration
- Secure and scalable

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Environment Variables:** dotenv
- **Validation & Middleware:** Custom validation, CORS, JSON body parser

## 🧾 API Endpoints

### Flashcards
- `GET /api/questions` — Get all flashcard questions  
- `PUT /api/validate` — For topic validation
- `GET /api/score_history` - For History of games played
- `POST /api/save_history` - To save the user game data

### Fun Facts
- `GET /api/funfacts` — Retrieve a list of fun facts

### User
- `POST /api/create_user` — To Create a user
- `GET /api/user/:userId` — To get user details
