import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function SocialSecurityCards() {
  const subNavItems = [
    { title: 'Քարտեր', path: '/cards' },
    { title: 'Քարտերի տրամադրում և սպասարկում', path: '/cards/issuance-service' },
    { title: 'Սոցիալականապահովության վճարային քարտեր', path: '/cards/social-security' },
    { title: 'Evoca Benefits', path: '/cards/benefits' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Մանուշակագույն ենթաբաժինների մենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === '/cards'}
              className={({ isActive }) =>
                `px-7 py-4.5 text-[15px] font-bold transition-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'text-white/90'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pt-20 pb-24">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-14 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0"
            title="Գլխավոր էջ"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span>Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span>Քարտեր</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Սոցիալական ապահովության վճարային քարտեր</span>
        </div>

        {/* Հիմնական վերնագրի և նկարի հատված (ավելի իջեցված) */}
        <div className="relative overflow-visible flex flex-col lg:flex-row items-center justify-between my-20">
          {/* Ձախ բլոկ */}
          <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-16 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
            <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
              Սոցիալական ապահովության <br className="hidden sm:inline" /> վճարային քարտեր
            </h1>
            <p className="text-[#4a5568] text-lg lg:text-[19px] leading-[1.7] max-w-[440px]">
              Կենսաթոշակառուներին առաջարկում ենք ARCA կենսաթոշակային վճարային քարտեր՝ միայն կենսաթոշակների գումարների սպասարկման նպատակով: Քարտերը տրամադրում ենք Սոցիալական ապահովության պետական ծառայության հետ 2011թ. հունվարի 21-ին կնքված պայմանագրի համաձայն:
            </p>
          </div>

          {/* Աջ բլոկ (Նկար) */}
          <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" 
              alt="Սոցիալական ապահովության վճարային քարտեր" 
              className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none shadow-none"
            />
          </div>
        </div>

        {/* Դրան հաջորդող տեքստային բովանդակություն */}
        <div className="max-w-[1100px] mx-auto mt-24 space-y-10 text-lg lg:text-[19px] text-gray-700 leading-relaxed font-normal">
          <p>
            Քարտերը տրամադրում և սպասարկում ենք մեր կողմից հաստատված Կենսաթոշակային քարտերի տրամադրման և սպասարկման սակագների համաձայն:
          </p>

          <p>
            Քարտերի ստացման դիմում կարող եք ներկայացնել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ:
          </p>

          <p>
            Վճարային քարտերի տրամադրմանը, սպասարկմանը և օգտագործմանը վերաբերող մանրամասն տեղեկատվությանը կարող եք ծանոթանալ{' '}
            <a href="#" className="text-[#7100e2] underline font-medium hover:text-[#4c0099]">այստեղ</a>:
          </p>

          {/* Ծանոթագրություն բլոկ (առանց կողքի մանուշակագույն գծի) */}
          <p className="text-gray-600 bg-[#f9fafb] p-8 rounded-2xl">
            <strong className="text-gray-900 font-bold">Ծանոթագրություն</strong> - Կենսաթոշակառու՝ անձ, ում կենսաթոշակը վճարվում է անկանխիկ եղանակով, Բանկում բացված բանկային հաշվին փոխանցելու միջոցով: Կենսաթոշակ՝ կենսաթոշակի, պատվովճարի, դրամական օգնության և սոցիալական ապահովության այլ ծրագրերով նախատեսված դրամական վճարների գումարը:
          </p>

          {/* Վճարային քարտերով կատարվող գործառույթներ */}
          <div className="pt-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Վճարային քարտերով կատարվող գործառույթներ
            </h2>
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Վճարային քարտերով կարող եք՝</h3>
            
            <ul className="space-y-5 pl-2">
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Կանխիկացնել Ձեր քարտային հաշվին առկա միջոցները բանկոմատներից (ATM) և կանխիկացման կետերից (POS տերմինալներից):</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Կատարել անկանխիկ վճարումներ առևտրի և սպասարկման կետերում (ապրանքների կամ ծառայությունների դիմաց՝ խանութներում, ռեստորաններում, հյուրանոցներում և սպասարկման այլ կետերում):</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Կատարել կոմունալ վճարումներ՝ բանկոմատների միջոցով կամ օնլայն (www.arca.am-ում գրանցվելով վիրտուալ քարտ):</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Օնլայն գործարքներ կատարել (վճարումներ, գնումներ):</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտից քարտ գումար փոխանցել՝ բանկոմատների միջոցով կամ օնլայն:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Մեր online բանկինգ ծառայությունից օգտվելու պարագայում դուք հնարավորություն կունենաք առանց մեզ այցելելու կատարել դրամական միջոցների համալրում (ընթացիկ հաշվից՝ քարտային հաշիվ) և անմիջապես տնօրինել այդ գումարները ձեր քարտի միջոցով:</span>
              </li>
            </ul>

            <p className="mt-8 text-gray-600 bg-gray-50 p-6 rounded-xl">
              <strong className="text-gray-900 font-bold">Նշում.</strong> Քարտային հաշվով կատարվող դրամական շարժը վերահսկելու նպատակով ակտիվացնում ենք SMS-տեղեկացում ծառայությունը (դուք կարող եք դիմում գրել և հրաժարվել SMS տեղեկացումների ծառայությունից): Օնլայն վճարումներ իրականացնելիս կարող եք օգտվել 3D Secure ծառայությունից:
            </p>
          </div>

          {/* Օգտակար տեղեկատվություն */}
          <div className="pt-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Օգտակար տեղեկատվություն
            </h2>
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Քարտային վճարումներ կատարելիս անհրաժեշտ է հիշել՝</h3>
            
            <ul className="space-y-5 pl-2">
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտով կարող եք վճարումներ կատարել այն առևտրի ու սպասարկման կետերում, որտեղ փակցված է տվյալ քարտային համակարգի լոգոտիպը:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտով վճարում կատարելիս՝ մինչև անդորրագիրը ստորագրելը, հավաստացեք, որ անդորրագրում նշված գումարը համապատասխանում է ձեր գործարքի գումարին:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտով վճարելիս միշտ պահեք քարտը ձեր տեսադաշտում:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Եթե հրաժարվում եք գնումից, ապա պահանջեք չեղյալ համարել (VOID) ձեր վճարումը և պահե՛ք համապատասխան անդորրագիրը մինչև հերթական քաղվածքի ստացումը՝ համոզվելու, որ հաշվից գանձում չի կատարվել:</span>
              </li>
            </ul>
          </div>

          {/* Զգուշացում */}
          <div className="pt-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Զգուշացում
            </h2>
            
            <ul className="space-y-5 pl-2">
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Ապահովեք ձեր PIN ծածկագրի գաղտնիությունը (այն պետք է պահպանել գաղտնի և հասանելի չդարձնել այլ անձանց): PIN ծածկագրով կատարված բոլոր գործառույթների պատասխանատվությունը կրում եք դուք: Մենք պատասխանատվություն չենք կրում ձեր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով վճարային քարտի ոչ օրինական և ձեր կողմից չարտոնված օգտագործման համար:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտի կորստի կամ գողության դեպքում անհապաղ զանգահարեք մեզ (+374 10) 605555 հեռախոսահամարով կամ «Արմենիան Քարդ» վճարահաշվարկային համակարգի (+374 10) 592222 հեռախոսահամարով՝ հայտնելով քարտի ստացման դիմումի մեջ ձեր կողմից նշված գաղտնաբառը: Զանգից անմիջապես հետո քարտի գործողությունը կդադարեցվի:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Քարտի կորստի կամ գողության մասին մեզ տեղեկացնելու հետաձգումը կարող եք հանգեցնել ձեր քարտով այլ անձանց կողմից գործարքների կատարմանը:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Մենք պատասխանատվություն չենք կրում ձեզ հասցրած այն վնասի համար, որը կատարվել է քարտը կորցնելու և մեզ հայտնելու միջև ընկած ժամանակահատվածում:</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2.5 h-2.5 bg-[#7100e2] rounded-full mt-2.5 mr-4 shrink-0"></span>
                <span>Դուք պատասխանատվություն եք կրում քարտով կատարված բոլոր գործարքների համար մինչև այն պահը, երբ տեղեկացնում եք մեզ կորստի կամ գողություն պատճառով քարտի գործողությունը դադարեցնելու անհրաժեշտության մասին:</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}