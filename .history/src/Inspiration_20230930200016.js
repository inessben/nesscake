import logo from './logo.png';
// pas besoin d'import le css, c'est déja fait dans Home.js

function Inspiration() {
    return (
        <div className="Inspiration">
            <header className="Inspiration-header">
                <img src={logo} className="Inspiration-logo" alt="logo" />

                {/*  */}
            </header>
        </div>
    );
}

export default Inspiration;
