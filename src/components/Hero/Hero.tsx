import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          CULTIVATING <br />
          AFRICA’S DATA <br />
          POTENTIAL
        </h1>
        <Link to="/contact" className="hero-button">
          JOIN US
        </Link>
      </div>
      <div className="hero-image-container">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/28421549a72c56592625e3717f4c7400778618e8?width=2336" 
          alt="Network Graphic" 
          className="hero-image"
        />
      </div>
    </section>
  );
};
