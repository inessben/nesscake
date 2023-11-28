import {Header} from './header.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Créez vos composants pour chaque page
const HomePage = () => <div>Accueil</div>;
const RecipesPage = () => <div>Recettes</div>;
const HacksPage = () => <div>Astuces</div>;
const InspirationsPage = () => <div>Inspirations</div>;

// Créez votre composant principal avec les liens et les routes
const App = () => (
  <Router>
    <div>
      {/* Créez des liens vers vos pages */}
      <Header />
      {/* Définissez les routes correspondantes */}
      <Route path="/" exact component={HomePage} />
      <Route path="/recipes" component={RecipesPage} />
      <Route path="/hacks" component={HacksPage} />
      <Route path="/inspirations" component={InspirationsPage} />
    </div>
  </Router>
);

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Home from './Home';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );

// // To start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// reportWebVitals();


