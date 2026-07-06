import React from 'react';
import { PageHero } from '../components';
import './Donations.css';

export const Donations: React.FC = () => {
  return (
    <div className="donation-page">
      <PageHero
        title="Support Africa's Next Generation of Builders"
        subtitle="Your donation today gives an African student the chance to learn, build, and change their future."
      />

      {/* Intro Section */}
      <section className="donation-intro">
        <h2>Why Donate?</h2>
        <p>
          At DataBloom Africa, we believe every young African deserves the chance to learn
          data and AI skills, regardless of their ability to pay. Your donation goes directly
          toward free training seats, mentorship, learning materials, and community outreach
          for the youth who need it most.
        </p>
      </section>

      {/* Payment Methods */}
      <section className="payment-section">
          <div className="payment-card-unified">
            <div className="paystack-badge">
              <span className="secure-icon">🔒</span> Secure Payments via Paystack
            </div>
            <h3>Ready to Make a Difference?</h3>
            <p className="payment-subtext">We accept all local and international payment methods including:</p>
            
            <div className="payment-icons">
              <div className="payment-icon-item">MTN MoMo</div>
              <div className="payment-icon-item">Telecel Cash</div>
              <div className="payment-icon-item">Visa / Mastercard</div>
              <div className="payment-icon-item">Bank Transfer</div>
            </div>

            <button className="unified-donate-btn">
              Donate with Paystack
            </button>
            
            <p className="payment-disclaimer">
              *By clicking above, you will be redirected to our secure Paystack portal to complete your transaction safely.
            </p>
          </div>
      </section>
    </div>
  );
};
