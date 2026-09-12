// import React, { useEffect } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import Header from './Header';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import PartnersFooterBottom from './PartnersFooterBottom';
// import LiveChat from './LiveChat';

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
//   '/evoca-touch': 'EvocaTOUCH | Էվոկաբանկ',
//   '/hy/evoca-touch': 'EvocaTOUCH | Էվոկաբանկ',
//   '/business': 'Բիզնես | Էվոկաբանկ',
//   '/hy/business': 'Բիզնես | Էվոկաբանկ',
//   '/hy/general-information-history-key-values': 'Ընդհանուր տեղեկատվություն | Էվոկաբանկ',
// };

// const MainLayout = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const currentTitle = pageTitles[location.pathname] || 'Էվոկաբանկ';
//     document.title = currentTitle;
//   }, [location]);

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-between">
//       <div>
//         <Header />
//         <Navbar />

//         <main>
//           <Outlet />
//         </main>
//       </div>

//       <div>
//         <Footer />
//         <PartnersFooterBottom />
//       </div>

//       <LiveChat />
//     </div>
//   );
// };

// export default MainLayout;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import PartnersFooterBottom from './PartnersFooterBottom';
import LiveChat from './LiveChat';

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
  '/business': 'Բիզնես | Էվոկաբանկ',
  '/hy/business': 'Բիզնես | Էվոկաբանկ',
  '/hy/general-information-history-key-values': 'Ընդհանուր տեղեկատվություն | Էվոկաբանկ',
  '/news': 'Նորություններ | Էվոկաբանկ',
  '/hy/news': 'Նորություններ | Էվոկաբանկ',
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || 'Էվոկաբանկ';
    document.title = currentTitle;
  }, [location]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>

      <div>
        <Footer />
        <PartnersFooterBottom />
      </div>

      <LiveChat />
    </div>
  );
};

export default MainLayout;