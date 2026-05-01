import React from 'react';
import { ServiceDetail } from '../../components';

export const TechSolutions: React.FC = () => {
  return (
    <ServiceDetail 
      title="Tech Solutions"
      subtitle="Innovative Products, African Impact."
      heroImage="/services/Tech%20Solutions.jpg"
      description="We don't just teach technology—we build it. Our tech solutions arm partners with businesses and social enterprises to design, develop, and deploy highly scalable and secured digital products that solve real problems in Africa."
      features={[
        "Full-stack product development",
        "AI and Machine Learning integration",
        "Data pipeline and infrastructure design",
        "User-centered UI/UX design",
        "Scalable cloud architecture"
      ]}
      benefits={[
        "Custom-built solutions for unique challenges",
        "Highly scalable and secure infrastructure",
        "Local context and community focus",
        "Modern tech stack and best practices",
        "Continuous product support and growth"
      ]}
    />
  );
};
