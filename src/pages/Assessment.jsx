import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions";
import calculateResult from "../utils/calculateResult";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

const Assessment = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const handleNext = () => {
    const updatedAnswers = [
      ...answers,
      selectedAnswer,
    ];

    if (
      currentQuestion === questions.length - 1
    ) {
      const result =
        calculateResult(updatedAnswers);

      localStorage.setItem(
        "assessmentResult",
        JSON.stringify(result)
      );

      navigate("/results");

      return;
    }

    setAnswers(updatedAnswers);
    setSelectedAnswer("");
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
          onNext={handleNext}
          isLastQuestion={
            currentQuestion ===
            questions.length - 1
          }
        />
      </div>
    </div>
  );
};

export default Assessment;