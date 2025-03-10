import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="nesscake" />
      </Link>
      <div className="header-links">
        <Link className="header-link" to="/inspirations">Inspirations</Link>
        <Link className="header-link" to="/recettes">Recettes</Link>
        <Link className="header-link" to="/astuces">Astuces</Link>
      </div>
    </header>
  );
}
