import React, { useState } from 'react';

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    captchaInput: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      {/* Լայնացրած կենտրոնական բլոկ */}
      <div className="max-w-[1000px] mx-auto bg-white">
        
        {/* Վերնագիրը՝ ձախից, իսկ տակինը՝ երկու տողով մեջտեղում */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7100e2] mb-3 text-left">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-gray-600 text-base sm:text-lg text-center leading-relaxed">
            Եթե ցանկանում ես միանալ <span className="font-semibold text-purple-700">EvocaTEAM</span>-ին,<br />
            կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
          </p>
        </div>

        {/* Ֆորմա */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Անուն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Անուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* Ազգանուն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ազգանուն <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* Հեռախոսահամար */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Հեռախոսահամար <span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#7100e2]">
              <div className="bg-gray-50 px-4 py-3.5 flex items-center space-x-2 border-r border-gray-300 text-gray-700 text-sm select-none">
                <span>🇦🇲</span>
                <span className="font-medium">+374</span>
              </div>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Էլ. Հասցե */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Էլ. Հասցե
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* Facebook հղում */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* LinkedIn հղում */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn սոց. կայքում անձնական էջի հղում
            </label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* Ուղեկցող նամակ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ուղեկցող նամակ
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all resize-y text-base"
            ></textarea>
          </div>

          {/* Վերբեռնեք Ձեր ռեզյումեն */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-[#7100e2] transition-colors cursor-pointer bg-gray-50">
              <div className="flex flex-col items-center">
                <svg className="w-7 h-7 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="text-base text-gray-600 font-medium">Կիցել ֆայլը / ֆայլերը</p>
              </div>
            </div>
          </div>

          {/* Ստուգման ծածկագիր (Captcha) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ստուգման ծածկագիր <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-gray-100 border border-gray-300 px-6 py-2 rounded font-mono font-bold tracking-widest text-lg text-gray-800 select-none">
                YU3T4Y
              </div>
              <button type="button" className="text-gray-500 hover:text-[#7100e2] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            <input
              type="text"
              name="captchaInput"
              required
              placeholder="Մուտքագրեք ծածկագիրը"
              value={formData.captchaInput}
              onChange={handleChange}
              className="w-full sm:w-1/2 px-4 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7100e2] focus:outline-none transition-all text-base"
            />
          </div>

          {/* Ուղարկելու կոճակ (Կլորավուն եզրերով և փոքրացրած բարձրությամբ) */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#7100e2] hover:bg-[#5e00bd] text-white font-bold py-3.5 px-6 rounded-full shadow-lg transition-all duration-200 cursor-pointer text-center text-base sm:text-lg"
            >
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}