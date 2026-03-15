import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <main className="main-content">
        {/* Actual content would go here per page if we weren't just prototyping the sidebar/settings */}
      </main>
    </div>
  );
}

export default App;
