import React from 'react';

export default function NewsGrid() {
  const newsItems = [
    {
      category: 'Կենսակերպ',
      categoryColor: 'bg-amber-400',
      title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
      date: '12.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png',
    },
    {
      category: 'Բանկային',
      categoryColor: 'bg-[#7100e2]',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '31.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png',
    },
    {
      category: 'Բանկային',
      categoryColor: 'bg-[#7100e2]',
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png',
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Օգտագործում ենք ավելի լայն կոնտեյներ կամ բացվածքներ (gap-10 / gap-12), որպեսզի իրար կպած չլինեն */}
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
        
        {/* 3 սյունականոց ցանց՝ մեծացված հեռավորություններով (gap-10 կամ gap-12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              
              {/* Նկար (հանված է hover-ը, ավելացված է բարձրություն) */}
              <div className="w-full overflow-hidden shadow-sm mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] sm:h-[310px] object-cover"
                />
              </div>

              {/* Կատեգորիա՝ ավելի բարակ գունավոր շերտով և ավելի թեթև տառերով */}
              <div className="flex items-center space-x-2.5 mb-3">
                <span className={`w-1.5 h-4 ${item.categoryColor} inline-block shrink-0`}></span>
                <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              {/* Վերնագիր՝ ավելի բարակ կամ հավասարակշռված տառաչափով */}
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-900 leading-snug mb-4">
                {item.title}
              </h3>

              {/* Ամսաթիվ */}
              <div className="text-gray-400 text-sm font-normal mt-auto">
                {item.date}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}