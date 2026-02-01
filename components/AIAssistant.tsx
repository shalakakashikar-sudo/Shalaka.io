
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types.ts';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Academic Companion. How can I help you explore Shalaka Kashikar\'s innovative apps today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.slice(1).map(m => ({ 
        role: m.role, 
        parts: [{ text: m.text }] 
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: "You are a helpful academic assistant for Shalaka.io, a hub of interactive educational apps designed and developed by Shalaka Kashikar. You help users navigate apps like Articulate, Flip Tag, Modowl, Determiner Den, Gnome Smash, SmarTest, English Playground, SVA Mastery, Crowsword, Twistopia, Conditionals, Sentence Safari, Spanish Playground, Litmania, and Verb Academy. Always refer to Shalaka Kashikar as the visionary and creator of these tools. Be concise, encouraging, and focused.",
        },
      });

      const botResponse = response.text || "I'm sorry, I'm having trouble processing that right now.";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50" ref={containerRef}>
      {isOpen ? (
        <div className="glass w-80 sm:w-96 h-[550px] flex flex-col rounded-[2.5rem] shadow-2xl shadow-pink-200/50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-white">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">🎓</div>
              <div>
                <span className="font-black text-sm block tracking-wide">Assistant</span>
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Curated by Shalaka</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-xl transition-colors" aria-label="Close assistant">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-pink-50/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-br-none shadow-lg' 
                    : 'bg-white text-slate-700 shadow-xl shadow-pink-100/50 border border-pink-50 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-pink-50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-pink-50">
            <div className="flex gap-3">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Shalaka's apps..."
                className="flex-1 bg-pink-50/50 border border-pink-100 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all placeholder:text-pink-300"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3.5 rounded-2xl hover:shadow-xl hover:shadow-pink-200 disabled:opacity-50 transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-pink-500 to-orange-500 text-white w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-pink-400/40 hover:scale-110 active:scale-90 transition-all duration-300 group"
          aria-label="Open AI assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
