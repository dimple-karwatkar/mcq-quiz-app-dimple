const mongoose = require("mongoose");
const Question = require("./models/question");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3","4","5","6"],
    correctAnswer: "4",
    explanation: "2 + 2 equals 4."
  },
  {
    question: "What is the capital of France?",
    options: ["Paris","London","Rome","Berlin"],
    correctAnswer: "Paris",
    explanation: "Paris is the capital of France."
  },
  {
    question: "Which language runs in a browser?",
    options: ["Java","C","Python","JavaScript"],
    correctAnswer: "JavaScript",
    explanation: "JavaScript runs in the browser."
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Marketing Language","Hyper Text Markup Leveler"],
    correctAnswer: "Hyper Text Markup Language",
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["React","Laravel","Django","Rails"],
    correctAnswer: "React",
    explanation: "React is a popular JavaScript framework."
  }
];

async function seed() {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seed();
