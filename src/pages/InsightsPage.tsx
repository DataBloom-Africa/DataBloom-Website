import { PageHero, Insights } from '../components';

export const InsightsPage: React.FC = () => {
  return (
    <div className="insights-page">
      <PageHero title="INSIGHTS & UPDATES" subtitle="Stay informed with the latest trends in data, AI, and community tech initiatives." />
      <div style={{ padding: '4rem 0' }}>
        <Insights />
      </div>
    </div>
  );
};
