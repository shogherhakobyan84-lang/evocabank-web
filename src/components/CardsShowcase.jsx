import React, { useState, useEffect, useRef } from 'react';

const cardsData = [
  { 
    id: 1,
    name: "Visa Gold", 
    img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    points: [
      "Ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցը",
      "Կընդգծի Ձեր յուրահատուկ կարգավիճակը բոլոր երկրներում"
    ]
  },
  { 
    id: 2,
    name: "Evoca Travel Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
    points: [
      "Ճամփորդիր ապահով և հարմարավետ Evocabank-ի հետ",
      "eSIM, ճամփորդական ապահովագրություն և VIP սպասարկում"
    ]
  },
  { 
    id: 3,
    name: "Evoca Visa Platinum", 
    img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
    points: [
      "Բացառիկ հնարավորություններ և պրեմիում սպասարկում",
      "Անվճար մուտք Lounge Key օդանավակայանների սրահներ"
    ]
  },
  { 
    id: 4,
    name: "Evoca Gift Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
    points: [
      "Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է",
      "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը",
      "Վճարիր ցանկացած POS և V-POS տերմինալով խանութներում ու սրճարաններում"
    ]
  },
  { 
    id: 5,
    name: "Digital Gift Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
    points: [
      "Նվիրիր թվային քարտ ակնթարթորեն՝ անմիջապես EvocaTOUCH հավելվածից",
      "Առանց բանկ այցելելու անհրաժեշտության"
    ]
  },
  { 
    id: 6,
    name: "Visa Infinite", 
    img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
    points: [
      "Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ",
      "Ապահովագրված ճամփորդություններ և VIP կարգավիճակ",
      "Կգոհացնի անգամ ամենապահանջկոտ հաճախորդին"
    ]
  },
  { 
    id: 7,
    name: "Visa Vision", 
    img: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
    points: [
      "0% կանխիկացում Evoca-ի բոլոր բանկոմատներից",
      "Cashback բոլոր անկանխիկ վճարումներից",
      "Դրական մնացորդի վրա գումարի կուտակում",
      "Վարկային սահմանաչափ` քո ցանկությամբ"
    ]
  },
  { 
    id: 8,
    name: "Mastercard World Digital", 
    img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
    points: [
      "Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի հավելվածում",
      "Անվտանգ օնլայն գնումներ ամբողջ աշխարհում"
    ]
  },
  { 
    id: 9,
    name: "UnionPay Business Platinum", 
    img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
    points: [
      "Ձեր բիզնեսի անխափան ֆինանսական կառավարումն ամբողջ աշխարհում",
      "Հատուկ սահմանաչափեր բիզնես ծախսերի համար"
    ]
  },
  { 
    id: 10,
    name: "MyLer Gift Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
    points: [
      "Հատուկ նվեր-քարտ լեռնադահուկային հանգստի սիրահարների համար",
      "Հարմարավետ վճարումներ Myler Mountain Resort-ում"
    ]
  },
  { 
    id: 11,
    name: "UnionPay Gold", 
    img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    points: [
      "Հուսալի վճարային միջոց Ասիայում և ամբողջ աշխարհում",
      "Լայն ընդունելիություն միջազգային առևտրի կետերում"
    ]
  },
  { 
    id: 12,
    name: "Mastercard Gold", 
    img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
    points: [
      "Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի ճանապարհորդությունները",
      "Ավիատոմսերի գնում, հյուրանոցների ամրագրում և մեքենաների վարձույթ"
    ]
  },
  { 
    id: 13,
    name: "Mastercard Standard", 
    img: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
    points: [
      "Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն",
      "Պարզ, անվտանգ և հարմարավետ վճարումներ"
    ]
  },
  { 
    id: 14,
    name: "Visa Classic", 
    img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
    points: [
      "Ունիվերսալ վճարային քարտ՝ հասանելի աշխարհի ցանկացած կետում 24/7",
      "Մինչև 20,000 ՀՀ դրամի անհպում գործարքներ՝ առանց PIN կոդի"
    ]
  },
  { 
    id: 15,
    name: "ArCa Classic", 
    img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
    points: [
      "Ձեռք բեր ArCa Classic քարտը մեր նորաոճ դիզայնով",
      "Քարտի ստացում առաքմամբ՝ առանց բանկ այցելելու"
    ]
  },
  { 
    id: 16,
    name: "Visa Business", 
    img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
    points: [
      "Մեկնեք գործուղման Evocabank-ի Visa Business քարտով",
      "Կազմակերպության միջոցները հասանելի են աշխարհի բոլոր կետերում"
    ]
  },
  { 
    id: 17,
    name: "Dalma Gift Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
    points: [
      "Dalma Gift Card-ը նվերի իդեալական տարբերակ է Dalma Garden Mall-ում",
      "Դու որոշում ես գումարը, նրանք՝ ընտրությունը"
    ]
  },
  { 
    id: 18,
    name: "Rio Gift Card", 
    img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
    points: [
      "Խնայիր ժամանակը և ունեցիր նվերի լավագույն տարբերակը",
      "Գնումներ Rio Mall-ի բոլոր խանութ-սրահներում"
    ]
  },
  { 
    id: 19,
    name: "Evoca Visa Platinum Extra", 
    img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    points: [
      "Ապահովում է Ձեր հարմարավետությունը և հաճելի դարձնում գնումները",
      "Հատուկ զեղչեր և արտոնություններ ամբողջ աշխարհում"
    ]
  }
];

