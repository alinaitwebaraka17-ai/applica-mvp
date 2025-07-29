// src/components/PurposeTest.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const purposeQuestions = [
  "What problem do you most want to solve in the world?",
  "What activity makes you lose track of time?",
  "If you could teach one thing to millions, what would it be?",
  "When do you feel most alive or fulfilled?",
];

export default function PurposeTest() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [responses, setResponses] = useState(Array(purposeQuestions.length).fill(""));

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    const purposeSummary = responses.join(" | ");
    setUser((prev) => ({
      ...prev,
      purposeSummary,
      purposeTestComplete: true,
    }));
    navigate("/missions");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Discover Your Purpose</h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Answer honestly. Your answers guide what missions you'll see next.
      </p>
      <div className="space-y-6 w-full max-w-xl">
        {purposeQuestions.map((question, idx) => (
          <div key={idx} className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {question}
            </label>
            <textarea
              value={responses[idx]}
              onChange={(e) => handleChange(idx, e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Type your answer..."
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-10 bg-indigo-600 text-white px-8 py-3 rounded-2xl shadow hover:bg-indigo-700 transition"
      >
        Show My Missions
      </button>
    </div>
  );
}
