// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Missions from './components/Missions';
import PurposeTest from './components/PurposeTest';
import Profile from './components/Profile';
import Onboarding from './components/Onboarding';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/purpose-test" element={<PurposeTest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;