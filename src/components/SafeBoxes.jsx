import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function SafeBoxes() {
  const subNavItems = [
    { title: 'Հաշիվների բացում և սպասարկում', path: '/accounts' },
    { title: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/accounts/unallocated-metal' },
    { title: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/accounts/non-resident' },
    { title: 'Պահատուփեր', path: '/accounts/safes' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Մանուշակագույն ենթամենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => {
            const isActive = item.path === '/accounts/safes';
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={`px-7 py-4.5 text-[15px] font-bold transition-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'text-white/90 hover:bg-[#5e00bd]'
                }`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-8 pt-8 pb-16">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500 font-normal">Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500 font-normal">Հաշիվներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Պահատուփեր</span>
        </div>

        {/* Հիմնական բովանդակություն՝ Ձախում տեքստ, աջում՝ նկար */}
        <div className="my-10 relative overflow-visible">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ՝ Տեքստ */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-20 lg:py-24 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Անհատական <br /> պահատուփեր
              </h1>
              <p className="text-[#4a5568] text-lg lg:text-[19px] leading-[1.7] max-w-[440px]">
                Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր։
              </p>
            </div>

            {/* Աջ բլոկ՝ Նկար */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17793417530511/780x585.jpg" 
                alt="Անհատական պահատուփեր" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover"
              />
            </div>

          </div>
        </div>

        {/* Խոշորացված տեքստային բլոկ */}
        <div className="max-w-[1100px] mx-auto mt-20 mb-16 space-y-6 text-[#1a202c] text-[18px] lg:text-[20px] font-normal leading-[1.8]">
          <p>
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>
          <p>
            Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային ստանդարտներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող է գտնվել մինչև 15 րոպե:
          </p>
          <p>
            Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ:
          </p>
          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք Ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալու օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
          </p>
          <p>
            Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ պայմանագրային կարգով:
          </p>
          <p className="pt-4 font-medium">
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
          </p>
        </div>

        {/* Աղյուսակ 1: Չհրկիզվող անհատական պահարանների վարձակալման սակագներ */}
        <div className="max-w-[1100px] mx-auto mt-16">
          <h2 className="text-xl lg:text-[24px] font-extrabold text-[#1a1d20] mb-6 tracking-wide">
            Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f8f9fa]">
                  <th className="py-3.5 px-5 font-bold text-[#1a202c] text-[15px] w-1/4">Ժամկետ</th>
                  <th className="py-3.5 px-5 font-bold text-[#1a202c] text-[15px] text-center" colSpan="3">Պահարանի չափերը</th>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f8f9fa] text-gray-500 text-[14px] font-semibold">
                  <th className="py-2.5 px-5"></th>
                  <th className="py-2.5 px-5 text-center">փոքր</th>
                  <th className="py-2.5 px-5 text-center">միջին</th>
                  <th className="py-2.5 px-5 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-[#2d3748] text-[15px]">
                <tr>
                  <td className="py-3 px-5 font-medium">14 օր</td>
                  <td className="py-3 px-5 text-center">5,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">7,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">1 ամիս</td>
                  <td className="py-3 px-5 text-center">7,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">10,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">12,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">3 ամիս</td>
                  <td className="py-3 px-5 text-center">10,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">15,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">6 ամիս</td>
                  <td className="py-3 px-5 text-center">15,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">20,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">25,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">12 ամիս</td>
                  <td className="py-3 px-5 text-center">30,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">40,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Երկարաժամկետ</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պահարանի վնասում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Աղյուսակ 2: Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար */}
        <div className="max-w-[1100px] mx-auto mt-16">
          <h2 className="text-xl lg:text-[24px] font-extrabold text-[#1a1d20] mb-6 tracking-wide">
            Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f8f9fa]">
                  <th className="py-3.5 px-5 font-bold text-[#1a202c] text-[15px] w-1/4">Ժամկետ</th>
                  <th className="py-3.5 px-5 font-bold text-[#1a202c] text-[15px] text-center" colSpan="3">Պահարանի չափերը</th>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f8f9fa] text-gray-500 text-[14px] font-semibold">
                  <th className="py-2.5 px-5"></th>
                  <th className="py-2.5 px-5 text-center">փոքր</th>
                  <th className="py-2.5 px-5 text-center">միջին</th>
                  <th className="py-2.5 px-5 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-[#2d3748] text-[15px]">
                <tr>
                  <td className="py-3 px-5 font-medium">14 օր</td>
                  <td className="py-3 px-5 text-center">25,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">35,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">1 ամիս</td>
                  <td className="py-3 px-5 text-center">35,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">50,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">60,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">3 ամիս</td>
                  <td className="py-3 px-5 text-center">50,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">75,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">100,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">6 ամիս</td>
                  <td className="py-3 px-5 text-center">75,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">100,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">125,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">12 ամիս</td>
                  <td className="py-3 px-5 text-center">100,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">125,000 ՀՀ դրամ</td>
                  <td className="py-3 px-5 text-center">150,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Երկարաժամկետ</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                  <td className="py-3 px-5 text-center text-gray-500">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պահարանի վնասում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Պայմանագրի ժամկետի ավարտին բանալին չհանձնում</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 font-medium">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="py-3 px-5 text-center font-semibold text-[#7100e2]" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Նշում՝ Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
          </p>
        </div>

      </div>
    </div>
  );
}