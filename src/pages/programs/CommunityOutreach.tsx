import React from 'react';
import { ServiceDetail, FeaturedProgram } from '../../components';

export const CommunityOutreach: React.FC = () => {
  return (
    <ServiceDetail
      title="School & Community Outreach"
      subtitle="Democratizing Digital Literacy at Every Level."
      heroImage="/services/Community%20Outreach.webp"
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
    >
      <FeaturedProgram
        title="DataBloom High School Club"
        description="Our flagship outreach initiative, bringing data literacy and AI fundamentals directly to secondary school classrooms across Africa."
        image="/programs/Peki launch.webp"
        href="/programs/high-school-club"
        ctaText="Learn More"
      />
    </ServiceDetail>
  );
};
