// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
// import Home from './components/Home';
// import Loans from './pages/Loans';
// import Cards from './pages/Cards';
// import Deposits from './pages/Deposits';
// import Accounts from './pages/Accounts';
// import Transfers from './pages/Transfers';
// import Securities from './pages/Securities';
// import EvocaSalary from './pages/EvocaSalary';
// import EvocaTouch from './pages/EvocaTouch';
// import EvocaOnline from './pages/EvocaOnline';
// import Business from './pages/Business';
// import InstantPayments from './components/InstantPayments';

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
//           <Route path="cards" element={<Cards />} />
//           <Route path="hy/cards" element={<Cards />} />
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
//         </Route>

//         <Route path="evoca-online" element={<EvocaOnline />} />
//         <Route path="hy/evoca-online" element={<EvocaOnline />} />
//         <Route path="evocaonline" element={<EvocaOnline />} />
//         <Route path="hy/evocaonline" element={<EvocaOnline />} />

//         <Route path="instant-payments" element={<InstantPayments />} />
//         <Route path="hy/instant-payments" element={<InstantPayments />} />
//       </Routes>

//       {/* Այստեղից <LiveChat />-ը հեռացված է, հետևաբար այն կանհետանա այն էջերից, որտեղ հարկավոր չէ */}
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Loans from './pages/Loans';
import Cards from './pages/Cards';
import Deposits from './pages/Deposits';
import Accounts from './pages/Accounts';
import Transfers from './pages/Transfers';
import Securities from './pages/Securities';
import EvocaSalary from './pages/EvocaSalary';
import EvocaTouch from './pages/EvocaTouch';
import EvocaOnline from './pages/EvocaOnline';
import Business from './pages/Business';
import InstantPayments from './components/InstantPayments';
import AboutGeneral from './pages/AboutGeneral'; // Ներմուծում ենք մեր մասին նոր էջը

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
          <Route path="cards" element={<Cards />} />
          <Route path="hy/cards" element={<Cards />} />
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
          
          {/* Մեր մասին -> Ընդհանուր էջի երթուղիները MainLayout-ի ներսում */}
          <Route path="hy/general-information-history-key-values" element={<AboutGeneral />} />
          <Route path="about" element={<AboutGeneral />} />
          <Route path="hy/about" element={<AboutGeneral />} />
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