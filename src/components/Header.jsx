import React, { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Անհատ');

  const navItems = [
    'Անհատ',
    'Բիզնես',
    'Ակնթարթային վճարումներ',
    'Մեր մասին',
    'Նորություններ',
    'Բլոգ',
    'Կարիերա',
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Navigation items (ձախ կողմի մենյուն) */}
        <nav className="flex items-center space-x-6 h-full">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`relative h-full flex items-center transition-colors duration-200 cursor-pointer ${
                activeTab === item
                  ? 'text-[#8c25e8] font-semibold'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {/* Վերևի մանուշակագույն գիծը active բառի համար */}
              {activeTab === item && (
                <span className="absolute top-0 left-0 right-0 h-[4px] bg-[#8c25e8] rounded-b" />
              )}
              {item}
            </button>
          ))}
        </nav>

        {/* Աջ կողմի կոճակներն ու իկոնկաները */}
        <div className="flex items-center space-x-6 text-[#8c25e8]">
          {/* Անցանց / Առցանց հայտեր */}
          <button className="flex items-center gap-1 hover:opacity-80 transition cursor-pointer font-semibold">
            <span>Առցանց հայտեր</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Հետադարձ կապ */}
          <button className="flex items-center gap-1 hover:opacity-80 transition cursor-pointer font-semibold">
            <span>Հետադարձ կապ</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Իկոնկաներ (Map, Help, Language, Search, Burger menu) */}
          <div className="flex items-center space-x-4 text-black border-l border-gray-200 pl-4">
            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Map marker icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Help/Question icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Globe icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Search icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Burger menu icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}