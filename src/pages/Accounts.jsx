import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApplySection from '../components/ApplySection';
import InfoAccordion from '../components/InfoAccordion';

export default function Accounts() {
  const subNavItems = [
    { title: 'Հաշիվների բացում և սպասարկում', path: '/accounts' },
    { title: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/accounts/unallocated-metal' },
    { title: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/accounts/non-resident' },
    { title: 'Պահատուփեր', path: '/accounts/safes' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/accounts'}
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
          <span>Հաշիվներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Հաշիվների բացում և սպասարկում</span>
        </div>

        {/* Գլխավոր բանները */}
        <div className="my-10 relative">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ՝ Տեքստի ֆոնը */}
            <div className="w-full lg:w-[55%] bg-[#f5f6f8] py-16 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Հաշիվների բացում և <br className="hidden sm:inline" /> սպասարկում
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-[1.7] max-w-[480px]">
                Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք:
              </p>
            </div>

            {/* Աջ բլոկ՝ Նկարը */}
            <div className="w-full lg:w-[52%] z-20 lg:-ml-12 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
                alt="Հաշիվների բացում և սպասարկում" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover shadow-none rounded-none"
              />
            </div>

          </div>
        </div>

        {/* Պայմանագրային փոխհարաբերությունների տեքստը (լայնացված max-w-[1100px]-ով) */}
        <div className="mt-20 mb-16 flex justify-center w-full">
          <p className="text-[#1a1d20] text-[16px] lg:text-[17px] font-normal leading-[1.7] text-left max-w-[1100px] w-full">
            Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված' բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ{' '}
            <a 
              href="#terms" 
              className="text-[#7100e2] font-bold underline decoration-[#7100e2] decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
            >
              այստեղ
            </a>
            :
          </p>
        </div>
          <ApplySection />
          <InfoAccordion />
      </div>
    </div>
  );
}