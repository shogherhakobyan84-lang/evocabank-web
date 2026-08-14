import React, { useState } from 'react';

export default function LoanCalculator() {
  const [activeTab, setActiveTab] = useState('loan');

  // --- LOAN STATE ---
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(1);
  const [rate, setRate] = useState(1);
  const [repaymentType, setRepaymentType] = useState('differentiating');
  const [loanResult, setLoanResult] = useState(null);

  const amountMin = 0, amountMax = 50000000;
  const termMin = 1, termMax = 1200;
  const rateMin = 1, rateMax = 36;

  // --- DEPOSIT STATE ---
  const [depAmount, setDepAmount] = useState(0);
  const [depRate, setDepRate] = useState(1);
  const [depTerm, setDepTerm] = useState(91);

  const depAmountMin = 0, depAmountMax = 50000000;
  const depRateMin = 1, depRateMax = 36;
  const depTermMin = 91, depTermMax = 1095;

  const getPercent = (value, min, max) =>
    Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

  // Loan calculation function
  const calculateLoan = () => {
    const monthlyRate = rate / 100 / 12;
    let monthlyPayment = 0;

    if (monthlyRate === 0) {
      monthlyPayment = amount / term;
    } else if (repaymentType === 'annuity') {
      monthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
        (Math.pow(1 + monthlyRate, term) - 1);
    } else {
      const principal = amount / term;
      const interest = amount * monthlyRate;
      monthlyPayment = principal + interest;
    }

    setLoanResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(monthlyPayment * term),
    });
  };

  // Deposit real-time calculations
  const dailyInterest = Math.round((depAmount * (depRate / 100)) / 365);
  const totalInterest = Math.round(((depAmount * (depRate / 100)) / 365) * depTerm);
  const netInterest = Math.round(totalInterest * 0.9);

  return (
    <div className="w-full bg-[#f8f9fb] py-12 font-sans flex justify-center">
      <div className="w-full max-w-[1140px] px-4 md:px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[38px] font-extrabold text-[#1f242e] mb-8 tracking-tight">
          Հաշվիչներ
        </h2>

        {/* Tab-եր */}
        <div className="flex gap-2 pl-3">
          <button
            onClick={() => setActiveTab('loan')}
            className={`px-8 py-3.5 rounded-t-2xl text-sm font-bold transition-all ${
              activeTab === 'loan'
                ? 'bg-white text-[#1f242e]'
                : 'bg-transparent text-[#a0a6b5] hover:text-gray-600'
            }`}
          >
            Վարկ
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`px-8 py-3.5 rounded-t-2xl text-sm font-bold transition-all ${
              activeTab === 'deposit'
                ? 'bg-white text-[#1f242e]'
                : 'bg-transparent text-[#a0a6b5] hover:text-gray-600'
            }`}
          >
            Ավանդ
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl md:rounded-[28px] p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100">
          
          {/* ==================== 1. ՎԱՐԿԻ ՀԱՇՎԻՉ ==================== */}
          {activeTab === 'loan' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">

                {/* Վարկի գումար */}
                <div>
                  <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
                    <span className="text-[#64748b] text-sm font-medium">
                      Վարկի գումար
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

                {/* Ժամկետ */}
                <div>
                  <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
                    <span className="text-[#64748b] text-sm font-medium">
                      Ժամկետ
                    </span>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                        className="text-right font-bold text-xl text-[#1f242e] outline-none w-14 bg-transparent"
                      />
                      <span className="font-bold text-xl text-[#1f242e]">ամիս</span>
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
                    <span>1 ամիս</span>
                    <span>1200 ամիս</span>
                  </div>
                </div>

                {/* Տարեկան տոկոսադրույք */}
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

                {/* Մարման ձև */}
                <div className="flex flex-col justify-center pt-1">
                  <span className="text-xs text-[#a0a6b5] font-medium mb-3">
                    Մարման ձև
                  </span>
                  <div className="flex items-center gap-8">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        repaymentType === 'differentiating' ? 'border-[#6c00ff]' : 'border-gray-300'
                      }`}>
                        {repaymentType === 'differentiating' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6c00ff]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'differentiating'}
                        onChange={() => setRepaymentType('differentiating')}
                        className="hidden"
                      />
                      <span className="font-bold text-[#1f242e] text-sm">
                        Զսպանակաձև
                      </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        repaymentType === 'annuity' ? 'border-[#6c00ff]' : 'border-gray-300'
                      }`}>
                        {repaymentType === 'annuity' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6c00ff]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'annuity'}
                        onChange={() => setRepaymentType('annuity')}
                        className="hidden"
                      />
                      <span className="font-medium text-[#1f242e] text-sm">
                        Անուիտետ
                      </span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Bottom disclaimer + button */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 mt-4">
                <p className="text-xs text-[#a0a6b5] max-w-[550px] leading-relaxed">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                </p>
                <button
                  onClick={calculateLoan}
                  className="w-full sm:w-auto bg-[#6c00ff] hover:bg-[#5800d4] text-white font-bold text-base px-10 py-3.5 rounded-full transition-all shadow-md active:scale-95"
                >
                  Հաշվել
                </button>
              </div>

              {/* Result display */}
              {loanResult && (
                <div className="mt-6 p-5 bg-[#f5efff] rounded-2xl flex flex-col sm:flex-row justify-around items-center gap-4 border border-purple-100">
                  <div>
                    <span className="text-xs text-gray-500 block">Ամսական վճար.</span>
                    <span className="text-2xl font-bold text-[#6c00ff]">
                      {loanResult.monthlyPayment.toLocaleString()} ֏
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Ընդհանուր վճար.</span>
                    <span className="text-2xl font-bold text-[#1f242e]">
                      {loanResult.totalPayment.toLocaleString()} ֏
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================== 2. ԱՎԱՆԴԻ ՀԱՇՎԻՉ ==================== */}
          {activeTab === 'deposit' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 items-start">
                
                {/* Ձախ Կողմ - Inputs */}
                <div className="space-y-6">

                  {/* 1. Ներդրվող գումար */}
                  <div>
                    <div className="relative bg-white border border-[#e5e7eb] rounded-2xl px-6 py-3.5 flex justify-between items-center overflow-hidden">
                      <span className="text-[#64748b] text-sm font-medium">
                        Ներդրվող գումար
                      </span>
                      <input
                        type="text"
                        value={depAmount.toLocaleString()}
                        onChange={(e) => {
                          const val = Number(e.target.value.replace(/\D/g, ''));
                          setDepAmount(val);
                        }}
                        className="text-right font-bold text-xl text-[#1f242e] outline-none w-40 bg-transparent"
                      />
                      <div
                        className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                        style={{ width: `${getPercent(depAmount, depAmountMin, depAmountMax)}%` }}
                      />
                    </div>
                    <div className="relative w-full h-3 mt-1">
                      <div
                        className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                        style={{ left: `${getPercent(depAmount, depAmountMin, depAmountMax)}%` }}
                      >
                        ▲
                      </div>
                      <input
                        type="range"
                        min={depAmountMin}
                        max={depAmountMax}
                        value={depAmount}
                        onChange={(e) => setDepAmount(Number(e.target.value))}
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
                          value={depRate}
                          onChange={(e) => setDepRate(Number(e.target.value))}
                          className="text-right font-bold text-xl text-[#1f242e] outline-none w-12 bg-transparent"
                        />
                        <span className="font-bold text-xl text-[#1f242e]">%</span>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                        style={{ width: `${getPercent(depRate, depRateMin, depRateMax)}%` }}
                      />
                    </div>
                    <div className="relative w-full h-3 mt-1">
                      <div
                        className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                        style={{ left: `${getPercent(depRate, depRateMin, depRateMax)}%` }}
                      >
                        ▲
                      </div>
                      <input
                        type="range"
                        min={depRateMin}
                        max={depRateMax}
                        value={depRate}
                        onChange={(e) => setDepRate(Number(e.target.value))}
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
                          value={depTerm}
                          onChange={(e) => setDepTerm(Number(e.target.value))}
                          className="text-right font-bold text-xl text-[#1f242e] outline-none w-16 bg-transparent"
                        />
                        <span className="font-bold text-xl text-[#1f242e]">օր</span>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 h-[2.5px] bg-[#6c00ff] transition-all"
                        style={{ width: `${getPercent(depTerm, depTermMin, depTermMax)}%` }}
                      />
                    </div>
                    <div className="relative w-full h-3 mt-1">
                      <div
                        className="absolute -top-[2px] transform -translate-x-1/2 text-[#6c00ff] text-[9px] pointer-events-none"
                        style={{ left: `${getPercent(depTerm, depTermMin, depTermMax)}%` }}
                      >
                        ▲
                      </div>
                      <input
                        type="range"
                        min={depTermMin}
                        max={depTermMax}
                        value={depTerm}
                        onChange={(e) => setDepTerm(Number(e.target.value))}
                        className="absolute top-0 left-0 w-full opacity-0 cursor-pointer h-4"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-[#a0a6b5] font-normal px-0.5">
                      <span>91 օր</span>
                      <span>1095 օր</span>
                    </div>
                  </div>

                </div>

                {/* Աջ Կողմ - Results Panel */}
                <div className="space-y-6 pt-1">
                  
                  <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                    <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
                      Օրական կտրվածքով հաշվարկվող տոկոսագումար *
                    </span>
                    <span className="text-xl font-bold text-[#1f242e]">
                      {dailyInterest.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                    <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
                      Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ
                    </span>
                    <span className="text-xl font-bold text-[#1f242e]">
                      {totalInterest.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                    <span className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
                      Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ
                    </span>
                    <span className="text-xl font-bold text-[#1f242e]">
                      {netInterest.toLocaleString()}
                    </span>
                  </div>

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
              <div className="pt-2">
                <p className="text-xs text-[#a0a6b5] leading-relaxed">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}