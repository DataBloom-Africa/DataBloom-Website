import { Link } from 'react-router-dom';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: "Future Code",
    description: "Our flagship data and AI training programme, from hands-on foundations through to building and shipping a real product with our solutions team.",
    image: "/programs/Future Code 2.webp",
    slug: "future-code"
  },
  {
    id: 2,
    title: "Capacity-Building Partnerships",
    description: "We partner with organisations and institutions to extend data and AI capacity-building, including our ongoing Intelligent Business Training Series for industry professionals.",
    image: "/services/Coperate%20Training%20and%20Capacity%20Building.webp",
    slug: "capacity-building"
  },
  {
    id: 3,
    title: "School & Community Outreach",
    description: "Grassroots initiatives, including our DataBloom High School Club, that bring data and AI literacy directly to secondary students and underserved communities.",
    image: "/programs/Peki launch.webp",
    slug: "community-outreach"
  }
];

export const Programs: React.FC = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-title">OUR PROGRAMS</h2>
        
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
