import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ResultCard from "../components/ResultCard";
import generatePdf from "../utils/generatePdf";

const Results = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedResult = localStorage.getItem(
      "assessmentResult"
    );

    const storedUser = localStorage.getItem(
      "userData"
    );

    if (!storedResult) {
      navigate("/");
      return;
    }

    setResult(JSON.parse(storedResult));

    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!result) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {userData && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Assessment completed for
            </p>

            <h2 className="text-2xl font-bold">
              {userData.name}
            </h2>

            <p className="text-gray-500">
              {userData.email}
            </p>
          </div>
        )}

        <div id="report-content">
          <ResultCard result={result} />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={() => {
  console.log("PDF button clicked");
  generatePdf();
}}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Download PDF
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-xl font-semibold"
          >
            Take Assessment Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;