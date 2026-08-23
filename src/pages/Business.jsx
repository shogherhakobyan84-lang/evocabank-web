import React from 'react';
import { Link } from 'react-router-dom';
import BusinessLoans from "../components/BusinessLoans";

export default function Business() {
  return (
    <div className="w-full bg-white">
      <div className="w-full bg-white pt-8 pb-6">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-3 text-xs text-gray-500 font-medium">
          <Link to="/" className="flex items-center text-[#8e95a5]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M10.707 2.293a1 1 0 011.414 0l8 8a1 1 0 01-1.414 1.414L19 10.414V19a2 2 0 01-2 2h-3a1 1 0 01-1-1v-4H11v4a1 1 0 01-1 1H7a2 2 0 01-2-2v-8.586l-1.293 1.293a1 1 0 01-1.414-1.414l8-8z" />
            </svg>
          </Link>

          <span className="text-gray-400 font-bold">›</span>
          <span className="text-gray-600">Բիզնես</span>

          <span className="text-gray-400 font-bold">›</span>
          <span className="text-gray-600">Վարկեր</span>

          <span className="text-gray-400 font-bold">›</span>
          <span className="text-gray-600 font-normal">Բիզնես վարկեր</span>
        </div>
      </div>


      <div className="max-w-[1400px] mx-auto px-8 pt-6 pb-20 min-h-[1000px]">
        <h1 className="text-[38px] leading-tight font-bold text-[#111827] tracking-normal mb-16">
          Բիզնես վարկեր
        </h1>
        <BusinessLoans />
      </div>
    </div>
  );
}