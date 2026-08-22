import React from 'react';
import { Link } from 'react-router-dom';
import EvocaLatestNews from '../components/EvocaLatestNews';
import EvocaFaqAccordion from '../components/EvocaFaqAccordion';

export default function EvocaSalary() {
  return (
    <div className="w-full bg-white pb-20">
      <div className="max-w-[1340px] mx-auto px-4 md:px-6 pt-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="flex items-center">
            <svg
              className="w-4 h-4 fill-[#707070]"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span>›</span>
          <Link to="/" className="hover:text-[#6c11d2] transition-colors font-medium">
            Անհատ
          </Link>
          <span>›</span>
          <span className="text-gray-400 font-medium">EvocaSALARY</span>
        </div>

        {/* Banner Section */}
        <div className="my-6 relative">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-20 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              {/* Վերնագրի տառերը լայնացված են (tracking-widest) և տողերը ավելի ազատ (leading-loose) */}
              <h1 className="text-3xl lg:text-[38px] font-extrabold text-[#111111] mb-6 leading-loose uppercase tracking-widest">
                EVOCA <br /> ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-loose max-w-[460px] font-medium tracking-wide">
                Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ Պարզապես պետք է ընտրել Evocabank-ը։
              </p>
            </div>

            {/* Աջ բլոկ */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8 overflow-hidden rounded-none">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
                alt="EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none"
              />
            </div>

          </div>
        </div>

        {/* Տեքստային բովանդակություն */}
        <div className="mt-28 max-w-[1000px] mr-auto pl-10 md:pl-20 pr-4 text-[#2b2b2b] text-base md:text-lg leading-loose space-y-10 font-medium">
          
          <p className="text-gray-800 font-medium tracking-wide">
            Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ <span className="font-extrabold text-[#6c11d2]">նոր հնարավորություններ ու առավելություններ</span>:
          </p>

          {/* Բլոկ 1: Mastercard Gold */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#6c11d2] mb-4 tracking-wide">
              Բեր աշխատավարձդ Evoca, Տար անվճար <span className="underline">Mastercard Gold</span>
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Պրեմիում դասի քարտ</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Հասանելի ամբողջ աշխարհում</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Գումարի անվտանգության բարձր մակարդակ</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Դրական մնացորդի նկատմամբ <strong className="font-extrabold text-[#6c11d2]">2% տարեկան տոկոսադրույք</strong></span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 2: Evoca Travel Card */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#6c11d2] mb-4 tracking-wide">
              Բեր աշխատավարձդ Evoca, Տար 50% զեղչով <span className="underline">Evoca Travel Card</span>
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">1.5% cashback</strong> արտասահմանում իրականացրած վճարումների համար</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Անվճար <strong className="font-extrabold text-[#6c11d2]">6 մուտք</strong> Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Անվճար <strong className="font-extrabold text-[#6c11d2]">6 անգամ</strong> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Այլ ճամփորդական առավելություններ</span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 3: Բենեֆիթներ */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#6c11d2] mb-4 tracking-wide">
              Բեր աշխատավարձդ Evoca, Տար մի շարք <span className="underline">Բենեֆիթներ</span>
            </h2>
            <p className="mb-4 text-gray-800 font-medium">
              Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <strong className="font-extrabold text-[#6c11d2]">Evoca Benefits</strong> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">25% զեղչ</strong></span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">25% cashback</strong></span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                <span>Նվեր քարտեր</span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 4: Վարկեր */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#6c11d2] mb-6 tracking-wide">
              Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
            </h2>

            {/* Օվերդրաֆտ */}
            <div className="mb-6">
              <h3 className="text-lg font-extrabold text-[#6c11d2] underline mb-3">
                Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև աշխատավարձի <strong className="font-extrabold text-[#6c11d2]">15-ապատիկի չափով</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">10 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">60 ամիս</strong> մարման ժամկետ</span>
                </li>
              </ul>
            </div>

            {/* Ավտովարկ */}
            <div className="mb-6">
              <h3 className="text-lg font-extrabold text-[#6c11d2] underline mb-3">
                Ավտովարկ
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span><strong className="font-extrabold text-[#6c11d2]">0.5</strong>-ով ցածր տոկոսադրույք</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">50 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">84 ամիս</strong> մարման ժամկետ</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</span>
                </li>
              </ul>
            </div>

            {/* Անշարժ գույքի գրավով */}
            <div>
              <h3 className="text-lg font-extrabold text-[#6c11d2] underline mb-3">
                Անշարժ գույքի գրավով սպառողական վարկ
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span><strong className="font-extrabold text-[#6c11d2]">0.5</strong>-ով ցածր տոկոսադրույք</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">100 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6c11d2] mt-2 mr-3 shrink-0"></span>
                  <span>Մինչև <strong className="font-extrabold text-[#6c11d2]">120 ամիս</strong> մարման ժամկետ</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
    <EvocaLatestNews />
    <EvocaFaqAccordion />
      </div>
    </div>
  );
}