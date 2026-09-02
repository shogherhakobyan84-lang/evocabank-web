// import React, { useState } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';

// export default function Header() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   // Յուրաքանչյուր NavItem-ի համար սահմանում ենք path-երը, որոնց դեպքում ինքը պետք է ակտիվ լինի
//   const navItems = [
//     {
//       title: 'Անհատ',
//       path: '/hy/loans',
//       // Անհատի տակ մտնող բոլոր էջերը
//       matchPaths: [
//         '/',
//         '/hy/loans',
//         '/loans',
//         '/cards',
//         '/hy/cards',
//         '/deposits',
//         '/hy/deposits',
//         '/accounts',
//         '/hy/accounts',
//         '/transfers',
//         '/hy/transfers',
//         '/securities',
//         '/hy/securities',
//         '/evoca-salary',
//         '/hy/evoca-salary',
//         '/evoca-touch',
//         '/hy/evoca-touch',
//       ],
//     },
//     {
//       title: 'Բիզնես',
//       path: '/business',
//       matchPaths: ['/business', '/hy/business'],
//     },
//     {
//       title: 'Ակնթարթային վճարումներ',
//       path: '/instant-payments',
//       matchPaths: ['/instant-payments'],
//     },
//     {
//       title: 'Մեր մասին',
//       path: '/about',
//       matchPaths: ['/about'],
//     },
//     {
//       title: 'Նորություններ',
//       path: '/news',
//       matchPaths: ['/news'],
//     },
//     {
//       title: 'Բլոգ',
//       path: '/blog',
//       matchPaths: ['/blog'],
//     },
//     {
//       title: 'Կարիերա',
//       path: '/career',
//       matchPaths: ['/career'],
//     },
//   ];

//   const onlineApplications = [
//     { title: 'ՓՄՁ վարկավորում', path: '/online-app/sme-loans' },
//     { title: 'Visa Infinite', path: '/online-app/visa-infinite' },
//     { title: 'MasterCard Gold', path: '/online-app/mastercard-gold' },
//     { title: 'Visa Gold', path: '/online-app/visa-gold' },
//   ];

//   const contacts = [
//     { title: '+374 10 605555', href: 'tel:+37410605555' },
//     { title: '+374 98 205555', href: 'tel:+37498205555' },
//     { title: '+374 99 605555', href: 'tel:+37499605555' },
//     { title: '8444', href: 'tel:8444' },
//     { title: 'Պատվիրել զանգ', path: '/callback' },
//   ];

//   const toggleDropdown = (menuName) => {
//     setOpenDropdown(openDropdown === menuName ? null : menuName);
//   };

//   return (
//     <header className="relative z-[60] w-full bg-white border-b border-gray-100 text-[13px] font-medium text-gray-700">
//       <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-12">
//         {/* Navigation Tabs */}
//         <nav className="flex items-center space-x-6 h-full">
//           {navItems.map((item) => {
//             // Ստուգում ենք՝ արդյոք ընթացիկ URL-ը համապատասխանում է տվյալ item-ի matchPaths-երից որևէ մեկին
//             const isActive = item.matchPaths.some(
//               (path) => location.pathname === path || location.pathname.startsWith(path + '/')
//             );

//             return (
//               <NavLink
//                 key={item.title}
//                 to={item.path}
//                 className={`relative h-full flex items-center transition-colors cursor-pointer whitespace-nowrap ${
//                   isActive
//                     ? 'text-[#8c25e8] font-bold'
//                     : 'text-gray-700 hover:text-black'
//                 }`}
//               >
//                 {/* Top Purple Line - Վերևի մանուշակագույն գիծը */}
//                 {isActive && (
//                   <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#8c25e8]" />
//                 )}
//                 {item.title}
//               </NavLink>
//             );
//           })}
//         </nav>

