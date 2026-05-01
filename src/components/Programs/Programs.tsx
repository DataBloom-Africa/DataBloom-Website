import { Link } from 'react-router-dom';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: "Future Code Cohort 2",
    description: "Our flagship Data and AI training programme is back. Built for college-level students ready to move beyond the classroom and start building real-world skills.",
    image: "/programs/Future Code 2.webp",
    slug: "future-code"
  },
  {
    id: 2,
    title: "The Intelligent Business Webinar",
    description: "Join us on 23rd May 2026 for a live session exploring how AI is transforming business and industry across Africa. Secure your spot now.",
    image: "/programs/Intelligent Business.webp",
    slug: "intelligent-business"
  },
  {
    id: 3,
    title: "DataBloom High School Club",
    description: "Taking tech to the classroom. Our programme brings data and AI literacy directly to secondary students — sparking curiosity and building confidence.",
    image: "/programs/Peki launch.webp",
    slug: "high-school-club"
  }
];

export const Programs: React.FC = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-title">UPCOMING PROGRAMS</h2>
        
        <div className="programs-grid">
          {programsData.map((item) => (
            <div key={item.id} className="program-card">
              <div className="program-card-image-placeholder">
                 <img src={item.image} alt={item.title} />
              </div>
              <h3 className="program-card-title">{item.title}</h3>
              <p className="program-card-desc">{item.description}</p>
              <Link to={`/programs/${item.slug}`} className="program-card-btn">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
