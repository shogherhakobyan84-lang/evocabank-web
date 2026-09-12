import React from 'react';
import { Link } from 'react-router-dom';
import ImportantNews from '../components/ImportantNews';
import NewsGrid from '../components/NewsGrid';

export default function News() {
  const categories = [
    { name: 'Գլխավոր', path: '/' },
    { name: 'Բանկային', path: '/hy/news/banking' },
    { name: 'Հարցազրույցներ', path: '/hy/news/interviews' },
    { name: 'Պրոդուկտներ', path: '/hy/news/products' },
    { name: 'Նորարարություններ', path: '/hy/news/innovations' },
    { name: 'Կենսակերպ', path: '/hy/news/lifestyle' },
    { name: 'Մրցանակներ', path: '/hy/news/awards' },
    { name: 'CSR', path: '/hy/news/csr' },
    { name: 'Այլ', path: '/hy/news/other' },
  ];

  const sideNews = [
    {
      category: 'Մրցանակներ',
      categoryColor: 'bg-amber-400',
      title: 'Evocabank. Լավագույն ՄՖՁ բանկը Հայաստանում...',
      date: '08.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png',
      path: '/hy/news/awards/1'
    },
    {
      category: 'Պրոդուկտներ',
      categoryColor: 'bg-purple-600',
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png',
      path: '/hy/news/products/1'
    },
    {
      category: 'Հարցազրույցներ',
      categoryColor: 'bg-purple-600',
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles...',
      date: '25.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg',
      path: '/hy/news/interviews/1'
    },
    {
      category: 'Բանկային',
      categoryColor: 'bg-purple-600',
      title: 'Evocabank-ի «Աբովյան» մասնաճյուղն արդեն բաց է',
      date: '12.01.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17891134831451/780x585.png',
      path: '/hy/news/banking/1'
    },
  ];

  return (
    <div className="w-full bg-white py-12 overflow-x-hidden">
      {/* Վերևի հատված */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        {/* 1. Բրեդքրամփ */}
        <div className="flex items-center space-x-2.5 mb-10">
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
          <span className="text-gray-500 text-sm">Նորություններ</span>
        </div>

        {/* 2. Վերնագիրը */}
        <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-12">
          Նորություններ
        </h1>

        {/* 3. Հորիզոնական ֆիլտրեր */}
        <div className="flex items-center flex-wrap gap-4 mb-16">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.path}
              className="px-6 py-3 bg-gray-100 text-gray-800 text-[15px] font-medium rounded-full transition-colors duration-200 hover:bg-[#7100e2] hover:text-white"
            >
              {cat.name}
            </Link>
          ))}
        </div>

      </div>

      {/* Առաջին բլոկ (Դիլիջան) */}
      <div className="w-full bg-[#f3f4f6] rounded-bl-[80px] py-16 px-8 lg:px-16 relative mb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 self-start pt-4">
            <div className="flex items-center space-x-3">
              <span className="w-5 h-5 bg-[#a3e635] inline-block shrink-0"></span>
              <span className="text-gray-900 font-extrabold text-sm tracking-wider uppercase">Կենսակերպ</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Դիլիջա՞ն, մենք գալիս ենք
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Սեպտեմբերի 18-ին Evocabank-ը նշում է իր նոր «Դիլիջան» մասնաճյուղի բացումը մեծ բացօթյա համերգով։
            </p>
            <div className="text-gray-400 text-sm font-medium pt-2">11.09.2026</div>
          </div>
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="w-full overflow-hidden shadow-md">
              <img
                src="https://www.evoca.am/images-cache/news/1/17891134831451/780x585.png"
                alt="Dilijan News"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ԵՐԿՐՈՐԴ ԲԼՈԿ՝ «Բաց մի թող» */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative pt-16 mb-16">
        <div className="absolute -top-8 left-12 lg:left-24 right-0 text-center lg:text-left text-6xl sm:text-7xl lg:text-9xl font-black text-gray-100 select-none pointer-events-none tracking-widest uppercase z-0 overflow-hidden">
          Բաց մի թող
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-12 items-start">
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="overflow-hidden shadow-sm">
              <img
                src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png"
                alt="AMX Awards"
                className="w-full h-auto object-cover max-w-[90%]"
              />
            </div>
            <div className="space-y-3 pt-3">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-amber-400 inline-block"></span>
                <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Մրցանակներ</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                Evocabank-ը AMX AWARDS 2026-ի մրցանակակիր
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:
              </p>
              <div className="text-gray-400 text-sm font-medium pt-2">
                16.06.2026
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
            {sideNews.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <div className="overflow-hidden shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[170px] object-cover"
                  />
                </div>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center space-x-2">
                    <span className={`w-1 h-4 ${item.categoryColor} inline-block`}></span>
                    <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">{item.category}</span>
                  </div>
                  <h4 className="text-gray-900 font-bold text-sm leading-snug">
                    {item.title}
                  </h4>
                  <div className="text-gray-400 text-xs font-medium pt-1">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ԵՐՐՈՐԴ ԲԼՈԿ՝ «Կարևոր» (Այժմ դուրս է սահմանափակող կոնտեյներից և լիարժեք կպնվելու է եզրերին) */}
      <ImportantNews />
      <NewsGrid />

    </div>
  );
}