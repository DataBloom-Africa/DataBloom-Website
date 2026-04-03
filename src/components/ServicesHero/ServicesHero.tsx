import React from 'react';
import './ServicesHero.css';

export const ServicesHero: React.FC = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-content">
        <h1 className="services-hero-title">OUR SERVICES</h1>
        <p className="services-hero-subtitle">
          Empowering individuals and organizations through data-driven training and innovative technology solutions.
        </p>
      </div>
      <div className="services-hero-pattern">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f30535fae2a97a87e8ae6f0ef41e591cc37d6e37" 
          alt="Services Pattern" 
          className="pattern-image"
        />
      </div>
    </section>
  );
};
