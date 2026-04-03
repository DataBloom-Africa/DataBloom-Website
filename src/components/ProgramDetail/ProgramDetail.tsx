import React, { useState } from 'react';
import { PageHero } from '../PageHero';
import { Link } from 'react-router-dom';
import './ProgramDetail.css';

interface ProgramDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  details: { label: string; value: string }[];
  ctaType: 'link' | 'notify' | 'pay' | 'register';
  ctaText: string;
  price?: string;
  ctaNote?: string;
  paymentInscription?: string;
  contentNodes?: React.ReactNode;
}

export const ProgramDetail: React.FC<ProgramDetailProps> = ({
  title,
  subtitle,
  description,
  details,
  ctaType,
  ctaText,
  price,
  ctaNote,
  paymentInscription,
  contentNodes
}) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="program-detail">
      <PageHero title={title} subtitle={subtitle} />

      <section className="program-detail-body">
        <div className="container">
          <div className="program-main-grid">
            
            {/* Info Section / Registration Form */}
            <div className="program-info">
              {!isRegistering ? (
                <>
                  <h2>Program Overview</h2>
                  <p className="description-text">{description}</p>
                  
                  {contentNodes && <div className="custom-content">{contentNodes}</div>}

                  <div className="program-specs">
                    {details.map((detail, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{detail.label}:</span>
                        <span className="spec-value">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="registration-wrapper">
                  <div className="registration-header">
                    <button className="back-btn" onClick={() => setIsRegistering(false)}>← Back to Info</button>
                    <h2>Event Registration</h2>
                    <p>Please fill in your details to secure your spot for the {title}.</p>
                  </div>

                  <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>Profession</label>
                      <input type="text" placeholder="What is your current role?" required />
                    </div>
                    <div className="form-group">
                      <label>Organization / School</label>
                      <input type="text" placeholder="Where do you work/study?" required />
                    </div>

                    <div className="payment-integration-area">
                      <div className="paystack-card-integrated">
                        <div className="paystack-secure-badge">🔒 Secure Registration Payment</div>
                        <div className="payment-details">
                          <p className="payment-inscription">{paymentInscription || "Your payment supports our mission."}</p>
                          <div className="final-price">
                            Total: <span className="price-val">GHS {price}</span>
                          </div>
                        </div>
                        <button className="pay-btn">Complete Registration with Paystack</button>
                        <p className="pay-disclaimer">Includes access link and digital resources.</p>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* CTA Sidebar */}
            {!isRegistering && (
              <div className="program-sidebar">
                <div className="cta-card">
                  {price && (
                    <div className="price-tag">
                      <span className="currency">GHS</span>
                      <span className="amount">{price}</span>
                    </div>
                  )}
                  
                  {(ctaType === 'pay' || ctaType === 'register') && (
                    <button 
                      className="primary-cta-btn"
                      onClick={() => setIsRegistering(true)}
                    >
                      {ctaText}
                    </button>
                  )}
                  
                  {ctaType === 'link' && (
                    <Link to="/contact" className="primary-cta-btn">{ctaText}</Link>
                  )}

                  {ctaType === 'notify' && (
                    <button className="primary-cta-btn disabled" disabled>{ctaText}</button>
                  )}

                  <p className="cta-note">
                    {ctaNote !== undefined ? ctaNote : (
                      ctaType === 'notify' 
                        ? "Applications are not yet open. Registration link will be sent to your email once live."
                        : "Secure your spot today. For group bookings, please contact us directly."
                    )}
                  </p>
                </div>

                <div className="help-card">
                  <h4>Need Help?</h4>
                  <p>Contact our support team for any questions regarding this program.</p>
                  <Link to="/contact" className="help-link">Contact Support</Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};
