import { PageHero } from '../components';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <PageHero title="Get In Touch" subtitle="Have questions or want to partner with us? We'd love to hear from you." />

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
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
              <p>info@databloomafrica.org</p>
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
