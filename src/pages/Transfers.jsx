import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Transfers() {
  const subNavItems = [
    { title: 'Դրամական փոխանցումներ', path: '/transfers' },
    { title: 'Վճարային համակարգեր', path: '/transfers/payment-systems' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Sub-navigation bar (Sticky) */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/transfers'}
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

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-8 pt-8 pb-16">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2.5 font-normal">
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
          <span>Փոխանցումներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Դրամական փոխանցումներ</span>
        </div>

        {/* Գլխավոր բանները (Banner Section) */}
        <div className="my-10 relative">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ՝ Տեքստի բաց ֆոնը */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-16 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Դրամական <br className="hidden sm:inline" /> փոխանցումներ
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-[1.7] max-w-[440px]">
                Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:
              </p>
            </div>

            {/* Աջ բլոկ՝ Լայնացված նկարը՝ դեպի մեջտեղ տեղափոխված */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                alt="Դրամական փոխանցումներ" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none shadow-none"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}