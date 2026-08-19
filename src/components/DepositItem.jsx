import React from 'react';

export const depositsData = [
  {
    id: 1,
    title: 'Դասական ավանդ',
    image: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
    description: 'Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:',
    features: [
      { label: 'Գումար', value: '100,000 ֏', prefix: 'Սկսած' },
      { label: 'Ժամկետ', value: '31-1,825 օր' },
      { label: 'Տոկոսադրույք', value: '10.5% ֏', prefix: 'մինչև' },
      { label: 'Համալրման հնարավորություն', value: '100,000 ֏', prefix: 'սկսած' }
    ]
  },
  {
    id: 2,
    title: 'Մանկական ավանդ',
    image: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
    description: 'Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից` երեխաների անունով ներդնելու պայմանով:',
    features: [
      { label: 'Գումար', value: '100,000 ֏', prefix: 'Սկսած' },
      { label: 'Ժամկետ', value: '18 լրանալը', prefix: 'մինչև' },
      { label: 'Տոկոսադրույք', value: '9.5% ֏' },
      { label: 'Համալրման հնարավորություն', value: '40,000 ֏', prefix: 'սկսած' }
    ]
  },
  {
    id: 3,
    title: 'Ավանդ Evoca Online',
    image: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
    description: 'Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:',
    features: [
      { label: 'Գումար', value: '100,000 ֏', prefix: 'Սկսած' },
      { label: 'Ժամկետ', value: '31-1,825 օր' },
      { label: 'Տոկոսադրույք', value: '10.75% ֏', prefix: 'մինչև' }
    ]
  }
];

export default function DepositItem({ deposit }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 pb-16 border-b border-gray-100 last:border-b-0">
      <div className="w-full lg:w-[415px] shrink-0">
        <img 
          src={deposit.image} 
          alt={deposit.title} 
          className="w-full max-w-[415px] h-auto object-contain rounded-2xl shadow-sm"
        />
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          {deposit.title}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          {deposit.description}
        </p>

        {deposit.features && deposit.features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {deposit.features.map((feat, index) => (
              <div key={index} className="flex flex-col">
                {feat.prefix && (
                  <span className="text-xs text-gray-500 font-medium mb-1">
                    {feat.prefix}
                  </span>
                )}
                <span className="text-2xl font-extrabold text-[#7100e2] mb-2">
                  {feat.value}
                </span>
                <span className="text-xs text-gray-500 leading-snug">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <button className="px-7 py-3 bg-[#f1e8fc] text-[#7100e2] hover:bg-[#e4d4f8] rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer flex items-center space-x-2">
          <span>Մանրամասն</span>
          <span className="text-lg leading-none">›</span>
        </button>
      </div>
    </div>
  );
}