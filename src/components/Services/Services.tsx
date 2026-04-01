import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: "Data and AI Training",
    description: "Building intelligent systems and AI solutions through hands-on, career-focused training that turns learners into builders.",
    image: "/services/Data%20and%20AI%20Training.jpg"
  },
  {
    id: 2,
    title: "Corporate Training & Capacity Building",
    description: "Tailored learning experiences that upskill teams, strengthen internal capabilities, and prepare organisations for a data-driven future.",
    image: "/services/Coperate%20Training%20and%20Capacity%20Building.jpg"
  },
  {
    id: 3,
    title: "Tech Solutions & Product Development",
    description: "End-to-end technology design and development — turning complex business challenges into smart, scalable digital solutions.",
    image: "/services/Tech%20Solutions.jpg"
  },
  {
    id: 4,
    title: "School & Community Outreach",
    description: "Grassroots initiatives that introduce young people and underserved communities to the opportunities of technology and digital literacy.",
    image: "/services/Community%20Outreach.png"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">SERVICES</h2>
        
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
                <button className="service-card-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
