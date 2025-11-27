import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions")
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, []);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const submitQuiz = () => {
    navigate("/result", { state: { questions, answers } });
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
      {questions.map(q => (
        <div key={q._id}>
          <h4>{q.question}</h4>
          {q.options.map(option => (
            <div key={option}>
              <input
                type="radio"
                name={q._id}
                value={option}
                checked={answers[q._id] === option}
                onChange={() => handleOptionChange(q._id, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
