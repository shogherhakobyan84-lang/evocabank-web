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
  '/hy/loans/credit-history': 'Վարկային պատմություն և սքոր | Էվոկաբանկ',
  '/loans/credit-history': 'Վարկային պատմություն և սքոր | Էվոկաբանկ',
  '/hy/loans/important-info': 'Կարևոր տեղեկատվություն | Էվոկաբանկ',
  '/loans/important-info': 'Կարևոր տեղեկատվություն | Էվոկաբանկ',
  '/cards': 'Քարտեր | Էվոկաբանկ',
  '/hy/cards': 'Քարտեր | Էվոկաբանկ',
  '/cards/issuance-service': 'Քարտերի տրամադրում և սպասարկում | Էվոկաբանկ',
  '/hy/cards/issuance-service': 'Քարտերի տրամադրում և սպասարկում | Էվոկաբանկ',
  '/cards/social-security': 'Սոցիալական ապահովության վճարային քարտեր | Էվոկաբանկ',
  '/hy/cards/social-security': 'Սոցիալական ապահովության վճարային քարտեր | Էվոկաբանկ',
  '/deposits': 'Ավանդներ | Էվոկաբանկ',
  '/hy/deposits': 'Ավանդներ | Էվոկաբանկ',
  '/accounts': 'Հաշիվներ | Էվոկաբանկ',
  '/hy/accounts': 'Հաշիվներ | Էվոկաբանկ',
  '/accounts/unallocated-metal': 'Առարկայազուրկ մետաղական հաշիվներ | Էվոկաբանկ',
  '/hy/accounts/unallocated-metal': 'Առարկայազուրկ մետաղական հաշիվներ | Էվոկաբանկ',
  '/accounts/non-resident': 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում | Էվոկաբանկ',
  '/hy/accounts/non-resident': 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում | Էվոկաբանկ',
  '/accounts/safes': 'Պահատուփեր | Էվոկաբանկ',
  '/hy/accounts/safes': 'Պահատուփեր | Էվոկաբանկ',
  '/transfers': 'Փոխանցումներ | Էվոկաբանկ',
  '/hy/transfers': 'Փոխանցումներ | Էվոկաբանկ',
  '/transfers/payment-systems': 'Վճարային համակարգեր | Էվոկաբանկ', // 👈 Ավելացված է
  '/hy/transfers/payment-systems': 'Վճարային համակարգեր | Էվոկաբանկ', // 👈 Ավելացված է
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
  '/blog': 'Բլոգ | Էվոկաբանկ',
  '/hy/blog': 'Բլոգ | Էվոկաբանկ',
  '/culture': 'Մշակույթ | Էվոկաբանկ',
  '/hy/culture': 'Մշակույթ | Էվոկաբանկ',
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