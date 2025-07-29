import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Navbar from './Navbar';

// Lazy-loaded components for performance optimization
const Feed = lazy(() => import('./Feed'));
const Missions = lazy(() => import('./Missions'));
const PurposeTest = lazy(() => import('./PurposeTest'));
const Profile = lazy(() => import('./Profile'));
const Onboarding = lazy(() => import('./Onboarding'));

// Centralized error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // In production, report error to monitoring service here
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center', color: 'red' }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

// 404 Page component
const NotFound = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn’t exist.</p>
    <a href="/">Return Home</a>
  </div>
);

const App = () => (
  <UserProvider>
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/purpose-test" element={<PurposeTest />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  </UserProvider>
);

export default App;