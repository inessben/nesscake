import logo from './logo.png';
// pas besoin d'import le css, c'est déja fait dans Home.js


function Recipes() {
    return (
        <div className="Recipes">
            <header className="Recipes-header">
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
                {/*  */}
            </header>
        </div>
    );
}

export default Recipes;

