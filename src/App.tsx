// src/App.tsx or wherever your main component is located
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DydxConnectPage from './pages/DydxConnectPage'; // Adjust the import path as needed
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navigation Link to your DydxConnectPage */}
        <nav>
          <Link to="/dydx-connect">Connect to dYdX</Link>
        </nav>
        
        {/* Route Configuration */}
        <Routes>
          <Route path="/dydx-connect" element={<DydxConnectPage />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
