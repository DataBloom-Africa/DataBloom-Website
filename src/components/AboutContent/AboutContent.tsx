import React from 'react';
import './AboutContent.css';

interface TeamMember {
  name: string;
  title: string;
  photo?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Angel Gabriel Adaambiik", title: "Co-Founder & Chief Technology Officer (CTO)" },
  { name: "Henry Kweku Duah", title: "Co-Founder & Chief Executive Officer (CEO)" },
  { name: "Raymond Nuertey Tetteh", title: "Co-Founder & Chief Operating Officer (COO)" },
  { name: "Eugene", title: "Technical Team" },
  { name: "Chrysol", title: "Technical Team" },
  { name: "Priscilla", title: "Media & Storytelling" },
  { name: "Ryan Kojo", title: "Media & Storytelling" },
  { name: "Andy", title: "Media & Storytelling" },
  { name: "Semekor", title: "Operations" },
  { name: "Seklenam", title: "Operations" },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

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
              DataBloom Africa is a nonprofit initiative on a mission to close Africa's digital skills gap, one learner, one community at a time. We deliver hands-on data and AI training, and our advanced learners apply those skills to real projects for partner organisations. That work funds and sustains our free community programmes. Everything we do is designed to turn potential into impact.
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
              We are a team of builders, educators, and problem-solvers who believe Africa's digital future starts with its people. Our team brings together expertise across machine learning, software engineering, data science, product development, and education; a diverse mix of skills united by a single mission. Together with community champions and industry practitioners, we are turning that conviction into reality. As a nonprofit, our growth is measured in learners trained and communities reached, not just products shipped.
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
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member-card">
              <div className="team-member-avatar">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="team-member-photo" />
                ) : (
                  getInitials(member.name)
                )}
              </div>
              <p className="team-member-name">{member.name}</p>
              <p className="team-member-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
