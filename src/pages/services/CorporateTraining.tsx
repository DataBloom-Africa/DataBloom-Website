import React from 'react';
import { ServiceDetail } from '../../components';

export const CorporateTraining: React.FC = () => {
  return (
    <ServiceDetail 
      title="Corporate Training"
      subtitle="Empowering Teams for a Data-Driven Future."
      heroImage="/services/Coperate%20Training%20and%20Capacity%20Building.jpg"
      description="We help organizations navigate the complexities of digital transformation by upskilling their workforce. Our tailored capacity-building programmes ensure that your team stays ahead of the curve in data literacy, AI integration, and modern tech workflows."
      features={[
        "Customized curriculum for business needs",
        "On-site and remote training options",
        "Executive AI strategy workshops",
        "Department-specific data literacy",
        "Ongoing support and capacity building"
      ]}
      benefits={[
        "Increased organizational efficiency",
        "Improved data-driven decision making",
        "Competitive edge in the digital economy",
        "Engaged and upskilled workforce",
        "Sustainable tech transformation"
      ]}
    />
  );
};
