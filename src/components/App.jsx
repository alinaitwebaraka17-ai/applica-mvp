// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./components/Feed";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import PurposeTest from "./components/PurposeTest";
import Onboarding from "./components/Onboarding";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="min-h-screen pb-14 bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/purpose-test" element={<PurposeTest />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}