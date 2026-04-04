import React from 'react';
import { ProgramDetail } from '../components';

export const IntelligentBusiness: React.FC = () => {
  return (
    <ProgramDetail
      title="Intelligent Business Webinar"
      subtitle="Transforming Industry with Artificial Intelligence."
      heroImage="/programs/Intelligent Business.jpg"
      description="Join industry leaders and tech innovators on May 1st, 2026, for a comprehensive exploration of how AI is reshaping the business landscape across Africa. This webinar is curated for entrepreneurs, corporate decision-makers, and forward-thinking professionals."
      details={[
        { label: "Date", value: "May 1st, 2026" },
        { label: "Time", value: "12:00 PM GMT" },
        { label: "Platform", value: "Online" },
        { label: "Certification", value: "Available upon completion" }
      ]}
      ctaType="register"
      ctaText="Register"
      price="87.63"
      originalPrice="200"
      paymentInscription="Your payment will be used to help High school and college Students in Data Training"
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
