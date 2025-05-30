import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Guide from './pages/Guide';
import AcceptChallenge from './pages/AcceptChallenge';
import SubmitWork from './pages/SubmitWork';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/accept" element={<AcceptChallenge />} />
          <Route path="/submit" element={<SubmitWork />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 