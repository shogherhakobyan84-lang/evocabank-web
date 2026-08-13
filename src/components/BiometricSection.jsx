import React, { useState, useEffect } from 'react';

export default function BiometricSection() {
  // Evocabank-ի բիոմետրիկ նկարների ցանկը
  const faces = [
    'https://www.evoca.am/images-cache/pages/1/16825102555029/c09ceeb9753e8a75e3e2ec8935c13b3e.png',
    'https://www.evoca.am/images-cache/pages/1/16825103403323/34e062ee0d2e8b2b9213bc5409a80e4f.png',
    'https://www.evoca.am/images-cache/pages/1/16825103986420/ebef6cdd2d0b5eddf44fb5bc6ef0dc7c.png',
  ];

  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length);
    }, 3000); // Ամեն 3 վայրկյանը մեկ փոխվում է դեմքը

    return () => clearInterval(interval);
  }, [faces.length]);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Animated Face Container */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[420px]">
          
          {/* Back purple triangle glow / background decoration */}
          <div className="absolute w-[340px] h-[340px] bg-[#8c25e8] rounded-[50px] rotate-45 opacity-5 blur-2xl -z-0" />

          {/* Face Images with Fade Effect */}
          <div className="relative w-[380px] h-[380px] flex justify-center items-center">
            {faces.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt="Biometric Identification Face"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                  index === currentFace ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Text & QR Code */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#212121] leading-tight">
            Դարձիր Evocabank-ի հաճախորդ <br />
            <span className="text-[#8c25e8]">բիոմետրիկ նույնականացմամբ</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ:
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            {/* QR Code Container */}
            <div className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <img
                src="https://www.evoca.am/images-cache/pages/1/16825091722394/qr-code.png"
                alt="EvocaTOUCH QR Code"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Action Button */}
            <button className="bg-[#8c25e8] hover:bg-[#781fd0] text-white font-bold px-8 py-3.5 rounded-full shadow-md transition duration-200 cursor-pointer text-sm">
              Իմանալ ավելին
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}