import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AboutMission from '../components/AboutMission';
import AboutCSR from '../components/AboutCSR';
import AboutBrand from '../components/AboutBrand';

export default function AboutGeneral() {
  const subNavItems = [
    { title: 'Ընդհանուր', path: '/about' },
    { title: 'Կառուցվածք', path: '/about/structure' },
    { title: 'Բաժնետերեր', path: '/about/shareholders' },
    { title: 'Ղեկավարություն', path: '/about/management' },
    { title: 'Գործընկերներ', path: '/about/partners' },
    { title: 'Մրցանակներ', path: '/about/awards' },
    { title: 'CSR', path: '/about/csr' },
    { title: 'Էվոկա ֆինանսական խումբ', path: '/about/financial-group' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Մանուշակագույն հորիզոնական մենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/about'}
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

      <div className="max-w-[1400px] mx-auto px-8 pt-6 pb-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2.5 font-normal select-none">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0 cursor-default"
            title="Գլխավոր էջ"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span className="cursor-default">Մեր մասին</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="cursor-default">Evoca-ի մասին</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="cursor-default">Ընդհանուր</span>
        </div>

        {/* Վերնագիր */}
        <h1 className="text-4xl font-extrabold text-gray-900 mt-14 mb-8">
          Ընդհանուր տեղեկատվություն
        </h1>
      </div>

      {/* Առաջին բաժին՝ ամբողջական մոխրագույն ֆոնով */}
      <div className="w-full bg-[#f1f3f5] py-16 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Ձախ մասի տեքստը */}
          <div className="lg:col-span-6 space-y-6 text-gray-800 font-medium text-[19px] leading-relaxed max-w-[500px]">
            <p>
              <span className="text-[#7100e2] font-bold">Evocabank</span>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>
            <p>
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
            </p>
            <p>
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:
            </p>
            <p>
              Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
            </p>
          </div>

          {/* Աջ մասի նկարը */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <img
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png"
              alt="Evocabank General"
              className="w-full h-auto object-cover max-w-[700px]"
            />
          </div>

        </div>
      </div>

      {/* Երկրորդ բաժին՝ «Մեր տեսլականը» */}
      <div className="w-full bg-[#7100e2] text-white py-20 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <div className="w-full max-w-[900px]">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-left mb-10 tracking-wide">
              Մեր տեսլականը
            </h2>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-[3px] bg-white shrink-0 mt-3.5"></div>
              <p className="text-white text-lg lg:text-[21px] font-medium leading-relaxed">
                Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <AboutMission />
      <AboutCSR />
    <AboutBrand />
    </div>
  );
}