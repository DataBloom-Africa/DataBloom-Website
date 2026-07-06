import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProgram.css';

interface FeaturedProgramProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  href: string;
  ctaText?: string;
}

export const FeaturedProgram: React.FC<FeaturedProgramProps> = ({
  eyebrow = "Featured Program",
  title,
  description,
  image,
  href,
  ctaText = "Learn More"
}) => {
  return (
    <div className="featured-program">
      <div className="featured-program-image">
        <img src={image} alt={title} />
      </div>
      <div className="featured-program-content">
        <span className="featured-program-eyebrow">{eyebrow}</span>
        <h3 className="featured-program-title">{title}</h3>
        <p className="featured-program-desc">{description}</p>
        <Link to={href} className="featured-program-btn">{ctaText}</Link>
      </div>
    </div>
  );
};
