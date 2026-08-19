// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
// import Home from './components/Home';
// import Loans from './pages/Loans';
// import Cards from './pages/Cards';
// import Deposits from './pages/Deposits';
// import Accounts from './pages/Accounts';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           {/* Գլխավոր էջ */}
//           <Route index element={<Home />} />
          
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
//         </Route>
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Գլխավոր էջ */}
          <Route index element={<Home />} />
          
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;