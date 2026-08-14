// src/pages/Home.jsx
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import BiometricSection from '../components/BiometricSection';
import BestSection from '../components/BestSection';
import CardsShowcase from '../components/CardsShowcase';
import LoanCalculator from '../components/LoanCalculator';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <BiometricSection />
      <BestSection />
      <CardsShowcase />
      <LoanCalculator />
    </>
  );
};

export default Home;