import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="Recipes.js"
          rel="noopener noreferrer"
        >
          Recettes
        </a>
        <a
          className="App-link"
          href="Hacks.js"
          rel="noopener noreferrer"
        >
          Astuces
        </a>
        <a
          className="App-link"
          href="Inspiration.js"
          rel="noopener noreferrer"
        >
          Inspirations
        </a>
      </header>
      <div className="contents">
        {/* first content */}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h3>
        {/* second content */}
        {/* <img src={homepage} className="App-logo" alt="logo" /> */}
        {/* <img src={homepage} className="App-logo" alt="logo" /> */}
        {/* <img src={homepage} className="App-logo" alt="logo" /> */}

        {/* iFrames */}
        <h1 className="App-frame">
          Suivez mon compte Instagram pour ne rien rater !
        </h1>
        {/* 
        // 
        // iFrame in iframe.txt
        // 
        */}
      </div>
      <footer className="App-footer">
        {/* all contacts in contacts.txt */}

      </footer>
    </div>
  );
}

export default App;
