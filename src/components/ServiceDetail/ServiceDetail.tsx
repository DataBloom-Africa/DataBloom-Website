import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: string[];
  benefits: string[];
  ctaText?: string;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  subtitle,
  heroImage,
  description,
  features,
  benefits,
  ctaText = "Contact Us to Learn More"
}) => {
  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(19, 81, 98, 0.8), rgba(19, 81, 98, 0.8)), url(${heroImage})` }}>
        <div className="hero-content-inner">
          <h1 className="service-detail-title">{title}</h1>
          <p className="service-detail-subtitle">{subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="main-description">
            <h2>Overview</h2>
            <p>{description}</p>
          </div>

          <div className="features-benefits-grid">
            <div className="detail-block teal-border">
              <h3>What we offer</h3>
              <ul>
                {features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            <div className="detail-block gold-border">
              <h3>Key Benefits</h3>
              <ul>
                {benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h3>Ready to get started?</h3>
            <Link to="/contact" className="cta-button">{ctaText}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
