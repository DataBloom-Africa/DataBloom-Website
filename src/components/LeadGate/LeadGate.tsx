import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import './LeadGate.css';

const STORAGE_KEY = 'db_lead_submitted';

interface LeadGateProps {
  children: React.ReactNode;
}

export const LeadGate: React.FC<LeadGateProps> = ({ children }) => {
  const [passed, setPassed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ full_name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setPassed(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase.from('leads').insert({
      ...formData,
      source: 'Intelligent Business Webinar',
    });

    setLoading(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, 'true');

    setTimeout(() => setPassed(true), 2000);
  };

  if (passed) return <>{children}</>;

  return (
    <>
      <div className="lead-gate-overlay">
        <div className="lead-gate-card">
          <div className="lead-gate-logo">DataBloom <span>Africa</span></div>

          {submitted ? (
            <div className="lead-gate-success">
              <h3>You're on the list!</h3>
              <p>Taking you to the page now...</p>
            </div>
          ) : (
            <>
              <h2>Intelligent Business Webinar</h2>
              <p>Enter your details to access the webinar page. We'll keep you updated on registration and event details.</p>

              <form className="lead-gate-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+233 XX XXX XXXX" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                {error && <p className="lead-gate-error">{error}</p>}
                <button type="submit" className="lead-gate-submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Access the Page →'}
                </button>
              </form>
              <p className="lead-gate-privacy">We respect your privacy. No spam, ever.</p>
            </>
          )}
        </div>
      </div>
      <div style={{ visibility: 'hidden' }}>{children}</div>
    </>
  );
};
