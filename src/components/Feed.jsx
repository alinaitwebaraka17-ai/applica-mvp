// src/components/Feed.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const dummyFeed = [
  {
    id: 1,
    author: "Kai",
    mission: "Launch a Mini Project",
    reflection: "Just pushed the first commit on a journaling app built around my core values. Feels aligned for once.",
    likes: 14,
  },
  {
    id: 2,
    author: "Sage",
    mission: "Interview Someone Inspiring",
    reflection: "Spoke to a founder in the climate space — made me rethink what impact really means.",
    likes: 22,
  },
  {
    id: 3,
    author: "Rei",
    mission: "Volunteer Locally",
    reflection: "Helped out at a youth shelter. Small work, but it felt powerful. I’m changing.",
    likes: 30,
  },
];

export default function Feed() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">
        The Purpose Feed
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Explore reflections from others walking the same journey. Real actions.
        Real clarity. Real growth.
      </p>

      <div className="space-y-6 max-w-3xl">
        {dummyFeed.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow p-6 rounded-2xl transition hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-indigo-700 font-semibold">
                {post.mission}
              </h3>
              <span className="text-xs text-gray-400">
                by <Link className="underline" to="/profile">{post.author}</Link>
              </span>
            </div>
            <p className="text-gray-700 italic mb-3">"{post.reflection}"</p>
            <div className="text-sm text-gray-500">
              ❤️ {post.likes} people felt this
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
