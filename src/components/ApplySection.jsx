import React from 'react';

export default function ApplySection() {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[340px] sm:h-[380px] lg:h-[420px] flex items-center justify-center my-12 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg"
        alt="Evocabank branches"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Light Overlay (ավելի բաց ֆոն) */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content (ազատ տառերով և տողերով) */}
      <div className="relative z-20 max-w-[980px] mx-auto px-6 text-center text-white">
        <h2 className="text-xl sm:text-2xl lg:text-[34px] font-extrabold leading-[1.45] tracking-wider drop-shadow-sm">
          Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի» -ի):
        </h2>
      </div>
    </div>
  );
}