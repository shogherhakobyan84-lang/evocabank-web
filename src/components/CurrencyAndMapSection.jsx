import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cashCurrencies = [
  { code: 'USD', buy: 362, sell: 367, flag: '🇺🇸' },
  { code: 'EUR', buy: 419, sell: 429, flag: '🇪🇺' },
  { code: 'RUB', buy: 4.17, sell: 4.45, flag: '🇷🇺' },
];

const extraCashCurrencies = [
  { code: 'GBP', buy: 486, sell: 503, flag: '🇬🇧' },
  { code: 'CHF', buy: 445, sell: 464, flag: '🇨🇭' },
  { code: 'CNY', buy: 52, sell: 56, flag: '🇨🇳' },
  { code: 'AED', buy: 97, sell: 102, flag: '🇦🇪' },
  { code: 'JPY', buy: 2.21, sell: 2.4, flag: '🇯🇵' },
  { code: 'KZT', buy: 0.73, sell: 0.84, flag: '🇰🇿' },
  { code: 'BYN', buy: 121, sell: 137, flag: '🇧🇾' },
];

const goldRates = [
  { sample: '375', price: '19,900' },
  { sample: '500', price: '26,500' },
  { sample: '583', price: '30,900' },
  { sample: '750', price: '39,800' },
  { sample: '875', price: '46,400' },
  { sample: '900', price: '47,700' },
  { sample: '958', price: '50,800' },
  { sample: '999', price: '53,000' },
];

const allRates = {
  AMD: { buy: 1, sell: 1 },
  ...Object.fromEntries([...cashCurrencies, ...extraCashCurrencies].map(c => [c.code, { buy: c.buy, sell: c.sell }]))
};

const allCurrencyList = ['AMD', 'USD', 'EUR', 'RUB', 'GBP', 'CHF', 'CNY', 'AED', 'JPY', 'KZT', 'BYN'];

