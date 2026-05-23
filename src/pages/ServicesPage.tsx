import { PageHero, Services } from '../components';

export const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <PageHero title="OUR SERVICES" subtitle="Empowering individuals and organizations through data-driven training and innovative technology solutions." />
      <Services variant="large" />
    </div>
  );
};
