import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoanCard from '../components/LoanCard';
import loansData from '../components/LoansData';

export default function Loans() {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const filters = [
    'Բոլորը',
    'Գրավով ապահովված սպառողական վարկեր',
    'Անգրավ սպառողական վարկեր',
    'Հիփոթեքային վարկեր',
    'Ավտոմեքենաների ձեռքբերման ֆինանսավորում',
    'Ապառիկ',
    'Օնլայն վարկեր',
  ];

  const subNavItems = [
    { title: 'Վարկեր', path: '/hy/loans' },
    { title: 'Վարկային պատմություն և սքոր', path: '/hy/loans/credit-history' },
    { title: 'Կարևոր տեղեկատվություն', path: '/hy/loans/important-info' },
  ];

  // Ֆիլտրացիայի տրամաբանություն
  const filteredLoans = loansData.filter((loan) => {
    if (activeFilter === 'Բոլորը') return true;
    if (activeFilter === 'Հիփոթեքային վարկեր') return loan.title.includes('հիփոթեքային') || loan.title.includes('Հիփոթեքային');
    if (activeFilter === 'Անգրավ սպառողական վարկեր') return loan.title.includes('անգրավ') || loan.title.includes('Անգրավ') || loan.title.includes('սպառողական');
    if (activeFilter === 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում') return loan.title.includes('Ավտո') || loan.title.includes('ավտո');
    if (activeFilter === 'Ապառիկ') return loan.title.includes('Ապառիկ');
    return true;
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Sub-Navbar */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/hy/loans'}
              className={({ isActive }) =>
                `px-7 py-4.5 text-[15px] font-bold transition-colors duration-200 cursor-pointer ${
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

      {/* Էջի հիմնական բովանդակությունը */}
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        
        {/* 2. Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
          <Link to="/" className="hover:text-purple-600 transition-colors cursor-pointer text-base">
            🏠
          </Link>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:underline cursor-pointer">Վարկեր</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Վարկեր</span>
        </div>

        {/* 3. Վերնագիր */}
        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-8">
          Վարկեր
        </h1>

        {/* 4. Filters */}
        <div className="flex flex-wrap gap-3.5 mb-10">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3.5 rounded-full text-base font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#7100e2] text-white shadow-md'
                  : 'bg-[#f1f3f5] text-gray-800 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 5. Վարկերի ցուցակը (Loan Cards) */}
        <div>
          {filteredLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>

      </div>
    </div>
  );
}