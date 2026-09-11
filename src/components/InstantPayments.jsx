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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Վերնագիր (Header) */}
        <header className="w-full bg-white border-b border-gray-100 py-4 px-8 sm:px-16 flex items-center justify-between shadow-sm">
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
        <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 mt-4">
            Գլխավոր
          </h2>

          <div className="flex flex-col items-center gap-6">
            {/* Վերևի շարք (4 քարտ) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {topCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-gray-200 shadow-sm transition-all duration-300 hover:border-[#8c25e8] hover:bg-purple-50/75 hover:shadow-md cursor-pointer group min-h-[290px]"
                >
                  <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img src={card.img} alt={card.title} className="max-h-24 object-contain" />
                  </div>
                  <h3 className="text-gray-800 font-normal text-base group-hover:text-[#8c25e8] transition-colors">
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
                  className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-gray-200 shadow-sm transition-all duration-300 hover:border-[#8c25e8] hover:bg-purple-50/75 hover:shadow-md cursor-pointer group min-h-[290px]"
                >
                  <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img src={card.img} alt={card.title} className="max-h-24 object-contain" />
                  </div>
                  <h3 className="text-gray-800 font-normal text-base group-hover:text-[#8c25e8] transition-colors">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Ստորին հատված (Footer) */}
      <footer className="w-full bg-white border-t border-gray-200 py-10 px-8 sm:px-16 mt-16">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-sm">
          
          {/* Ձախ մաս՝ Լոգո և վերահսկողության տեքստ */}
          <div className="flex flex-col space-y-3 text-left">
            <img
              src="https://online.evoca.am/OnlineBanking/Web/images/bank-logo-login.svg"
              alt="Evocabank Login Logo"
              className="h-7 object-contain"
            />
            <p className="text-gray-500 text-xs">
              Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից
            </p>
            <p className="text-gray-400 text-xs">
              Copyright © 1990-2026 Evocabank
            </p>
          </div>

          {/* Մեջտեղի մաս՝ Հասցե և կոնտակտներ */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 text-gray-700 text-xs sm:text-sm">
            <div>
              <p className="text-gray-500">ք. Երևան, 0010,</p>
              <p className="text-gray-500">Հանրապետության 44/2</p>
            </div>
            <div className="flex flex-col space-y-1">
              <a href="mailto:hello@evoca.am" className="text-[#8c25e8] hover:underline">
                hello@evoca.am
              </a>
              <span className="text-[#8c25e8] font-light">
                +374 10 605555
              </span>
            </div>
          </div>

          {/* QR Կոդ */}
          <div className="bg-white p-3 border border-gray-200 rounded-2xl shadow-sm">
            <img
              src="https://payments.evoca.am/assets/images/qr-evoca.png"
              alt="Evoca QR"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Աջ մաս՝ Սոցցանցեր և հավելվածների կոճակներ */}
          <div className="flex flex-col items-end space-y-4">
            {/* Սոցցանցերի պատկերակներ */}
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-[#8c25e8] transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-[#8c25e8] transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-[#8c25e8] transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-[#8c25e8] transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-[#8c25e8] transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.491-.693-2.424-2.875-2.424-4.626 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.903 0 4.122-2.599 7.441-6.204 7.441-1.211 0-2.35-.631-2.739-1.378l-.746 2.845c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.522.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>

            {/* Google Play & App Store */}
            <div className="flex items-center space-x-2">
              <a href="#" className="opacity-90 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 object-contain" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8 object-contain" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}