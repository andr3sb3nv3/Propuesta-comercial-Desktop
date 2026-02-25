import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CreateProposal from './pages/CreateProposal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
      </Routes>
    </Router>
  );
}
