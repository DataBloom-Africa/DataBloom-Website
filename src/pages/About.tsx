import { AboutHero, AboutContent, Partners, Testimonials } from '../components';
import type { Testimonial } from '../components';

const aboutTestimonials: Testimonial[] = [
  {
    quote: "DataBloom is proof that a training programme in Ghana can also solve real problems for real organisations.",
    name: "[NAME]",
    role: "Capacity-building partner"
  },
  {
    quote: "I joined with almost no coding experience. Months later, I was mentoring the newest cohort.",
    name: "[NAME]",
    role: "Future Code alumnus"
  },
  {
    quote: "What stood out to me was how quickly this became about community, not just curriculum.",
    name: "[NAME]",
    role: "DataBloom facilitator"
  }
];

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutContent />
      <Testimonials testimonials={aboutTestimonials} />
      <Partners />
    </div>
  );
};
