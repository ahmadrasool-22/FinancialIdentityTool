const QuestionCard = ({
  question,
  selectedAnswer,
  onSelect,
  onNext,
  isLastQuestion,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => onSelect(option.type)}
            className={`w-full text-left p-4 rounded-xl border transition-all
              ${
                selectedAnswer === option.type
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selectedAnswer}
        className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isLastQuestion ? "View Results" : "Next Question"}
      </button>
    </div>
  );
};

export default QuestionCard;