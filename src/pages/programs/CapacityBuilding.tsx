import React from 'react';
import { ServiceDetail, FeaturedProgram } from '../../components';

export const CapacityBuilding: React.FC = () => {
  return (
    <ServiceDetail
      title="Capacity-Building Partnerships"
      subtitle="Extending Our Mission to Partner Organisations."
      heroImage="/services/Coperate%20Training%20and%20Capacity%20Building.webp"
      description="As part of our mission, we partner with organisations and institutions to extend data and AI capacity-building beyond our core learner cohorts. These partnerships are designed collaboratively around each partner's goals, and every partnership helps fund free training seats for African youth who couldn't otherwise access this education."
      features={[
        "Curriculum designed around each partner's goals",
        "On-site and remote training options",
        "AI literacy workshops for leadership teams",
        "Sector-specific data literacy",
        "Ongoing mentorship and capacity-building support"
      ]}
      benefits={[
        "Stronger data-driven decision making",
        "Teams equipped for a digital future",
        "A meaningful contribution to youth digital skills-building in Africa",
        "An engaged, upskilled team",
        "Sustainable, locally-grounded tech capability"
      ]}
    >
      <FeaturedProgram
        title="Intelligent Business Training Series"
        description="An ongoing series of live sessions for industry professionals and business leaders exploring how AI is transforming business across Africa, run under this partnership programme."
        image="/programs/Intelligent Business.webp"
        href="/programs/intelligent-business"
        ctaText="View Sessions"
      />
    </ServiceDetail>
  );
};
