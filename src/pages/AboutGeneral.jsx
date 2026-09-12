import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutGeneral() {
  const subNavItems = [
    { name: 'Ընդհանուր', path: '#' },
    { name: 'Կառուցվածք', path: '#' },
    { name: 'Բաժնետերեր', path: '#' },
    { name: 'Ղեկավարություն', path: '#' },
    { name: 'Գործընկերներ', path: '#' },
    { name: 'Մրցանակներ', path: '#' },
    { name: 'CSR', path: '#' },
    { name: 'Էվոկա ֆինանսական խումբ', path: '#' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Երկար մանուշակագույն հորիզոնական մենյու (Sticky - պահպանվում է սկրոլի ժամանակ) */}
      <div className="sticky top-0 z-40 bg-[#8c25e8] text-white shadow-md">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 flex items-center overflow-x-auto py-3.5 space-x-8 text-sm font-medium scrollbar-none">
          {subNavItems.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="whitespace-nowrap hover:text-purple-200 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Breadcrumb (Տնակ և տեքստեր առանց hover-ի) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center space-x-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-[#8c25e8] transition flex items-center cursor-pointer">
          {/* Տնակի պատկերակ */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        <span>/</span>
        <span className="cursor-default select-none text-gray-500">Մեր մասին</span>
        <span>/</span>
        <span className="cursor-default select-none text-gray-500">Evoca-ի մասին</span>
        <span>/</span>
        <span className="text-gray-800 font-medium cursor-default select-none">Ընդհանուր</span>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Ընդհանուր տեղեկատվություն
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Ձախ մասի տեքստեր */}
          <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-gray-900 font-semibold">Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>
            <p>
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
            </p>
            <p>
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս նախառաջ հաշվի ենք առնում դրա՝ հավելվածով օգտագործման հարմարավետությունը:
            </p>
          </div>

          {/* Աջ մասի պատկեր */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-[#5d109e] relative flex items-center justify-center min-h-[300px]">
            <img
              src="https://resource.evoca.am/images/About/about-general.jpg"
              alt="Evocabank General"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}