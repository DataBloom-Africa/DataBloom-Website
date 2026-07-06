import React from 'react';
import { Hero, Gallery, Services, Programs, Insights, Testimonials } from '../components';
import type { Testimonial } from '../components';

const homeTestimonials: Testimonial[] = [
  {
    quote: "Future Code didn't just teach me AI — it gave me a project I could point to and say, 'I built that.' That's what got me my first interview.",
    name: "[NAME]",
    role: "Future Code Cohort 1 graduate"
  },
  {
    quote: "Before the High School Club came to Peki, most of us had never touched a real coding tool. Now some of my classmates are building their own small projects.",
    name: "[NAME]",
    role: "Peki Senior High School student"
  },
  {
    quote: "We didn't expect a training programme to also solve a real problem for our organisation — but that's exactly what DataBloom's team did for us.",
    name: "[NAME]",
    role: "Partner organisation representative"
  }
];

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <Programs />
      <Testimonials testimonials={homeTestimonials} />
      <Insights />
    </>
  );
};
