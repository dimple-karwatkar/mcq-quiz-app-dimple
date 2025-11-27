const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// GET all questions
router.get("/", async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new question (optional, for admin use)
router.post("/", async (req, res) => {
    const { question, options, correctAnswer, explanation } = req.body;
    const newQuestion = new Question({ question, options, correctAnswer, explanation });

    try {
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
