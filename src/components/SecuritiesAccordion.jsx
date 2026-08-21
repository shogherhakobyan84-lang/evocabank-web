import React, { useState } from 'react';

const accordionData = [
  {
    id: 1,
    title: 'Ներդրումային ծառայությունների մատուցման կանոններ',
    content: (
      <div className="space-y-6">
        <div>
          <a
            href="#"
            className="text-[#6c11d2] font-bold text-lg hover:underline block mb-3 leading-snug"
          >
            Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
          </a>
          <p className="font-normal text-[#333333] text-[17px] leading-relaxed">
            Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով 
            գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի 
            իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու 
            պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված 
            հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են 
            Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, 
            ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
          </p>
        </div>

        <div>
          <a
            href="#"
            className="text-[#6c11d2] font-bold text-lg hover:underline block mb-3 leading-snug"
          >
            Արժեթղթերի Պահառության գործունեության կանոններ
          </a>
          <p className="font-normal text-[#333333] text-[17px] leading-relaxed">
            Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների 
            ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ 
            կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները 
            մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին 
            և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` 
            Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Ծառայությունների մատուցման սակագներ',
    content: (
      <div className="space-y-4">
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ
        </a>
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
        </a>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Լրացուցիչ տեղեկատվություն',
    content: (
      <div className="space-y-4">
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ
        </a>
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          «Շահերի բախման սահմանափակման» ընթացակարգ
        </a>
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          Ֆոնդային բորսաներ
        </a>
        <a
          href="#"
          className="text-[#6c11d2] font-bold text-lg hover:underline block leading-snug"
        >
          Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
        </a>
      </div>
    ),
  },
];

export default function SecuritiesAccordion() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-black uppercase mb-6 tracking-wide text-gray-900">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      <div className="space-y-4">
        {accordionData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-[#6c11d2] shadow-sm' : 'border-purple-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[#6c11d2] font-bold">
                    {isOpen ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-lg transition-colors duration-200 ${
                      isOpen
                        ? 'font-bold text-gray-900'
                        : 'font-semibold text-gray-500'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-8 pb-6 pt-2 bg-white">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}