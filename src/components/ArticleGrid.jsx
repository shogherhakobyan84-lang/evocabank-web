import React from 'react';

export default function ArticleGrid() {
  const articles = [
    {
      category: 'Կենսակերպ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Թեմատիկ հոդվածի վերնագիր այստեղ',
      date: '15.05.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg',
    },
    {
      category: 'Կենսակերպ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Հաջորդ հետաքրքիր թեմայի վերնագիրը',
      date: '10.04.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png',
    },
    {
      category: 'Կենսակերպ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Երրորդ հոդվածի վերնագիրը այս բլոկում',
      date: '05.03.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png',
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {articles.map((item, index) => (
            <div key={index} className="flex flex-col">
              
              {/* Նկար */}
              <div className="w-full overflow-hidden shadow-sm mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] sm:h-[310px] object-cover"
                />
              </div>

              {/* Կատեգորիա */}
              <div className="flex items-center space-x-2.5 mb-3">
                <span className={`w-1.5 h-4 ${item.categoryColor} inline-block shrink-0`}></span>
                <span className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              {/* Վերնագիր */}
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