import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessLoanCard({ loan }) {
  const {
    title,
    description,
    image,
    amount,
    term,
    rate,
    downPayment,
    detailsPath,
  } = loan;

  return (
    <div className="w-full py-8 border-b border-gray-100 flex flex-col lg:flex-row items-start gap-14 bg-white px-6 rounded-xl mb-4">
      <div className="w-full lg:w-[415px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[261px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between min-h-[261px] lg:pl-6 w-full">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-end gap-10 mb-6">
            {amount && (
              <div>
                <span className="block text-xs text-gray-400 mb-1">մինչև</span>
                <span className="text-3xl font-extrabold text-[#7100e2]">{amount}</span>
                <span className="block text-xs text-gray-400 mt-1">Գումար</span>
              </div>
            )}

            {term && (
              <div>
                <span className="block text-xs text-gray-400 mb-1">մինչև</span>
                <span className="text-3xl font-extrabold text-[#7100e2]">{term}</span>
                <span className="block text-xs text-gray-400 mt-1">Ժամկետ</span>
              </div>
            )}

            {rate && (
              <div>
                <span className="block text-xs text-gray-400 mb-1">սկսած</span>
                <span className="text-3xl font-extrabold text-[#7100e2]">{rate}</span>
                <span className="block text-xs text-gray-400 mt-1">Տոկոսադրույք</span>
              </div>
            )}

            {downPayment && (
              <div>
                <span className="block text-xs text-gray-400 mb-1">սկսած</span>
                <span className="text-3xl font-extrabold text-[#7100e2]">{downPayment}</span>
                <span className="block text-xs text-gray-400 mt-1">Կանխավճար</span>
              </div>
            )}
          </div>

          <div>
            <Link
              to={detailsPath || '#'}
              className="inline-flex items-center justify-center gap-1 px-6 py-2.5 rounded-full bg-[#f0e6ff] text-[#7100e2] font-bold text-sm hover:bg-[#e4d4ff] transition-colors duration-200"
            >
              <span>Մանրամասն</span>
              <span className="text-base leading-none">›</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}