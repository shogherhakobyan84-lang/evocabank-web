import React from 'react';

export default function PartnersFooterBottom() {
  const partners = [
    { name: 'Partner 1', img: 'https://www.evoca.am/img/temp/partners/partner-1.png' },
    { name: 'Partner 2', img: 'https://www.evoca.am/img/temp/partners/partner-2.png' },
    { name: 'Partner 3', img: 'https://www.evoca.am/img/temp/partners/partner-6.png' },
    { name: 'Partner 4', img: 'https://www.evoca.am/img/temp/partners/partner-3.png' },
    { name: 'Partner 5', img: 'https://www.evoca.am/img/temp/partners/partner-4.png' },
    { name: 'Partner 6', img: 'https://www.evoca.am/img/temp/partners/partner-5-new.png' },
    { name: 'Partner 7', img: 'https://www.evoca.am/img/temp/partners/partner-7.png' },
  ];

  return (
    <div className="w-full bg-[#eef1f5] text-gray-400 py-8 border-t border-gray-300 text-[11px] leading-relaxed">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 pb-4">
        
        <div className="max-w-4xl text-justify space-y-2">
          <p>
            Հարգելի՛ այցելու, կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն եւ անգլերեն լեզուներում ոչ ամբողջական տեքստ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգման եւ արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
        </div>


        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 shrink-0">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.img}
              alt={partner.name}
              className="h-7 sm:h-8 object-contain opacity-60"
            />
          ))}
        </div>

      </div>
    </div>
  );
}