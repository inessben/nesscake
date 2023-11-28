import Footer from './footer.js';
import Header from './header.js';
import iFrames from './iframes.js';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import './App.css';
import './Inspirations.js';
import './Recipes.js';
import './Hacks.js';

import React from 'react';

function Home() {
  return (
    <div className="Home">
      <Header />
      {/* Principal content */}
      <div className="Home-news">
        <h1 className="Home-news-title">
          Bienvenue chez Nesscake, le repère des amoureux du sucré
        </h1>
        <h3 className="Home-news-subtitle">
          voici les actualités qui vont vous régaler :
        </h3>
        <div className="images">
          <img src={image1} className="image1" alt="image" />
          <img src={image2} className="image2" alt="image" />
          <img src={image3} className="image3" alt="image" />
        </div>
      </div>
        <iFrames />
        <Footer />
      </div>
  
  );
}

export default Home;
