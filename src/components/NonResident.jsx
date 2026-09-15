import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function NonResident() {
  const [openAccordion, setOpenAccordion] = useState(0); // Առաջինը բաց է սկզբում

  const subNavItems = [
    { title: 'Հաշիվների բացում և սպասարկում', path: '/accounts' },
    { title: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/accounts/unallocated-metal' },
    { title: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/accounts/non-resident' },
    { title: 'Պահատուփեր', path: '/accounts/safes' },
  ];

  const accordionsData = [
    {
      title: 'Առավելություններ',
      content: (
        <div className="space-y-6 text-[#1a1d20] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <div>
            <h4 className="font-bold text-[#1a1d20] mb-1.5 flex items-center">
              <span className="w-3 h-3 bg-[#7100e2] rounded-full inline-block mr-3 shrink-0"></span>
              Prime կարգավիճակ Բանկում
            </h4>
            <p className="text-[#4a5568] pl-6">Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1d20] mb-1.5 flex items-center">
              <span className="w-3 h-3 bg-[#7100e2] rounded-full inline-block mr-3 shrink-0"></span>
              Անհատական մենեջեր/Անձնական օգնական
            </h4>
            <p className="text-[#4a5568] pl-6">2/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1d20] mb-1.5 flex items-center">
              <span className="w-3 h-3 bg-[#7100e2] rounded-full inline-block mr-3 shrink-0"></span>
              Հեռավար սպասարկում
            </h4>
            <p className="text-[#4a5568] pl-6">Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1a1d20] mb-1.5 flex items-center">
              <span className="w-3 h-3 bg-[#7100e2] rounded-full inline-block mr-3 shrink-0"></span>
              Փաստաթղթերի անվճար առաքում
            </h4>
            <p className="text-[#4a5568] pl-6">Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահին՝ արագ և անվճար։</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Ֆիզիկական անձանց հաշվի բացման պայմաններ',
      content: (
        <div className="space-y-4 text-[#4a5568] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Հանդիսանում են ՀՀ-ում գտնվող անշարժ գույքի սեփականատեր և ունեն անշարժ գույքի նկատմամբ սեփականության իրավունքի գրանցման վկայական։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Պատրաստ են ներդնել նվազագույնը 6 ամիս ժամկետով և առնվազն 20 000 ԱՄՆ դոլար, 20 000 Եվրո, 1 500 000 ՌԴ ռուբլի և 10 000 000 ՀՀ դրամ գումարի չափով համարժեք ավանդ «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ում։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            ՀՀ-ում գրանցված են որպես անհատ ձեռնարկատեր և ունեն ՀՀ Արդարադատության նախարարության իրավաբանական անձանց պետական ռեգիստրի կողմից տրամադրված գրանցման վկայական։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Հանդիսանում են ՀՀ-ում գրանցված իրավաբանական անձի մասնակից (բաժնետեր) հիմնավորված համապատասխան փաստաթղթերով։
          </p>
        </div>
      ),
    },
    {
      title: 'Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր',
      content: (
        <div className="space-y-4 text-[#4a5568] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Անձնագիր
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Միջազգային անձնագիր
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Եկամուտների ծագման աղբյուրը (ֆիզիկական անձի նախորդ տարվա հարկային հայտարարագիր, անշարժ գույքի, բաժնետոմսերի կամ արժեքավոր թղթերի վաճառքի կամ վարձակալության պայմանագիր)։
          </p>
        </div>
      ),
    },
    {
      title: 'Իրավաբանական անձանց փաստաթղթերի ցանկ',
      content: (
        <div className="space-y-4 text-[#4a5568] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Կանոնադրություն (ոչ ռեզիդենտների դեպքում` կանոնադրություն կամ դրան փոխարինող այլ փաստաթուղթ)։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում` տվյալ երկրի պետական գրանցման մարմնի կողմից տրված վկայական և հարկային մարմիններում գրանցված փաստաթուղթ)։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե այն բացակայում է պետական ռեգիստրի վկայականում։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Գործադիր մարմնի ղեկավարի, գլխավոր հաշվապահի անձնագրերը կամ անձը հաստատող փաստաթղթերը։
          </p>
          <p className="flex items-start">
            <span className="w-2.5 h-2.5 bg-[#7100e2] rounded-full inline-block mr-3 mt-2 shrink-0"></span>
            Ընկերության ֆինանսական հաշվետվություններ՝ վերջին մեկ տարվա կտրվածքով, աուդիտորական եզրակացություն։
          </p>
        </div>
      ),
    },
    {
      title: 'Սակագներ',
      content: (
        <div className="space-y-6 text-[#4a5568] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <div>
            <h4 className="font-bold text-[#1a1d20] mb-2">Ֆիզիկական անձանց համար</h4>
            <ul className="space-y-2 pl-4">
              <li>• Հաշվի բացում՝ 50,000 դրամ</li>
              <li>• Տարեկան սպասարկում՝ 250,000 դրամ</li>
              <li>• Փակման վճար՝ 0 դրամ</li>
              <li>• Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին՝ 0.5%</li>
              <li>• Հաճախորդների փոխանցումներ՝ 0.5%</li>
              <li>• Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-bold text-[#1a1d20] mb-2">Իրավաբանական անձանց համար</h4>
            <ul className="space-y-2 pl-4">
              <li>• Հաշվի բացում՝ 100,000 դրամ</li>
              <li>• Տարեկան սպասարկում՝ 500,000 ՀՀ դրամ</li>
              <li>• Փակման վճար՝ 0 դրամ</li>
              <li>• Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին՝ 0.5%</li>
              <li>• Հաճախորդների փոխանցումներ՝ 0.5%</li>
              <li>• Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Հաշվի բացման փուլեր',
      content: (
        <div className="space-y-4 text-[#4a5568] text-[17px] lg:text-[18px] font-normal leading-[1.7] pl-2">
          <h4 className="font-bold text-[#1a1d20] mb-1">Փաստաթղթերի ուղարկում</h4>
          <p>Ուղարկեք անհրաժեշտ փաստաթղթերը հետևյալ էլ․ հասցեին՝ <a href="mailto:primeonline@evoca.am" className="text-[#7100e2] underline font-medium">primeonline@evoca.am</a></p>
          
          <h4 className="font-bold text-[#1a1d20] mt-4 mb-1">Առցանց նույնականացում տեսազանգով</h4>
          <p>Փաստաթղթերի ամբողջական փաթեթը ստանալուց հետո մենք կտեղեկացնենք՝ երբ և ինչպես է տեղի ունենալու անձը նույնականացնելու տեսազանգը։ Բանկի դրական դիրքորոշումից հետո անհրաժեշտ է այլ բանկում գործող հաշվից առնվազն 50 ԱՄՆ դոլար փոխանցում կատարել Evocabank-ում Ձեր անունով բացված հաշվին։</p>
          
          <h4 className="font-bold text-[#1a1d20] mt-4 mb-1">Կապ մեզ հետ</h4>
          <p>Ցանկացած հարցի դեպքում կարող եք գրել օնլայն primeonline@evoca.am հասցեին կամ զանգահարել +374 33 625555 հեռախոսահամարին։</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Մանուշակագույն ենթամենյու */}
      <div className="sticky top-20 z-40 w-full bg-[#7100e2] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center space-x-2 overflow-x-auto">
          {subNavItems.map((item, idx) => {
            const isActive = item.path === '/accounts/non-resident';
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={`px-7 py-4.5 text-[15px] font-bold transition-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4c0099] text-white'
                    : 'text-white/90 hover:bg-[#5e00bd]'
                }`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-8 pt-8 pb-16">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2.5 font-normal">
          <Link 
            to="/" 
            className="text-gray-400 flex items-center justify-center shrink-0 transition-none hover:text-gray-400"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001-1.414-1.414l-7-7z" />
            </svg>
          </Link>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500 font-normal">Անհատ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-500 font-normal">Հաշիվներ</span>
          <span className="text-gray-300 text-xs">›</span>
          <span className="text-gray-900 font-medium">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
        </div>

        {/* Հիմնական բովանդակություն՝ Ձախում ֆոնով տեքստ, աջում՝ նկարը */}
        <div className="my-10 relative overflow-visible">
          <div className="flex flex-col lg:flex-row items-center w-full">
            
            {/* Ձախ բլոկ՝ Տեքստի ֆոնը */}
            <div className="w-full lg:w-[50%] bg-[#f5f6f8] py-20 lg:py-24 px-10 lg:px-16 rounded-bl-[140px] z-10 shrink-0">
              <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a202c] mb-6 leading-[1.2]">
                Ոչ ռեզիդենտ <br className="hidden sm:inline" /> հաճախորդների հեռավար <br className="hidden sm:inline" /> սպասարկում
              </h1>
              <p className="text-[#4a5568] text-base lg:text-[16.5px] leading-[1.7] max-w-[440px]">
                Բանկ այցելելն այևս պարտադիր չէ: Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի:
              </p>
            </div>

            {/* Աջ բլոկ՝ Նկարը */}
            <div className="w-full lg:w-[58%] z-20 lg:-ml-24 -my-8">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" 
                alt="Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում" 
                className="w-full h-auto min-h-[460px] lg:min-h-[520px] object-cover rounded-none shadow-none"
              />
            </div>

          </div>
        </div>

        {/* Մեջտեղի հատվածի տեքստը */}
        <div className="mt-20 mb-12 flex flex-col items-center w-full">
          <div className="max-w-[1100px] w-full space-y-8 text-[#1a1d20] text-[18px] lg:text-[19px] font-normal leading-[1.7] text-left">
            <p>
              24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր. բոլոր մանրունքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից:
            </p>
            <p>
              Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու:
            </p>
            <p className="font-medium text-[#1a1d20]">
              Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում:
            </p>
          </div>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԲԱԺԻՆ (Ակորդեոններ) */}
        <div className="max-w-[1100px] mx-auto mt-16">
          <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#1a1d20] mb-8 tracking-wide">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {accordionsData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#7100e2] shadow-sm' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none bg-white cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Հաստացված և միշտ մանուշակագույն սլաք */}
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 shrink-0 text-[#7100e2] ${
                          isOpen ? 'transform rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      
                      {/* Հաստացված վերնագրեր՝ փակվելիս մոխրագույն, բացվելիս սև */}
                      <span className={`text-lg lg:text-[19px] font-semibold transition-colors duration-200 ${
                        isOpen ? 'text-[#1a1d20]' : 'text-[#6b7280]'
                      }`}>
                        {item.title}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8 pt-2 bg-white border-t border-gray-100">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}