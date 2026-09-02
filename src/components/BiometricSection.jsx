import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
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

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-16">
        
        {/* Left Side: Biometric Face inside Smooth Triangle */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[380px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[660px]">
          
          {/* Background Radial Rings */}
          <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px] rounded-full opacity-25 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full border border-dashed border-gray-300 rounded-full" />
            <div className="absolute w-[75%] h-[75%] border border-dashed border-gray-300 rounded-full" />
            <div className="absolute w-[50%] h-[50%] border border-dashed border-gray-300 rounded-full" />
          </div>

          {/* Triangle & Face Container */}
          <div className="relative w-[300px] h-[340px] sm:w-[400px] sm:h-[440px] md:w-[480px] md:h-[520px] lg:w-[560px] lg:h-[600px] flex justify-center items-center">
            
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

            {/* Face Images Container */}
            <div className="relative z-10 w-full h-full flex justify-center items-center overflow-hidden">
              {faces.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Biometric Face ${index + 1}`}
                  className={`absolute bottom-[30px] sm:bottom-[40px] md:bottom-[48px] h-[74%] sm:h-[80%] md:h-[85%] object-contain transition-all duration-1000 ease-in-out ${
                    index === currentFace ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}

              {/* Full Face Triangular Mesh Overlay */}
              <svg 
                className="absolute z-20 w-[68%] h-[68%] top-[14%] left-[16%] pointer-events-none"
                viewBox="0 0 300 360"
                fill="none"
              >
                <g className="mesh-glow">
                  {/* Outer Contour */}
                  <path d="M 150,45 L 100,70 L 70,115 L 60,165 L 70,225 L 105,275 L 150,310 L 195,275 L 230,225 L 240,165 L 230,115 L 200,70 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

                  {/* Forehead & Upper Triangles */}
                  <path d="M 150,45 L 150,105 L 100,70 M 150,45 L 150,105 L 200,70" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 100,70 L 115,115 L 150,105 L 185,115 L 200,70" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 70,115 L 115,115 L 105,155 L 60,165 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 230,115 L 185,115 L 195,155 L 240,165 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Eye Sockets & Brows */}
                  <path d="M 115,115 L 150,135 L 185,115" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 115,115 L 105,155 L 135,160 L 150,135 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 185,115 L 195,155 L 165,160 L 150,135 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Nose Structure */}
                  <path d="M 150,135 L 135,160 L 150,205 L 165,160 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                  <path d="M 105,155 L 70,165 L 90,210 L 135,160 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 195,155 L 240,165 L 210,210 L 165,160 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Cheeks & Mouth Area */}
                  <path d="M 135,160 L 150,205 L 120,225 L 90,210 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 165,160 L 150,205 L 180,225 L 210,210 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 120,225 L 150,205 L 180,225 L 150,250 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 90,210 L 70,225 L 115,260 L 120,225 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 210,210 L 230,225 L 185,260 L 180,225 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Chin & Jaw Triangles */}
                  <path d="M 120,225 L 115,260 L 150,250 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 180,225 L 185,260 L 150,250 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 115,260 L 150,310 L 150,250 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 185,260 L 150,310 L 150,250 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 70,225 L 105,275 L 115,260 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 230,225 L 185,275 L 185,260 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 105,275 L 150,310 L 115,260 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />
                  <path d="M 185,275 L 150,310 L 185,260 Z" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Animated Light Flow Lines */}
                  <path 
                    d="M 150,45 L 150,105 L 150,135 L 150,205 L 150,250 L 150,310" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="mesh-line-scan"
                  />
                  <path 
                    d="M 70,115 L 115,115 L 150,135 L 185,115 L 230,115" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    className="mesh-line-scan"
                    style={{ animationDelay: '1.5s' }}
                  />

                  {/* All Intersection Nodes / Dots */}
                  {[
                    [150,45], [100,70], [200,70], [150,105], [70,115], [115,115], 
                    [185,115], [230,115], [150,135], [60,165], [105,155], [135,160], 
                    [165,160], [195,155], [240,165], [150,205], [90,210], [210,210], 
                    [70,225], [120,225], [180,225], [230,225], [150,250], [105,275], 
                    [115,260], [185,260], [185,275], [150,310]
                  ].map(([cx, cy], i) => (
                    <circle 
                      key={i} 
                      cx={cx} 
                      cy={cy} 
                      r="2" 
                      fill="white" 
                      className="mesh-dot-pulse" 
                      style={{ animationDelay: `${(i % 5) * 0.3}s` }}
                    />
                  ))}
                </g>
              </svg>
            </div>

          </div>
        </div>

        {/* Right Side: Text, Official QR & Button */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left w-full px-2">
          <h2 className="text-xl sm:text-2xl md:text-[32px] lg:text-[38px] font-medium text-[#222222] leading-snug md:leading-tight">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-[16px] lg:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            {/* QR կոդի բլոկ */}
            <div className="bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 shrink-0">
              <img
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="QR Code"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
              />
            </div>

            {/* Կոճակ՝ Link-ով դեպի evocatouch */}
            <div className="w-full sm:w-auto">
              <Link
                to="/evocatouch"
                className="bg-[rgb(100,0,220)] hover:bg-[rgb(85,0,190)] text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm md:text-base w-full sm:w-auto"
              >
                Իմանալ ավելին
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}