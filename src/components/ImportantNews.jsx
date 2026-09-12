import React from 'react';

export default function ImportantNews() {
  return (
    <div className="w-full bg-white relative overflow-x-hidden pt-4">
      
      {/* Մեծ ֆոնային վերնագիրը («Կարևոր») */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative">
        <div className="text-6xl sm:text-7xl lg:text-9xl font-black text-gray-200/80 select-none pointer-events-none tracking-widest uppercase mb-1">
          Կարևոր
        </div>
      </div>

      {/* Մոխրագույն ուղղանկյուն ֆոնը՝ լիարժեք ձգված մինչև էկրանի բացարձակ եզրերը */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 bg-[#f3f4f6] py-12 my-1">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Ձախ կողմի նկարը */}
            <div className="lg:col-span-7 lg:-ml-4">
              <div className="w-full overflow-hidden shadow-md bg-[#2b0057]">
                <img
                  src="https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png"
                  alt="Գործարքների արգելափակում 1 կոճակով"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Աջ կողմի տեքստային հատվածը՝ մեծացված բացատներով (mb-8) */}
            <div className="lg:col-span-5 flex flex-col lg:pl-6 lg:pt-1">
              
              {/* 1. Բանկային բլոկ (մեծացված տառերով) */}
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-5 h-6 bg-[#7100e2] inline-block shrink-0"></span>
                <span className="text-gray-900 font-extrabold text-sm sm:text-base uppercase tracking-wide">Բանկային</span>
              </div>

              {/* 2. Վերնագիր */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 leading-tight mb-8">
                Գործարքների արգելափակում 1 կոճակով
              </h3>

              {/* 3. Նկարագրություն */}
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։
              </p>

              {/* 4. Ամսաթիվ */}
              <div className="text-gray-400 text-sm sm:text-base font-medium">
                01.06.2026
              </div>

            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}