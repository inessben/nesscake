import logo from './logo.png';
// pas besoin d'import le css, c'est déja fait dans Home.js


function Recipes() {
    return (
        <div className="Recipes">
            <header className="Recipes-header">
                <img src={logo} className="Home-logo" alt="logo" />

                {/*  */}
            </header>
        </div>
    );
}

export default Recipes;
