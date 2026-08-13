import React, { useState, useEffect } from 'react';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: 'Օնլայն ավանդ EvocaTOUCH\nhավելվածով',
      description: "Դի'ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
      buttonText: 'Ծանոթանալ պայմաններին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
      bgColor: 'bg-[#f4eef9]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 2,
      title: 'Evoca Travel Card',
      description: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
      bgColor: 'bg-[#e2e2e4]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 3,
      title: 'Evoca Աշխատավարձային\nՆախագիծ',
      description: 'Բեր աշխատավարձդ Evoca: Տար շատ ավելին...',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png',
      bgColor: 'bg-[#f4eef9]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 4,
      title: 'Կարճ հեռախոսահամար՝ 8444',
      description: 'Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
      bgColor: 'bg-[#000000]',
      textColor: 'text-white',
      descColor: 'text-gray-300',
      btnBg: 'bg-white hover:bg-gray-100 text-[#8c25e8]',
      dotColor: 'bg-white',
    },
    {
      id: 5,
      title: 'Visa Vision',
      description: 'Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg',
      bgColor: 'bg-[#f4eef9]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 6,
      title: 'Visa Infinite',
      description: 'Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png',
      bgColor: 'bg-[#0a0a0a]',
      textColor: 'text-white',
      descColor: 'text-gray-300',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 7,
      title: 'Հիփոթեքային վարկեր Evocabank-ում`\nամենահարմար պայմաններով',
      description: 'Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
      bgColor: 'bg-[#f4eef9]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
    {
      id: 8,
      title: 'UnionPay Gold',
      description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png',
      bgColor: 'bg-[#f4eef9]',
      textColor: 'text-[#2d2d2d]',
      descColor: 'text-[#555555]',
      btnBg: 'bg-[#8c25e8] hover:bg-[#781fd0] text-white',
      dotColor: 'bg-[#8c25e8]',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <div className={`w-full ${current.bgColor} rounded-bl-[100px] lg:rounded-bl-[160px] pt-12 pb-6 relative overflow-hidden transition-colors duration-500`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-[460px]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10 pr-4">
          <h1 className={`text-3xl md:text-5xl font-black ${current.textColor} leading-[1.2] whitespace-pre-line tracking-tight transition-colors duration-300`}>
            {current.title}
          </h1>
          <p className={`${current.descColor} text-lg md:text-xl font-medium leading-relaxed max-w-lg transition-colors duration-300`}>
            {current.description}
          </p>
          <div className="pt-2">
            <button className={`${current.btnBg} font-bold px-8 py-3.5 rounded-full shadow-md transition duration-200 cursor-pointer text-sm`}>
              {current.buttonText}
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end items-center z-10">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full max-w-[620px] h-auto max-h-[500px] object-contain transition-all duration-500"
          />
        </div>

      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center space-x-3 z-20 relative pt-8 pb-2">
        <button
          onClick={prevSlide}
          className={`${current.textColor} opacity-70 hover:opacity-100 transition text-xl font-bold px-2 cursor-pointer`}
        >
          &larr;
        </button>

        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? `w-7 ${current.dotColor}`
                : 'w-2.5 bg-gray-400/50 hover:bg-gray-400'
            }`}
          />
        ))}

        <button
          onClick={nextSlide}
          className={`${current.textColor} opacity-70 hover:opacity-100 transition text-xl font-bold px-2 cursor-pointer`}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}