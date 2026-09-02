import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partnersLogos = [
  "https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png"
];

export default function EvocaPartners() {
  return (
    <section className="py-20 bg-white relative overflow-hidden min-h-[500px] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full pl-4 sm:pl-8 lg:pl-12 pr-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative">
          
          {/* 1. Ձախ կողմի տեքստը */}
          <div className="lg:col-span-4 space-y-4 pr-2 z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Գործընկերներ
            </h2>
            <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
              Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից աշխարհ:
            </p>
            <div className="pt-2">
              <a 
                href="#all-partners" 
                className="inline-flex items-center bg-[#f1f3f5] px-4 py-2 rounded-xl text-[#8c25e8] font-bold text-sm sm:text-base hover:bg-[#e9ecef] transition space-x-1 shadow-sm"
              >
                <span>Բոլոր գործընկերները</span>
                <span className="text-lg">›</span>
              </a>
            </div>
          </div>

          {/* 2. Մեջտեղում՝ ձեռքը, բարձրացված վերև և ճիշտ դիրքում */}
          <div className="lg:col-span-3 flex justify-center relative my-4 lg:my-0 z-30 pointer-events-none">
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Partners Hand" 
              className="w-24 sm:w-30 object-contain -translate-y-10 -translate-x-6 sm:-translate-x-10"
            />
          </div>

          {/* 3. Աջ մաս. Մոխրագույն բլոկ՝ ձախ կողմից խորը և սհուն կլորացմամբ (rounded-tl-[100px] rounded-bl-[100px]) */}
          <div className="lg:col-span-5 absolute right-0 top-1/2 -translate-y-1/2 w-[62%] bg-[#f1f3f5] shadow-xl rounded-tl-[140px] rounded-bl-[140px] h-[220px] sm:h-[260px] flex items-center pl-28 pr-6 z-20 border-0">
            
            {/* Ձախ սլաք (տեղադրված է ձեռքի աջ մասում՝ սլայդերի ներսում, հստակ երևում է) */}
            <div className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-40 cursor-pointer text-[#8c25e8] hover:opacity-75 transition p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            {/* Աջ սլաք */}
            <div className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer text-[#8c25e8] hover:opacity-75 transition p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={1300}
              loop={true}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              className="w-full px-2"
            >
              {partnersLogos.map((logo, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  {/* Լոգոների արանքում ավելացված է ուղղահայաց (հորիզոնական բաժանող) գիծ, որը վերևից և ներքևից հեռու է եզրերից */}
                  <div className="w-full h-full flex items-center justify-center px-4 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[50%] after:w-[1px] after:bg-black/20 last:after:hidden">
                    <img 
                      src={logo} 
                      alt={`Partner ${index + 1}`} 
                      className="max-h-14 max-w-[130px] object-contain grayscale hover:grayscale-0 transition duration-300" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>

      </div>
    </section>
  );
}

