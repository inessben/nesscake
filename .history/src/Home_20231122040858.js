import {Footer} from './footer.js';
import {Header} from './header.js';
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
        <div className="image1-container">
          <img src={image1} className="image1" alt="image" />
          <div className="image1-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blaoloremque!</p>
          </div>
        </div>
        <div className="image2-container">
          <img src={image2} className="image2" alt="image" />
          <div className="image2-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
        </div>
        <div className="image3-container">
          <img src={image3} className="image3" alt="image" />
          <div className="image3-text"><p>Les cronuts, la pâtisserie du moment que vous devez absolument goûter</p>
          </div>
        </div>
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
            width="600"
            height="600"
            style={{ borderRadius: '6px' }}
          ></iframe>
          {/* tiktok */}
          <iframe
            title="MaVidéoTikTok"
            width="500"
            height="500"
            src="https://www.tiktok.com/embed/v2/ZGJEhSRad?"
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
