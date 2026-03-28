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
MONGODB_URI=mongodb+srv://test:hndDaWau5gyJi3Nf@learnwithai.es8vp9r.mongodb.net/?appName=LearnWithAI
PORT=8000
JWT_SECRET=Docen@2026
JWT_EXPIRE=7d
NODE_ENV=development
MAX_FILE_SIZE=10485760
GEMINI_API_KEY=AIzaSyCJ90E9kkjjm-SB8YJyfdSDKKH7hUvKr-Q
CLOUDINARY_CLOUD_NAME=dxj5xyfj6
CLOUDINARY_API_KEY=574157262225965
CLOUDINARY_API_SECRET=boJ-MaHLV5_dRpxqY9Xe7qkBKjQ
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
- Copy .env file from this file and add it locally.
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

---
## 👨‍💻 Author

**Nikhil Anand**
