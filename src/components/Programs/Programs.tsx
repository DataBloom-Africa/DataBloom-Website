import React from 'react';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: "Future Code Cohort 2",
    description: "Our flagship Data and AI training programme is back. Built for college-level students ready to move beyond the classroom and start building real-world skills in data, machine learning, and artificial intelligence. Applications opening soon."
  },
  {
    id: 2,
    title: "The Intelligent Business Webinar",
    description: "Join us on 1st May 2026 for a live, expert-led session exploring how AI is transforming business and industry across Africa. Whether you are an entrepreneur, professional, or decision-maker — this is the conversation you need to be in."
  },
  {
    id: 3,
    title: "DataBloom High School Club",
    description: "We are taking tech to the classroom. Our High School Club programme brings data and AI literacy directly to secondary school students across Ghana — sparking curiosity, building confidence, and opening doors to careers in technology."
  }
];

export const Programs: React.FC = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-title">UPCOMING PROGRAMS</h2>
        
        <div className="programs-grid">
          {programsData.map((item) => (
            <div key={item.id} className="program-card">
              <div className="program-card-image-placeholder">
                 <img src="https://api.builder.io/api/v1/image/assets/TEMP/70e53eb2ca3e99bf5a083e7eeb3cf2483124baa8" alt={`Program Icon ${item.id}`} />
              </div>
              <h3 className="program-card-title">{item.title}</h3>
              <p className="program-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
