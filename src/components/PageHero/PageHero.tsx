import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
      <div className="page-hero-pattern">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f30535fae2a97a87e8ae6f0ef41e591cc37d6e37" 
          alt="Page Pattern" 
          className="pattern-image"
        />
      </div>
    </section>
  );
};
