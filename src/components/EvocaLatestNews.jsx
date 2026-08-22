import React from 'react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    image: 'https://www.evoca.am/images-cache/news/1/17873217684586/780x585.png',
    category: 'Պրոդուկտներ',
    title: 'Դեպի նոր ուսումնական տարի` մինչև 23% cashback-ով',
    date: '21.08.2026',
  },
  {
    id: 2,
    image: 'https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png',
    category: 'Բանկային',
    title: "Ba3 վարկանիշ Moody's-ից Evocabank-ին",
    date: '18.08.2026',
  },
  {
    id: 3,
    image: 'https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png',
    category: 'Բանկային',
    title: 'Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»',
    date: '11.08.2026',
  },
];

export default function EvocaLatestNews() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f2f5fa] pt-28 pb-20 rounded-tr-[70px] mt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Վերնագիրը դարձված է font-bold (ավելի նեղ/բարակ, քան font-extrabold-ը) */}
        <div className="flex items-center justify-between mb-14 -mt-16 lg:-mt-20 px-2">
          <h2 className="text-3xl md:text-[38px] font-bold text-[#111111] tracking-tight">
            Վերջին նորությունները
          </h2>
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 bg-[#e8e2f8] hover:bg-[#ded4f5] text-[#6c11d2] font-bold px-6 py-3 rounded-full transition-colors duration-200 text-sm md:text-base"
          >
            <span>Բոլոր նորությունները</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Քարտերի ցուցակ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {newsData.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[480px] w-full max-w-[390px] mx-auto"
            >
              <div>
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-[24px]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-[3px] h-4 bg-[#6c11d2] rounded-full inline-block"></span>
                    <span className="text-sm font-bold text-gray-700">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-sm font-medium text-gray-400">
                  {item.date}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}