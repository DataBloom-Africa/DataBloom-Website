import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "Data and AI Training",
    slug: "ai-training",
    description: "Building intelligent systems and AI solutions through hands-on, career-focused training that turns learners into builders.",
    image: "/services/Data%20and%20AI%20Training.webp"
  },
  {
    id: 2,
    title: "Capacity-Building Partnerships",
    slug: "corporate-training",
    description: "We partner with organisations and institutions to extend data and AI capacity-building beyond our core cohorts — every partnership helps fund free training seats for Ghanaian youth.",
    image: "/services/Coperate%20Training%20and%20Capacity%20Building.webp"
  },
  {
    id: 3,
    title: "Applied Learning Projects",
    slug: "tech-solutions",
    description: "Our advanced learners design and build real digital products for partner organisations as part of their training — turning classroom skills into deployed, real-world impact, with proceeds reinvested into our programmes.",
    image: "/services/Tech%20Solutions.webp"
  },
  {
    id: 4,
    title: "School & Community Outreach",
    slug: "community-outreach",
    description: "Grassroots initiatives that introduce young people and underserved communities to the opportunities of technology and digital literacy.",
    image: "/services/Community%20Outreach.webp"
  }
];

interface ServicesProps {
  variant?: 'standard' | 'large';
}

export const Services: React.FC<ServicesProps> = ({ variant = 'standard' }) => {
  return (
    <section className={`services-section ${variant === 'large' ? 'services-large' : ''}`}>
      <div className="services-container">
        {variant === 'standard' && <h2 className="services-title">SERVICES</h2>}
        
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              {/* Left Side: Picture Placeholder */}
              <div className="service-card-left">
                 <img src={service.image} alt={service.title} className="service-feature-image" />
              </div>
              
              {/* Right Side: Text & Button */}
              <div className="service-card-right">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="service-card-btn">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
