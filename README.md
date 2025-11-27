"# mcq-quiz-app-dimple" 
"# mcq-quiz-app-dimple" 
# MERN Stack MCQ Quiz App

A **Multiple Choice Question (MCQ) Quiz Web Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
The app allows users to attempt quizzes, keeps track of time, and displays detailed results with explanations.

---

## **Features**

- Fetches quiz questions from **MongoDB**
- Each question has:
  - Four options
  - One correct answer
  - Explanation for incorrect answers
- **Timer**: 10 minutes countdown for the quiz
- **Submit Quiz**:
  - Manual submission
  - Auto-submit when timer ends
- **Result Page**:
  - Shows total score
  - Detailed review for each question:
    - Question text
    - User's answer
    - Correct answer
    - Explanation for wrong answers
- Responsive and simple **React frontend**

---

## **Technology Stack**

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or local)
- **Other**: Mongoose ODM, dotenv, CORS


evidences: 
<img width="965" height="857" alt="image" src="https://github.com/user-attachments/assets/1d502748-983d-410c-9788-1132dcd161a6" />

<img width="965" height="857" alt="image" src="https://github.com/user-attachments/assets/ff1a2ff0-af38-498e-a07e-d229b188fe7c" />

<img width="797" height="865" alt="image" src="https://github.com/user-attachments/assets/70bd549d-88f4-4e0d-a04b-1a210361f942" />

<img width="1901" height="1077" alt="image" src="https://github.com/user-attachments/assets/5c7b586e-1511-4a12-befc-0e394fcced3c" />
---

## **Installation and Running Instructions**

### **Prerequisites**

- **Node.js** (v18+ recommended)  
- **npm** (comes with Node.js)  
- **MongoDB**:
  - Either **local MongoDB Community Server** installed and running  
  - Or **MongoDB Atlas** account (cloud database)  

---
INstallation:


---

## **Installation and Running Instructions**

### **Prerequisites**

- **Node.js** (v18+ recommended)  
- **npm** (comes with Node.js)  
- **MongoDB**:
  - Either **local MongoDB Community Server** installed and running  
  - Or **MongoDB Atlas** account (cloud database)  

---

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/your-username/mcq-quiz-app-dimple.git
cd mcq-quiz-app-dimple
Step 2: Setup Backend

Navigate to backend folder:

cd backend


Install dependencies:

npm install


Create a .env file in the backend folder with:

MONGO_URI=your_mongodb_connection_string
PORT=5000


If using local MongoDB:

MONGO_URI=mongodb://127.0.0.1:27017/quizdb


If using MongoDB Atlas:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/quizdb


Seed the database with sample questions:

node seed.js


Start the backend server:

node server.js


Server runs on: http://localhost:5000

API endpoint for questions: http://localhost:5000/api/questions
---

