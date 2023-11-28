import logo from './logo.png';


function Header() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <a
          className="link"
          href="Recipes.js"
          rel="noopener noreferrer"
        >
          Recettes
        </a>
        <a
          className="link"
          href="Hacks.js"
          rel="noopener noreferrer"
        >
          Astuces
        </a>
        <a
          className="link"
          href="Inspirations.js"
          rel="noopener noreferrer"
        >
          Inspirations
        </a>
      </header>
        );
    }
    
    export Header;