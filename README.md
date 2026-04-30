# 🚀 EvenTech

EvenTech is a full-stack MERN application for managing tech clubs and events.  
It allows users to discover events, manage clubs, and authenticate securely using JWT.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Redux
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- REST API Architecture

---

## 📂 Project Structure

```

EvenTech/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── actions/
│   │   ├── api/
│   │   ├── components/
│   │   ├── reducers/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── server/                  # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json

````

---

## ✨ Features

- 🔐 User authentication (Register / Login)
- 👤 Edit profile & change password
- 🏫 Club management
- 📅 Event creation & management
- 🔎 Search & filtering
- 📄 Backend pagination
- 🧩 RESTful API design

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/amelsadoun/EvenTech.git
cd EvenTech
````

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

## 📌 API Overview

### Auth Routes

* `POST /auth/register`
* `POST /auth/login`
* `PUT /auth/editProfile`
* `PUT /auth/changePassword`

### Club Routes

* `GET /clubs`
* `POST /clubs`
* `PUT /clubs/:id`
* `DELETE /clubs/:id`

### Event Routes

* `GET /events`
* `POST /events`
* `PUT /events/:id`
* `DELETE /events/:id`

Supports filtering, searching, and pagination.

---

## 🚀 Future Improvements

* Role-based access control
* Event registration system
* Admin dashboard
* Image upload for events/clubs
* Deployment (Docker / CI-CD)

---

## 👩‍💻 Author

**Amel Sadoun**
2nd-year Computer Science Student – ESI Algiers

---

## 📄 License

This project is open-source and available under the MIT License.

```