export default function CurrencyAndMapSection() {
  const [activeTab, setActiveTab] = useState('cash');
  const [showAllCash, setShowAllCash] = useState(false);
  
  const [haveAmount, setHaveAmount] = useState('');
  const [wantAmount, setWantAmount] = useState('');
  const [haveCurrency, setHaveCurrency] = useState('AMD');
  const [wantCurrency, setWantCurrency] = useState('USD');

  const [isHaveOpen, setIsHaveOpen] = useState(false);
  const [isWantOpen, setIsWantOpen] = useState(false);

  useEffect(() => {
    const num = parseFloat(haveAmount);
    if (isNaN(num) || num <= 0 || haveAmount === '') {
      setWantAmount('');
      return;
    }

    if (haveCurrency === wantCurrency) {
      setWantAmount(haveAmount);
      return;
    }

    let amountInAmd = 0;
    if (haveCurrency === 'AMD') {
      amountInAmd = num;
    } else {
      const rateObj = allRates[haveCurrency];
      amountInAmd = num * (rateObj ? rateObj.buy : 1);
    }

    let result = 0;
    if (wantCurrency === 'AMD') {
      result = amountInAmd;
    } else {
      const rateObj = allRates[wantCurrency];
      result = rateObj && rateObj.sell ? amountInAmd / rateObj.sell : amountInAmd;
    }

    setWantAmount(result.toFixed(2));
  }, [haveAmount, haveCurrency, wantCurrency]);

  const handleNumberInput = (e, setter) => {
    const val = e.target.value;
    if (val === '' || /^[0-9]*[.,]?[0-9]*$/.test(val)) {
      setter(val);
    }
  };

  const currentCashList = showAllCash ? [...cashCurrencies, ...extraCashCurrencies] : cashCurrencies;

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Ձախ հատված */}
        <div className="lg:col-span-8 pl-2 md:pl-6">
          
          {(activeTab === 'cash' || activeTab === 'cashless') && (
            <p className="text-[#222222] text-base md:text-[17px] font-medium leading-relaxed mb-8 max-w-3xl tracking-tight">
              20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
            </p>
          )}

          {/* Թաբեր */}
          <div className="flex items-center space-x-1 overflow-x-auto px-1 mb-0">
            {[
              { id: 'cash', label: 'Կանխիկ' },
              { id: 'cashless', label: 'Անկանխիկ' },
              { id: 'gold', label: 'Ոսկու փոխարժեք' },
              { id: 'ruble', label: 'Ռուբլու կանխիկ մուտք' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAllCash(false);
                  }}
                  className={`px-4 py-3 text-sm md:text-base font-light rounded-t-[12px] transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#111111] font-medium shadow-[0_-4px_12px_rgba(0,0,0,0.03)] z-10'
                      : 'text-[#888888] hover:text-[#555555] bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Գլխավոր սպիտակ բլոկ */}
          <div className="bg-white rounded-b-[20px] rounded-tr-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 pt-6">
            
            {(activeTab === 'cash' || activeTab === 'cashless') && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Աղյուսակը */}
                <div className="md:col-span-7 md:border-r md:border-gray-100 md:pr-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 font-semibold mb-5 px-2">
                      <span>Արժույթ</span>
                      <div className="flex space-x-14">
                        <span>Առք</span>
                        <span>Վաճառք</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {currentCashList.map((item) => (
                        <div key={item.code} className="flex items-center justify-between py-2.5 px-2 border-b border-gray-100 last:border-none">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.flag}</span>
                            <span className="font-bold text-[#111111] text-base">{item.code}</span>
                          </div>
                          <div className="flex space-x-10 text-base font-bold">
                            <span className="text-red-500 flex items-center">
                              <span className="text-xs mr-1">▼</span> {item.buy}
                            </span>
                            <span className="text-green-600 flex items-center">
                              <span className="text-xs mr-1">▲</span> {item.sell}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ներքևի մաս */}
                  <div className="flex items-center justify-between mt-6 pt-3 text-xs">
                    <span className="text-gray-400 font-medium">Թարմացվել է՝ 27.08.26</span>
                    <button 
                      onClick={() => setShowAllCash(!showAllCash)}
                      className="text-[#7100e2] hover:text-[#8a2be2] font-bold transition-colors text-sm"
                    >
                      {showAllCash ? 'Թաքցնել' : 'Այլ արժույթներ'}
                    </button>
                  </div>
                </div>

                {/* Աջ մասի փոխարկիչը */}
                <div className="md:col-span-5 flex flex-col space-y-4">
                  
                  {/* Ունեմ */}
                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1.5 block">Ունեմ</label>
                    <div className="relative border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between bg-white">
                      <input 
                        type="text" 
                        value={haveAmount}
                        onChange={(e) => handleNumberInput(e, setHaveAmount)}
                        className="w-full outline-none text-[#111111] font-light text-gray-700 bg-transparent text-lg"
                      />
                      <div className="relative">
                        <button 
                          type="button"
                          onClick={() => { setIsHaveOpen(!isHaveOpen); setIsWantOpen(false); }}
                          className="text-sm font-bold text-[#7100e2] ml-2 flex items-center select-none focus:outline-none"
                        >
                          {haveCurrency} <span className={`ml-1 text-sm font-medium -translate-y-[1px] inline-block transition-transform duration-200 ${isHaveOpen ? 'rotate-180' : ''}`}>⌄</span>
                        </button>

                        {isHaveOpen && (
                          <div className="absolute right-0 top-full mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                            {allCurrencyList.map((cur) => (
                              <div
                                key={cur}
                                onClick={() => { setHaveCurrency(cur); setIsHaveOpen(false); }}
                                className="px-4 py-2 text-sm font-bold text-gray-700 hover:bg-purple-50 hover:text-[#7100e2] cursor-pointer"
                              >
                                {cur}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Կստանամ */}
                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1.5 block">Կստանամ</label>
                    <div className="relative border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between bg-white">
                      <input 
                        type="text" 
                        value={wantAmount}
                        readOnly
                        className="w-full outline-none text-[#111111] font-light text-gray-700 bg-transparent text-lg cursor-default"
                      />
                      <div className="relative">
                        <button 
                          type="button"
                          onClick={() => { setIsWantOpen(!isWantOpen); setIsHaveOpen(false); }}
                          className="text-sm font-bold text-[#7100e2] ml-2 flex items-center select-none focus:outline-none"
                        >
                          {wantCurrency} <span className={`ml-1 text-sm font-medium -translate-y-[1px] inline-block transition-transform duration-200 ${isWantOpen ? 'rotate-180' : ''}`}>⌄</span>
                        </button>

                        {isWantOpen && (
                          <div className="absolute right-0 top-full mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                            {allCurrencyList.map((cur) => (
                              <div
                                key={cur}
                                onClick={() => { setWantCurrency(cur); setIsWantOpen(false); }}
                                className="px-4 py-2 text-sm font-bold text-gray-700 hover:bg-purple-50 hover:text-[#7100e2] cursor-pointer"
                              >
                                {cur}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'gold' && (
              <div>
                <div className="flex justify-between text-xs text-gray-400 font-semibold mb-5 px-2">
                  <span>Հարգ</span>
                  <span>Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</span>
                </div>
                <div className="space-y-3">
                  {goldRates.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 px-2 border-b border-gray-100 last:border-none">
                      <span className="font-bold text-[#111111] text-base">{item.sample}</span>
                      <span className="font-bold text-[#111111] text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-3 text-xs text-gray-400 font-medium">
                  Թարմացվել է՝ 27.08.26
                </div>
              </div>
            )}

            {activeTab === 'ruble' && (
              <div>
                <div className="flex justify-between text-xs text-gray-400 font-semibold mb-5 px-2">
                  <span>Արժույթ</span>
                  <span>Սակագին</span>
                </div>
                <div className="flex items-center justify-between py-3 px-2 border-b border-gray-100">
                  <span className="font-bold text-[#111111] text-base">RUB</span>
                  <span className="font-bold text-[#111111] text-base">10%</span>
                </div>
                <div className="mt-6 pt-3 text-xs text-gray-400 font-medium">
                  Թարմացվել է՝ 30.07.26
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Աջ հատված՝ Քարտեզ */}
        <div className="lg:col-span-4 pr-2 md:pr-4">
          <h3 className="text-[22px] font-bold text-[#111111] mb-1">Մեր հասցեները</h3>
          <p className="text-xs text-gray-400 font-medium mb-6">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>

          <div className="group relative flex flex-col items-center text-center">
            <div className="relative w-full h-56 mb-6 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/img/addresses.png" 
                alt="Map background" 
                className="w-full h-full object-contain"
              />
              <div className="absolute z-10 -translate-x-3 -translate-y-2 transition-transform duration-300 transform group-hover:-translate-y-6">
                <img 
                  src="https://www.evoca.am/img/addresses-pin.png" 
                  alt="Map Pin" 
                  className="w-12 h-auto drop-shadow-md"
                />
              </div>
            </div>

            <Link 
              to="/branches" 
              className="inline-flex items-center justify-center space-x-2 bg-[#f0ebfc] hover:bg-[#e6dff9] text-[#7100e2] font-extrabold px-6 py-3.5 rounded-full transition-colors duration-200 text-sm w-full max-w-[280px]"
            >
              <span>Դիտել քարտեզը</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}