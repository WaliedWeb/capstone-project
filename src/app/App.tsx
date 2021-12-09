import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDiary from './Pages/AddDiary';
import Dashboard from './Pages/Dashboard';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addMemories" element={<AddDiary />} />
      </Routes>
    </BrowserRouter>
  );
}
