import React, { useState, useEffect } from 'react';

export default function BiometricSection() {
  // Evocabank-ի մաքուր դեմքերի ցանկը
  const faces = [
    'https://www.evoca.am/img/temp/biometric/face1.png',
    'https://www.evoca.am/img/temp/biometric/face2.png',
    'https://www.evoca.am/img/temp/biometric/face3.png',
  ];

  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [faces.length]);

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* Left Side: Face Animated Container with Purple Triangle Background & Biometric Mesh */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[420px] md:min-h-[500px]">
          
          {/* 1. Dotted Radial Pattern Background */}
          <div className="absolute w-[440px] h-[440px] rounded-full opacity-30 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full border border-dashed border-gray-300 rounded-full animate-spin-slow" />
            <div className="absolute w-[340px] h-[340px] border border-dashed border-gray-300 rounded-full" />
            <div className="absolute w-[240px] h-[240px] border border-dashed border-gray-300 rounded-full" />
          </div>

          <div className="relative w-[340px] h-[400px] md:w-[380px] md:h-[440px] flex justify-center items-center">
            
            {/* 2. Purple Inverted Triangle Background */}
            <div 
              className="absolute inset-0 bg-[#7a00e6] shadow-lg"
              style={{
                clipPath: 'polygon(0% 12%, 100% 12%, 50% 98%)',
                borderRadius: '30px'
              }}
            />

            {/* 3. Smooth Dynamic Face Images Layer */}
            <div className="relative z-10 w-full h-full flex justify-center items-center">
              {faces.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Biometric Face ${index + 1}`}
                  className={`absolute bottom-0 h-[108%] object-contain transition-opacity duration-1000 ease-in-out ${
                    index === currentFace ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}

              {/* 4. Overlay Biometric Lines and Dots (Geometric Face Mesh) */}
              <svg 
                className="absolute z-20 w-[80%] h-[80%] top-[10%] left-[10%] pointer-events-none opacity-90 transition-all duration-700"
                viewBox="0 0 200 240"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
              >
                {/* Facial Mesh Lines depending on state */}
                {currentFace === 0 && (
                  <g className="animate-fade-in">
                    {/* Face 1 Mesh (Triangulated Pattern) */}
                    <polygon points="100,40 70,60 130,60" strokeDasharray="2 2" />
                    <line x1="70" y1="60" x2="50" y2="90" />
                    <line x1="130" y1="60" x2="150" y2="90" />
                    <line x1="50" y1="90" x2="100" y2="100" />
                    <line x1="150" y1="90" x2="100" y2="100" />
                    <line x1="70" y1="60" x2="100" y2="100" />
                    <line x1="130" y1="60" x2="100" y2="100" />
                    <line x1="50" y1="90" x2="40" y2="130" />
                    <line x1="150" y1="90" x2="160" y2="130" />
                    <line x1="100" y1="100" x2="100" y2="140" />
                    <line x1="40" y1="130" x2="70" y2="165" />
                    <line x1="160" y1="130" x2="130" y2="165" />
                    <line x1="100" y1="140" x2="70" y2="165" />
                    <line x1="100" y1="140" x2="130" y2="165" />
                    <line x1="70" y1="165" x2="100" y2="185" />
                    <line x1="130" y1="165" x2="100" y2="185" />

                    {/* Nodes / Dots */}
                    {[[100,40],[70,60],[130,60],[50,90],[150,90],[100,100],[40,130],[160,130],[100,140],[70,165],[130,165],[100,185]].map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="2.5" fill="white" />
                    ))}
                  </g>
                )}

                {currentFace === 1 && (
                  <g className="animate-fade-in">
                    {/* Face 2 Mesh (Lines + Directional Arrows) */}
                    <line x1="60" y1="70" x2="100" y2="50" />
                    <line x1="140" y1="70" x2="100" y2="50" />
                    <line x1="60" y1="70" x2="55" y2="110" />
                    <line x1="140" y1="70" x2="145" y2="110" />
                    <line x1="100" y1="50" x2="100" y2="115" />
                    <line x1="55" y1="110" x2="100" y2="115" />
                    <line x1="145" y1="110" x2="100" y2="115" />
                    <line x1="55" y1="110" x2="75" y2="155" />
                    <line x1="145" y1="110" x2="125" y2="155" />
                    <line x1="100" y1="115" x2="100" y2="175" />
                    <line x1="75" y1="155" x2="100" y2="175" />
                    <line x1="125" y1="155" x2="100" y2="175" />

                    {/* Facial feature dots */}
                    {[[100,50],[60,70],[140,70],[55,110],[145,110],[100,115],[75,155],[125,155],[100,175],[80,95],[120,95]].map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="2" fill="white" />
                    ))}
                  </g>
                )}

                {currentFace === 2 && (
                  <g className="animate-fade-in">
                    {/* Face 3 Mesh (Dots grid) */}
                    {[[100,45],[75,55],[125,55],[60,80],[140,80],[85,85],[115,85],[100,105],[50,115],[150,115],[70,135],[130,135],[100,145],[80,170],[120,170],[100,190]].map(([cx, cy], i) => (
                      <g key={i}>
                        <circle cx={cx} cy={cy} r="3" fill="white" />
                        <circle cx={cx} cy={cy} r="5" stroke="white" strokeWidth="0.5" opacity="0.6" />
                      </g>
                    ))}
                  </g>
                )}
              </svg>
            </div>

          </div>
        </div>

        {/* Right Side: Content, Large QR & Button */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#25282b] leading-[1.25]">
            Դարձիր Evocabank-ի հաճախորդ <br />
            բիոմետրիկ նույնականացմամբ
          </h2>

          <p className="text-[#333333] text-base md:text-[17px] leading-relaxed max-w-lg font-normal">
            Սկանավորի՛ր <span className="underline decoration-1 underline-offset-2">QR կոդը</span>, Ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր <span className="underline decoration-1 underline-offset-2">քո հաշիվը</span> և ստացիր քարտ
          </p>

          <div className="flex flex-row items-end gap-8 pt-4">
            {/* SVG QR Code */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="#7a00e6">
                <rect x="10" y="10" width="50" height="50" rx="4" fill="none" stroke="#7a00e6" strokeWidth="12" />
                <rect x="25" y="25" width="20" height="20" rx="2" />
                
                <rect x="140" y="10" width="50" height="50" rx="4" fill="none" stroke="#7a00e6" strokeWidth="12" />
                <rect x="155" y="25" width="20" height="20" rx="2" />
                
                <rect x="10" y="140" width="50" height="50" rx="4" fill="none" stroke="#7a00e6" strokeWidth="12" />
                <rect x="25" y="155" width="20" height="20" rx="2" />

                <rect x="70" y="10" width="12" height="24" rx="2" />
                <rect x="90" y="10" width="24" height="12" rx="2" />
                <rect x="120" y="10" width="12" height="12" rx="2" />
                <rect x="70" y="40" width="12" height="12" rx="2" />
                <rect x="90" y="30" width="12" height="30" rx="2" />
                <rect x="110" y="45" width="20" height="12" rx="2" />

                <rect x="10" y="70" width="24" height="12" rx="2" />
                <rect x="40" y="70" width="12" height="24" rx="2" />
                <rect x="10" y="90" width="12" height="12" rx="2" />

                <rect x="140" y="70" width="12" height="24" rx="2" />
                <rect x="160" y="70" width="30" height="12" rx="2" />
                <rect x="175" y="90" width="15" height="15" rx="2" />

                <rect x="70" y="140" width="12" height="24" rx="2" />
                <rect x="90" y="150" width="24" height="12" rx="2" />
                <rect x="70" y="175" width="35" height="15" rx="2" />
                <rect x="120" y="140" width="15" height="45" rx="2" />
                <rect x="145" y="140" width="45" height="12" rx="2" />
                <rect x="145" y="160" width="20" height="30" rx="2" />
                <rect x="172" y="160" width="18" height="18" rx="2" />

                <rect x="72" y="72" width="56" height="56" fill="white" rx="4" />
                <path d="M 84 82 L 95 116 L 105 116 L 116 82 L 105 82 L 100 102 L 95 82 Z" fill="#7a00e6" />
              </svg>
            </div>

            {/* Action Button */}
            <div className="pb-2">
              <button className="bg-[#6b00d7] hover:bg-[#5800b3] text-white font-medium px-8 py-3.5 rounded-full transition duration-200 cursor-pointer text-sm shadow-sm">
                Իմանալ ավելին
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}