import Footer from './footer.js';
import Header from './header.js';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
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
          <img src={image4} className="image4" alt="image" />
        </div>
      </div>

        {/* iFrame */}
      <div className="Home-frames">
        <h3 className="Home-frames-title">
        Vous pouvez également me suivre sur mes réseaux, si ce n'est pas encore le cas:
        </h3>
        <div className="o-embed__user">
        <div className="posts">
          <iframe
            src="https://www.instagram.com/nsscake/embed"
            className="o-insta"
            allowtransparency="true"
            allowfullscreen="true"
            data-instgrm-payload-id="instagram-media-payload-0"
            scrolling="no"
            width="500"
            height="600"
            frameBorder="0"
            style={{ borderRadius: '6px' }}
          ></iframe>
          {/* tiktok */}
          <iframe
            title="MaVidéoTikTok"
            width="500"
            height="500"
            src="https://www.tiktok.com/embed/v2/ZGJEhSRad?"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
