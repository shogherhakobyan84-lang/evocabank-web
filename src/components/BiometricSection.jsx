import React, { useState, useEffect } from 'react';

export default function BiometricSection() {
  const faces = [
    'https://www.evoca.am/img/temp/biometric/face1.png',
    'https://www.evoca.am/img/temp/biometric/face2.png',
    'https://www.evoca.am/img/temp/biometric/face3.png',
  ];

  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [faces.length]);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 overflow-hidden">
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 2px rgba(255,255,255,0.7)); }
          50% { opacity: 1; filter: drop-shadow(0 0 7px rgba(255,255,255,1)); }
        }
        @keyframes scanGlowLine {
          0% { stroke-dashoffset: 200; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        @keyframes pulseDotSoft {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        .mesh-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .mesh-line-scan {
          stroke-dasharray: 20 10;
          animation: scanGlowLine 4s linear infinite;
        }
        .mesh-dot-pulse {
          animation: pulseDotSoft 2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Side: Biometric Face inside Smooth Triangle */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[580px] md:min-h-[660px]">
          
          {/* Background Radial Rings */}
          <div className="absolute w-[620px] h-[620px] rounded-full opacity-25 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full border border-dashed border-gray-300 rounded-full" />
            <div className="absolute w-[460px] h-[460px] border border-dashed border-gray-300 rounded-full" />
            <div className="absolute w-[320px] h-[320px] border border-dashed border-gray-300 rounded-full" />
          </div>

          {/* Triangle & Face Container */}
          <div className="relative w-[500px] h-[550px] sm:w-[560px] sm:h-[600px] flex justify-center items-center">
            
            {/* Rounded Purple Triangle */}
            <svg 
              viewBox="0 0 600 600" 
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M 50,80 L 550,80 L 300,530 Z"
                fill="#7a00e6"
                stroke="#7a00e6"
                strokeWidth="70"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            {/* Perfect Middle Height (bottom-[50px]) */}
            <div className="relative z-10 w-full h-full flex justify-center items-center overflow-hidden">
              {faces.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Biometric Face ${index + 1}`}
                  className={`absolute bottom-[48px] sm:bottom-[52px] h-[85%] object-contain transition-all duration-1000 ease-in-out ${
                    index === currentFace ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}

              {/* Face Mesh Overlay precisely centered */}
              <svg 
                className="absolute z-20 w-[56.5%] h-[56.5%] top-[15%] left-[21.8%] pointer-events-none"
                viewBox="0 0 300 360"
                fill="none"
              >
                <g className="mesh-glow">
                  {/* Outer Contour Mesh Lines */}
                  <path 
                    d="M 150,50 L 105,75 L 75,120 L 70,175 L 80,230 L 110,270 L 150,300 L 190,270 L 220,230 L 230,175 L 225,120 L 195,75 Z" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeOpacity="0.9"
                  />

                  {/* Forehead & Eyebrows */}
                  <path d="M 150,50 L 150,115" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 105,75 L 150,115 L 195,75" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 105,75 L 115,135 L 150,115 L 185,135 L 195,75" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

                  {/* Eyes & Cheeks */}
                  <path d="M 75,120 L 115,135 L 110,170 L 70,175 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 225,120 L 185,135 L 190,170 L 230,175 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

                  {/* Nose Bridge & Tip */}
                  <path d="M 150,115 L 135,170 L 150,200 L 165,170 Z" stroke="white" strokeWidth="1.4" strokeOpacity="0.95" />
                  <path d="M 115,135 L 135,170 M 185,135 L 165,170" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

                  {/* Mouth */}
                  <path d="M 110,170 L 135,170 L 150,200 L 165,170 L 190,170" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 110,170 L 125,230 L 150,220 L 175,230 L 190,170" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 150,200 L 150,250 L 125,230 M 150,250 L 175,230" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

                  {/* Chin Geometry */}
                  <path d="M 80,230 L 125,230 L 150,270 L 175,230 L 220,230" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 110,270 L 150,300 L 190,270" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
                  <path d="M 150,250 L 150,300" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

                  {/* Animated Light Flow Lines */}
                  <path 
                    d="M 150,50 L 105,75 L 75,120 L 115,135 L 135,170 L 150,200 L 150,250 L 150,300" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="mesh-line-scan"
                  />
                  <path 
                    d="M 150,50 L 195,75 L 225,120 L 185,135 L 165,170 L 150,200" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="mesh-line-scan"
                    style={{ animationDelay: '1.5s' }}
                  />

                  {/* Key Facial Nodes */}
                  {[
                    [150,50],[105,75],[195,75],[75,120],[225,120],[115,135],[185,135],
                    [150,115],[70,175],[230,175],[110,170],[190,170],[135,170],[165,170],
                    [150,200],[80,230],[220,230],[125,230],[175,230],[150,220],[150,250],
                    [110,270],[190,270],[150,300]
                  ].map(([cx, cy], i) => (
                    <circle 
                      key={i} 
                      cx={cx} 
                      cy={cy} 
                      r="2.5" 
                      fill="white" 
                      className="mesh-dot-pulse" 
                      style={{ animationDelay: `${(i % 5) * 0.4}s` }}
                    />
                  ))}
                </g>
              </svg>
            </div>

          </div>
        </div>

        {/* Right Side: Text, Official QR & Button */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#232629] leading-[1.2]">
            Դարձիր Evocabank-ի հաճախորդ <br />
            բիոմետրիկ նույնականացմամբ
          </h2>

          <p className="text-[#333333] text-base md:text-[17px] leading-relaxed max-w-lg font-normal">
            Սկանավորի՛ր <span className="underline decoration-1 underline-offset-4">QR կոդը</span>, Ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր <span className="underline decoration-1 underline-offset-4">քո հաշիվը</span> և ստացիր քարտ
          </p>

          <div className="flex flex-row items-end gap-8 pt-4">
            {/* Official Evocabank QR Code Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Evocabank Biometric QR Code" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Action Button */}
            <div className="pb-2">
              <button className="bg-[#7a00e6] hover:bg-[#6600c2] text-white font-medium px-8 py-3.5 rounded-full transition duration-200 cursor-pointer text-base shadow-sm">
                Իմանալ ավելին
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}