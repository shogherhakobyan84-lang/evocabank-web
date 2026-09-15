import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function PaymentSystems() {
  const subNavItems = [
    { title: 'Դրամական փոխանցումներ', path: '/transfers' },
    { title: 'Վճարային համակարգեր', path: '/transfers/payment-systems' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Մանուշակագույն ենթամենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => {
            const isActive = item.path === '/transfers/payment-systems';
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={`px-7 py-4.5 text-[15px] font-bold transition-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'text-white/90'
                }`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-8 pt-8 pb-20">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-10 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500">Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500">Փոխանցումներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Վճարային համակարգեր</span>
        </div>

        {/* Էջի Վերնագիր */}
        <h1 className="text-3xl lg:text-[40px] font-extrabold text-[#1a202c] mb-12 tracking-tight">
          Վճարային համակարգեր
        </h1>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. MoneyTun */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png" 
                  alt="MoneyTun" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումը` հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              <p className="text-sm font-bold text-[#7100e2] mb-2 leading-relaxed">MoneyTun Հաճախորդների սպասարկման հեռախոսահամար`</p>
              <p className="text-[18px] font-extrabold text-gray-900 mb-4">+374 10 27 72 85</p>
              <p className="text-sm font-medium text-gray-700 leading-loose">
                Աշխատանքային գրաֆիկ`<br />
                Երկուշաբթի-ուրբաթ 10:00-17:30<br />
                Շաբաթ՝ 10:00-14:00<br />
                Կիրակի՝ 10:00-13:00
              </p>
            </div>
          </div>

          {/* 2. RIA */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png" 
                  alt="RIA" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում։ Փոխանցումները կատարվում են դոլարով և եվրոյով։ Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանված սակագների։
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              <p className="text-sm font-bold text-[#7100e2] mb-2 leading-relaxed">Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար`</p>
              <p className="text-[18px] font-extrabold text-gray-900 mb-4">+374 94 23 59 00</p>
              <p className="text-sm font-medium text-gray-700 leading-loose">
                Աշխատանքային գրաֆիկ՝ երկուշաբթի-ուրբաթ, 09:00-18:00<br />
                Հաճախորդների աջակցության լեզուներ՝ ռուսերեն, անգլերեն
              </p>
            </div>
          </div>

          {/* 3. UBPay */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png" 
                  alt="UBPay" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                UBPay - ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար։ Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ։
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              <p className="text-sm font-bold text-[#7100e2] mb-2 leading-relaxed">UBPay Հաճախորդների սպասարկման հեռախոսահամար`</p>
              <p className="text-[18px] font-extrabold text-gray-900">+374 43 00 49 35</p>
            </div>
          </div>

          {/* 4. IntelExpress */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png" 
                  alt="IntelExpress" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն): Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով։ Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանված սակագների։
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              <p className="text-sm font-bold text-[#7100e2] mb-2 leading-relaxed">INTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար`</p>
              <p className="text-[18px] font-extrabold text-gray-900">+995 32 2 49 25 25</p>
            </div>
          </div>

          {/* 5. USend (Stak) */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png" 
                  alt="USend / Stak" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                «USAK» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակն է ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է։ Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և եվրոյով:
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              {/* Դատարկ վանդակ */}
            </div>
          </div>

          {/* 6. MoneyGram */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-28 flex items-center justify-center mb-6">
                <img 
                  src="https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png" 
                  alt="MoneyGram" 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <p className="text-[#222222] font-medium text-[17.5px] leading-[1.8] text-center mb-8">
                Գործում է 170 երկրի ավելի քան 125,000 կետերում։ Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար։ Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանված սանդղակի։
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto text-center">
              <p className="text-sm font-bold text-[#7100e2] mb-2 leading-relaxed">MoneyGram Հաճախորդների սպասարկման հեռախոսահամար`</p>
              <p className="text-[18px] font-extrabold text-gray-900">1-800-926-9400</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}