import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'; 
import HeroSlider from './components/HeroSlider';
import BiometricSection from './components/BiometricSection';
import BestSection from './components/BestSection';
import CardsShowcase from './components/CardsShowcase';
import LoanCalculator from './components/LoanCalculator';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar /> 
      <HeroSlider />
      <BiometricSection />
      <BestSection />
      <CardsShowcase />
      <LoanCalculator />
     
    </div>
  );
}

export default App;