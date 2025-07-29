// src/components/Profile.jsx

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user, missionsCompleted, purposeScore, purposeResult } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-2xl font-bold mb-2">You're not logged in</h2>
        <p className="text-gray-600">Please sign in to access your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <section className="mb-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">👤 Profile</h2>
        <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
        <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-700"><strong>Bio:</strong> {user.bio || "No bio added yet."}</p>
      </section>

      <section className="mb-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">🏆 Purpose Score</h2>
        <p className="text-gray-700 text-lg">
          {purposeScore !== null ? `${purposeScore}/100` : "No score yet. Take the purpose test!"}
        </p>
      </section>

      <section className="mb-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">🎯 Missions Completed</h2>
        {missionsCompleted && missionsCompleted.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700">
            {missionsCompleted.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No missions completed yet.</p>
        )}
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">🔍 Purpose Insight</h2>
        {purposeResult ? (
          <p className="text-gray-700">{purposeResult}</p>
        ) : (
          <p className="text-gray-600">You haven't taken the purpose test yet.</p>
        )}
      </section>
    </div>
  );
}
