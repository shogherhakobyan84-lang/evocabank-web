import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SecuritiesAccordion from '../components/SecuritiesAccordion';
import LatestNews from '../components/LatestNews';
export default function Securities() {
  const subNavItems = [
    { title: 'Ներդրումային ծառայություններ', path: '/securities' },
    { title: 'Պարտատոմսեր', path: '/securities/bonds' },
    { title: 'ՀԿՊ ծառայություններ', path: '/securities/depository' },
    { title: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/securities/repo' },
    { title: 'EvocaINVEST', path: '/securities/evocainvest' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Sticky Sub-Navbar */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/securities'}
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
      <div className="max-w-[1400px] mx-auto px-8 pt-8 pb-20">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0 hover:text-[#7100e2] transition-colors"
            title="Գլխավոր էջ"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span>Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span>Արժեթղթեր</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Ներդրումային ծառայություններ</span>
        </div>

        {/* Գլխավոր Banner-ի հատվածը */}
        <div className="my-10 relative">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-16 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Ներդրումային <br className="hidden sm:inline" /> ծառայություններ
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-[1.7] max-w-[440px]">
                Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան։
              </p>
            </div>

            {/* Աջ բլոկ */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                alt="Ներդրումային ծառայություններ" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none shadow-none"
              />
            </div>

          </div>
        </div>

        {/* Քո տված layout-ով դասավորված տեքստային հատվածը */}
        <div className="mt-20 mb-16 flex justify-center w-full">
          <div className="max-w-[1100px] w-full px-4 sm:px-0">
            
            <div className="space-y-6 text-[#334155] text-[17px] lg:text-[18px] font-normal leading-[1.75]">
              <p>
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>

              <div>
                <h2 className="text-[20px] lg:text-[22px] font-bold text-[#7100e2] mb-3">
                  Ինչպե՞ս դառնալ հաճախորդ․
                </h2>
                <p className="mb-3">
                  Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ{' '}
                  <a 
                    href="#" 
                    className="text-[#7100e2] font-bold underline underline-offset-4 decoration-[#7100e2] decoration-2 hover:opacity-80 transition-opacity"
                  >
                    այստեղ
                  </a>։
                </p>
                <p>
                  Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
                </p>
              </div>

              <div>
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#7100e2] mb-1">
                  Հասցե՝
                </h3>
                <p>Երևան, Հանրապետության 44/2</p>
              </div>

              <div>
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#7100e2] mb-2">
                  Հետադարձ կապ՝
                </h3>
                <p className="font-bold text-[#1e293b]">
                  Հեռ.՝ 374 33 777 453 <br />
                  <span className="ml-[48px]">374 33 603 055</span>
                </p>
                
                {/* Social icons */}
                <div className="flex items-center space-x-2 my-3">
                  <a href="#" className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[11px] font-bold">W</a>
                  <a href="#" className="w-6 h-6 rounded-full bg-[#0088cc] flex items-center justify-center text-white text-[11px] font-bold">T</a>
                  <a href="#" className="w-6 h-6 rounded-full bg-[#7360f2] flex items-center justify-center text-white text-[11px] font-bold">V</a>
                </div>

                <p className="mt-3">
                  Էլ․ հասցե՝{' '}
                  <a 
                    href="mailto:investsecurities@evoca.am" 
                    className="text-[#7100e2] font-bold underline underline-offset-4 decoration-[#7100e2] decoration-2 hover:opacity-80 transition-opacity"
                  >
                    investsecurities@evoca.am
                  </a>
                </p>
              </div>

              <div className="pt-6">
                <p className="text-[16px] lg:text-[17px] leading-[1.7]">
                  <strong className="text-[#7100e2] font-extrabold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</strong> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված <strong>ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱՃՈՐԴԸ</strong>: Բանկը <strong>ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ</strong> հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
                </p>
              </div>

            </div>
          </div>
        </div>
          <SecuritiesAccordion />
          <LatestNews />
      </div>
    </div>
  );
}