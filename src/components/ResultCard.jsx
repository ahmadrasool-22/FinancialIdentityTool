const ResultCard = ({ result }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
      <div className="text-center mb-8">
        <p className="text-indigo-600 font-semibold uppercase tracking-wider">
          Your Financial Identity
        </p>

        <h1 className="text-4xl font-bold mt-2">
          {result.title}
        </h1>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-3">
          Summary
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {result.summary}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-3">
          Strengths
        </h2>

        <ul className="space-y-2">
          {result.strengths.map((strength) => (
            <li key={strength}>✅ {strength}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-3">
          Challenges
        </h2>

        <ul className="space-y-2">
          {result.challenges.map((challenge) => (
            <li key={challenge}>⚠️ {challenge}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-3">
          Recommendation
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {result.recommendation}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;