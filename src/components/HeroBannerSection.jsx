import React from 'react';

export default function HeroBannerSection() {
  return (
    <div className="w-full bg-white relative overflow-x-hidden pt-4 pb-32">
      
      {/* 1. Մեծ ֆոնային վերնագիրը («Գլխավոր») */}
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative">
        <div className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-200/80 select-none pointer-events-none tracking-widest uppercase mb-2">
          Գլխավոր
        </div>
      </div>

      {/* 2. Հիմնական բլոկը */}
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
        <div className="relative w-full shadow-lg mb-28">
          
          {/* Նկարի ֆոնը */}
          <img
            src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png"
            alt="Evoca-գույնի հոգեբանական նկարագիրը"
            className="w-full h-[480px] sm:h-[580px] lg:h-[650px] object-cover"
          />

          {/* 3. Սպիտակ բլոկը՝ ավելի մեծ լայնությամբ (max-w-[650px]) և կենտրոնացված դիրքով */}
          <div className="absolute -bottom-24 left-8 sm:left-16 lg:left-24 max-w-[650px] w-[calc(100%-4rem)] sm:w-[600px] lg:w-[650px] bg-white p-8 sm:p-12 shadow-2xl border border-gray-100">
            
            {/* Կատեգորիա */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-5 h-6 bg-[#7100e2] inline-block shrink-0"></span>
              <span className="text-gray-900 font-extrabold text-sm sm:text-base uppercase tracking-wide">
                Կենսակերպ
              </span>
            </div>

            {/* Վերնագիր */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Evoca-գույնի հոգեբանական նկարագիրը
            </h3>

            {/* Նկարագրություն */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Գույնը մարքեթինգային գործիք է։ Այն ազդում է մարդու հոգեբանության վրա։
            </p>

            {/* Ամսաթիվ */}
            <div className="text-gray-400 text-sm font-medium">
              12.10.2023
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}