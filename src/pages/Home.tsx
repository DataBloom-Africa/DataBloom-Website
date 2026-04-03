import React from 'react';
import { Hero, Gallery, Services, Programs, Insights } from '../components';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <Programs />
      <Insights />
    </>
  );
};
