import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function UnallocatedMetalAccounts() {
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
            const isActive = item.path === '/accounts/unallocated-metal';
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
          <span className="text-gray-900 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
        </div>

        {/* Հիմնական բովանդակություն՝ Ձախում ֆոնով տեքստ, աջում՝ նկարը */}
        <div className="my-10 relative overflow-visible">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ՝ Տեքստի ֆոնը */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-16 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Առարկայազուրկ <br className="hidden sm:inline" /> մետաղական հաշիվներ
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-[1.7] max-w-[440px]">
                Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար։ Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ։
              </p>
            </div>

            {/* Աջ բլոկ՝ Նկարը */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" 
                alt="Առարկայազուրկ մետաղական հաշիվներ" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none shadow-none"
              />
            </div>

          </div>
        </div>

        {/* Հիմնական պայմաններ բաժին (ավելի նեղացրած, խոշոր տառերով և մեծ մանուշակագույն կետերով) */}
        <div className="mt-20 max-w-[1050px] mx-auto">
          <h2 className="text-2xl lg:text-[32px] font-bold text-[#222222] mb-8">
            Հիմնական պայմաններ
          </h2>

          <ul className="space-y-6 text-[#222222] text-[17px] lg:text-[18px] leading-[1.75] list-disc pl-6 marker:text-[#7100e2] marker:text-2xl">
            <li>
              Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն <span className="font-bold">999.9 հարգի ոսկով</span>, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած <span className="font-bold">31 գրամից</span> (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:
            </li>
            <li>
              Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):
            </li>
            <li>
              Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:
            </li>
            <li>
              Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝
              <ul className="list-disc pl-6 mt-3 space-y-2.5 marker:text-[#7100e2] marker:text-xl">
                <li>հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,</li>
                <li>հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</li>
              </ul>
            </li>
            <li>
              Մետաղական հաշիվները կարող են գրավադրվել:
            </li>
            <li>
              Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝
              <ul className="list-disc pl-6 mt-3 space-y-2.5 marker:text-[#7100e2] marker:text-xl">
                <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                <li>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</li>
                <li>Մեր պահանջով այլ փաստաթղթեր:</li>
              </ul>
            </li>
            <li>
              Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ{' '}
              <a href="#terms" className="text-[#7100e2] font-bold underline decoration-[#7100e2] decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
                այստեղ
              </a>
              :
            </li>
            <li>
              Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝ ամենահարմար պայմաններով։ Ոսկու գրավով վարկը տրամադրվում է ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
            </li>
          </ul>

          {/* Ուշադրություն բլոկ (կարմիր գույնը հանված) */}
          <div className="mt-8 text-[#222222] text-[17px] lg:text-[18px] leading-[1.75]">
            <span className="font-bold text-[#222222]">Ուշադրություն.</span> Ավանդների հատուցումը երաշխավորող հիմնադրամը չի հատուցում մետաղական հաշիվները:
          </div>
        </div>

      </div>
    </div>
  );
}