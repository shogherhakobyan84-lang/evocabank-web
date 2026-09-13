// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
// import Home from './components/Home';
// import Loans from './pages/Loans';
// import CreditHistory from "./components/CreditHistory";
// import ImportantInfo from './components/ImportantInfo';
// import Cards from './pages/Cards';
// import CardProvisionAndService from './components/CardProvisionAndService'; // 👈 Նոր բաղադրիչի իմպորտը
// import Deposits from './pages/Deposits';
// import Accounts from './pages/Accounts';
// import Transfers from './pages/Transfers';
// import Securities from './pages/Securities';
// import EvocaSalary from './pages/EvocaSalary';
// import EvocaTouch from './pages/EvocaTouch';
// import EvocaOnline from './pages/EvocaOnline';
// import Business from './pages/Business';
// import InstantPayments from './components/InstantPayments';
// import AboutGeneral from './pages/AboutGeneral';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import Culture from './pages/Culture';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="business" element={<Business />} />
//           <Route path="hy/business" element={<Business />} />
//           <Route path="hy/loans" element={<Loans />} />
//           <Route path="loans" element={<Loans />} />
          
//           {/* Վարկային պատմություն և սքոր էջի երթուղիները */}
//           <Route path="hy/loans/credit-history" element={<CreditHistory />} />
//           <Route path="loans/credit-history" element={<CreditHistory />} />

//           {/* Կարևոր տեղեկատվություն էջի երթուղիները */}
//           <Route path="hy/loans/important-info" element={<ImportantInfo />} />
//           <Route path="loans/important-info" element={<ImportantInfo />} />

//           {/* Քարտեր և նրա ենթաէջերը */}
//           <Route path="cards" element={<Cards />} />
//           <Route path="hy/cards" element={<Cards />} />
//           <Route path="cards/issuance-service" element={<CardProvisionAndService />} />
//           <Route path="hy/cards/issuance-service" element={<CardProvisionAndService />} />

//           <Route path="deposits" element={<Deposits />} />
//           <Route path="hy/deposits" element={<Deposits />} />
//           <Route path="accounts" element={<Accounts />} />
//           <Route path="hy/accounts" element={<Accounts />} />
//           <Route path="transfers" element={<Transfers />} />
//           <Route path="hy/transfers" element={<Transfers />} />
//           <Route path="securities" element={<Securities />} />
//           <Route path="hy/securities" element={<Securities />} />
//           <Route path="evoca-salary" element={<EvocaSalary />} />
//           <Route path="hy/evoca-salary" element={<EvocaSalary />} />
//           <Route path="evocasalary" element={<EvocaSalary />} />
//           <Route path="hy/evocasalary" element={<EvocaSalary />} />
//           <Route path="evoca-touch" element={<EvocaTouch />} />
//           <Route path="hy/evoca-touch" element={<EvocaTouch />} />
//           <Route path="evocatouch" element={<EvocaTouch />} />
//           <Route path="hy/evocatouch" element={<EvocaTouch />} />
          
//           {/* Մեր մասին էջի երթուղիները */}
//           <Route path="hy/general-information-history-key-values" element={<AboutGeneral />} />
//           <Route path="about" element={<AboutGeneral />} />
//           <Route path="hy/about" element={<AboutGeneral />} />

//           {/* Նորություններ էջի երթուղիները */}
//           <Route path="news" element={<News />} />
//           <Route path="hy/news" element={<News />} />

//           {/* Բլոգ էջի երթուղիները */}
//           <Route path="blog" element={<Blog />} />
//           <Route path="hy/blog" element={<Blog />} />

//           {/* Կարիերա / Մշակույթ էջի երթուղիները */}
//           <Route path="culture" element={<Culture />} />
//           <Route path="hy/culture" element={<Culture />} />
//           <Route path="career" element={<Culture />} />
//           <Route path="hy/career" element={<Culture />} />
//         </Route>

//         <Route path="evoca-online" element={<EvocaOnline />} />
//         <Route path="hy/evoca-online" element={<EvocaOnline />} />
//         <Route path="evocaonline" element={<EvocaOnline />} />
//         <Route path="hy/evocaonline" element={<EvocaOnline />} />

