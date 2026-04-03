import React from 'react';
import { ServiceDetail } from '../../components';

export const CommunityOutreach: React.FC = () => {
  return (
    <ServiceDetail 
      title="Community Outreach"
      subtitle="Democratizing Digital Literacy at Every Level."
      heroImage="/services/Community%20Outreach.png"
      description="At DataBloom Africa, we believe that digital opportunity should be accessible to all. Our grassroots initiatives and high school clubs introduce young minds and underserved communities to the world of data and AI, sparking the next generation of African builders."
      features={[
        "High school tech club initiatives",
        "Community data literacy workshops",
        "Scholarship and mentorship programs",
        "Outreach to underserved regions",
        "Youth-focused builder cohorts"
      ]}
      benefits={[
        "Increased digital inclusion",
        "Early exposure to STEM careers",
        "Community-led tech transformation",
        "Empowerment of the next generation",
        "Bridging the rural-urban digital divide"
      ]}
    />
  );
};
