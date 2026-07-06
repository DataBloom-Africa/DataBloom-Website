import React from 'react';
import { ServiceDetail } from '../../components';

export const TechSolutions: React.FC = () => {
  return (
    <ServiceDetail
      title="Applied Technology Projects"
      subtitle="Real Projects, Built by Real Learners, for Real Impact."
      heroImage="/services/Tech%20Solutions.webp"
      description="Our most advanced learners don't just study technology, they build it. Through our applied projects track, learner teams design, develop, and deploy real digital products for partner organisations and social enterprises, gaining hands-on experience while proceeds are reinvested directly into our free training and outreach programmes."
      features={[
        "Full-stack product development",
        "AI and Machine Learning integration",
        "Data pipeline and infrastructure design",
        "User-centered UI/UX design",
        "Scalable cloud architecture"
      ]}
      benefits={[
        "Solutions built by trained African talent",
        "Secure, well-engineered infrastructure",
        "Local context and community focus",
        "Modern tech stack and best practices",
        "Your project directly funds free training for the next cohort"
      ]}
    />
  );
};
