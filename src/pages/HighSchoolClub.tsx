import React from 'react';
import { ProgramDetail } from '../components';

export const HighSchoolClub: React.FC = () => {
  return (
    <ProgramDetail
      title="DataBloom High School Club"
      subtitle="Inspiring the next generation of African tech leaders."
      heroImage="/programs/Peki launch.jpg"
      description="Our High School Club initiative brings data literacy and AI fundamentals directly to the classroom. We believe that curiosity sparked at an early age is the foundation for Africa's future technological sovereignty."
      details={[
        { label: "Impact Area", value: "Secondary Education" },
        { label: "Focus", value: "Building solutions that serve society" },
        { label: "Regions", value: "National (Starting with Volta Region)" },
        { label: "Launch Event", value: "Peki Senior High School" }
      ]}
      ctaType="link"
      ctaText="Partner with the Club"
      ctaNote="Interested in bringing DataBloom to your school? Let's discuss how we can collaborate."
      contentNodes={
        <>
          <h3>The Peki Launch: Design Thinking in Action</h3>
          <p>During our recent launch at Peki, students were introduced to the core concepts of <strong>Design Thinking</strong> and <strong>Prompt Engineering</strong>. Instead of just learning theory, students were assisted to:</p>
          <ul style={{ paddingLeft: '1.5rem', margin: '1.5rem 0' }}>
            <li>Identify real-world challenges unique to their communities.</li>
            <li>Ideate innovative solutions using data-driven insights.</li>
            <li>Build impressive mockup prototypes to visualize their tech solutions.</li>
          </ul>
          <p>The energy in the room proved that our youth are not just consumers of technology, but its future architects. We look forward to replicating this model in schools across the continent.</p>
        </>
      }
    />
  );
};
