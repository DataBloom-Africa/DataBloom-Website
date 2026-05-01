import React from 'react';
import { ProgramDetail } from '../components';

export const IntelligentBusiness: React.FC = () => {
  return (
    <ProgramDetail
      title="Intelligent Business Webinar"
      subtitle="Transforming Industry with Artificial Intelligence."
      heroImage="/programs/Intelligent Business.jpg"
      description="The Intelligent Business Webinar is designed to provide a comprehensive exploration of how artificial intelligence is transforming the business landscape across Africa. Bringing together industry leaders, tech innovators, and forward-thinking professionals, the webinar offers practical insights tailored for entrepreneurs, corporate decision-makers, and growth-driven individuals."
      details={[
        { label: "Date", value: "May 1st, 2026" },
        { label: "Time", value: "12:00 PM GMT" },
        { label: "Platform", value: "Online" },
        { label: "Certification", value: "Available upon completion" }
      ]}
      ctaType="notify"
      ctaText="Registration Coming Soon"
      contentNodes={
        <>
          <h3>What you will learn:</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Practical AI implementation for SMEs.</li>
            <li>Cost-effective data strategies for growing businesses.</li>
            <li>Navigating the legal and ethical landscape of AI in Ghana and beyond.</li>
            <li>Case studies of successful AI integration in African industries.</li>
          </ul>
          <p>Don't miss this opportunity to gain a competitive edge in the rapidly evolving digital economy.</p>
        </>
      }
    />
  );
};
