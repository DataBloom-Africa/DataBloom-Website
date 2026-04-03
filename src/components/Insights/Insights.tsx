import React, { useState } from 'react';
import './Insights.css';

const insightsData = [
  {
    id: 1,
    title: "Future Code Cohort 1 Graduation",
    excerpt: "Our inaugural Future Code cohort crossed the finish line  a proud milestone for DataBloom Africa and a new beginning for a generation of young data and AI builders.",
    date: "2026",
    image: "/Insights/Graduation.jpg"
  },
  {
    id: 2,
    title: "DataBloom Contribution to Ghana AI Strategy",
    excerpt: "DataBloom Africa contributed to Ghana's national AI conversation at the MoCDTI and UNESCO AI Readiness Assessment Validation Session  ensuring community-driven perspectives shape Africa's digital future.",
    date: "2026",
    image: "/Insights/UNESCO.jpg"
  },
  {
    id: 3,
    title: "DataBloom Peki High School Club Launch",
    excerpt: "We brought data and AI literacy to the Volta Region with the launch of the DataBloom Club at Peki Senior High School  our first step in reaching secondary school students across Ghana.",
    date: "2026",
    image: "/Insights/Peki.jpg"
  }
];

export const Insights: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="insights-section">
      <div className="insights-container">
        <h2 className="insights-title">LATEST INSIGHTS</h2>

        <div className="insights-grid">
          {insightsData.map((article) => (
            <div key={article.id} className="insight-card">
              <div className="insight-card-image">
                {article.image
                  ? <img src={article.image} alt={article.title} />
                  : <div className="insight-image-placeholder" />
                }
              </div>
              <div className="insight-card-body">
                <span className="insight-date">{article.date}</span>
                <h3 className="insight-card-title">{article.title}</h3>
                <p className={`insight-card-excerpt ${expandedId === article.id ? 'expanded' : ''}`}>
                  {article.excerpt}
                </p>
                <button 
                  className="insight-card-btn"
                  onClick={() => toggleExpand(article.id)}
                >
                  {expandedId === article.id ? "Read Less ↑" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
