import React from 'react';

export default function AboutCSR() {
  const csrItems = [
    "Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,",
    "Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,",
    "Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,",
    "Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:"
  ];

  return (
    <div className="w-full bg-[#f1f3f5] py-20 px-8 lg:px-16">
      {/* Կենտրոնացված հիմնական կոնտեյներ՝ սահմանափակված լայնությամբ */}
      <div className="max-w-[1000px] mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">
          Կորպորատիվ սոցիալական պատասխանատվություն
        </h2>

        {/* Նկարագրական տեքստ */}
        <p className="text-gray-800 text-[18px] lg:text-[19px] font-medium leading-relaxed mb-12">
          Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
        </p>

        {/* 2 սյունակով ցանկը */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {csrItems.map((text, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              {/* Մանուշակագույն հաստացված գիծ */}
              <div className="w-9 h-[4px] bg-[#7100e2] shrink-0 mt-3.5"></div>
              {/* Կետի տեքստ՝ մեծացված չափով, բայց նույն հաստությամբ */}
              <p className="text-gray-800 text-[18px] lg:text-[19px] font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}