import { AboutHero, AboutContent, Partners } from '../components';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutContent />
      <Partners />
    </div>
  );
};
