import React, { useState, useEffect, useRef } from 'react';
import { 
  auth, 
  provider, 
  signInWithPopup, 
  db, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp, 
  setDoc, 
  doc 
} from '../firebaseConfig';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Զանգերի վիճակ
  const [inCall, setInCall] = useState(false);
  const [callType, setCallType] = useState(null); // 'audio', 'video'
  const localVideoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  // Ձայնագրման վիճակ
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await setDoc(doc(db, 'users', currentUser.uid), {
          uid: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          lastSeen: serverTimestamp()
        }, { merge: true });
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = collection(db, 'users');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => doc.data());
      setUsersList(list);
      if (!selectedUser && list.length > 0) {
        setSelectedUser(list[0]);
      }
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (!selectedUser || !user) return;
    
    const chatId = user.uid < selectedUser.uid 
      ? `${user.uid}_${selectedUser.uid}` 
      : `${selectedUser.uid}_${user.uid}`;

    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [selectedUser, user]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleSendMessage = async (e, customData = {}) => {
    if (e) e.preventDefault();
    if ((!newMessage.trim() && !customData.audioUrl) || !selectedUser || !user) return;

    const properChatId = user.uid < selectedUser.uid 
      ? `${user.uid}_${selectedUser.uid}` 
      : `${selectedUser.uid}_${user.uid}`;

    await addDoc(collection(db, 'chats', properChatId, 'messages'), {
      text: newMessage || '',
      audioUrl: customData.audioUrl || null,
      senderId: user.uid,
      senderName: user.displayName,
      createdAt: serverTimestamp()
    });

    setNewMessage('');
  };

  // Իրական ձայնագրման տրամաբանություն
  const toggleVoiceRecording = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          // Ավտոմատ ուղարկել չաթ որպես ձայնային հաղորդագրություն
          await handleSendMessage(null, { audioUrl });
          
          // Անջատել միկրոֆոնի սթրիմը
          stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Microphone error:", error);
        alert("Հնարավոր չէ միացնել միկրոֆոնը։ Ստուգեք թույլտվությունները։");
      }
    } else {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Իրական զանգերի տրամաբանություն (Camera / Mic Stream)
  const startCall = async (type) => {
    setCallType(type);
    setInCall(true);
    try {
      const constraints = {
        audio: true,
        video: type === 'video'
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaStreamRef.current = stream;
      if (type === 'video' && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Media stream error:", error);
      alert("Հնարավոր չէ միացնել տեսախցիկը կամ միկրոֆոնը։");
    }
  };

  const endCall = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    setInCall(false);
    setCallType(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Չաթը բացելու կոճակ */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#8c25e8] hover:bg-[#781fd0] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </button>
      )}

      {/* Չաթի պատուհան */}
      {isOpen && (
        <div className="bg-white w-[380px] sm:w-[450px] h-[550px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          
          {/* Վերնագիր և Զանգերի կոճակներ (ՎԵՐԵՎՈՒՄ) */}
          <div className="bg-[#8c25e8] text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-2">
              {/* Տեքստը և կետը հեռացված են */}
            </div>
            
            <div className="flex items-center space-x-2">
              {user && !inCall && (
                <>
                  {/* Հեռախոսազանգի կոճակ */}
                  <button
                    onClick={() => startCall('audio')}
                    className="p-2 bg-white/15 hover:bg-white/25 rounded-full transition transform hover:scale-105"
                    title="Իրական ձայնային զանգ"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>

                  {/* Տեսազանգի կոճակ */}
                  <button
                    onClick={() => startCall('video')}
                    className="p-2 bg-white/15 hover:bg-white/25 rounded-full transition transform hover:scale-105"
                    title="Իրական տեսազանգ"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </>
              )}

              <button 
                onClick={() => { endCall(); setIsOpen(false); }}
                className="text-white hover:text-gray-200 font-bold text-lg ml-1 p-1"
              >
                ✕
              </button>
            </div>
          </div>

          {!user ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-gray-600 mb-6 text-sm font-medium">
                Չաթից օգտվելու և աջակցման թիմի հետ կապ հաստատելու համար խնդրում ենք մուտք գործել Google հաշվով:
              </p>
              <button
                onClick={handleGoogleLogin}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-6 rounded-full shadow-sm flex items-center space-x-3 transition"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span>Մուտք գործել Google-ով</span>
              </button>
            </div>
          ) : inCall ? (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 text-white p-6 relative">
              <div className="absolute top-3 left-3 bg-[#8c25e8] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide">
                {callType === 'video' ? 'Իրական տեսազանգ ընթացքում...' : 'Իրական ձայնային զանգ ընթացքում...'}
              </div>

              {callType === 'video' ? (
                <div className="w-full max-w-xs h-48 bg-black rounded-lg mb-4 overflow-hidden border border-gray-700 shadow-inner flex items-center justify-center">
                  <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
                </div>
              ) : (
                <div className="w-20 h-20 bg-[#8c25e8] rounded-full flex items-center justify-center text-2xl mb-4 animate-pulse shadow-lg">
                  📞
                </div>
              )}

              <p className="text-xs text-gray-300 mb-6">Միկրոֆոնն ու տեսախցիկը ակտիվ են...</p>

              <button
                onClick={endCall}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition shadow-md"
              >
                Անջատել զանգը
              </button>
            </div>
          ) : (
            <div className="flex-1 flex overflow-hidden">
              <div className="w-1/3 border-r border-gray-100 overflow-y-auto bg-gray-50">
                <div className="p-2 text-xs font-bold text-gray-400 uppercase">Օգտատերեր</div>
                {usersList.map((u) => (
                  <div
                    key={u.uid}
                    onClick={() => setSelectedUser(u)}
                    className={`p-3 flex items-center space-x-2 cursor-pointer transition ${
                      selectedUser?.uid === u.uid ? 'bg-purple-100 border-l-4 border-[#8c25e8]' : 'hover:bg-gray-100'
                    }`}
                  >
                    <img src={u.photoURL || 'https://via.placeholder.com/40'} alt="" className="w-8 h-8 rounded-full" />
                    <span className="text-xs font-bold text-gray-800 truncate">{u.name}</span>
                  </div>
                ))}
              </div>

              <div className="w-2/3 flex flex-col justify-between bg-white">
                <div className="p-3 border-b border-gray-100 text-xs font-bold text-gray-700 bg-gray-50">
                  Զրույց՝ {selectedUser ? selectedUser.name : 'Ընտրեք զրուցակից'}
                </div>

                <div className="flex-1 p-3 overflow-y-auto space-y-3">
                  {messages.map((msg) => {
                    const isMe = msg.senderId === user.uid;
                    return (
                      <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[80%] p-2.5 rounded-xl text-xs ${
                          isMe ? 'bg-[#8c25e8] text-white rounded-br-none shadow-sm' : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}>
                          {msg.text && <p>{msg.text}</p>}
                          {msg.audioUrl && (
                            <audio controls src={msg.audioUrl} className="mt-1 w-48 h-8"></audio>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1">{msg.senderName}</span>
                      </div>
                    );
                  })}
                </div>

                {selectedUser && (
                  <form onSubmit={(e) => handleSendMessage(e)} className="p-2 border-t border-gray-100 flex items-center space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={isRecording ? "Ձայնագրվում է..." : "Գրեք հաղորդագրություն..."}
                      disabled={isRecording}
                      className="flex-1 border border-gray-200 rounded-full px-3 py-2 text-xs focus:outline-none focus:border-[#8c25e8]"
                    />
                    
                    {/* Իրական ձայնագրման կոճակ */}
                    <button
                      type="button"
                      onClick={toggleVoiceRecording}
                      className={`p-2 rounded-full transition ${
                        isRecording 
                          ? 'bg-red-500 text-white animate-bounce' 
                          : 'bg-gray-100 text-[#8c25e8] hover:bg-purple-50'
                      }`}
                      title={isRecording ? "Կանգնեցնել և ուղարկել ձայնը" : "Սկսել ձայնագրել"}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    </button>

                    {/* Ուղարկելու կոճակ */}
                    <button
                      type="submit"
                      className="bg-[#8c25e8] text-white p-2 rounded-full hover:bg-[#781fd0] transition shadow-sm"
                      title="Ուղարկել նամակ"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}