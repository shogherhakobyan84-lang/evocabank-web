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
    <section className="relative w-full bg-[#7000e0] text-white overflow-hidden py-16 px-6 lg:px-12 rounded-3xl my-6 max-w-[1400px] mx-auto">
      
      {/* ================= ANIMATED BACKGROUND ELEMENTS ================= */}
      
      {/* 1. Պտտվող Կետերով Շրջան (Արձանի հետևում) */}
      <div className="absolute top-[10%] left-[-50px] lg:left-[50px] w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-2 border-dashed border-white/30 animate-spin-slow pointer-events-none z-0" />

      {/* 2. Լողացող 3D Shapes (Եռանկյուններ, Զիգզագներ, Օղակներ) */}
      
      {/* Վերևի ձախ եռանկյուն */}
      <div className="absolute top-12 left-10 lg:left-24 animate-float z-10">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-pink-400 transform -rotate-45" />
      </div>

      {/* Վերևի մեջտեղի մանուշակագույն եռանկյուն */}
      <div className="absolute top-8 left-[60%] animate-float-reverse z-10">
        <div className="w-12 h-12 border-t-4 border-l-4 border-purple-300 transform rotate-12" />
      </div>

      {/* Աջ վերևի դեղին պիրամիդա/եռանկյուն */}
      <div className="absolute top-20 right-10 animate-float z-10">
        <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-yellow-400 transform rotate-45" />
      </div>

      {/* Վարդագույն Զիգզագ line (Արձանի ձեռքի մոտ) */}
      <div className="absolute bottom-[28%] left-[20%] animate-float z-20 text-pink-500 font-bold text-2xl select-none">
        /\/
      </div>

      {/* Աջ ներքևի մանուշակագույն 3D օղակ */}
      <div className="absolute bottom-6 right-16 animate-float-reverse z-10 opacity-80">
        <div className="w-16 h-16 rounded-full border-[8px] border-pink-400/80 transform rotate-[45deg]" />
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Statue Image & Title */}
        <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[450px]">
          <h2 className="text-3xl lg:text-5xl font-black tracking-wide leading-tight mb-6 lg:mb-0">
            Լավագույնը <br /> Evocabank-ից
          </h2>

          {/* Արձանի նկարը */}
          <div className="relative w-full max-w-[380px] mx-auto lg:mx-0 mt-auto">
            <img
              src="https://www.evoca.am/images/best-statue.png" 
              alt="Evocabank Statue"
              className="w-full h-auto object-contain drop-shadow-2xl z-10 relative"
              onError={(e) => {
                // Եթե նկարի URL-ը չբերի, placeholder image
                e.target.src = 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png';
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: 4 Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 z-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-purple-50 text-[#8c25e8] text-xs font-bold px-3 py-1.5 rounded-md mb-4">
                  {card.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
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