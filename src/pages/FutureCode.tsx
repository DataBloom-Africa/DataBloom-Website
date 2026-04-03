import React from 'react';
import { ProgramDetail } from '../components';

export const FutureCode: React.FC = () => {
  return (
    <ProgramDetail
      title="Future Code Cohort 2"
      subtitle="The journey to AI mastery continues."
      heroImage="/programs/Future Code 2.jpg"
      description="Following the massive success of our first cohort, DataBloom Africa is proud to announce Future Code Cohort 2. This intensive training program is designed specifically for college-level students and young professionals who want to bridge the gap between academic theory and industry reality."
      details={[
        { label: "Level", value: "Intermediate" },
        { label: "Duration", value: "12 Weeks" },
        { label: "Format", value: "Hybrid (Online & In-person)" },
        { label: "Status", value: "Applications Opening Soon" }
      ]}
      ctaType="notify"
      ctaText="Applications Opening Soon"
      contentNodes={
        <>
          <p>This cohort will dive deeper into advanced machine learning architectures, real-world data engineering pipelines, and the ethical deployment of AI solutions in the African context.</p>
          <p>Participants will work on capstone projects that address local challenges, from agriculture optimization to financial inclusion.</p>
        </>
      }
    />
  );
};
