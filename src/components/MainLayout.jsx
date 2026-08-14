// src/layouts/MainLayout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

// Այստեղ սահմանում ենք էջերի Title-ները՝ ըստ route path-երի
const pageTitles = {
  '/': 'Էվոկաբանկ | Գլխավոր',
  '/hy/loans': 'Վարկեր | Էվոկաբանկ',
  '/loans': 'Վարկեր | Էվոկաբանկ', // Եթե առանց /hy/-ի էլ եք օգտագործելու
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Գտնում ենք տվյալ path-ին համապատասխան title-ը, եթե չկա՝ դնում ենք default title
    const currentTitle = pageTitles[location.pathname] || 'Էվոկաբանկ';
    document.title = currentTitle;
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Կրկնվող հատվածները */}
      <Header />
      <Navbar />

      {/* Էջի dynamic բովանդակությունը */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;