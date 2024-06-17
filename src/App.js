import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inspirations from './pages/Inspirations.js';
import Recipes from './pages/Recipes.js';
import Hacks from './pages/Hacks.js';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/recettes" element={<Recipes />} />
        <Route path="/astuces" element={<Hacks />} />
      </Routes>
    </Router>
  );
}

export default App;
