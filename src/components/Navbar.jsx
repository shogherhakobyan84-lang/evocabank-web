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
    <div className="w-full bg-white border-b border-gray-100 shadow-sm py-3">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Evocabank Logo (SVG format) */}
        <a href="#" className="flex items-center">
          <svg className="h-8 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#71717a">
              {/* e */}
              <path d="M22 28c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8h-12c.4 2.5 2.5 4.5 5 4.5 2 0 3.8-1 4.5-2.5h3.8c-1 3.8-4.5 6-9.3 6zm-4-9.5h8c-.4-2.5-2.5-4-4-4s-3.6 1.5-4 4z" />
              {/* v */}
              <path d="M37 12.5l5.5 15h3.5l5.5-15h-4l-3.2 10-3.3-10h-4z" />
              {/* o */}
              <path d="M68 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-12 0c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5-1.8-4.5-4-4.5-4 2-4 4.5z" />
              {/* c */}
              <path d="M84 28c-4.4 0-8-3.6-8-8s3.6-8 8-8c3.8 0 7 2.5 7.8 6h-3.8c-.6-1.5-2.2-2.5-4-2.5-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.8 0 3.4-1 4-2.5h3.8c-.8 3.5-4 6-7.8 6z" />
              {/* a */}
              <path d="M102 28c-1.5 0-2.8-.5-3.5-1.5-.8 1-2 1.5-3.5 1.5-2.5 0-4.5-1.8-4.5-4.2 0-2.8 2.2-4.3 6.5-4.5l3.5-.2v-.8c0-1.5-1-2.3-2.5-2.3-1.5 0-2.5.8-2.8 2h-3.7c.4-3 3-5 6.5-5 3.8 0 6 2 6 5.5V28h-3.5zm-1.5-6l-2.5.2c-2.2.1-3.5.8-3.5 2 0 1 .8 1.8 2 1.8 1.5 0 2.8-1 2.8-2.5v-1.5z" />
            </g>
            {/* Purple stylized 'v' mark */}
            <path d="M48 20l3.5 6 3.5-6h-2.2l-1.3 2.5-1.3-2.5H48z" fill="#8c25e8" />
          </svg>
        </a>

        {/* Main Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 font-bold text-[15px] text-gray-900">
          {mainNavItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-[#8c25e8] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* EvocaONLINE Button */}
        <div>
          <button className="bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold text-sm px-6 py-2.5 rounded-full transition duration-200 cursor-pointer shadow-md">
            EvocaONLINE
          </button>
        </div>

      </div>
    </div>
  );
}