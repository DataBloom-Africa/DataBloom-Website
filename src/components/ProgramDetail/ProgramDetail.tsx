import React, { useState } from 'react';
import { PageHero } from '../PageHero';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import './ProgramDetail.css';

// TODO: change to live key before launch
// Live key: YjM5ZjAxYmZiNjZhOGFmODk4MDUxNGYwZTU5ODgyNWQ=
const THETELLER_API_KEY = 'NDQ0YjQxYTEwOGJkYmQwNmVjN2JiNDdlMzkxY2ViNzM=';

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
  paymentInscription,
  contentNodes
}) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ full_name: '', email: '', profession: '', organization: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);

    // Check for duplicate registration
    const { data: existing } = await supabase
      .from('registrations')
      .select('id')
      .eq('email', formData.email)
      .eq('program', title)
      .maybeSingle();

    if (existing) {
      setSubmitError('This email is already registered for this program.');
      setSubmitting(false);
      return;
    }

    // Generate unique 12-digit transaction ID
    const transId = Date.now().toString();

    // Save pending registration so the callback page can complete it
    localStorage.setItem(PENDING_KEY, JSON.stringify({
      transId,
      formData,
      program: title,
      price: price || '0',
    }));

    // Remove any previous TheTeller DOM elements
    document.getElementById('ttlr-anchor')?.remove();
    document.getElementById('ttlr-script')?.remove();

    // Create the payment anchor with data attributes
    const anchor = document.createElement('a');
    anchor.id = 'ttlr-anchor';
    anchor.className = 'ttlr_inline';
    anchor.setAttribute('data-APIKey', THETELLER_API_KEY);
    anchor.setAttribute('data-transid', transId);
    anchor.setAttribute('data-amount', String(parseFloat(price || '0')));
    anchor.setAttribute('data-customer_email', formData.email);
    anchor.setAttribute('data-currency', 'GHS');
    anchor.setAttribute('data-redirect_url', `${window.location.origin}/payment-callback`);
    anchor.setAttribute('data-pay_button_text', `Pay GHS ${price}`);
    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    // Load TheTeller inline script — it initialises and clicks the anchor
    const script = document.createElement('script');
    script.id = 'ttlr-script';
    script.src = 'https://checkout-test.theteller.net/resource/api/inline/theteller_inline.js';
    script.onload = () => {
      setSubmitting(false);
      anchor.click();
    };
    script.onerror = () => {
      setSubmitting(false);
      setSubmitError('Payment system failed to load. Please refresh and try again.');
      localStorage.removeItem(PENDING_KEY);
    };
    document.body.appendChild(script);
  };

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

                  <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>Profession</label>
                      <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="What is your current role?" required />
                    </div>
                    <div className="form-group">
                      <label>Organization / School</label>
                      <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Where do you work/study?" required />
                    </div>

                    <div className="payment-integration-area">
                      <div className="paystack-card-integrated">
                        <div className="paystack-secure-badge">🔒 Secure Registration Payment</div>
                        <div className="payment-details">
                          <p className="payment-inscription">{paymentInscription || "Your payment supports our mission."}</p>
                          <div className="final-price">
                            Total: <span className="price-val">GHS {price}</span>
                            {originalPrice && (
                              <span className="form-discount-note"> — Discounted price (was GHS {originalPrice})</span>
                            )}
                          </div>
                        </div>
                        {submitError && <p className="form-error">{submitError}</p>}
                        <button className="pay-btn" type="submit" disabled={submitting}>
                          {submitting ? 'Loading payment...' : 'Complete Registration'}
                        </button>
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
