// import React from 'react';

// export default function Navbar() {
//   const mainNavItems = [
//     'Վարկեր',
//     'Քարտեր',
//     'Ավանդներ',
//     'Հաշիվներ',
//     'Փոխանցումներ',
//     'Արժեթղթեր',
//     'EvocaSALARY',
//     'EvocaTOUCH',
//   ];

//   return (
//     // sticky top-0 - սկզբում իր տեղում է, իջնելիս կպչում է վերևին
//     <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20">
        
//         {/* Left Side: Logo + Nav Links */}
//         <div className="flex items-center space-x-12">
//           {/* Evocabank Image Logo */}
//           <a href="#" className="flex items-center shrink-0">
//             <img 
//               src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
//               alt="Evocabank Logo" 
//               className="h-10 w-auto object-contain"
//             />
//           </a>

//           {/* Main Navigation Links */}
//           <nav className="hidden lg:flex items-center space-x-9 font-bold text-[15px] text-gray-900">
//             {mainNavItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href="#"
//                 className="hover:text-[#8c25e8] transition-colors duration-200 whitespace-nowrap"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Right Side: EvocaONLINE Button */}
//         <div>
//           <button className="bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-sm px-8 py-3 rounded-full transition duration-200 cursor-pointer shadow-md">
//             EvocaONLINE
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Յուրաքանչյուր Nav-ի կետի համար սահմանում ենք անունը (title) և իր path-ը (path)
  const mainNavItems = [
    { title: 'Վարկեր', path: '/hy/loans' },
    { title: 'Քարտեր', path: '/cards' },
    { title: 'Ավանդներ', path: '/deposits' },
    { title: 'Հաշիվներ', path: '/accounts' },
    { title: 'Փոխանցումներ', path: '/transfers' },
    { title: 'Արժեթղթեր', path: '/securities' },
    { title: 'EvocaSALARY', path: '/evoca-salary' },
    { title: 'EvocaTOUCH', path: '/evoca-touch' },
  ];

  return (
    // sticky top-0 - սկզբում իր տեղում է, իջնելիս կպչում է վերևին
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20">
        
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center space-x-12">
          {/* Evocabank Image Logo - Լոգոյին սեղմելիս տանում է Գլխավոր էջ (/) */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evocabank Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Main Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 font-bold text-[15px] text-gray-900">
            {mainNavItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="hover:text-[#8c25e8] transition-colors duration-200 whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: EvocaONLINE Button */}
        <div>
          <button className="bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-sm px-8 py-3 rounded-full transition duration-200 cursor-pointer shadow-md">
            EvocaONLINE
          </button>
        </div>

      </div>
    </header>
  );
}