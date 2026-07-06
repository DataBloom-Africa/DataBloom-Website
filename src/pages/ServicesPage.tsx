import { PageHero, Services } from '../components';

export const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <PageHero title="OUR SERVICES" subtitle="Free and accessible training for individuals, plus capacity-building partnerships that help fund our community programmes." />
      <Services variant="large" />
    </div>
  );
};
