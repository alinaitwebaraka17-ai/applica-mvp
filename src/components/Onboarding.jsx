// src/components/Onboarding.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Onboarding() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleStart = () => {
    setUser({ onboardingComplete: true }); // future: pull from API or localStorage
    navigate("/purpose-test");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to <span className="text-indigo-600">Applica</span>
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Discover your purpose, missions, and unlock your future.  
        We’re here to guide you step-by-step.
      </p>
      <button
        onClick={handleStart}
        className="bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-700 transition"
      >
        Start Now
      </button>
    </div>
  );
}