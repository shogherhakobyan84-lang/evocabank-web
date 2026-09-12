import React from 'react';

export default function AboutMission() {
  return (
    <div className="w-full bg-white py-20 px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Հիմնական կոնտեյներ, որը միավորում է վերնագիրը, նկարը և քարտը */}
        <div className="relative max-w-[950px] mx-auto">
          
          {/* Վերնագիրը՝ նկարի ձախ կողմում՝ վերևում */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-left mb-8 tracking-wide">
            Մեր առաքելությունը
          </h2>

          {/* Մեջտեղի նկարը՝ փոքրացված լայնությամբ */}
          <div className="w-full">
            <img
              src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"
              alt="Evocabank Mission"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Ներքևի սպիտակ ֆոնով քարտը՝ ձախ եզրին մանուշակագույն գծով */}
          <div className="relative -mt-14 lg:-mt-16 mx-6 lg:mx-12 bg-white p-8 lg:p-10 shadow-xl border border-gray-100 border-l-[6px] border-l-[#7100e2]">
            
            {/* Տեքստը */}
            <p className="text-gray-800 text-lg lg:text-[20px] font-medium leading-relaxed">
              Որպես human-first և խելացի ֆինտեխ ընկերություն` մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին` բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա։
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}