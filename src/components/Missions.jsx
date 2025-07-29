// src/components/Missions.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const missionTemplates = [
  {
    id: 1,
    title: "Launch a Mini Project",
    description: "Create something small but real that aligns with your purpose. Could be a blog, app, or art piece.",
    tags: ["creator", "starter", "solo"],
  },
  {
    id: 2,
    title: "Interview Someone Inspiring",
    description: "Talk to someone doing work aligned with your purpose. Record your key takeaways.",
    tags: ["network", "discovery", "mentor"],
  },
  {
    id: 3,
    title: "Volunteer in Your Area",
    description: "Find a local group aligned with your mission. Spend a day contributing meaningfully.",
    tags: ["action", "local", "impact"],
  },
  {
    id: 4,
    title: "Design Your Dream Role",
    description: "Write a job description for the role you’d love to play in the world.",
    tags: ["clarity", "career", "vision"],
  },
];

export default function Missions() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleComplete = (mission) => {
    // Future enhancement: store completed mission state
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-indigo-800 mb-2">Your Missions</h2>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Based on your answers, we’ve selected missions to help you explore your purpose through real-world action.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {missionTemplates.map((mission) => (
          <div
            key={mission.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {mission.title}
            </h3>
            <p className="text-gray-600 mb-4">{mission.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {mission.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleComplete(mission)}
              className="text-indigo-600 font-medium hover:underline"
            >
              Mark as Complete →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
