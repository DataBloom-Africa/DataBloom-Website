import React, { useState } from 'react';
import { PageHero } from '../PageHero';
import { Link } from 'react-router-dom';
import './ProgramDetail.css';

const PENDING_KEY = 'theteller_pending';

interface ProgramDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  details: { label: string; value: string }[];
  ctaType: 'link' | 'notify' | 'pay' | 'register';
  ctaText: string;
  price?: string;
  originalPrice?: string;
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
  originalPrice,
  ctaNote,
  contentNodes
}) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ full_name: '', email: '', profession: '', organization: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayClick = async () => {
    const { full_name, email, profession, organization } = formData;

    if (!full_name.trim() || !email.trim() || !profession.trim() || !organization.trim()) {
      setSubmitError('Please fill in all fields before proceeding.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setSubmitError('');
    setSubmitting(true);

    // 12-digit unique transaction ID (zero-padded)
    const transId = Date.now().toString().slice(-12).padStart(12, '0');

    // Save pending registration — /payment-callback will complete it
    localStorage.setItem(PENDING_KEY, JSON.stringify({
      transId,
      formData,
      program: title,
      price: price || '0',
    }));

    try {
      const response = await fetch('/api/initiate-payment.cjs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transId,
          email,
          amount: price || '0',
          title,
          redirectUrl: `${window.location.origin}/payment-callback`,
        }),
      });

      const data = await response.json();

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        // Show the exact TheTeller error so we can diagnose it
        setSubmitError(`Payment error: ${data.reason || data.message || data.error || JSON.stringify(data)}`);
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitError(`Payment error: ${String(err)}`);
      setSubmitting(false);
    }
  };

  return (
    <div className="program-detail">
      <PageHero title={title} subtitle={subtitle} />

      <section className="program-detail-body">
        <div className="container">
          <div className="program-main-grid">

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
                    <button className="back-btn" onClick={() => { setIsRegistering(false); setSubmitError(''); }}>← Back to Info</button>
                    <h2>Event Registration</h2>
                    <p>Please fill in your details to secure your spot for the {title}.</p>
                  </div>

                  <div className="registration-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Profession</label>
                      <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="What is your current role?" />
                    </div>
                    <div className="form-group">
                      <label>Organization / School</label>
                      <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Where do you work/study?" />
                    </div>

                    <div className="payment-integration-area">
                      <div className="paystack-card-integrated">
                        <div className="final-price">
                          Total: <span className="price-val">GHS {price}</span>
                          {originalPrice && (
                            <span className="form-discount-note"> — Discounted (was GHS {originalPrice})</span>
                          )}
                        </div>
                        {submitError && <p className="form-error">{submitError}</p>}
                        <button
                          className="pay-btn"
                          type="button"
                          onClick={handlePayClick}
                          disabled={submitting}
                        >
                          {submitting ? 'Opening payment...' : 'Complete Registration'}
                        </button>
                        <p className="pay-disclaimer">Includes access link and digital resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Sidebar */}
            {!isRegistering && (
              <div className="program-sidebar">
                <div className="cta-card">
                  {originalPrice && (
                    <div className="price-tag">
                      <div className="price-original">
                        <span className="currency-original">GHS</span>
                        <span className="amount-original">{originalPrice}</span>
                      </div>
                      <span className="discount-badge">Early Bird Discount</span>
                    </div>
                  )}

                  {(ctaType === 'pay' || ctaType === 'register') && (
                    <button className="primary-cta-btn" onClick={() => setIsRegistering(true)}>
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
