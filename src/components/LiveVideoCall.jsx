import React, { useState } from 'react';

export default function LiveVideoCall() {
  const [inCall, setInCall] = useState(false);
  const [callType, setCallType] = useState(null); 

  const startCall = (type) => {
    setCallType(type);
    setInCall(true);
 
  };

  const endCall = () => {
    setInCall(false);
    setCallType(null);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">Evoca Support & Chat</h2>
          <p className="text-xs text-red-100">Աջակցության կենտրոն</p>
        </div>

        {!inCall && (
          <div className="flex items-center space-x-3">

            <button
              onClick={() => startCall('audio')}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              title="Ձայնային զանգ"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            {/* Տեսազանգի կոճակ */}
            <button
              onClick={() => startCall('video')}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              title="Տեսազանգ"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        )}
      </div>

     
      <div className="flex-1 p-4 flex flex-col justify-between bg-gray-50 relative">
        {inCall ? (
        
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 rounded-xl text-white p-6 relative">
            <div className="absolute top-4 left-4 bg-red-500/80 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
              {callType === 'video' ? 'Տեսազանգ ընթացքում...' : 'Ձայնային զանգ ընթացքում...'}
            </div>

            {callType === 'video' && (
              <div className="w-full max-w-sm h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center border border-gray-700">
                <span className="text-gray-400 text-sm">Տեսահոսք (Video Stream)</span>
              </div>
            )}

            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 animate-pulse">
              🎙️
            </div>

            <p className="text-sm text-gray-300 mb-6">Կապ է հաստատվում մասնագետի հետ...</p>

            {/* Զանգն անջատելու կոճակ */}
            <button
              onClick={endCall}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-200 shadow-md flex items-center space-x-2"
            >
              <span>Անջատել զանգը</span>
            </button>
          </div>
        ) : (
          /* Սովորական չաթի տեսքը */
          <>
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 max-w-[80%]">
                <p className="text-sm text-gray-800">Բարև ձեզ: Ինչպե՞ս կարող ենք օգնել ձեզ այսօր։ Կարող եք սեղմել վերևի կոճակներից՝ զանգահարելու համար։</p>
                <span className="text-[10px] text-gray-400 mt-1 block">19:05</span>
              </div>
            </div>

          
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Գրեք հաղորդագրություն..."
                className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
                Ուղարկել
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}