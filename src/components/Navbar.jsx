import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
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
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-20">
        
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evocabank Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-9 font-bold text-[15px]">
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

        <div>
          <Link
            to="/evoca-online"
            className="inline-block bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-sm px-8 py-3 rounded-full transition duration-200 cursor-pointer shadow-md"
          >
            EvocaONLINE
          </Link>
        </div>

      </div>
    </header>
  );
}