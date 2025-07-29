// src/App.jsx
import { lazy, Suspense, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { UserProvider, UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader"; // Optional: Fallback UI
import ErrorBoundary from "./components/ErrorBoundary"; // New: Global safety net

// Lazy loaded routes for code splitting
const Feed = lazy(() => import("./components/Feed"));
const Missions = lazy(() => import("./components/Missions"));
const PurposeTest = lazy(() => import("./components/PurposeTest"));
const Profile = lazy(() => import("./components/Profile"));
const Onboarding = lazy(() => import("./components/Onboarding"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const { user, loading } = useContext(UserContext);

  if (loading) return <Loader />;

  return (
    <>
      {user && <Navbar />}
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {!user ? (
            <Route path="*" element={<Onboarding />} />
          ) : (
            <>
              <Route path="/" element={<Feed />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/purpose-test" element={<PurposeTest />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Router>
    </UserProvider>
  );
}
