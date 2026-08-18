// import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import CardItem, { cardsData } from '../components/CardItem';

// export default function Cards() {
//   const [activeFilter, setActiveFilter] = useState('Բոլորը');

//   const subNavItems = [
//     { title: 'Քարտեր', path: '/cards' },
//     { title: 'Քարտերի տրամադրում և սպասարկում', path: '/cards/issuance-service' },
//     { title: 'Սոցիալականապահովության վճարային քարտեր', path: '/cards/social-security' },
//     { title: 'Evoca Benefits', path: '/cards/benefits' },
//   ];

//   const filterOptions = [
//     { id: 'Բոլորը', type: 'text', label: 'Բոլորը' },
//     { id: 'Պրեմիում', type: 'text', label: 'Պրեմիում' },
//     { id: 'Նվեր քարտեր', type: 'text', label: 'Նվեր քարտեր' },
//     { id: 'Թվային քարտեր', type: 'text', label: 'Թվային քարտեր' },
//     { 
//       id: 'ArCa', 
//       type: 'image', 
//       imgUrl: 'https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png',
//       alt: 'ArCa' 
//     },
//     { 
//       id: 'Visa', 
//       type: 'image', 
//       imgUrl: 'https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png',
//       alt: 'Visa' 
//     },
//     { 
//       id: 'Mastercard', 
//       type: 'image', 
//       imgUrl: 'https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png',
//       alt: 'Mastercard' 
//     },
//     { 
//       id: 'UnionPay', 
//       type: 'image', 
//       imgUrl: 'https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png',
//       alt: 'UnionPay' 
//     },
//   ];

//   return (
//     <div className="w-full bg-white min-h-screen">
//       <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
//         <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
//           {subNavItems.map((item, idx) => (
//             <NavLink
//               key={idx}
//               to={item.path}
//               end={item.path === '/cards'}
//               className={({ isActive }) =>
//                 `px-7 py-4.5 text-[15px] font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
//                   isActive
//                     ? 'bg-[#4c0099] text-white'
//                     : 'hover:bg-[#5e00bd] text-white/90'
//                 }`
//               }
//             >
//               {item.title}
//             </NavLink>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-16">
//         <div className="text-sm text-gray-500 mb-10 flex items-center space-x-2.5 font-normal">
//           <Link 
//             to="/" 
//             className="text-gray-400 flex items-center justify-center shrink-0"
//             title="Գլխավոր էջ"
//           >
//             <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
//               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
//             </svg>
//           </Link>
//           <span className="text-gray-300 text-xs">›</span>
//           <span>Անհատ</span>
//           <span className="text-gray-300 text-xs">›</span>
//           <span className="text-gray-900 font-medium">Քարտեր</span>
//         </div>

//         <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
//           Քարտեր
//         </h1>

//         <div className="flex flex-wrap items-center gap-3.5 mb-16">
//           {filterOptions.map((filter) => {
//             const isActive = activeFilter === filter.id;

//             if (filter.type === 'text') {
//               return (
//                 <button
//                   key={filter.id}
//                   onClick={() => setActiveFilter(filter.id)}
//                   className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer h-12 ${
//                     isActive
//                       ? 'bg-[#7100e2] text-white shadow-sm'
//                       : 'bg-[#f1f3f5] text-gray-800 hover:bg-gray-200'
//                   }`}
//                 >
//                   {filter.label}
//                 </button>
//               );
//             }

//             return (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`px-5 py-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center h-12 border-2 ${
//                   isActive
//                     ? 'border-[#7100e2] bg-[#f1f3f5]'
//                     : 'border-transparent bg-[#f1f3f5] hover:bg-gray-200'
//                 }`}
//               >
//                 <img 
//                   src={filter.imgUrl} 
//                   alt={filter.alt} 
//                   className="h-6 object-contain"
//                 />
//               </button>
//             );
//           })}
//         </div>

//         <div className="space-y-16">
//           {cardsData.map((card) => (
//             <CardItem key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CardItem, { cardsData } from '../components/CardItem';

export default function Cards() {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subNavItems = [
    { title: 'Քարտեր', path: '/cards' },
    { title: 'Քարտերի տրամադրում և սպասարկում', path: '/cards/issuance-service' },
    { title: 'Սոցիալականապահովության վճարային քարտեր', path: '/cards/social-security' },
    { title: 'Evoca Benefits', path: '/cards/benefits' },
  ];

  const filterOptions = [
    { id: 'Բոլորը', type: 'text', label: 'Բոլորը' },
    { id: 'Պրեմիում', type: 'text', label: 'Պրեմիում' },
    { id: 'Նվեր քարտեր', type: 'text', label: 'Նվեր քարտեր' },
    { id: 'Թվային քարտեր', type: 'text', label: 'Թվային քարտեր' },
    { 
      id: 'ArCa', 
      type: 'image', 
      imgUrl: 'https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png',
      alt: 'ArCa' 
    },
    { 
      id: 'Visa', 
      type: 'image', 
      imgUrl: 'https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png',
      alt: 'Visa' 
    },
    { 
      id: 'Mastercard', 
      type: 'image', 
      imgUrl: 'https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png',
      alt: 'Mastercard' 
    },
    { 
      id: 'UnionPay', 
      type: 'image', 
      imgUrl: 'https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png',
      alt: 'UnionPay' 
    },
  ];

  // Ֆիլտրացիայի տրամաբանությունը
  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === 'Բոլորը') return true;
    return card.category && card.category.includes(activeFilter);
  });

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/cards'}
              className={({ isActive }) =>
                `px-7 py-4.5 text-[15px] font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'hover:bg-[#5e00bd] text-white/90'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-16">
        <div className="text-sm text-gray-500 mb-10 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0"
            title="Գլխավոր էջ"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span>Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Քարտեր</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
          Քարտեր
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-16">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;

            if (filter.type === 'text') {
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer h-12 ${
                    isActive
                      ? 'bg-[#7100e2] text-white shadow-sm'
                      : 'bg-[#f1f3f5] text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              );
            }

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center h-12 border-2 ${
                  isActive
                    ? 'border-[#7100e2] bg-[#f1f3f5]'
                    : 'border-transparent bg-[#f1f3f5] hover:bg-gray-200'
                }`}
              >
                <img 
                  src={filter.imgUrl} 
                  alt={filter.alt} 
                  className="h-6 object-contain"
                />
              </button>
            );
          })}
        </div>

        {/* Filtered Cards List */}
        <div className="space-y-16">
          {filteredCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}