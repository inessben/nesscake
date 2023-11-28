import logo from './logo.png';
import './Home.css';
import './Inspiration.js';
import './Recipes.js';
import './Hacks.js';

function Home() {
  return (
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
          href="Inspiration.js"
          rel="noopener noreferrer"
        >
          Inspirations
        </a>
      </header>
      <div className="Home-contents">
        {/* first content */}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h3>
        {/* second content */}
        {/* <img src={homepage} className="Home-logo" alt="logo" /> */}
        {/* <img src={homepage} className="Home-logo" alt="logo" /> */}
        {/* <img src={homepage} className="Home-logo" alt="logo" /> */}

        {/* iFrames */}
        <h1 className="Home-frames">
          Suivez mon compte Instagram pour ne rien rater !
        </h1>
        {/* 
        // 
        // iFrame in iframe.txt
        // 
        */}
      </div>
      <footer className="Home-footer">
        {/* all contacts in contacts.txt */}

      </footer>
    </div>
  );
}

export default Home;
