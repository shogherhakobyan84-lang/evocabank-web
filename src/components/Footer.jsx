import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] text-[#212121] pt-24 pb-20 border-t border-gray-200">
      <div className="max-w-[1450px] mx-auto px-8 md:px-14 lg:px-16">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 pb-14">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1 space-y-6">
            <img
              src="https://online.evoca.am/OnlineBanking/Web/images/bank-logo-login.svg"
              alt="Evocabank"
              className="h-12 object-contain"
            />
            <div className="text-[15px] text-gray-800 font-normal space-y-2 pt-2 leading-relaxed">
              <p>ք. Երևան, 0010,</p>
              <p>Հանրապետության 44/2</p>
            </div>
            <div className="text-sm text-gray-600 font-normal space-y-3 pt-2 leading-relaxed">
              <p>Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից</p>
              <p>1990 - 2026. © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
            </div>
          </div>

          {/* Column 2: Բանկի մասին */}
          <div className="space-y-6 lg:pl-4">
            <h3 className="font-bold text-lg text-gray-900 tracking-wide">Բանկի մասին</h3>
            <ul className="space-y-4 text-[15px] text-gray-800 font-normal leading-relaxed">
              <li><Link to="#" className="hover:text-black transition">Մեր մասին</Link></li>
              <li><Link to="#" className="hover:text-black transition">Ղեկավարություն</Link></li>
              <li><Link to="#" className="hover:text-black transition">Բաժնետերեր</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հաշվետվություններ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Իրավական ակտեր</Link></li>
              <li><Link to="#" className="hover:text-black transition">Սակագներ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Օտարվող գույք</Link></li>
              <li><Link to="#" className="hover:text-black transition">Կառուցապատողներ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Գործընկեր ավտոսրահներ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Սակագների արխիվ</Link></li>
            </ul>
          </div>

          {/* Column 3: Օգտակար հղումներ */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gray-900 tracking-wide">Օգտակար հղումներ</h3>
            <ul className="space-y-4 text-[15px] text-gray-800 font-normal leading-relaxed">
              <li><Link to="#" className="hover:text-black transition">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Կարգավորում</Link></li>
              <li><Link to="#" className="hover:text-black transition">Գաղտնիության քաղաքականություն</Link></li>
              <li><Link to="#" className="hover:text-black transition">Ֆին. հաշտարար</Link></li>
              <li><Link to="#" className="hover:text-black transition">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հղումներ Բանկի քարտապանների համար</Link></li>
            </ul>
          </div>

          {/* Column 4: Այլ հղումներ */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gray-900 tracking-wide">Այլ հղումներ</h3>
            <ul className="space-y-4 text-[15px] text-gray-800 font-normal leading-relaxed">
              <li><Link to="/evoca-online" className="hover:text-black transition">EvocaONLINE</Link></li>
              <li><Link to="#" className="hover:text-black transition">Պահատուփեր</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հաճախ տրվող հարցեր</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հայտարարություններ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Dibrary</Link></li>
              <li><Link to="#" className="hover:text-black transition">Բուլետիններ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Հետադարձ կապ</Link></li>
              <li><Link to="#" className="hover:text-black transition">Կայքի քարտեզ</Link></li>
            </ul>
          </div>

          {/* Column 5: Social Icons & App Store & Phone */}
          <div className="space-y-6">
            {/* Gray Social Media Icons */}
            <div className="flex items-center space-x-5 text-gray-500 pt-1">
              {/* Facebook */}
              <a href="#" className="w-7 h-7 flex items-center justify-center hover:text-gray-900 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-7 h-7 flex items-center justify-center hover:text-gray-900 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-7 h-7 flex items-center justify-center hover:text-gray-900 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-7 h-7 flex items-center justify-center hover:text-gray-900 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>

            {/* App Store & Google Play */}
            <div className="space-y-3 pt-2">
              <div className="bg-black text-white px-4.5 py-3 rounded-lg text-sm font-normal inline-flex items-center space-x-2.5 w-42 cursor-pointer hover:bg-gray-800 transition">
                <span> App Store</span>
              </div>
              <div className="bg-black text-white px-4.5 py-3 rounded-lg text-sm font-normal inline-flex items-center space-x-2.5 w-42 cursor-pointer hover:bg-gray-800 transition">
                <span>▶ Google Play</span>
              </div>
            </div>

            {/* Contact Details in Purple */}
            <div className="space-y-3 pt-3 text-[15px] font-medium">
              <p><Link to="#" className="text-[#8c25e8] hover:underline">Բանկի հասցեները և աշխատաժամերը</Link></p>
              <p><Link to="#" className="text-[#8c25e8] hover:underline">Կապ մեզ հետ</Link></p>
              <p className="font-bold text-lg text-[#8c25e8] pt-1">+374 10 605555</p>
              <p className="font-bold text-lg text-[#8c25e8]">8444</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

