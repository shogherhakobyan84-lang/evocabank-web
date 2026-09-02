// import React from 'react';

// export default function BestSection() {
//   const cards = [
//     {
//       tag: 'Թվային քարտեր',
//       title: 'Evoca Digital քարտ',
//       desc: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:',
//     },
//     {
//       tag: 'Նվեր քարտեր',
//       title: 'Evoca Gift Card',
//       desc: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:',
//     },
//     {
//       tag: 'Նոր հավելված',
//       title: 'EvocaTOUCH 2',
//       desc: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ. վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:',
//     },
//     {
//       tag: 'Օնլայն վճարումներ',
//       title: 'Արագ online վճարումներ',
//       desc: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:',
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#7000e0] text-white overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-12 rounded-2xl sm:rounded-3xl my-6 max-w-[1400px] mx-auto">
      
//       {/* ================= ANIMATED BACKGROUND ELEMENTS ================= */}
      
//       {/* 1. Պտտվող Կետերով Շրջան */}
//       <div className="absolute top-[10%] left-[-80px] sm:left-[-50px] lg:left-[50px] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-2 border-dashed border-white/30 animate-spin-slow pointer-events-none z-0" />

//       {/* 2. Լողացող 3D Shapes */}
//       <div className="absolute top-8 left-6 sm:left-10 lg:left-24 animate-float z-10">
//         <div className="w-0 h-0 border-l-[12px] sm:border-l-[15px] border-l-transparent border-r-[12px] sm:border-r-[15px] border-r-transparent border-b-[24px] sm:border-b-[30px] border-b-pink-400 transform -rotate-45" />
//       </div>

//       <div className="absolute top-6 left-[55%] lg:left-[60%] animate-float-reverse z-10">
//         <div className="w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-purple-300 transform rotate-12" />
//       </div>

//       <div className="absolute top-16 right-6 sm:right-10 animate-float z-10">
//         <div className="w-0 h-0 border-l-[14px] sm:border-l-[18px] border-l-transparent border-r-[14px] sm:border-r-[18px] border-r-transparent border-b-[26px] sm:border-b-[32px] border-b-yellow-400 transform rotate-45" />
//       </div>

//       <div className="absolute bottom-[28%] left-[10%] sm:left-[20%] animate-float z-20 text-pink-500 font-bold text-xl sm:text-2xl select-none">
//         /\/
//       </div>

//       <div className="absolute bottom-4 right-6 sm:right-16 animate-float-reverse z-10 opacity-80">
//         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[6px] sm:border-[8px] border-pink-400/80 transform rotate-[45deg]" />
//       </div>

//       {/* ================= MAIN CONTENT CONTAINER ================= */}
//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
//         {/* LEFT COLUMN: Statue Image & Title */}
//         <div className="lg:col-span-5 relative flex flex-col justify-between text-center lg:text-left min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]">
//           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-wide leading-tight mb-4 lg:mb-0">
//             Լավագույնը <br className="hidden sm:inline" /> Evocabank-ից
//           </h2>

//           {/* Արձանի նկարը */}
//           <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] mx-auto lg:mx-0 mt-auto">
//             <img
//               src="https://www.evoca.am/images/best-statue.png" 
//               alt="Evocabank Statue"
//               className="w-full h-auto object-contain drop-shadow-2xl z-10 relative"
//               onError={(e) => {
//                 e.target.src = 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png';
//               }}
//             />
//           </div>
//         </div>

