import React from 'react';
import { ServiceDetail } from '../../components';

export const AITraining: React.FC = () => {
  return (
    <ServiceDetail 
      title="Data and AI Training"
      subtitle="From Classroom Theory to Real-World Mastery."
      heroImage="/services/Data%20and%20AI%20Training.jpg"
      description="Our Data and AI training programmes are designed to bridge the gap between academic learning and industry requirement. We focus on hands-on project building, ensuring that every learner moves beyond just understanding concepts to actually building intelligent systems."
      features={[
        "Cohort-based learning models",
        "Hands-on project development",
        "Industry-standard toolsets",
        "Expert mentorship from practitioners",
        "Career-focused curriculum"
      ]}
      benefits={[
        "Direct transition to technical roles",
        "Portfolio of real-world AI products",
        "Access to a network of data professionals",
        "Verified technical competency",
        "Future-proof digital skills"
      ]}
    />
  );
};
