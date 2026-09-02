import React from 'react';
import HeroSlider from '../components/HeroSlider';
import BiometricSection from '../components/BiometricSection';
import BestSection from '../components/BestSection';
import CardsShowcase from '../components/CardsShowcase';
import LoanCalculator from '../components/LoanCalculator';
import EvocaPartners from '../components/EvocaPartners';
import EvocaLatestNews from '../components/EvocaLatestNews';
import CurrencyAndMapSection from '../components/CurrencyAndMapSection';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <BiometricSection />
      <BestSection />
      <CardsShowcase />
      <LoanCalculator />
      <EvocaPartners /> 
      <EvocaLatestNews />         
      <CurrencyAndMapSection />   
    </>
  );
};

export default Home;