//         <Route path="instant-payments" element={<InstantPayments />} />
//         <Route path="hy/instant-payments" element={<InstantPayments />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Loans from './pages/Loans';
import CreditHistory from "./components/CreditHistory";
import ImportantInfo from './components/ImportantInfo';
import Cards from './pages/Cards';
import CardProvisionAndService from './components/CardProvisionAndService';
import SocialSecurityCards from './components/SocialSecurityCards'; // 👈 Նոր բաղադրիչի իմպորտը
import Deposits from './pages/Deposits';
import Accounts from './pages/Accounts';
import Transfers from './pages/Transfers';
import Securities from './pages/Securities';
import EvocaSalary from './pages/EvocaSalary';
import EvocaTouch from './pages/EvocaTouch';
import EvocaOnline from './pages/EvocaOnline';
import Business from './pages/Business';
import InstantPayments from './components/InstantPayments';
import AboutGeneral from './pages/AboutGeneral';
import News from './pages/News';
import Blog from './pages/Blog';
import Culture from './pages/Culture';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="business" element={<Business />} />
          <Route path="hy/business" element={<Business />} />
          <Route path="hy/loans" element={<Loans />} />
          <Route path="loans" element={<Loans />} />
          
          {/* Վարկային պատմություն և սքոր էջի երթուղիները */}
          <Route path="hy/loans/credit-history" element={<CreditHistory />} />
          <Route path="loans/credit-history" element={<CreditHistory />} />

          {/* Կարևոր տեղեկատվություն էջի երթուղիները */}
          <Route path="hy/loans/important-info" element={<ImportantInfo />} />
          <Route path="loans/important-info" element={<ImportantInfo />} />

          {/* Քարտեր և նրա ենթաէջերը */}
          <Route path="cards" element={<Cards />} />
          <Route path="hy/cards" element={<Cards />} />
          <Route path="cards/issuance-service" element={<CardProvisionAndService />} />
          <Route path="hy/cards/issuance-service" element={<CardProvisionAndService />} />
          
          {/* Սոցիալական ապահովության վճարային քարտեր */}
          <Route path="cards/social-security" element={<SocialSecurityCards />} />
          <Route path="hy/cards/social-security" element={<SocialSecurityCards />} />

          <Route path="deposits" element={<Deposits />} />
          <Route path="hy/deposits" element={<Deposits />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="hy/accounts" element={<Accounts />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="hy/transfers" element={<Transfers />} />
          <Route path="securities" element={<Securities />} />
          <Route path="hy/securities" element={<Securities />} />
          <Route path="evoca-salary" element={<EvocaSalary />} />
          <Route path="hy/evoca-salary" element={<EvocaSalary />} />
          <Route path="evocasalary" element={<EvocaSalary />} />
          <Route path="hy/evocasalary" element={<EvocaSalary />} />
          <Route path="evoca-touch" element={<EvocaTouch />} />
          <Route path="hy/evoca-touch" element={<EvocaTouch />} />
          <Route path="evocatouch" element={<EvocaTouch />} />
          <Route path="hy/evocatouch" element={<EvocaTouch />} />
          
          {/* Մեր մասին էջի երթուղիները */}
          <Route path="hy/general-information-history-key-values" element={<AboutGeneral />} />
          <Route path="about" element={<AboutGeneral />} />
          <Route path="hy/about" element={<AboutGeneral />} />

          {/* Նորություններ էջի երթուղիները */}
          <Route path="news" element={<News />} />
          <Route path="hy/news" element={<News />} />

          {/* Բլոգ էջի երթուղիները */}
          <Route path="blog" element={<Blog />} />
          <Route path="hy/blog" element={<Blog />} />

          {/* Կարիերա / Մշակույթ էջի երթուղիները */}
          <Route path="culture" element={<Culture />} />
          <Route path="hy/culture" element={<Culture />} />
          <Route path="career" element={<Culture />} />
          <Route path="hy/career" element={<Culture />} />
        </Route>

        <Route path="evoca-online" element={<EvocaOnline />} />
        <Route path="hy/evoca-online" element={<EvocaOnline />} />
        <Route path="evocaonline" element={<EvocaOnline />} />
        <Route path="hy/evocaonline" element={<EvocaOnline />} />

        <Route path="instant-payments" element={<InstantPayments />} />
        <Route path="hy/instant-payments" element={<InstantPayments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;