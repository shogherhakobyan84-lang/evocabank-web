import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Translation dictionaries
const translations = {
  HY: {
    loginTitle: 'Մուտք համակարգ',
    usernamePlaceholder: 'Մուտքանուն',
    passwordPlaceholder: 'Գաղտնաբառ',
    submitButton: 'Մուտք',
    forgotLink: 'Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը',
    loginWithQr: 'Մուտք QR կոդով',
    qrTitle: 'Արագ և ապահով',
    qrDesc: 'Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար',
    copyright: '© 2026 Էվոկաբանկ',
    bankNotice: 'Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից',
    version: 'Տարբերակ 8.17.3.0'
  },
  RU: {
    loginTitle: 'Вход в систему',
    usernamePlaceholder: 'Имя пользователя',
    passwordPlaceholder: 'Пароль',
    submitButton: 'Войти',
    forgotLink: 'Забыли имя пользователя или пароль?',
    loginWithQr: 'Вход по QR-коду',
    qrTitle: 'Быстро и безопасно',
    qrDesc: 'Если у вас есть приложение EvocaTOUCH, отсканируйте QR-код для более быстрого входа',
    copyright: '© 2026 Эвокабанк',
    bankNotice: 'Банк контролируется Центральным Банком РА',
    version: 'Версия 8.17.3.0'
  },
  EN: {
    loginTitle: 'Log in',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    submitButton: 'Log in',
    forgotLink: 'Forgot username or password?',
    loginWithQr: 'Log in with QR code',
    qrTitle: 'Fast and safe',
    qrDesc: 'If you have the EvocaTOUCH app, scan the QR code for a faster login',
    copyright: '© 2026 Evocabank',
    bankNotice: 'The bank is regulated by the Central Bank of RA',
    version: 'Version 8.17.3.0'
  }
};

export default function EvocaOnline() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('HY');

  const t = translations[currentLang];

  const qrImageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACCklEQVR4nO1ZW27DMAwzkAPkSL56jpQDFHD5UBJn69ZvAgmMNbW4D1kULaltfHte7YE85/KQ4XuSND597PwYe381rLbo65IJwScsy9jauvllwd+92xQJ2eFih72t3LO7wOIkoiEKXbfd7/GQFQzt5f0fTsdARMwxNq7daaf1k7sxEIuH02tav/UlBnI8iJ6Vg5blYxUUAkFiSdTJTQr8uuFdsbU1DwJ3zU1CBuzYVLZdxIyD4JO5JXpCNngGiOc90kkQ+cpgwsi7txSxT6kWBtHthG8MIIzHAejiyoSgmrDrkkDquv2mkGRCSjywV9yEfZzZFglZsbYKHd6VcKfGJ0Ks5XCXtRJXCXyFNxGiuMlLFkpiKLONJ5EJUQyryTgKW0aVVA2FSAVVRKhK4q2l0m9yOg+iQsnZ5h13h7PTQZBq2aV/zDCPJeRxKERqwZqiSiTaJfCXeIRBVL1yT0DPjRhVMjQTUm2uBkXjCKN4mgqRkfS0wGtupCopFqJSgqwEEy3tbj5uV1YUxOKhqaQu4arK1elmQiYaMnRsnjQDmwZgaRA9pYKe7amgmMrzMIj9s1Qc72o7PvwekAGxHDp0VU1ITlzhRkJqAsHeXXvipn6TObMxEVLjybqEKSHzrZYIobqLku7g7417GkTEPCcQbKE0kOB/ZEIsGPMU+fI+E/L/80Cec3nI8C1J3h9gHAqjvYG9AAAAAElFTkSuQmCC";

  const languages = [
    { code: 'EN', label: 'ENG' },
    { code: 'RU', label: 'РУС' },
    { code: 'HY', label: 'ՀԱՅ' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col justify-between font-sans text-gray-800 relative">
      {/* Header */}
      <header className="w-full max-w-[1320px] mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/">
          <img
            src="https://online.evoca.am/OnlineBanking/Web/images/bank-logo-login.svg"
            alt="Evocabank Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="text-gray-800 hover:text-gray-900 transition-colors p-1 flex items-center justify-center"
            aria-label="Select Language"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
            </svg>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-30 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-center py-2.5 text-sm font-medium transition-colors ${
                    currentLang === lang.code
                      ? 'bg-[#f3e8ff] text-[#7100e2]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[620px] mx-auto px-4 my-auto flex flex-col space-y-4">
        {/* Main Login Card */}
        <div className="bg-white rounded-lg shadow-sm p-10 md:p-12 border border-gray-100">
          <h1 className="text-xl md:text-2xl font-normal text-[#111827] mb-8 tracking-tight">
            {t.loginTitle}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t.usernamePlaceholder}
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#7c3aed] transition-all font-light"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                className="w-full px-4 py-3 rounded border border-gray-300 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#7c3aed] transition-all font-light pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#7100e2] hover:bg-[#6000c4] text-white font-normal rounded transition-colors duration-200 text-sm mt-2"
            >
              {t.submitButton}
            </button>
          </form>

          {/* Forgot link */}
          <div className="mt-6 text-center">
            <button className="text-xs font-normal text-gray-600 hover:text-[#7100e2] transition-colors">
              {t.forgotLink}
            </button>
          </div>
        </div>

        {/* QR Code Login Card */}
        <div className="bg-white rounded-lg shadow-sm p-3.5 border border-gray-100 text-center">
          <button
            type="button"
            onClick={() => setIsQrOpen(true)}
            className="w-full flex items-center justify-center space-x-2 py-0.5 text-gray-800 font-normal text-sm hover:text-[#7100e2] transition-colors"
          >
            <svg className="w-4 h-4 text-[#7100e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 4v1m0 4v1m0 4v1m-4-13h1m-1 4h1m-1 4h1m-1 4h1m8-13h1m-1 4h1m-1 4h1m-1 4h1M4 6h4v4H4V6zm12 0h4v4h-4V6zM4 14h4v4H4v-4zm12 12h4v-4h-4v4z" />
            </svg>
            <span>{t.loginWithQr}</span>
          </button>
        </div>
      </main>

      {/* Footer Details */}
      <footer className="w-full max-w-[1320px] mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
        <div className="space-y-0.5 text-center md:text-left">
          <p>{t.copyright}</p>
          <p>{t.bankNotice}</p>
          <p className="text-gray-400">{t.version}</p>
        </div>

        {/* Contact numbers */}
        <div className="flex items-center space-x-6">
          <a href="tel:+37410605555" className="flex items-center space-x-2 hover:text-gray-800 transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(+374 10) 60 55 55</span>
          </a>

          <a href="mailto:hello@evoca.am" className="flex items-center space-x-2 hover:text-gray-800 transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>hello@evoca.am</span>
          </a>
        </div>
      </footer>

      {/* QR Code Modal Popup */}
      {isQrOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[580px] pt-8 px-8 pb-12 relative flex flex-col items-center text-center">
            {/* Close Button */}
            <button
              onClick={() => setIsQrOpen(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* QR Code Image */}
            <div className="mt-1 mb-4">
              <img
                src={qrImageData}
                alt="Evoca QR Code"
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Modal Title & Description */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t.qrTitle}
            </h3>
            <p className="text-xs text-gray-600 leading-normal max-w-[480px]">
              {t.qrDesc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}