import React from 'react';

export const cardsData = [
  {
    id: 1,
    title: 'Evoca Travel Card',
    category: ['Mastercard'],
    image: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg',
    description: 'Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։',
    features: [
      { label: 'Cashback արտասահմանում իրականացրած վճարումների համար', value: '1.5%', prefix: 'Մինչև' },
      { label: 'Lounge Key սրահներ քեզ և հյուրերիդ համար', value: '6 մուտք', prefix: 'Անվճար' },
      { label: 'Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար', value: '6 անգամ', prefix: 'Անվճար' },
      { label: 'Քարտի տարեկան սպասարկում', value: '16․000֏' }
    ]
  },
  {
    id: 2,
    title: 'Evoca Visa Platinum',
    category: ['Պրեմիում', 'Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
    description: 'Պրեմիում առավելություններ պրեմիում քարտով։',
    features: [
      { label: 'Սպասարկման վճար', value: '30.000 ֏' },
      { label: 'Օդանավակայանների բիզնես սրահներ', value: '6 մուտք', prefix: 'Անվճար' }
    ]
  },
  {
    id: 3,
    title: 'Wilco Visa Infinite',
    category: ['Պրեմիում', 'Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
    description: 'Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։',
    features: []
  },
  {
    id: 4,
    title: 'Evoca Gift Card',
    category: ['Նվեր քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
    description: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:',
    features: []
  },
  {
    id: 5,
    title: 'Digital Gift Card',
    category: ['Նվեր քարտեր', 'Թվային քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
    description: 'Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ։ Մենք առաջարկում ենք իդեալական նվերի տարբերակ։',
    features: []
  },
  {
    id: 6,
    title: 'Visa Infinite',
    category: ['Պրեմիում', 'Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
    description: 'Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '1%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '1.2%', note: 'min 2,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1.5%' },
      { label: 'Տարեկան սպասարկում', value: '100,000 ֏' }
    ]
  },
  {
    id: 7,
    title: 'Visa Vision',
    category: ['Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    description: 'Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:',
    features: []
  },
  {
    id: 8,
    title: 'Mastercard World Digital',
    category: ['Թվային քարտեր', 'Mastercard'],
    image: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
    description: 'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '2%' },
      { label: 'Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով', value: '2.5%' },
      { label: 'Միանվագ', value: '1000 ֏' }
    ]
  },
  {
    id: 9,
    title: 'UnionPay Business Platinum',
    category: ['Պրեմիում', 'UnionPay'],
    image: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
    description: 'Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:',
    features: [
      { label: 'Կանխիկացում', value: '0.5%' },
      { label: 'Քարտի ժամկետ', value: '5 տարի' },
      { label: 'Տարեկան սպասարկման վճար', value: '15000 ֏' },
      { label: 'Կիրառություն', value: 'Ամենուր' }
    ]
  },
  {
    id: 10,
    title: 'MyLer Gift Card',
    category: ['Նվեր քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
    description: 'Մեկ քարտ, անսահմանափակ արկածներ:',
    features: []
  },
  {
    id: 11,
    title: 'UnionPay Gold',
    category: ['UnionPay'],
    image: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
    description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:',
    features: [
      { label: 'Կանխիկացում', value: '0.5%' },
      { label: 'Քարտի ժամկետ', value: '5 տարի' },
      { label: 'Տարեկան սպասարկման վճար', value: '15000 ֏' },
      { label: 'Կիրառություն', value: 'Ամենուր' }
    ]
  },
  {
    id: 12,
    title: '4U.am Gift card',
    category: ['Նվեր քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
    description: 'Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։',
    features: []
  },
  {
    id: 13,
    title: 'Mastercard Gold',
    category: ['Mastercard'],
    image: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
    description: 'Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏', value: '0%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '0.8%', note: 'min 1,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1%' },
      { label: 'Տարեկան սպասարկում', value: '15․000 ֏' }
    ]
  },
  {
    id: 14,
    title: 'Mastercard Standard',
    category: ['Mastercard'],
    image: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
    description: 'Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում մինչև 1 մլն ֏', value: '0%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '0.8%', note: 'min 1,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1%' },
      { label: 'Քարտի տարեկան սպասարկում', value: '5000 ֏' }
    ]
  },
  {
    id: 15,
    title: 'Visa Digital',
    category: ['Թվային քարտեր', 'Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    description: 'Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '2%' },
      { label: 'Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք', value: '4%', prefix: 'մինչև' },
      { label: 'Միանվագ սպասարկում', value: '1000 ֏' },
      { label: 'Քեշբեք', value: '0.5%', prefix: 'մինչև' }
    ]
  },
  {
    id: 16,
    title: 'Visa Classic',
    category: ['Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    description: 'Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '0.2%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '0.8%', note: 'min 1,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1%' },
      { label: 'Տարեկան սպասարկում', value: '5,000 ֏' }
    ]
  },
  {
    id: 17,
    title: 'Arca Classic',
    category: ['ArCa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    description: 'Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։',
    features: [
      { label: 'Քարտերով կանխիկի տրամադրում Բանկի ATM-ով', value: '0.5%', prefix: 'Արտարժույթ' },
      { label: 'Քարտերով կանխիկի տրամադրում Բանկի ATM-ով', value: '0.2%', prefix: 'մինչև 300,000 ֏` անվճար' },
      { label: 'Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի այլ բանկերի ATM-ով և POS-ով', value: '1%' },
      { label: 'Տարեկան սպասարկում', value: '1500 ֏' }
    ]
  },
  {
    id: 18,
    title: 'Visa Business',
    category: ['Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
    description: 'Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '0.2%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '0.8%', note: 'min 1,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1%' },
      { label: 'Բանկի տարածքում քարտային հաշվից կանխիկի տրամադրում', value: '0.2%' }
    ]
  },
  {
    id: 19,
    title: 'Dalma Gift Card',
    category: ['Նվեր քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
    description: 'Նվեր ընտրելն այլևս դժվար չէ:',
    features: []
  },
  {
    id: 20,
    title: 'Rio Gift Card',
    category: ['Նվեր քարտեր'],
    image: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
    description: 'Ամեն ինչ մեկ նվեր քարտում',
    features: []
  },
  {
    id: 21,
    title: 'Visa Gold',
    category: ['Visa'],
    image: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
    description: 'Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից',
    features: [
      { label: 'Կանխիկացում բանկի կանխիկացման կետերում', value: '0.2%' },
      { label: 'Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում', value: '0.8%', note: 'min 1,500 ֏' },
      { label: 'Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում', value: '1%' },
      { label: 'Տարեկան սպասարկում', value: '15,000 ֏' }
    ]
  }
];

export default function CardItem({ card }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 pb-16 border-b border-gray-100 last:border-b-0">
      <div className="w-full lg:w-[415px] shrink-0">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full max-w-[415px] h-auto object-contain rounded-2xl shadow-sm"
        />
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          {card.title}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
          {card.description}
        </p>

        {card.features && card.features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {card.features.map((feat, index) => (
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
                {feat.note && (
                  <span className="text-[11px] text-gray-400 mt-0.5">
                    {feat.note}
                  </span>
                )}
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