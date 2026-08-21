import React from 'react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    image: 'https://www.evoca.am/images-cache/news/1/17870544210976/439x320.png',
    category: 'Բանկային',
    title: "Ba3 վարկանիշ Moody's-ից Evocabank-ին",
    date: '18.08.2026',
  },
  {
    id: 2,
    image: 'https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png',
    category: 'Բանկային',
    title: 'Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»',
    date: '11.08.2026',
  },
  {
    id: 3,
    image: 'https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png',
    category: 'Բանկային',
    title: 'Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր...',
    date: '30.07.2026',
  },
];

export default function LatestNews() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f2f5fa] pt-14 pb-20 rounded-tr-[70px] mt-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Վերնագիր և Կոճակ (Բարձրացված վերև `-mt-8`-ով) */}
        <div className="flex items-center justify-between mb-8 -mt-8 px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b2b2b] tracking-tight">
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

        {/* Քարտեր՝ Link-երով դեպի առանձին էջեր (/news/:id) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {newsData.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col justify-between w-full md:max-w-[420px] h-[480px]"
            >
              <div>
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-[28px]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-1 h-4 bg-[#6c11d2] rounded-full inline-block"></span>
                    <span className="text-sm font-bold text-gray-700">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2b2b2b] leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-sm font-semibold text-gray-400">
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