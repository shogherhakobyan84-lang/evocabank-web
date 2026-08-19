import React from 'react';

export default function TransferInfoBanner() {
  return (
    /* -mx-8-ը դուրս է հանում նկարը parent container-ի padding-ներից՝ կպցնելով էկրանի եզրերին */
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[360px] sm:h-[400px] lg:h-[440px] my-14 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg"
        alt="Evocabank branch background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Light Overlay - Ավելի բաց ու լուսավոր (20% մգություն) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center Text Box */}
      <div className="relative z-10 max-w-[1000px] px-6 text-center">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] font-extrabold leading-[1.35] tracking-normal drop-shadow-lg">
          Կարող եք գումարներ փոխանցել ինչպես <br className="hidden sm:inline" />
          ձեր հաշվից, այնպես էլ առանց հաշվի <br className="hidden sm:inline" />
          բացման:
        </h2>
      </div>
    </div>
  );
}