import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-top-bar"></div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img 
              className="logo-image" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/179ce6925a4673b66e74c0a3c7f70c9c335ac6c9?width=322" 
              alt="DataBloom Logo" 
            />
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/about" className="nav-item">ABOUT US</Link>
          <Link to="/services" className="nav-item">SERVICES</Link>
          <Link to="/programs" className="nav-item">PROGRAMS</Link>
          <Link to="/donations" className="nav-item">DONATE</Link>
          <Link to="/contact" className="nav-item">CONTACT</Link>
        </div>

        <div className="mobile-menu-icon">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>
    </header>
  );
};
