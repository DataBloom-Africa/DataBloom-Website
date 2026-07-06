import React from 'react';
import './Testimonials.css';

export interface Testimonial {
  quote: string;
  name?: string;
  role: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  heading = "What Our Community Says",
  subheading = "Stories from the learners and communities we work with."
}) => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">{heading}</h2>
        <p className="testimonials-subtitle">{subheading}</p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">
                {t.image ? (
                  <img src={t.image} alt={t.name || t.role} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="testimonial-avatar-placeholder">
                    <circle cx="12" cy="8" r="4" fill="currentColor" />
                    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
                  </svg>
                )}
              </div>
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-attribution">
                {t.name && <span className="testimonial-name">{t.name}</span>}
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
