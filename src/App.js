import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/global.css';
import Inspirations from './pages/Inspirations.js';
import Recettes from './pages/Recipes.js';
import Astuces from './pages/Hacks.js';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/astuces" element={<Astuces />} />
      </Routes>
    </Router>
  );
}

export default App;
