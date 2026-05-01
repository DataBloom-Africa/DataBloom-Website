import React from 'react';
import './AboutContent.css';

export const AboutContent: React.FC = () => {
  return (
    <section className="about-sections">
      
      {/* 4-Card Alternating Grid */}
      <div className="about-grid">
        {/* Row 1: About Us */}
        <div className="about-card text-card teal-bg">
          <div className="card-content">
            <h2 className="card-title">About</h2>
            <p className="card-text">
              DataBloom Africa is where learning meets building. We are a data and AI training institution and technology solutions partner on a mission to close Africa's digital skills gap, one learner, one community, one solution at a time. From cohort-based training programmes to real-world product development, everything we do is designed to turn potential into impact.
            </p>
          </div>
        </div>
        <div className="about-card image-card">
          <img src="/About/About.webp" alt="About DataBloom Africa" className="card-image" />
        </div>

        {/* Row 2: Who We Are */}
        <div className="about-card image-card">
          <img src="/About/WhoWeAre.webp" alt="Who We Are" className="card-image" />
        </div>
        <div className="about-card text-card gold-bg">
          <div className="card-content">
            <h2 className="card-title">Who We Are</h2>
            <p className="card-text">
              We are a team of builders, educators, and problem-solvers who believe Africa's digital future starts with its people. Our team brings together expertise across machine learning, software engineering, data science, product development, and education; a diverse mix of skills united by a single mission. Together with community champions and industry practitioners, we are turning that conviction into reality.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mission-vision-section">
        <div className="mission-block">
          <h2 className="section-title">Mission</h2>
          <p className="section-text">
            To bridge Africa's digital skills gap by delivering practical, high-quality data and AI training while building technology solutions that solve real problems for real people.
          </p>
        </div>

        <div className="vision-block">
          <h2 className="section-title">Vision</h2>
          <p className="section-text">
            A continent where every African has the knowledge, tools, and opportunity to participate in and lead the digital economy.
          </p>
        </div>
      </div>

      {/* The Team */}
      <div className="team-section">
        <h2 className="team-title text-teal">The Team</h2>
        <div className="team-image-container">
          <img src="/About/TheTeam.webp" alt="The DataBloom Africa Team" className="team-image" />
        </div>
      </div>

    </section>
  );
};
