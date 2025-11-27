import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { questions, answers } = state;

  let score = 0;
  questions.forEach(q => {
    if (answers[q._id] === q.correctAnswer) score += 1;
  });

  return (
    <div>
      <h2>Your Score: {score} / {questions.length}</h2>
      {questions.map(q => (
        <div key={q._id}>
          <h4>{q.question}</h4>
          <p>Your Answer: {answers[q._id] || "Not answered"}</p>
          <p>Correct Answer: {q.correctAnswer}</p>
          <p>Status: {answers[q._id] === q.correctAnswer ? "Correct" : "Wrong"}</p>
          {answers[q._id] !== q.correctAnswer && <p>Explanation: {q.explanation}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Result;
