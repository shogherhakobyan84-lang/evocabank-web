import React from 'react';

export default function ArticleSection() {
  return (
    <div className="w-full bg-white relative overflow-x-hidden pt-2">
      
      {/* Մեծ ֆոնային վերնագիրը («Լավագույն») */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 relative">
        <div className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-200/80 select-none pointer-events-none tracking-widest uppercase mb-0">
          Լավագույն
        </div>
      </div>

      {/* Մոխրագույն ուղղանկյուն ֆոնը */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 bg-[#f3f4f6] py-10 my-0">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Ձախ կողմի նկարը */}
            <div className="lg:col-span-7 lg:-ml-6 relative">
              <div className="w-full overflow-hidden shadow-md bg-[#2b0057]">
                <img
                  src="https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png"
                  alt="Ամանորի քո Evocaգույն երազանքը"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Աջ կողմի տեքստային հատվածը */}
            <div className="lg:col-span-5 flex flex-col lg:pl-4 lg:pt-0">
              
              {/* 1. Կատեգորիա + մեծացված հեռավորություն ներքևի մասում (mb-8) */}
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-5 h-6 bg-[#7100e2] inline-block shrink-0"></span>
                <span className="text-gray-900 font-extrabold text-sm sm:text-base uppercase tracking-wide">
                  Կենսակերպ
                </span>
              </div>

              {/* 2. Վերնագիր + մեծացված հեռավորություն (mb-8) */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 leading-tight mb-8">
                Ամանորի քո Evocaգույն երազանքը
              </h3>

              {/* 3. Նկարագրություն + մեծացված հեռավորություն (mb-8) */}
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ։ Ինչպե՞ս երազանք պահել Ամանորի գիշերը։ Ո՞րն է ամենաթրենդային նվերի տարբերակը։ Բոլոր պատասխանները կգտնես բլոգում։
              </p>

              {/* 4. Ամսաթիվ */}
              <div className="text-gray-400 text-sm sm:text-base font-medium">
                21.12.2023
              </div>

            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}