import React from 'react';

export default function Navbar() {
  const mainNavItems = [
    'Վարկեր',
    'Քարտեր',
    'Ավանդներ',
    'Հաշիվներ',
    'Փոխանցումներ',
    'Արժեթղթեր',
    'EvocaSALARY',
    'EvocaTOUCH',
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20">
        
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center space-x-12">
          {/* Evocabank Image Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evocabank Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Main Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 font-bold text-[15px] text-gray-900">
            {mainNavItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-[#8c25e8] transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: EvocaONLINE Button */}
        <div>
          <button className="bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-sm px-8 py-3 rounded-full transition duration-200 cursor-pointer shadow-md">
            EvocaONLINE
          </button>
        </div>

      </div>
    </div>
  );
}