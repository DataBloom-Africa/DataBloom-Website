import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-container">
      <div className="navbar-top-bar"></div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img
              className="logo-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/179ce6925a4673b66e74c0a3c7f70c9c335ac6c9?width=322"
              alt="DataBloom Logo"
            />
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMenu}>HOME</Link>
          <Link to="/about" className="nav-item" onClick={closeMenu}>ABOUT US</Link>
          <Link to="/programs" className="nav-item" onClick={closeMenu}>PROGRAMS</Link>
          <Link to="/donations" className="nav-item" onClick={closeMenu}>DONATE</Link>
          <Link to="/contact" className="nav-item" onClick={closeMenu}>CONTACT</Link>
        </div>

        <button
          type="button"
          className="mobile-menu-icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L16 16M16 4L4 16" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};
