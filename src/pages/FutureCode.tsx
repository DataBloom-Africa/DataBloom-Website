import React from 'react';
import { ProgramDetail } from '../components';

export const FutureCode: React.FC = () => {
  return (
    <ProgramDetail
      title="Futurecode Project Cohort 2"
      subtitle="The journey to AI mastery continues."
      heroImage="/programs/Future Code 2.jpg"
      description="Building on the success of our first cohort, DataBloom Africa is excited to launch Future Code Cohort 2. This intensive program will benefit college students and young professionals who seek to move beyond theory and gain practical, industry-relevant experience."
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
          <p>The cohort will explore advanced machine learning architectures, real-world data engineering pipelines, and the responsible deployment of AI solutions within Africa.</p>
          <p>Additionally, participants will engage in scalable capstone projects focused on solving local challenges.</p>
        </>
      }
    />
  );
};
