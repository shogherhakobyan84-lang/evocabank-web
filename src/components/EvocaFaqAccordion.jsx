import React, { useState } from 'react';

const faqData = [
  {
    question: 'Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:',
    answer:
      'Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից։',
  },
  {
    question: 'Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:',
    answer:
      'Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։',
  },
  {
    question: 'Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:',
    answer:
      'Իհարկե՛։ Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող ես միանալ Evoca աշխատավարձային նախագծին:',
  },
  {
    question: 'Ե՞րբ կսկսեմ օգտվել արտոնություններից:',
    answer:
      'Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։ Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։',
  },
  {
    question: 'Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:',
    answer:
      'Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։',
  },
  {
    question: 'Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:',
    answer: (
      <div className="space-y-3">
        <p>Միանալու համար կարող ես՝</p>
        <p className="font-bold text-[#222222]">
          Զանգահարել{' '}
          <a href="tel:+37410605555" className="text-[#6c11d2] underline underline-offset-4">
            +37410605555
          </a>{' '}
          |{' '}
          <a href="tel:8444" className="text-[#6c11d2] underline underline-offset-4">
            8444
          </a>{' '}
          հեռախոսահամարներով
        </p>
        <p>Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն</p>
      </div>
    ),
  },
];

export default function EvocaFaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 text-left">
        Հաճախ տրվող հարցեր
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-[22px] transition-all duration-200 border bg-white ${
                isOpen
                  ? 'border-[#6c11d2] shadow-sm'
                  : 'border-gray-200/80'
              }`}
            >
              {/* Վերնագրի կոճակ՝ ավելի վերև բարձրացված padding-ով */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-start pt-5 pb-2 px-6 text-left focus:outline-none"
              >
                {/* Ձախ կողմում գտնվող սլաքը */}
                <div className="mr-4 mt-0.5 flex-shrink-0">
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen
                        ? 'transform rotate-180 stroke-[#6c11d2]'
                        : 'stroke-[#6c757d]'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Հարցի տեքստը */}
                <span
                  className={`text-base md:text-lg font-bold transition-colors duration-200 ${
                    isOpen ? 'text-[#111111]' : 'text-[#555555]'
                  }`}
                >
                  {item.question}
                </span>
              </button>

              {/* Պատասխանի հատված՝ ավելի մեծ տառաչափով (19px) և չափավոր մոխրագույնով (#444444) */}
              {isOpen && (
                <div className="pl-[52px] pr-6 pb-6 pt-1 text-[#444444] font-medium text-lg md:text-[19px] leading-[1.7]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}