//         {/* RIGHT COLUMN: 4 Cards Grid */}
//         <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 z-20">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className="bg-white text-gray-900 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
//             >
//               <div>
//                 <span className="inline-block bg-purple-50 text-[#8c25e8] text-xs font-bold px-3 py-1.5 rounded-md mb-3 sm:mb-4">
//                   {card.tag}
//                 </span>
//                 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function BestSection() {
  const cards = [
    {
      tag: 'Թվային քարտեր',
      title: 'Evoca Digital քարտ',
      desc: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:',
    },
    {
      tag: 'Նվեր քարտեր',
      title: 'Evoca Gift Card',
      desc: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:',
    },
    {
      tag: 'Նոր հավելված',
      title: 'EvocaTOUCH 2',
      desc: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ. վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:',
    },
    {
      tag: 'Օնլայն վճարումներ',
      title: 'Արագ online վճարումներ',
      desc: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:',
    },
  ];

  return (
    <section className="relative w-full bg-[#7000e0] text-white overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-12 rounded-2xl sm:rounded-3xl my-6 max-w-[1400px] mx-auto">
      
      {/* ================= ANIMATED BACKGROUND ELEMENTS ================= */}
      
      {/* 1. Պտտվող Կետերով Շրջան */}
      <div className="absolute top-[10%] left-[-80px] sm:left-[-50px] lg:left-[50px] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-2 border-dashed border-white/30 animate-spin-slow pointer-events-none z-0" />

      {/* 2. Լողացող 3D Shapes */}
      <div className="absolute top-8 left-6 sm:left-10 lg:left-24 animate-float z-10">
        <div className="w-0 h-0 border-l-[12px] sm:border-l-[15px] border-l-transparent border-r-[12px] sm:border-r-[15px] border-r-transparent border-b-[24px] sm:border-b-[30px] border-b-pink-400 transform -rotate-45" />
      </div>

      <div className="absolute top-6 left-[55%] lg:left-[60%] animate-float-reverse z-10">
        <div className="w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-purple-300 transform rotate-12" />
      </div>

      <div className="absolute top-16 right-6 sm:right-10 animate-float z-10">
        <div className="w-0 h-0 border-l-[14px] sm:border-l-[18px] border-l-transparent border-r-[14px] sm:border-r-[18px] border-r-transparent border-b-[26px] sm:border-b-[32px] border-b-yellow-400 transform rotate-45" />
      </div>

      <div className="absolute bottom-[28%] left-[10%] sm:left-[20%] animate-float z-20 text-pink-500 font-bold text-xl sm:text-2xl select-none">
        /\/
      </div>

      <div className="absolute bottom-4 right-6 sm:right-16 animate-float-reverse z-10 opacity-80">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[6px] sm:border-[8px] border-pink-400/80 transform rotate-[45deg]" />
      </div>

      {/* 3D Pyramid & ZigZag elements */}
      <div className="absolute top-1/3 right-10 animate-float pointer-events-none z-10">
        <div className="w-10 h-10 bg-[#E73C7E] clip-path-pyramid rotate-12 opacity-90 shadow-lg" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>

      <div className="absolute bottom-16 left-6 sm:bottom-20 sm:left-12 animate-[pulse_3s_infinite] pointer-events-none z-20">
        <svg width="32" height="20" viewBox="0 0 40 25" fill="none">
          <path d="M2 20 L12 5 L22 20 L32 5 L38 12" stroke="#FF4081" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Statue Image & Title */}
        <div className="lg:col-span-5 relative flex flex-col justify-between text-center lg:text-left min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-wide leading-tight mb-4 lg:mb-0">
            Լավագույնը <br className="hidden sm:inline" /> Evocabank-ից
          </h2>

          {/* ԱՐՁԱՆԻ ՆԿԱՐԸ */}
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] mx-auto lg:mx-0 mt-auto z-10">
            <img
              src="https://www.evoca.am/img/statue-1.png"
              alt="Evoca Statue"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
              onError={(e) => {
                e.target.src = "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png";
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: 4 Cards Grid with Increased Height/Padding */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 z-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[190px] sm:min-h-[210px]"
            >
              <div>
                <span className="inline-block bg-purple-50 text-[#8c25e8] text-xs font-bold px-3 py-1.5 rounded-md mb-3 sm:mb-4">
                  {card.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}