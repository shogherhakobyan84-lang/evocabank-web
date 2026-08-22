// import React, { useEffect } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

// const pageTitles = {
//   '/': 'Էվոկաբանկ | Գլխավոր',
//   '/loans': 'Վարկեր | Էվոկաբանկ',
//   '/hy/loans': 'Վարկեր | Էվոկաբանկ',
//   '/cards': 'Քարտեր | Էվոկաբանկ',
//   '/hy/cards': 'Քարտեր | Էվոկաբանկ',
//   '/deposits': 'Ավանդներ | Էվոկաբանկ',
//   '/hy/deposits': 'Ավանդներ | Էվոկաբանկ',
//   '/accounts': 'Հաշիվներ | Էվոկաբանկ',
//   '/hy/accounts': 'Հաշիվներ | Էվոկաբանկ',
//   '/transfers': 'Փոխանցումներ | Էվոկաբանկ',
//   '/hy/transfers': 'Փոխանցումներ | Էվոկաբանկ',
//   '/securities': 'Արժեթղթեր | Էվոկաբանկ',
//   '/hy/securities': 'Արժեթղթեր | Էվոկաբանկ',
//   '/evoca-salary': 'EvocaSALARY | Էվոկաբանկ',
//   '/hy/evoca-salary': 'EvocaSALARY | Էվոկաբանկ',
// };

// const MainLayout = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const currentTitle = pageTitles[location.pathname] || 'Էվոկաբանկ';
//     document.title = currentTitle;
//   }, [location]);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Navbar />

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default MainLayout;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const pageTitles = {
  '/': 'Էվոկաբանկ | Գլխավոր',
  '/loans': 'Վարկեր | Էվոկաբանկ',
  '/hy/loans': 'Վարկեր | Էվոկաբանկ',
  '/cards': 'Քարտեր | Էվոկաբանկ',
  '/hy/cards': 'Քարտեր | Էվոկաբանկ',
  '/deposits': 'Ավանդներ | Էվոկաբանկ',
  '/hy/deposits': 'Ավանդներ | Էվոկաբանկ',
  '/accounts': 'Հաշիվներ | Էվոկաբանկ',
  '/hy/accounts': 'Հաշիվներ | Էվոկաբանկ',
  '/transfers': 'Փոխանցումներ | Էվոկաբանկ',
  '/hy/transfers': 'Փոխանցումներ | Էվոկաբանկ',
  '/securities': 'Արժեթղթեր | Էվոկաբանկ',
  '/hy/securities': 'Արժեթղթեր | Էվոկաբանկ',
  '/evoca-salary': 'EvocaSALARY | Էվոկաբանկ',
  '/hy/evoca-salary': 'EvocaSALARY | Էվոկաբանկ',
  '/evoca-touch': 'EvocaTOUCH | Էվոկաբանկ',
  '/hy/evoca-touch': 'EvocaTOUCH | Էվոկաբանկ',
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || 'Էվոկաբանկ';
    document.title = currentTitle;
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;