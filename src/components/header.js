import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="nesscake" />
      </Link>
      <Link className="header-link" to="/inspirations">Inspirations</Link>
      <Link className="header-link" to="/recipes">Recettes</Link>
      <Link className="header-link" to="/hacks">Astuces</Link>
    </header>
  );
}
