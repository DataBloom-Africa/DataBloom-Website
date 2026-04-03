import { PageHero, Programs } from '../components';

export const ProgramsPage: React.FC = () => {
  return (
    <div className="programs-page">
      <PageHero title="OUR PROGRAMS" subtitle="Practical, hands-on learning paths designed to turn potential into impact." />
      <div style={{ padding: '4rem 0' }}>
        <Programs />
      </div>
    </div>
  );
};