//         {/* Right Side Dropdowns & Icons */}
//         <div className="flex items-center space-x-6 text-[#8c25e8] font-semibold">
//           {/* Առցանց հայտեր */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown('online')}
//               className="flex items-center gap-1.5 hover:opacity-80 transition cursor-pointer py-2"
//             >
//               <span>Առցանց հայտեր</span>
//               <svg
//                 className={`w-3.5 h-3.5 transition-transform duration-200 ${
//                   openDropdown === 'online' ? 'rotate-180' : ''
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {openDropdown === 'online' && (
//               <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
//                 {onlineApplications.map((app, idx) => (
//                   <Link
//                     key={idx}
//                     to={app.path}
//                     onClick={() => setOpenDropdown(null)}
//                     className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
//                   >
//                     {app.title}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Հետադարձ կապ */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown('contact')}
//               className="flex items-center gap-1.5 hover:opacity-80 transition cursor-pointer py-2"
//             >
//               <span>Հետադարձ կապ</span>
//               <svg
//                 className={`w-3.5 h-3.5 transition-transform duration-200 ${
//                   openDropdown === 'contact' ? 'rotate-180' : ''
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {openDropdown === 'contact' && (
//               <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
//                 {contacts.map((contact, idx) =>
//                   contact.href ? (
//                     <a
//                       key={idx}
//                       href={contact.href}
//                       className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
//                     >
//                       {contact.title}
//                     </a>
//                   ) : (
//                     <Link
//                       key={idx}
//                       to={contact.path}
//                       onClick={() => setOpenDropdown(null)}
//                       className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition font-semibold text-[#8c25e8] border-t border-gray-100 mt-1 pt-2"
//                     >
//                       {contact.title}
//                     </Link>
//                   )
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Icons Bar */}
//           <div className="flex items-center space-x-4 text-black border-l border-gray-200 pl-5">
//             <Link to="/map" className="hover:text-[#8c25e8] transition cursor-pointer">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//               </svg>
//             </Link>

//             <Link to="/faq" className="hover:text-[#8c25e8] transition cursor-pointer">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
//               </svg>
//             </Link>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    {
      title: 'Անհատ',
      path: '/hy/loans',
      matchPaths: [
        '/',
        '/hy/loans',
        '/loans',
        '/cards',
        '/hy/cards',
        '/deposits',
        '/hy/deposits',
        '/accounts',
        '/hy/accounts',
        '/transfers',
        '/hy/transfers',
        '/securities',
        '/hy/securities',
        '/evoca-salary',
        '/hy/evoca-salary',
        '/evoca-touch',
        '/hy/evoca-touch',
      ],
    },
    {
      title: 'Բիզնես',
      path: '/business',
      matchPaths: ['/business', '/hy/business'],
    },
    {
      title: 'Ակնթարթային վճարումներ',
      path: '/instant-payments',
      matchPaths: ['/instant-payments'],
    },
    {
      title: 'Մեր մասին',
      path: '/about',
      matchPaths: ['/about'],
    },
    {
      title: 'Նորություններ',
      path: '/news',
      matchPaths: ['/news'],
    },
    {
      title: 'Բլոգ',
      path: '/blog',
      matchPaths: ['/blog'],
    },
    {
      title: 'Կարիերա',
      path: '/career',
      matchPaths: ['/career'],
    },
  ];

  const onlineApplications = [
    { title: 'ՓՄՁ վարկավորում', path: '/online-app/sme-loans' },
    { title: 'Visa Infinite', path: '/online-app/visa-infinite' },
    { title: 'MasterCard Gold', path: '/online-app/mastercard-gold' },
    { title: 'Visa Gold', path: '/online-app/visa-gold' },
  ];

  const contacts = [
    { title: '+374 10 605555', href: 'tel:+37410605555' },
    { title: '+374 98 205555', href: 'tel:+37498205555' },
    { title: '+374 99 605555', href: 'tel:+37499605555' },
    { title: '8444', href: 'tel:8444' },
    { title: 'Պատվիրել զանգ', path: '/callback' },
  ];

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <header className="relative z-[60] w-full bg-white border-b border-gray-100 text-[13px] font-medium text-gray-700">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
        
        {/* Navigation Tabs - Սկսում են երևալ 750px-ից ավելի լայն էկրաններին */}
        <nav className="hidden min-[750px]:flex items-center space-x-6 h-full">
          {navItems.map((item) => {
            const isActive = item.matchPaths.some(
              (path) => location.pathname === path || location.pathname.startsWith(path + '/')
            );

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={`relative h-full flex items-center transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#8c25e8] font-bold'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#8c25e8]" />
                )}
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Մոբայլ տեսքի համար ձախ մասում թողնում ենք Հետադարձ կապը կամ դատարկ */}
        <div className="flex min-[750px]:hidden items-center">
          <div className="relative">
            <button
              onClick={() => toggleDropdown('contact-mobile')}
              className="flex items-center gap-1.5 text-[#8c25e8] font-semibold text-xs py-2 cursor-pointer"
            >
              <span>Հետադարձ կապ</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  openDropdown === 'contact-mobile' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'contact-mobile' && (
              <div className="absolute left-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
                {contacts.map((contact, idx) =>
                  contact.href ? (
                    <a
                      key={idx}
                      href={contact.href}
                      className="block px-4 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
                    >
                      {contact.title}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={contact.path}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition font-semibold text-[#8c25e8] border-t border-gray-100 mt-1 pt-2"
                    >
                      {contact.title}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Աջ կողմի բլոկ (Դեսկթոպում՝ Առցանց հայտեր, Հետադարձ կապ և իկոններ) */}
        <div className="flex items-center space-x-6 text-[#8c25e8] font-semibold">
          
          {/* Առցանց հայտեր - Ցույց է տրվում միայն սկսված 750px-ից */}
          <div className="hidden min-[750px]:block relative">
            <button
              onClick={() => toggleDropdown('online')}
              className="flex items-center gap-1.5 hover:opacity-80 transition cursor-pointer py-2"
            >
              <span>Առցանց հայտեր</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'online' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'online' && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
                {onlineApplications.map((app, idx) => (
                  <Link
                    key={idx}
                    to={app.path}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
                  >
                    {app.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Հետադարձ կապ (Դեսկթոպ) */}
          <div className="hidden min-[750px]:block relative">
            <button
              onClick={() => toggleDropdown('contact')}
              className="flex items-center gap-1.5 hover:opacity-80 transition cursor-pointer py-2"
            >
              <span>Հետադարձ կապ</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'contact' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'contact' && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
                {contacts.map((contact, idx) =>
                  contact.href ? (
                    <a
                      key={idx}
                      href={contact.href}
                      className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
                    >
                      {contact.title}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={contact.path}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition font-semibold text-[#8c25e8] border-t border-gray-100 mt-1 pt-2"
                    >
                      {contact.title}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          {/* Icons Bar (Միշտ տեղում են) */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-black min-[750px]:border-l min-[750px]:border-gray-200 min-[750px]:pl-5">
            <Link to="/map" className="hover:text-[#8c25e8] transition cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </Link>

            <Link to="/faq" className="hover:text-[#8c25e8] transition cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
              </svg>
            </Link>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}