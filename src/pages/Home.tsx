import React from 'react';
import { Hero, Gallery, Services, Programs, Insights, Testimonials } from '../components';
import type { Testimonial } from '../components';

const homeTestimonials: Testimonial[] = [
  {
    quote: "Future Code didn't just teach me AI. It gave me a project I could point to and say, 'I built that.' That's what helped me land a role at an incredible company.",
    name: "Wisdom",
    role: "Future Code Cohort 1 graduate"
  },
  {
    quote: "Before the High School Club came to Peki, none of us knew how to identify a real problem, design a solution for it, or build a working prototype. Now some of my classmates are doing all three on their own.",
    role: "Peki Senior High School student"
  },
  {
    quote: "We didn't expect a training programme to also solve a real problem for our organisation, but that's exactly what DataBloom's team did for us.",
    name: "Nerissah",
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
