import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const videos = [
  "/Videos/Future%20code%201%20grad.mp4",
  "/Videos/Future%20code%202%20Ad.MP4",
  "/Videos/Peki%20launch.mp4"
];

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-rotate the videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Removed scrollIntoView because it was forcing the browser to jump vertically to the gallery section

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">GALLERY</h2>
        <div className="gallery-carousel">
          <div className="gallery-track">
            {videos.map((src, index) => (
              <div 
                key={src}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`gallery-card ${index === activeIndex ? 'active-card' : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <video 
                  src={src}
                  className="gallery-image"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-dots">
          {videos.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
