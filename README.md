# Learn With AI 📚🤖

An AI-powered web application that allows users to upload PDFs and interact with them through chat, summaries, flashcards, and quizzes.

---

## 🚀 Features

- 📄 Upload PDF documents  
- 💬 Ask questions directly from the PDF (AI chat)  
- 🧾 Generate summaries of the entire document  
- 📌 Get explanations of specific concepts  
- 🧠 Create flashcards for revision  
- 🎯 Generate quizzes to test understanding  

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **AI Integration:** Gemini API  

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/nikhil484/LEARNWITHAI.git
cd LEARNWITHAI
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8000
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
NODE_ENV=development
MAX_FILE_SIZE=10485760
GEMINI_API_KEY=your_gemini_api_key
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## ▶️ Running the Project

- Backend runs on: http://localhost:8000  
- Frontend runs on: http://localhost:5173  
- Make sure both are running simultaneously  

---

## ⚠️ Important Notes

- `.env` file is not included for security reasons  
- Use your own credentials  
- Ensure MongoDB and Gemini API are properly configured  

---

## 💡 Project Idea

This project transforms static PDFs into an interactive learning experience, enabling users to actively learn, revise, and test their knowledge instead of passively reading.

---

## 📄 Architecture / Design Document

📄 View Document:  
https://docs.google.com/document/d/1rRYWx3vycG82SMCqxu75Y5rjP9pK5C0q/edit?usp=drive_link&ouid=108212982132963415541&rtpof=true&sd=true

---

## 🚀 Live Demo

🔗 https://learnwithai-three.vercel.app

**Test Credentials:**
- Email: nikhil@email.com  
- Password: nikhil  

---
## 👨‍💻 Author

**Nikhil Anand**
