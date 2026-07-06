import React from 'react';
import { ProgramDetail } from '../components';

export const IntelligentBusiness: React.FC = () => {
  return (
    <ProgramDetail
      title="Intelligent Business Training Series"
      subtitle="Ongoing AI Training for Industry Professionals."
      heroImage="/programs/Intelligent Business.webp"
      description="The Intelligent Business Training Series is an ongoing set of live sessions exploring how artificial intelligence is transforming business and industry across Africa. It's built for entrepreneurs, small business owners, corporate teams, and working professionals who want a practical grasp of what AI means for their industry. All proceeds go toward funding free data and AI training seats for African youth."
      details={[
        { label: "Format", value: "Live online sessions, held periodically" },
        { label: "Next Session", value: "May 23rd, 2026" },
        { label: "Audience", value: "Industry professionals & business leaders" },
        { label: "Certification", value: "Available upon completion" }
      ]}
      ctaType="notify"
      ctaText="Registration Closed"
      price="87"
      originalPrice="200"
      paymentInscription="Your payment will be used to help High school and college Students in Data Training"
      contentNodes={
        <>
          <h3>What you will learn:</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Practical AI implementation for SMEs.</li>
            <li>Cost-effective data strategies for growing businesses.</li>
            <li>Navigating the legal and ethical landscape of AI across Africa.</li>
            <li>Case studies of successful AI integration in African industries.</li>
          </ul>
          <p>Your registration fee directly supports scholarships for our Future Code training cohort.</p>
        </>
      }
    />
  );
};