const CardsShowcase = () => {
  const [scrollIndex, setScrollIndex] = useState(6); // Visa Vision որպես սկզբնական քարտ
  const [selectedIndex, setSelectedIndex] = useState(6);
  
  const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');
  const displayAreaRef = useRef(null);

  // 1. Ձախ կողմի դանդաղ ավտո-պտույտ (7 վայրկյանը մեկ)
  useEffect(() => {
    const timer = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % cardsData.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // 2. 3D Tilt էֆեկտ
  const handleMouseMove = (e) => {
    if (!displayAreaRef.current) return;
    const rect = displayAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -y / 15;
    const rotateY = x / 15;

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg)');
  };

  const handleSelectCard = (index) => {
    setSelectedIndex(index);
    setScrollIndex(index);
  };

  const handlePrev = () => {
    const newIdx = scrollIndex > 0 ? scrollIndex - 1 : cardsData.length - 1;
    setScrollIndex(newIdx);
    setSelectedIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = (scrollIndex + 1) % cardsData.length;
    setScrollIndex(newIdx);
    setSelectedIndex(newIdx);
  };

  const activeCard = cardsData[selectedIndex];
  const translateYValue = scrollIndex * 140;

  return (
    <section className="bg-[#f5f7fa] py-12 px-4 flex justify-center items-center overflow-hidden min-h-[650px]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

        {/* 1. ՁԱԽ ՄԱՍ. Ուղղահայաց Սլայդեր (19 քարտերով) */}
        <div className="flex flex-col items-center shrink-0">
          
          {/* Վերևի Սլաք */}
          <button 
            onClick={handlePrev}
            className="text-[#6a0dad] hover:scale-125 transition-transform py-3 px-2 cursor-pointer z-20 focus:outline-none"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 stroke-[#6a0dad] stroke-[3] fill-none" viewBox="0 0 24 24">
              <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Քարտերի Պատուհան */}
          <div className="h-[410px] w-52 overflow-hidden relative">
            <div 
              className="flex flex-col gap-5 transition-transform duration-700 ease-in-out absolute w-full top-0"
              style={{
                transform: `translateY(-${translateYValue}px)`
              }}
            >
              {cardsData.map((card, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleSelectCard(idx)}
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 select-none opacity-100"
                  >
                    {/* Քարտի Նկար - 100% պարզ */}
                    <div className={`w-40 h-24 flex items-center justify-center rounded-xl p-1 transition-all ${
                      isSelected ? 'scale-105' : 'scale-95'
                    }`}>
                      <img 
                        src={card.img} 
                        alt={card.name} 
                        className="w-full h-full object-contain filter-none"
                      />
                    </div>
                    
                    {/* Քարտի Անվանում */}
                    <span className={`text-xs mt-1.5 text-center font-semibold tracking-tight ${
                      isSelected ? 'text-[#111827] font-bold' : 'text-gray-500'
                    }`}>
                      {card.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ներքևի Սլաք */}
          <button 
            onClick={handleNext}
            className="text-[#6a0dad] hover:scale-125 transition-transform py-3 px-2 cursor-pointer z-20 focus:outline-none"
            aria-label="Next card"
          >
            <svg className="w-6 h-6 stroke-[#6a0dad] stroke-[3] fill-none" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* 2. ԿԵՆՏՐՈՆ. 3D Քարտ */}
        <div 
          ref={displayAreaRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex-1 flex flex-col items-center justify-center py-4 cursor-pointer [perspective:1000px]"
        >
          <div 
            className="w-[340px] sm:w-[430px] h-[210px] sm:h-[265px] transition-all duration-300 ease-out [transform-style:preserve-3d]"
            style={{ transform: transformStyle }}
          >
            <img 
              src={activeCard.img} 
              alt={activeCard.name} 
              className="w-full h-full object-contain rounded-2xl drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
            />
          </div>
          
          <div className="w-[280px] sm:w-[350px] h-3 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.12)_0%,_rgba(0,0,0,0)_70%)] mt-8 rounded-full" />
        </div>

        {/* 3. ԱՋ ՄԱՍ. Evocabank-ի ոճի տեքստեր ու մանուշակագույն կետիկներ */}
        <div className="w-full md:w-[420px] flex flex-col items-center md:items-start text-left gap-4">
          
          {/* Վերնագիր */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] tracking-tight">
            {activeCard.name}
          </h2>
          
          {/* Նախադասություն */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <span className="text-[#6a0dad] font-bold">Evocabank</span>-ը ներկայացնում է իր նոր՝ <span className="text-[#6a0dad] font-bold">{activeCard.name}</span> քարտը, որի հետ դու կստանաս՝
          </p>

          {/* Մանուշակագույն կետերով ցուցակ */}
          <ul className="flex flex-col gap-3 my-1">
            {activeCard.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6a0dad] mt-2 shrink-0" />
                <span className="text-sm sm:text-base text-gray-600 font-medium leading-snug">
                  {pt}
                </span>
              </li>
            ))}
          </ul>

          {/* Մանուշակագույն Կոճակ */}
          <button className="px-10 py-3 bg-[#6a0dad] hover:bg-[#580a91] text-white font-semibold text-sm rounded-full shadow-md shadow-[#6a0dad]/20 hover:shadow-lg transition-all duration-300 cursor-pointer mt-3">
            Մանրամասն
          </button>
        </div>

      </div>
    </section>
  );
};

export default CardsShowcase;