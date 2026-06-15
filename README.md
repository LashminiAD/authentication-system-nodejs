# 🔐 Authentication System using Node.js

A secure Authentication System built using **Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT, Cookies, and EJS**.

This project demonstrates a complete authentication flow including user registration, login, password hashing, JWT authentication, cookie-based session handling, and protected routes.

---

## 🚀 Features

- User Registration (Sign Up)
- User Login
- Secure Password Hashing using bcrypt
- JWT Token Authentication
- Cookie-Based Session Handling
- Protected Dashboard Route
- Logout Functionality
- MongoDB Database Integration
- EJS Templating Engine
- Simple Instagram-inspired UI

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security
- bcrypt
- JSON Web Token (JWT)
- Cookie Parser

### Frontend
- HTML
- CSS
- EJS

### Tools
- Git
- GitHub

---

## 📂 Project Structure

```bash
authentication-system-nodejs
│
├── models
│   └── User.js
│
├── public
│   └── style.css
│
├── views
│   ├── signup.ejs
│   ├── login.ejs
│   └── dashboard.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore

```

## 🔄 Authentication Flow

### 1. User Registration

User signs up with username & password
Password is hashed using bcrypt
Stored securely in MongoDB

### 2. User Login

Credentials are verified
Password compared using bcrypt
JWT token generated on success

### 3. JWT Authentication

Token stored in browser cookies
Used to access protected routes

### 4. Protected Dashboard

Only authenticated users can access dashboard
Invalid token blocks access

### 5. Logout

JWT cookie is cleared
User redirected to login page

---

## 🎥 Project Flow

Signup → Login → Dashboard → Logout

---

## 📚 Concepts Learned

### Express Routing
### MongoDB & Mongoose
### Schema & Models
### Password Hashing
### Authentication vs Authorization
### JWT Tokens
### Cookies & Sessions
### Middleware
### Protected Routes
### EJS Templating
### CRUD Operations
---

## ⚙️ Installation

git clone https://github.com/LashminiAD/authentication-system-nodejs.git
cd authentication-system-nodejs
npm install
Start MongoDB
mongodb://localhost:27017/AuthDB
Run Project
npm start

or

nodemon app.js
Open in Browser
http://localhost:3000

## 🔮 Future Improvements

### Forgot Password Feature
### Email Verification
### Session Expiry Handling
### Remember Me Option
### Role-Based Authentication
### React Frontend Integration
### Deployment on Render/Vercel

---

## 👩‍💻 Author

### Lashmini A D ❤️
