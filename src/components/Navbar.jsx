import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { title: 'Վարկեր', path: '/hy/loans' },
    { title: 'Քարտեր', path: '/cards' },
    { title: 'Ավանդներ', path: '/deposits' },
    { title: 'Հաշիվներ', path: '/accounts' },
    { title: 'Փոխանցումներ', path: '/transfers' },
    { title: 'Արժեթղթեր', path: '/securities' },
    { title: 'EvocaSALARY', path: '/evoca-salary' },
    { title: 'EvocaTOUCH', path: '/evoca-touch' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        
        {/* Ձախ մաս (Լոգո և Նավիգացիա) */}
        <div className="flex items-center space-x-6 lg:space-x-12">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evocabank Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Դեսկթոպ մենյու */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9 font-bold text-[14px] xl:text-[15px] overflow-x-auto no-scrollbar">
            {mainNavItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#7100e2]'
                      : 'text-gray-900 hover:text-[#8c25e8]'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Աջ մաս (EvocaONLINE կոճակ և մոբայլ բուրգեր կոճակ) */}
        <div className="flex items-center space-x-3">
          <Link
            to="/evoca-online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-xs sm:text-sm px-4 sm:px-8 py-2.5 sm:py-3 rounded-full transition duration-200 cursor-pointer shadow-md whitespace-nowrap"
          >
            EvocaONLINE
          </Link>

          {/* Համակարգչային մենյուում չերևացող, բայց պլանշետ/հեռախոսների համար բուրգեր կոճակ */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#8c25e8] hover:bg-gray-100 transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Մոբայլ և պլանշետային բացվող ցանկ (Dropdown Menu) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-5 space-y-2 shadow-lg">
          {mainNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg font-bold text-sm transition-colors ${
                  isActive
                    ? 'bg-purple-50 text-[#7100e2]'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-[#8c25e8]'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}