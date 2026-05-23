import React from 'react';
import './AboutIntro.css';

export const AboutIntro: React.FC = () => {
  return (
    <section className="about-intro">
      <div className="about-intro-container">
        <div className="about-intro-text">
          <p>
            At DataBloom Africa, we believe that data isn't just about numbers—it's about the people and communities those numbers represent. Our journey began with a simple mission: to bridge the digital divide and empower the next generation of African builders with the skills to shape their own future.
          </p>
          <p>
            Through our flagship programs and secondary school outreach, we are creating a flourishing ecosystem where curious minds meet cutting-edge technical literacy. From Peki to Accra, we are building a network of innovators who are ready to move beyond the classroom and solve real-world challenges using Data and AI.
          </p>
        </div>
        <div className="about-intro-image-container">
          <img 
            src="/About/story.jpg" 
            alt="DataBloom Africa Story" 
            className="about-intro-image"
          />
        </div>
      </div>
    </section>
  );
};
