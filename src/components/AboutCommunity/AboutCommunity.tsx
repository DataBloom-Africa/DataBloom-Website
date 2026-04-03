import React from 'react';
import './AboutCommunity.css';

export const AboutCommunity: React.FC = () => {
  return (
    <section className="about-community">
      <div className="about-community-container">
        <div className="about-community-header">
          <h2 className="about-community-title">Our Community</h2>
          <p className="about-community-subtitle">Building the future of Data & AI across Africa, one community at a time.</p>
        </div>
        <div className="about-community-image-wrapper">
          <img 
            src="/About/community.jpg" 
            alt="Our Community" 
            className="about-community-image"
          />
        </div>
      </div>
    </section>
  );
};
