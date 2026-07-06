import React from 'react';
import './Testimonials.css';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
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
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-attribution">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
