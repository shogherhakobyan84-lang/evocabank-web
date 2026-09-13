import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ImportantInfo() {
  const location = useLocation();

  const subNavItems = [
    { title: 'Վարկեր', path: '/hy/loans' },
    { title: 'Վարկային պատմություն և սքոր', path: '/hy/loans/credit-history' },
    { title: 'Կարևոր տեղեկատվություն', path: '/hy/loans/important-info' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Sub-Navbar */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {subNavItems.map((item, idx) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={idx}
                to={item.path}
                className={`px-7 py-4.5 text-[15px] font-bold cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white shadow-inner'
                    : 'text-white/90'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Էջի հիմնական բովանդակությունը */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
        
        {/* 2. Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-2.5 select-none justify-start">
          <Link to="/hy/loans" className="flex items-center cursor-pointer">
            <svg className="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Անհատ</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Վարկեր</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Կարևոր տեղեկատվություն</span>
        </div>

        {/* 3. Վերնագիր */}
        <h1 className="text-4xl font-bold text-gray-900 mt-20 mb-12 text-left">
          Կարևոր տեղեկատվություն
        </h1>

        {/* 4. Բովանդակություն (ավելի մեծ և թեթևակի մգացված տառերով) */}
        <div className="text-gray-800 space-y-10 text-xl leading-loose text-left font-normal">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ուշադրություն</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով։</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span><strong>ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Վարկի տոկոսագումարները հաշվարկվում են <strong>ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ</strong> հիման վրա, իսկ <strong>ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ</strong> ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (<a href="https://www.cba.am" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.cba.am</a>):</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
                <span>Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է <a href="https://www.evoca.am" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.evoca.am</a> կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատարանի միջոցով: Իրավունքների պաշտպանության գործընթացը նկարագրված է <a href="https://www.evoca.am" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.evoca.am</a> կայքում և Բանկի գործունեության վայրերում տեղակայված «Ի՞նչ անել, եթե բողոք ունեք» ձևաթղթում:</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              ԶԳՈՒՇԱՑՈՒՄ
            </h3>
            <p className="font-semibold text-gray-900 leading-loose pl-7">
              ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔԵՐՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ ՁԵՐ ՏՎՅԱԼՆԵՐԸ (ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՉԿԱՏԱՐՄԱՆ, ԹԵՐԻ ԿԱՏԱՐՄԱՆ ՄԱՍԻՆ ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԸ) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              ՏԵՂԵԿԱՑՈՒՄ
            </h3>
            <p className="text-gray-800 leading-loose pl-7">
              Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ</h3>
            <p className="leading-loose">Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <strong>ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</strong> վրա:</p>
            
            <h4 className="font-bold text-gray-900 text-xl pt-2 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Ինչ է վարկային պատմությունը
            </h4>
            <p className="leading-loose pl-7">«Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:</p>
            <p className="leading-loose pl-7">Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:</p>

            <h4 className="font-bold text-gray-900 text-xl pt-2 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Որոնք են վարկային պատմության ձևավորման աղբյուրները
            </h4>
            <p className="leading-loose pl-7">Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):</p>

            <h4 className="font-bold text-gray-900 text-xl pt-2 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Ինչ է վարկային բյուրոն
            </h4>
            <p className="leading-loose pl-7">Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:</p>

            <h4 className="font-bold text-gray-900 text-xl pt-2 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Ինչպես բարելավել վարկային պատմությունը
            </h4>
            <p className="leading-loose pl-7">Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:</p>

            <h4 className="font-bold text-gray-900 text-xl pt-2 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Ուր դիմել եթե վարկային պատմությունը սխալ է
            </h4>
            <p className="leading-loose pl-7">
              Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում Իմ ԱՔՌԱ անձնական գրասենյակից: ԱՔՌԱ-ի կողմից տրամադրված վարկային զեկույցների վերաբերյալ հաճախորդների բողոքների ընդունման/ստացման, քննարկման և վերջիններիս արձագանքման գործընթացը, գործողությունների հաջորդականությունը սահմանվում է «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ի «Վեճերի լուծման ընթացակարգ»-ով:
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
            </h3>
            
            <h4 className="font-bold text-gray-900 text-xl pt-2">Դրական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-4 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Մշտական բնակության վայրը,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Կայուն եկամտի աղբյուրը,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Դրական կամ չեզոք վարկային պատմությունը,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Արժանահավատ և լիարժեք փաստաթղթերը:</span>
              </li>
            </ul>

            <h4 className="font-bold text-gray-900 text-xl pt-4">Բացասական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-4 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Բացասական վարկային պատմությունը,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Պետական տուրքեր և այլ ծախսեր
            </h3>
            <p className="leading-loose">Գրավադրման պայմանով վարկերի դեպքում առկա են հետևյալ վճարները</p>
            <ul className="space-y-4 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>Գրավադրվող գույքի գնահատում`</strong> 10,000-150,000 դրամ, կախված գույքի տեսակից, մակերեսից և գնահատող կազմակերպության սականգներից: Վճարը մուտքագրվում է գնահատող կազմակերպության հաշվին, գնահատումը իրականացվում է վարկի տրամադրումից առաջ,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>Նոտարական ձևակերպման ծախսեր՝</strong> 10,000-30,000 դրամ (վճարումը կատարվում է նոտարական գրասենյակում),</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>Գրավի գրանցման ծախսեր՝</strong> անշարժ գույքի գրավի գրանցման դեպքում` սկսած 26,400 ՀՀ դրամից, եռակողմ պայմանագրով իրավունքների գրանցման դեպքում` սկսած 71,400 դրամից: Գրանցումը կատարվում է 4 աշխատանքային օրում: Ավելի կարճ ժամկետներում իրավունքների գրանցման սակագներին ծանոթանալու համար կարող եք այցելել ՀՀ ԿԱ անշարժ գույքի կադաստրի պետական կոմիտեի <a href="https://www.cadastre.am" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.cadastre.am</a> կայք:</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>Գրավադրվող գույքի ապահովագրում (պահանջվելու դեպքում):</strong> Ապահովագրությունը պետք է կատարվի լիցենզավորված ապահովագրական ընկերությունների կողմից վարկի մնացորդի 0.15 % – 2.5 %-ի չափով: Ապահովագրության վճարը կախված վարկի մնացորդից և ապահովագրվավճարի տարեկան սակագնից կարող է յուրաքանչյուր տարի փոփոխվել: Ապահովագրության շահառուն պետք է հանդիսանա Բանկը:</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ
            </h3>
            <p className="leading-loose">
              Բանկը իր կողմից տրամադրված վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (Annual Percentage Rate կամ APR)` սպառողի կրեդիտավորման ընդհանուր ծախս` արտահայտված տրամադրված կրեդիտի տարեկան տոկոսով և հաշվարկված` հիմք ընդունելով համապատասխան բանաձևը:
            </p>
            <p className="leading-loose">
              Ենթադրենք բանկը սպառողին տրամադրում է վարկ հետևյալ պայմաններով`
            </p>
            <ul className="space-y-3 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Վարկի գումար – 700,000 ՀՀ դրամ,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Անվանական տարեկան տոկոսադրույքը – 18 %,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Վարկի մարման ժամկետը – 12 ամիս,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Վարկի մարման եղանակը – անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը մարվում է ամենամսյա հավասարաչափ),</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Վարկային հայտի ուսումնասիրման միանվագ վճար – 1,000 ՀՀ դրամ:</span>
              </li>
            </ul>
            <p className="leading-loose font-semibold">
              Այսպիսով` բանկի կողմից առաջարկվող վերոհիշյալ պայմաններով վարկի տարեկան փաստացի տոկոսադրույքը կկազմի 19.95 %:
            </p>

            <h4 className="font-bold text-gray-900 text-xl pt-2">Վարկի տարեկան փաստացի տոկոսադրույքի հաշվարկի մեջ չներառվող վճարներ`</h4>
            <ul className="space-y-3 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Նոտարական ձևակերպման վճարներ,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Գրավի գրանցման վճարները,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span>Կանխիկացման վճարները:</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-[#7100e2] mr-3 text-4xl leading-none">•</span>
              Լողացող տոկոսադրույքի հաշվարկման կարգ
            </h3>
            <p className="leading-loose">
              Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքի հաշվարկն իրականացվում է հետևյալ բանաձևով` <strong>ՏԼ = ՏՀ + ՏՓ</strong>, որտեղ՝
            </p>
            <ul className="space-y-3 pl-7">
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>ՏԼ</strong> - Լողացող տոկոսադրույք,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>ՏՀ</strong> - Լողացող տոկոսադրույքի հաստատուն բաղադրիչ,</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7100e2] mr-3 text-3xl leading-none">•</span>
                <span><strong>ՏՓ</strong> - Լողացող տոկոսադրույքի փոփոխուն բաղադրիչ:</span>
              </li>
            </ul>
            <p className="leading-loose">
              Լողացող տոկոսադրույքի կիրառման դեպքում յուրաքանչյուր վարկի համար վարկային պայմանագրերում սահմանվում են անվանական տոկոսադրույքի առավելագույն և նվազագույն շեմեր, որոնցից ավելի տոկոսադրույքը չի կարող բարձրանալ կամ իջնել։ Բանկը տարին երկու անգամ (փետրվարի 1-ին և օգոստոսի 1-ին) փոփոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (ՏՓ) և հրապարակում պաշտոնական կայքում։
            </p>
            <p className="leading-loose">
              Հիմնական փոփոխուն բաղադրիչների հաշվարկման համար հիմք են հանդիսանում ՀՀ դրամի դեպքում՝ պետական պարտատոմսերի եկամտաբերությունը (<a href="https://www.cba.am/am/SitePages/fmofinancialmarkets.aspx" target="_blank" rel="noreferrer" className="text-blue-600 underline">CBA հղում</a>), ԱՄՆ դոլարի դեպքում՝ SOFR 6 Month, իսկ Եվրոյի դեպքում՝ EURIBOR 6 Month տոկոսադրույքները։ Փոփոխուն բաղադրիչի միջին թվաբանականը կլորացվում է 0.5%-ի քայլով, իսկ բացասական արժեք լինելու դեպքում կիրառվում է 0% նվազագույն շեմը։
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}