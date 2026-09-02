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
// import Business from './pages/Business'; // 1. Import ենք անում Business component-ը

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Հիմնական layout-ով էջերը */}
//         <Route path="/" element={<MainLayout />}>
//           {/* Գլխավոր էջ */}
//           <Route index element={<Home />} />
          
//           {/* Բիզնես էջ */}
//           <Route path="business" element={<Business />} />
//           <Route path="hy/business" element={<Business />} />

//           {/* Վարկեր էջ */}
//           <Route path="hy/loans" element={<Loans />} />
//           <Route path="loans" element={<Loans />} />

//           {/* Քարտեր էջ */}
//           <Route path="cards" element={<Cards />} />
//           <Route path="hy/cards" element={<Cards />} />

//           {/* Ավանդներ էջ */}
//           <Route path="deposits" element={<Deposits />} />
//           <Route path="hy/deposits" element={<Deposits />} />

//           {/* Հաշիվներ էջ */}
//           <Route path="accounts" element={<Accounts />} />
//           <Route path="hy/accounts" element={<Accounts />} />

//           {/* Փոխանցումներ էջ */}
//           <Route path="transfers" element={<Transfers />} />
//           <Route path="hy/transfers" element={<Transfers />} />

//           {/* Արժեթղթեր էջ */}
//           <Route path="securities" element={<Securities />} />
//           <Route path="hy/securities" element={<Securities />} />

//           {/* EvocaSALARY էջ */}
//           <Route path="evoca-salary" element={<EvocaSalary />} />
//           <Route path="hy/evoca-salary" element={<EvocaSalary />} />

//           {/* EvocaTOUCH էջ */}
//           <Route path="evoca-touch" element={<EvocaTouch />} />
//           <Route path="hy/evoca-touch" element={<EvocaTouch />} />
//         </Route>

//         {/* EvocaONLINE էջ (առանց MainLayout-ի header/footer-ի) */}
//         <Route path="evoca-online" element={<EvocaOnline />} />
//         <Route path="hy/evoca-online" element={<EvocaOnline />} />
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
import Cards from './pages/Cards';
import Deposits from './pages/Deposits';
import Accounts from './pages/Accounts';
import Transfers from './pages/Transfers';
import Securities from './pages/Securities';
import EvocaSalary from './pages/EvocaSalary';
import EvocaTouch from './pages/EvocaTouch';
import EvocaOnline from './pages/EvocaOnline';
import Business from './pages/Business';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Հիմնական layout-ով էջերը */}
        <Route path="/" element={<MainLayout />}>
          {/* Գլխավոր էջ */}
          <Route index element={<Home />} />
          
          {/* Բիզնես էջ */}
          <Route path="business" element={<Business />} />
          <Route path="hy/business" element={<Business />} />

          {/* Վարկեր էջ */}
          <Route path="hy/loans" element={<Loans />} />
          <Route path="loans" element={<Loans />} />

          {/* Քարտեր էջ */}
          <Route path="cards" element={<Cards />} />
          <Route path="hy/cards" element={<Cards />} />

          {/* Ավանդներ էջ */}
          <Route path="deposits" element={<Deposits />} />
          <Route path="hy/deposits" element={<Deposits />} />

          {/* Հաշիվներ էջ */}
          <Route path="accounts" element={<Accounts />} />
          <Route path="hy/accounts" element={<Accounts />} />

          {/* Փոխանցումներ էջ */}
          <Route path="transfers" element={<Transfers />} />
          <Route path="hy/transfers" element={<Transfers />} />

          {/* Արժեթղթեր էջ */}
          <Route path="securities" element={<Securities />} />
          <Route path="hy/securities" element={<Securities />} />

          {/* EvocaSALARY էջ (և՛ գծիկով, և՛ առանց) */}
          <Route path="evoca-salary" element={<EvocaSalary />} />
          <Route path="hy/evoca-salary" element={<EvocaSalary />} />
          <Route path="evocasalary" element={<EvocaSalary />} />
          <Route path="hy/evocasalary" element={<EvocaSalary />} />

          {/* EvocaTOUCH էջ (և՛ գծիկով, և՛ առանց) */}
          <Route path="evoca-touch" element={<EvocaTouch />} />
          <Route path="hy/evoca-touch" element={<EvocaTouch />} />
          <Route path="evocatouch" element={<EvocaTouch />} />
          <Route path="hy/evocatouch" element={<EvocaTouch />} />
        </Route>

        {/* EvocaONLINE էջ (առանց MainLayout-ի header/footer-ի) */}
        <Route path="evoca-online" element={<EvocaOnline />} />
        <Route path="hy/evoca-online" element={<EvocaOnline />} />
        <Route path="evocaonline" element={<EvocaOnline />} />
        <Route path="hy/evocaonline" element={<EvocaOnline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;