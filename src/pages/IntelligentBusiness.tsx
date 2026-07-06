import React from 'react';
import { ProgramDetail } from '../components';

export const IntelligentBusiness: React.FC = () => {
  return (
    <ProgramDetail
      title="Intelligent Business Webinar"
      subtitle="Transforming Industry with Artificial Intelligence."
      heroImage="/programs/Intelligent Business.webp"
      description="The Intelligent Business Webinar is a public education session exploring how artificial intelligence is transforming business and industry across Africa — open to entrepreneurs, small business owners, students, and anyone curious about AI's impact on Ghana's economy. All proceeds go toward funding free data and AI training seats for Ghanaian youth."
      details={[
        { label: "Date", value: "May 23rd, 2026" },
        { label: "Time", value: "12:00 PM GMT" },
        { label: "Platform", value: "Online" },
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
            <li>Navigating the legal and ethical landscape of AI in Ghana and beyond.</li>
            <li>Case studies of successful AI integration in African industries.</li>
          </ul>
          <p>Your registration fee directly supports scholarships for our Future Code training cohort.</p>
        </>
      }
    />
  );
};
