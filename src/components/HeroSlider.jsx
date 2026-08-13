import React, { useState, useEffect } from 'react';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: 'Օնլայն ավանդ EvocaTOUCH\nhավելվածով',
      description: "Դի'ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
      buttonText: 'Ծանոթանալ պայմաններին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
      bgColor: '#f8eefe',
      isDark: false,
    },
    {
      id: 2,
      title: 'Evoca Travel Card',
      description: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
      bgColor: '#dedee0',
      isDark: false,
    },
    {
      id: 3,
      title: 'Evoca Աշխատավարձային\nՆախագիծ',
      description: 'Բեր աշխատավարձդ Evoca: Տար շատ ավելին...',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png',
      bgColor: '#4a2380',
      isDark: true,
    },
    {
      id: 4,
      title: 'Կարճ հեռախոսահամար՝ 8444',
      description: 'Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
      bgColor: '#08010a',
      isDark: true,
    },
    {
      id: 5,
      title: 'Visa Vision',
      description: 'Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg',
      bgColor: '#27292b',
      isDark: true,
    },
    {
      id: 6,
      title: 'Visa Infinite',
      description: 'Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png',
      bgColor: '#101010',
      isDark: true,
    },
    {
      id: 7,
      title: 'Հիփոթեքային վարկեր Evocabank-ում`\nամենահարմար պայմաններով',
      description: 'Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
      bgColor: '#e3d2f8',
      isDark: false,
    },
    {
      id: 8,
      title: 'UnionPay Gold',
      description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը',
      buttonText: 'Իմանալ ավելին',
      image: 'https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png',
      bgColor: '#f8eefe',
      isDark: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
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
    <div
      style={{ backgroundColor: current.bgColor }}
      className="w-full rounded-bl-[100px] lg:rounded-bl-[150px] transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[480px] flex flex-col justify-between py-10">
        
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-between my-auto">
          
          {/* Left Text Box */}
          <div className="w-full md:w-1/2 space-y-6 z-10 pr-0 md:pr-6">
            <h1
              className={`text-3xl md:text-5xl font-black leading-[1.25] whitespace-pre-line tracking-tight transition-colors duration-300 ${
                current.isDark ? 'text-white' : 'text-[#212121]'
              }`}
            >
              {current.title}
            </h1>
            <p
              className={`text-base md:text-lg font-medium leading-relaxed max-w-lg transition-colors duration-300 ${
                current.isDark ? 'text-gray-300' : 'text-[#555555]'
              }`}
            >
              {current.description}
            </p>
            <div className="pt-2">
              <button
                className={`font-bold px-8 py-3.5 rounded-full shadow-md transition duration-200 cursor-pointer text-sm ${
                  current.isDark
                    ? 'bg-white text-[#8c25e8] hover:bg-gray-100'
                    : 'bg-[#8c25e8] text-white hover:bg-[#781fd0]'
                }`}
              >
                {current.buttonText}
              </button>
            </div>
          </div>

          {/* Right Image Container - Fully Integrated */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end items-center z-10">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full max-w-[560px] h-auto max-h-[460px] object-contain transition-all duration-500"
            />
          </div>

        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-center space-x-3 z-20 pt-6">
          <button
            onClick={prevSlide}
            className={`transition text-xl font-bold px-2 cursor-pointer ${
              current.isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-[#8c25e8]'
            }`}
          >
            &larr;
          </button>

          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? `w-7 ${current.isDark ? 'bg-white' : 'bg-[#8c25e8]'}`
                  : `w-2.5 ${current.isDark ? 'bg-white/40 hover:bg-white/70' : 'bg-gray-300 hover:bg-gray-400'}`
              }`}
            />
          ))}

          <button
            onClick={nextSlide}
            className={`transition text-xl font-bold px-2 cursor-pointer ${
              current.isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-[#8c25e8]'
            }`}
          >
            &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}