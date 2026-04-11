import { useState } from 'react';
import { PageHero } from '../components';
import { sendContactEmail } from '../lib/emailjs';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', title: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendContactEmail(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <PageHero title="Get In Touch" subtitle="Have questions or want to partner with us? We'd love to hear from you." />

      <section className="contact-content">
        <div className="container contact-grid">

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            {success ? (
              <div className="success-message">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Subject</label>
                  <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="How can we help?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your message..." required></textarea>
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-container">
            <div className="info-block">
              <h3>Visit Us</h3>
              <p>12th Alorwordor Street<br />GA-539-4038<br />Dansoman, Accra-Ghana</p>
            </div>
            <div className="info-block">
              <h3>Call Us</h3>
              <p>+233 547 449 078</p>
            </div>
            <div className="info-block">
              <h3>Email Us</h3>
              <p>info@databloomafrica.com</p>
            </div>
            <div className="info-block">
              <h3>Follow Us</h3>
              <div className="social-links-grid">
                <a href="https://linkedin.com/company/databloom-africa" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                <a href="https://www.instagram.com/databloom.africa" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
                <a href="https://youtube.com/@databloomafrica" target="_blank" rel="noreferrer" className="social-link">YouTube</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
