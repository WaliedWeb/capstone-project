import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AddDiary from './Pages/AddDiary';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="addMemories" element={<AddDiary />} />
        <Route path="memories" element={<Dashboard />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}
