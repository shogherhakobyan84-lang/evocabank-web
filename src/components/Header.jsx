// import React, { useState } from 'react';

// export default function Header() {
//   const [activeTab, setActiveTab] = useState('Անհատ');
//   const [openDropdown, setOpenDropdown] = useState(null); // 'online' or 'contact' or null

//   const navItems = [
//     'Անհատ',
//     'Բիզնես',
//     'Ակնթարթային վճարումներ',
//     'Մեր մասին',
//     'Նորություններ',
//     'Բլոգ',
//     'Կարիերա',
//   ];

//   const onlineApplications = [
//     'ՓՄՁ վարկավորում',
//     'Visa Infinite',
//     'MasterCard Gold',
//     'Visa Gold',
//   ];

//   const contacts = [
//     '+374 10 605555',
//     '+374 98 205555',
//     '+374 99 605555',
//     '8444',
//     'Պատվիրել զանգ',
//   ];

//   const toggleDropdown = (menuName) => {
//     if (openDropdown === menuName) {
//       setOpenDropdown(null);
//     } else {
//       setOpenDropdown(menuName);
//     }
//   };

//   return (
//     <header className="w-full bg-white border-b border-gray-100 text-[13px] font-medium text-gray-700 relative z-50">
//       <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-12">
        
//         {/* Left Side: Main Tabs */}
//         <nav className="flex items-center space-x-6 h-full">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActiveTab(item)}
//               className={`relative h-full flex items-center transition-colors cursor-pointer whitespace-nowrap ${
//                 activeTab === item
//                   ? 'text-[#8c25e8] font-bold'
//                   : 'hover:text-black'
//               }`}
//             >
//               {/* Top Purple Border Line for active tab */}
//               {activeTab === item && (
//                 <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#8c25e8]" />
//               )}
//               {item}
//             </button>
//           ))}
//         </nav>

//         {/* Right Side: Dropdowns & Icons */}
//         <div className="flex items-center space-x-6 text-[#8c25e8] font-semibold">
          
//           {/* Առցանց հայտեր Dropdown */}
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

//             {/* Dropdown Menu - Online Applications */}
//             {openDropdown === 'online' && (
//               <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-50 text-gray-800 text-xs font-normal">
//                 {onlineApplications.map((app, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
//                   >
//                     {app}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Հետադարձ կապ Dropdown */}
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

//             {/* Dropdown Menu - Contacts */}
//             {openDropdown === 'contact' && (
//               <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-50 text-gray-800 text-xs font-normal">
//                 {contacts.map((contact, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className={`block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition ${
//                       contact === 'Պատվիրել զանգ' ? 'font-semibold text-[#8c25e8] border-t border-gray-100 mt-1 pt-2' : ''
//                     }`}
//                   >
//                     {contact}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Icons Bar */}
//           <div className="flex items-center space-x-4 text-black border-l border-gray-200 pl-5">
//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               {/* Location Pin */}
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               {/* Question Help */}
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               {/* Globe Language */}
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               {/* Search */}
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             <button className="hover:text-[#8c25e8] transition cursor-pointer">
//               {/* Menu Burger */}
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

export default function Header() {
  const [activeTab, setActiveTab] = useState('Անհատ');
  const [openDropdown, setOpenDropdown] = useState(null); // 'online' or 'contact' or null

  const navItems = [
    'Անհատ',
    'Բիզնես',
    'Ակնթարթային վճարումներ',
    'Մեր մասին',
    'Նորություններ',
    'Բլոգ',
    'Կարիերա',
  ];

  const onlineApplications = [
    'ՓՄՁ վարկավորում',
    'Visa Infinite',
    'MasterCard Gold',
    'Visa Gold',
  ];

  const contacts = [
    '+374 10 605555',
    '+374 98 205555',
    '+374 99 605555',
    '8444',
    'Պատվիրել զանգ',
  ];

  const toggleDropdown = (menuName) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menuName);
    }
  };

  return (
    // Ավելացվել է relative z-[60], որպեսզի Navbar-ից (z-50) բարձր լինի
    <header className="relative z-[60] w-full bg-white border-b border-gray-100 text-[13px] font-medium text-gray-700">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-12">
        
        {/* Left Side: Main Tabs */}
        <nav className="flex items-center space-x-6 h-full">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`relative h-full flex items-center transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === item
                  ? 'text-[#8c25e8] font-bold'
                  : 'hover:text-black'
              }`}
            >
              {/* Top Purple Border Line for active tab */}
              {activeTab === item && (
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#8c25e8]" />
              )}
              {item}
            </button>
          ))}
        </nav>

        {/* Right Side: Dropdowns & Icons */}
        <div className="flex items-center space-x-6 text-[#8c25e8] font-semibold">
          
          {/* Առցանց հայտեր Dropdown */}
          <div className="relative">
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

            {/* Dropdown Menu - Online Applications */}
            {openDropdown === 'online' && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
                {onlineApplications.map((app, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition"
                  >
                    {app}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Հետադարձ կապ Dropdown */}
          <div className="relative">
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

            {/* Dropdown Menu - Contacts */}
            {openDropdown === 'contact' && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-[100] text-gray-800 text-xs font-normal">
                {contacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`block px-5 py-2 hover:bg-purple-50 hover:text-[#8c25e8] transition ${
                      contact === 'Պատվիրել զանգ' ? 'font-semibold text-[#8c25e8] border-t border-gray-100 mt-1 pt-2' : ''
                    }`}
                  >
                    {contact}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Icons Bar */}
          <div className="flex items-center space-x-4 text-black border-l border-gray-200 pl-5">
            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Location Pin */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Question Help */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Globe Language */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Search */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="hover:text-[#8c25e8] transition cursor-pointer">
              {/* Menu Burger */}
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