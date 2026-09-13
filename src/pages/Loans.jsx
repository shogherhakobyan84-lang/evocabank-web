import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoanCard from '../components/LoanCard';
import loansData from '../components/LoansData';

export default function Loans() {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const location = useLocation();

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
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {subNavItems.map((item, idx) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={idx}
                to={item.path}
                className={`px-7 py-4.5 text-[15px] font-bold cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white shadow-inner'
                    : 'text-white/90'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Էջի հիմնական բովանդակությունը */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        
        {/* 2. Breadcrumbs (Տնակը տանում է գլխավոր էջ) */}
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2.5 select-none">
          <Link to="/" className="flex items-center cursor-pointer">
            <svg className="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Անհատ</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Վարկեր</span>
          <span className="text-gray-400">›</span>
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