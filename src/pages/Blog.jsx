import React from 'react';
import { Link } from 'react-router-dom';
import ArticleSection from '../components/ArticleSection';
import ArticleGrid from '../components/ArticleGrid';
import HeroBannerSection from '../components/HeroBannerSection';

export default function Blog() {
  const categories = [
    { name: 'Բիզնես', path: '/hy/blog/business' },
    { name: 'Կենսակերպ', path: '/hy/blog/lifestyle' },
    { name: 'Ներդրումներ', path: '/hy/blog/investments' },
  ];

  const sideNews = [
    {
      category: 'Ներդրումներ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Ներդրումների կարելիներն ու չկարելիները',
      date: '23.04.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg',
      path: '/hy/blog/investments/1'
    },
    {
      category: 'Ներդրումներ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Փոքր քայլերով դեպի մեծ եկամուտներ',
      date: '11.04.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg',
      path: '/hy/blog/investments/2'
    },
    {
      category: 'Բիզնես',
      categoryColor: 'bg-[#7100e2]',
      title: 'Ինչպես սկսել բիզնես: Guide from A to Z',
      date: '05.01.2024',
      image: 'https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png',
      path: '/hy/blog/business/1'
    },
    {
      category: 'Կենսակերպ',
      categoryColor: 'bg-[#7100e2]',
      title: 'Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր...',
      date: '17.06.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png',
      path: '/hy/blog/lifestyle/1'
    },
  ];

  return (
    <div className="w-full bg-white py-12 overflow-x-hidden min-h-screen">
      
      {/* Վերևի հատվածը */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        {/* 1. Բրեդքրամփ (Տնակ + Բլոգ) */}
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
          <span className="text-gray-500 text-sm font-normal">Բլոգ</span>
        </div>

        {/* 2. Վերնագիրը */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-10">
          Բլոգ
        </h1>

        {/* 3. Հորիզոնական ֆիլտրեր */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-16">
          <div className="flex items-center flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                className="px-6 py-2.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full transition-colors duration-200 hover:bg-[#7100e2] hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Արխիվ կոճակ */}
          <Link
            to="/hy/blog/archive"
            className="px-6 py-2.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full flex items-center space-x-2 transition-colors duration-200 hover:bg-[#7100e2] hover:text-white"
          >
            <span>Արխիվ</span>
            <span>›</span>
          </Link>
        </div>

      </div>

      {/* 4. Առաջին բլոգային հոդվածը (Monthly Recap) */}
      <div className="w-full bg-[#f3f4f6] rounded-bl-[120px] py-16 px-8 lg:px-16 relative mb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Ձախ կողմի տեքստային հատվածը */}
          <div className="lg:col-span-5 flex flex-col space-y-5 self-start pt-4">
            <div className="flex items-center space-x-3">
              <span className="w-4 h-5 bg-[#7100e2] inline-block shrink-0"></span>
              <span className="text-gray-900 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                Կենսակերպ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Monthly Recap
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողնվածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:
            </p>

            <div className="text-gray-400 text-sm font-medium pt-2">
              05.01.2026
            </div>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="w-full overflow-hidden shadow-md">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png" 
                alt="Monthly Recap"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 5. ԵՐԿՐՈՐԴ ԲԼՈԿ՝ «Բաց մի թող» */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative pt-16 mb-16">
        {/* Հետևի ֆոնային խոշոր գրությունը */}
        <div className="absolute -top-8 left-12 lg:left-24 right-0 text-center lg:text-left text-6xl sm:text-7xl lg:text-9xl font-black text-gray-100 select-none pointer-events-none tracking-widest uppercase z-0 overflow-hidden">
          Բաց մի թող
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-12 items-start">
          
          {/* ձախ կողմի մեծ հոդվածը */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="overflow-hidden shadow-sm">
              <img
                src="https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg"
                alt="EvocaINVEST"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-3 pt-3">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#7100e2] inline-block"></span>
                <span className="text-gray-900 font-bold text-xs uppercase tracking-wide">Ներդրումներ</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                EvocaINVEST. ինչպե՞ս կատարել գործարքներ
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:
              </p>
              <div className="text-gray-400 text-sm font-medium pt-2">
                17.06.2024
              </div>
            </div>
          </div>

          {/* աջ կողմի 4 փոքր քարտերը (առանց նկարի hover մեծացման) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
            {sideNews.map((item, index) => (
              <Link to={item.path} key={index} className="flex flex-col space-y-3 group">
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
                  <h4 className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#7100e2] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-gray-400 text-xs font-medium pt-1">
                    {item.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
<ArticleSection />
<ArticleGrid />
<HeroBannerSection />
    </div>
  );
}