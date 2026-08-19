import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DepositItem, { depositsData } from '../components/DepositItem';

export default function Deposits() {
  const subNavItems = [
    { title: 'Ավանդներ', path: '/deposits' },
    { title: 'Կարևոր տեղեկատվություն', path: '/deposits/important-info' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Sub-navbar */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/deposits'}
              className={({ isActive }) =>
                `px-7 py-4.5 text-[15px] font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'hover:bg-[#5e00bd] text-white/90'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-16">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-10 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0"
            title="Գլխավոր էջ"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span>Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span>Ավանդներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Ավանդներ</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
          Ավանդներ
        </h1>

        {/* Deposits List */}
        <div className="space-y-16">
          {depositsData.map((deposit) => (
            <DepositItem key={deposit.id} deposit={deposit} />
          ))}
        </div>
      </div>
    </div>
  );
}