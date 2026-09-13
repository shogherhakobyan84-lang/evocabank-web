import React from 'react';
import { NavLink } from 'react-router-dom';
import ApplyForm from '../components/ApplyForm';

export default function Culture() {
  const tabs = [
    { title: 'Մշակույթ', path: '/culture' },
    { title: 'Առավելություններ', path: '/culture/advantages' },
    { title: 'Հաճախ տրվող հարցեր', path: '/culture/faq' },
    { title: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/culture/how-to-apply' },
  ];

  return (
    <div className="w-full bg-white min-h-screen relative">
      
      {/* Մանուշակագույն հորիզոնական մենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {tabs.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/culture'}
              className={({ isActive }) =>
                `px-7 py-4.5 text-[15px] font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white shadow-inner'
                    : 'hover:bg-[#5e00bd] text-white/90'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Հիմնական բաններ բլոկը */}
      <div className="w-full relative pb-32">
        
        {/* Նկարը */}
        <div className="w-full relative">
          <img
            src="https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
            alt="Evoca Կարիերա - Մշակույթ"
            className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
          />
        </div>

        {/* Սպիտակ բլոկը՝ վրան */}
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative">
          <div className="absolute -bottom-24 left-6 sm:left-12 lg:left-12 max-w-[650px] w-[calc(100%-3rem)] sm:w-[600px] lg:w-[650px] bg-white p-8 sm:p-12 shadow-2xl rounded-bl-[120px] border border-gray-100/50 z-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Մշակույթ
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Evoca-ում աշխատելը հաճելի է։ Առօրյան լցված է նորարարություններով։ Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում։
            </p>
          </div>
        </div>

      </div>

      {/* Ինչու՞ աշխատել Evoca-ում բաժին */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 flex flex-col items-center">
        <div className="w-full max-w-[1000px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 text-left">
            Ինչու՞ աշխատել Evoca-ում
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 text-left">
            «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
          </p>

          <div className="w-full flex justify-start">
            <img
              src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg"
              alt="Evoca աշխատակից"
              className="w-full max-w-[1000px] h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Մանուշակագույն ֆոնով սլայդեր բաժին */}
      <div className="w-full bg-[#7100e2] text-white py-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto flex flex-col items-center">
          
          {/* Վերնագիր և տեքստ */}
          <div className="w-full max-w-[1000px] mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-left">Մշակույթ</h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/90 text-left">
              Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ. Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացեք մեզ!
            </p>
          </div>

          {/* 3 նկարներից բաղկացած բլոկ */}
          <div className="w-full max-w-[1250px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Ձախ նկար */}
            <div className="bg-white p-3.5 rounded-xl shadow-xl w-full lg:w-[25%]">
              <img
                src="https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg"
                alt="Evocabank neon art"
                className="w-full h-[170px] object-cover rounded-lg mb-2.5"
              />
              <h3 className="text-gray-900 font-bold text-xs sm:text-sm">Evocabank neon art corporate party</h3>
            </div>

            {/* Մեջտեղի նկար */}
            <div className="bg-white p-4 rounded-xl shadow-2xl w-full lg:w-[42%] z-10 scale-[1.04]">
              <img
                src="https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg"
                alt="Culture event"
                className="w-full h-[250px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-gray-900 font-bold text-sm sm:text-base">Evoca culture & events</h3>
            </div>

            {/* Աջ նկար */}
            <div className="bg-white p-3.5 rounded-xl shadow-xl w-full lg:w-[25%]">
              <img
                src="https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg"
                alt="EVOCAISLAND Summer Party"
                className="w-full h-[170px] object-cover rounded-lg mb-2.5"
              />
              <h3 className="text-gray-900 font-bold text-xs sm:text-sm">EVOCAISLAND Evoca Summer Party 2022</h3>
            </div>

          </div>

        </div>
      </div>

      {/* Դիմելու ֆորման (ճիշտ տեղադրված գլխավոր div-ի ներսում) */}
      <ApplyForm />

    </div>
  );
}