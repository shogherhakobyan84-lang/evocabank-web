import React from 'react';

export default function AboutBrand() {
  const colorsList = [
    { name: 'Սպիտակը խորհրդանշում է նորը։', bgClass: 'bg-white border-2 border-gray-300' },
    { name: 'Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը։', bgClass: 'bg-gray-500' },
    { name: 'Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության գույնն է։', bgClass: 'bg-[#7100e2]' }
  ];

  return (
    <div className="w-full bg-white py-20 px-8 lg:px-16">
      {/* Լայնությունը մի փոքր ավելացրել ենք՝ դարձնելով 1000px, որ ավելի ազատ լինի */}
      <div className="max-w-[1000px] mx-auto space-y-20">
        
        {/* 1. Բանկի լոգոտիպը */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Բանկի լոգոտիպը
          </h2>
          <p className="text-gray-700 text-[18px] lg:text-[19px] font-medium leading-relaxed mb-8">
            Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
          </p>
          <div className="w-full flex justify-center py-2">
            <img 
              src="https://online.evoca.am/OnlineBanking/Web/images/bank-logo-login.svg" 
              alt="Evocabank Logo" 
              className="max-w-[550px] w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 2. Բանկի բրենդբուքը */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Բանկի բրենդբուքը
          </h2>
          <p className="text-gray-700 text-[18px] lg:text-[19px] font-medium leading-relaxed mb-6">
            Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրերը:<br />
            Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար։
          </p>
          {/* Երկրորդ նկարը՝ պահպանված հարմար բարձրությամբ և նոր ազատ լայնությամբ */}
          <div className="w-full h-[220px] relative shadow-lg overflow-hidden rounded-md bg-gray-900 flex items-center justify-center">
            <img 
              src="https://www.evoca.am/file_manager/other/52.png" 
              alt="Evocabank Brandbook" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>

        {/* 3. Բանկի կորպորատիվ գույները */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Բանկի կորպորատիվ գույները
          </h2>
          <p className="text-gray-700 text-[18px] lg:text-[19px] font-medium leading-relaxed mb-8">
            Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
          </p>

          <div className="flex flex-col">
            {colorsList.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white border border-gray-200 py-4 px-6 flex items-center space-x-6 ${
                  idx === 0 ? 'rounded-t-md' : ''
                } ${
                  idx === colorsList.length - 1 ? 'rounded-b-md' : ''
                } ${
                  idx !== 0 ? 'border-t-0' : ''
                }`}
              >
                <div className={`w-7 h-7 rounded-full shrink-0 ${item.bgClass}`}></div>
                <p className="text-gray-700 text-[17px] lg:text-[18px] font-medium leading-relaxed">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}