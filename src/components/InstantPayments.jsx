import React, { useState } from 'react';

export default function InstantPayments() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ՀԱՅ');

  const topCards = [
    {
      title: 'EVOCABANK',
      img: 'https://resource.evoca.am/images/WebPayment/evoca.png',
    },
    {
      title: 'Միջազգային բջջային օպերատորներ',
      img: 'https://resource.evoca.am/images/WebPayment/international.png',
    },
    {
      title: 'Կոմունալ վճարումներ',
      img: 'https://resource.evoca.am/images/WebPayment/utility.png',
    },
    {
      title: 'Ինտերնետ և TV',
      img: 'https://resource.evoca.am/images/WebPayment/internettv.png',
    },
  ];

  const bottomCards = [
    {
      title: 'ՃՈ վճարներ',
      img: 'https://resource.evoca.am/images/WebPayment/roadpolice.png',
    },
    {
      title: 'Վարկային կազմակերպություններ',
      img: 'https://resource.evoca.am/images/WebPayment/loan.png',
    },
    {
      title: 'Միջոցառումներ',
      img: 'https://resource.evoca.am/images/WebPayment/event.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Վերնագիր (Header) */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-8 sm:px-16 flex items-center justify-between shadow-sm">
        {/* Լոգոն տեղափոխված ավելի աջ */}
        <div className="flex items-center space-x-6 pl-8">
          <img
            src="https://payments.evoca.am/assets/images/logo.png"
            alt="Evoca Logo"
            className="h-7 object-contain"
          />
          <span className="text-gray-400 text-sm font-normal border-l border-gray-200 pl-6 hidden sm:inline">
            Online payment
          </span>
        </div>

        {/* Աջ կողմի տարրերը տեղափոխված մի քիչ ձախ */}
        <div className="flex items-center space-x-6 pr-8">
          <span className="text-[#8c25e8] font-light text-sm tracking-wide">
            +374 10 605555
          </span>

          {/* Լեզուների ընտրության բլոկ (Գլոբուս) */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-[#8c25e8] transition cursor-pointer p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </button>

            {/* Dropdown բացվող ցանկ */}
            {langOpen && (
              <div className="absolute right-0 top-full w-24 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50 text-xs font-medium text-gray-700">
                <div className="px-3 py-1 text-[10px] text-gray-400 border-b border-gray-100 mb-1">
                  language
                </div>
                <button
                  onClick={() => { setCurrentLang('ՀԱՅ'); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-purple-50 hover:text-[#8c25e8] transition ${currentLang === 'ՀԱՅ' ? 'font-bold text-[#8c25e8]' : ''}`}
                >
                  ՀԱՅ
                </button>
                <button
                  onClick={() => { setCurrentLang('ENG'); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-purple-50 hover:text-[#8c25e8] transition ${currentLang === 'ENG' ? 'font-bold text-[#8c25e8]' : ''}`}
                >
                  ENG
                </button>
                <button
                  onClick={() => { setCurrentLang('ՌՈՒՍ'); setLangOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-purple-50 hover:text-[#8c25e8] transition ${currentLang === 'ՌՈՒՍ' ? 'font-bold text-[#8c25e8]' : ''}`}
                >
                  ՌՈՒՍ
                </button>
              </div>
            )}
          </div>

          {/* Պատմություն կոճակ */}
          <button className="bg-[#8c25e8] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-purple-700 transition shadow-sm">
            Պատմություն
          </button>
        </div>
      </header>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12">
        {/* Մեծացված և ներքև իջեցված Գլխավոր վերնագիր */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 mt-4">
          Գլխավոր
        </h2>

        {/* Քարտերի բլոկներ */}
        <div className="flex flex-col items-center gap-6">
          {/* Վերևի շարք (4 քարտ) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-gray-200 shadow-sm transition-all duration-300 hover:border-[#8c25e8] hover:bg-purple-50/75 hover:shadow-md cursor-pointer group min-h-[230px]"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src={card.img} alt={card.title} className="max-h-16 object-contain" />
                </div>
                <h3 className="text-gray-800 font-semibold text-sm group-hover:text-[#8c25e8] transition-colors">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Ներքևի շարք (3 քարտ՝ կենտրոնացված) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[900px]">
            {bottomCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-gray-200 shadow-sm transition-all duration-300 hover:border-[#8c25e8] hover:bg-purple-50/75 hover:shadow-md cursor-pointer group min-h-[230px]"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src={card.img} alt={card.title} className="max-h-16 object-contain" />
                </div>
                <h3 className="text-gray-800 font-semibold text-sm group-hover:text-[#8c25e8] transition-colors">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}