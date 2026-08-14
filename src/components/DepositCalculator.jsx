import React, { useState } from 'react';

export default function DepositCalculator() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(1);
  const [term, setTerm] = useState(91);

  const amountMin = 0, amountMax = 50000000;
  const rateMin = 1, rateMax = 36;
  const termMin = 91, termMax = 1095;

  const getPercent = (value, min, max) =>
    Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

  // 1. Օրական կտրվածքով հաշվարկվող տոկոսագումար
  const dailyInterest = Math.round((amount * (rate / 100)) / 365);

  // 2. Ավանդային պայմանագրի ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ
  const totalInterest = Math.round(((amount * (rate / 100)) / 365) * term);

  // 3. Փաստացի վճարվող զուտ տոկոսային եկամուտ (10% եկամտային հարկը հանած)
  const netInterest = Math.round(totalInterest * 0.9);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 items-start">
        
        {/* Ձախ Կողմ - Input-ներ */}
        <div className="space-y-6">

          {/* 1. Ներդրվող գումար */}
          <div>
            <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
              <span className="text-[#64748b] text-sm font-medium">
                Ներդրվող գումար
              </span>
              <input
                type="text"
                value={amount.toLocaleString()}
                onChange={(e) => {
                  const val = Number(e.target.value.replace(/\D/g, ''));
                  setAmount(val);
                }}
                className="text-right font-bold text-xl text-[#1f242e] outline-none w-40 bg-transparent"
              />

              <div
                className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                style={{ width: `${getPercent(amount, amountMin, amountMax)}%` }}
              />
            </div>

            <div className="relative w-full h-3 mt-1">
              <div
                className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                style={{ left: `${getPercent(amount, amountMin, amountMax)}%` }}
              >
                ▲
              </div>
              <input
                type="range"
                min={amountMin}
                max={amountMax}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="absolute top-0 left-0 w-full opacity-0 cursor-pointer h-4"
              />
            </div>
            <div className="flex justify-between text-xs text-[#a0a6b5] font-normal px-0.5">
              <span>0</span>
              <span>50000000</span>
            </div>
          </div>

          {/* 2. Տարեկան տոկոսադրույք */}
          <div>
            <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
              <span className="text-[#64748b] text-sm font-medium">
                Տարեկան տոկոսադրույք
              </span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="text-right font-bold text-xl text-[#1f242e] outline-none w-12 bg-transparent"
                />
                <span className="font-bold text-xl text-[#1f242e]">%</span>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                style={{ width: `${getPercent(rate, rateMin, rateMax)}%` }}
              />
            </div>

            <div className="relative w-full h-3 mt-1">
              <div
                className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                style={{ left: `${getPercent(rate, rateMin, rateMax)}%` }}
              >
                ▲
              </div>
              <input
                type="range"
                min={rateMin}
                max={rateMax}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="absolute top-0 left-0 w-full opacity-0 cursor-pointer h-4"
              />
            </div>
            <div className="flex justify-between text-xs text-[#a0a6b5] font-normal px-0.5">
              <span>1 %</span>
              <span>36 %</span>
            </div>
          </div>

          {/* 3. Ավանդի ժամկետ */}
          <div>
            <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
              <span className="text-[#64748b] text-sm font-medium">
                Ավանդի ժամկետ
              </span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="text-right font-bold text-xl text-[#1f242e] outline-none w-16 bg-transparent"
                />
                <span className="font-bold text-xl text-[#1f242e]">օր</span>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                style={{ width: `${getPercent(term, termMin, termMax)}%` }}
              />
            </div>

            <div className="relative w-full h-3 mt-1">
              <div
                className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                style={{ left: `${getPercent(term, termMin, termMax)}%` }}
              >
                ▲
              </div>
              <input
                type="range"
                min={termMin}
                max={termMax}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="absolute top-0 left-0 w-full opacity-0 cursor-pointer h-4"
              />
            </div>
            <div className="flex justify-between text-xs text-[#a0a6b5] font-normal px-0.5">
              <span>91 օր</span>
              <span>1095 օր</span>
            </div>
          </div>

        </div>

        {/* Աջ Կողմ - Արդյունքներ (Right Results Panel) */}
        <div className="space-y-6 pt-1">
          
          {/* Row 1 */}
          <div className="flex justify-between items-start pb-4 border-b border-gray-100">
            <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
              Օրական կտրվածքով հաշվարկվող տոկոսագումար *
            </span>
            <span className="text-xl font-bold text-[#1f242e]">
              {dailyInterest.toLocaleString()}
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-start pb-4 border-b border-gray-100">
            <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
              Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ
            </span>
            <span className="text-xl font-bold text-[#1f242e]">
              {totalInterest.toLocaleString()}
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-start pb-4 border-b border-gray-100">
            <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
              Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ
            </span>
            <span className="text-xl font-bold text-[#1f242e]">
              {netInterest.toLocaleString()}
            </span>
          </div>

          {/* Info note with icon */}
          <div className="flex items-start gap-2 pt-1 text-[11px] text-[#a0a6b5] leading-relaxed">
            <p className="flex-1">
              Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներն հարկվում են 10% եկամտային հարկի չափով
            </p>
            <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs font-serif text-gray-500 flex-shrink-0 cursor-pointer hover:border-purple-600 hover:text-purple-600 transition-all">
              i
            </div>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      <div className="pt-4">
        <p className="text-xs text-[#a0a6b5] leading-relaxed">
          Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
        </p>
      </div>
    </div>
  );
}