import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils.js';
import '../style/header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="modern-header">
      <div className="header-container">
        <Link to="/" className="header-logo-link" onClick={closeMenu}>
          <img src={getImagePath('logo.png')} className="header-logo-img" alt="Nesscake" />
        </Link>

        <nav className="desktop-nav">
          <Link
            className={`nav-link ${isActive('/recettes') ? 'active' : ''}`}
            to="/recettes"
          >
            <i className="fas fa-utensils"></i>
            <span>Recettes</span>
          </Link>
          <Link
            className={`nav-link ${isActive('/astuces') ? 'active' : ''}`}
            to="/astuces"
          >
            <i className="fas fa-magic"></i>
            <span>Astuces</span>
          </Link>
          <Link
            className={`nav-link ${isActive('/inspirations') ? 'active' : ''}`}
            to="/inspirations"
          >
            <i className="fas fa-images"></i>
            <span>Inspirations</span>
          </Link>
        </nav>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">

          <Link
            className={`mobile-nav-link ${isActive('/recettes') ? 'active' : ''}`}
            to="/recettes"
            onClick={closeMenu}
          >
            <i className="fas fa-utensils"></i>
            <span>Recettes</span>
          </Link>
          <Link
            className={`mobile-nav-link ${isActive('/astuces') ? 'active' : ''}`}
            to="/astuces"
            onClick={closeMenu}
          >
            <i className="fas fa-magic"></i>
            <span>Astuces</span>
          </Link>
          <Link
            className={`mobile-nav-link ${isActive('/inspirations') ? 'active' : ''}`}
            to="/inspirations"
            onClick={closeMenu}
          >
            <i className="fas fa-images"></i>
            <span>Inspirations</span>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}
