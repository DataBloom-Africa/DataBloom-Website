import React from 'react';
import './Partners.css';

export const Partners: React.FC = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="partner-logo-slot">
              <img 
                src={`/About/Partner${i}.${i === 5 ? 'jpeg' : 'jpg'}`} 
                alt={`Partner ${i}`} 
                className="partner-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
