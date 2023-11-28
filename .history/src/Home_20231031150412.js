import logo from './logo.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import mail from './mail.png';
import './App.css';
import './Inspirations.js';
import './Recipes.js';
import './Hacks.js';

import React from 'react';

function Home() {
  return (

    // Header
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <a
          className="Home-link"
          href="Recipes.js"
          rel="noopener noreferrer"
        >
          Recettes
        </a>
        <a
          className="Home-link"
          href="Hacks.js"
          rel="noopener noreferrer"
        >
          Astuces
        </a>
        <a
          className="Home-link"
          href="Inspirations.js"
          rel="noopener noreferrer"
        >
          Inspirations
        </a>
      </header>

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

      {/* iFrames */}
      <div className="Home-frames">
        <h3 className="Home-frames-title">
          Vous pouvez également me suivre sur mon compte Instagram, si ce n'est pas encore le cas...
        </h3>
        {/* instagram */}
        <div className="o-embed__user">
          <div className="posts">
            <iframe src="https://www.instagram.com/nsscake/embed" className="o-insta" allowtransparency="true"
              allowfullscreen="true" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" width="600" height="800"
              frameBorder="0" style={{ borderRadius: '6px' }}></iframe>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;
