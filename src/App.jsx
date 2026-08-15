// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/MainLayout'; // 👈 layouts-ը փոխվեց components-ի
// import Home from './components/Home';             // 👈 pages-ը փոխվեց components-ի
// import Loans from './pages/Loans';                 // 👈 Loans-ը ճիշտ է, pages-ում է

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;