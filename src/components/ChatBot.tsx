import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi there! I\'m Dr. Denti, your virtual dental assistant. How can I help you today?', isUser: false },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      
      // Simulate AI response
      setTimeout(() => {
        let response = '';
        const lowercaseInput = input.toLowerCase();
        
        if (lowercaseInput.includes('tooth') && (lowercaseInput.includes('pain') || lowercaseInput.includes('hurt'))) {
          response = 'Tooth pain can be caused by several issues including cavities, gum disease, or a cracked tooth. Would you like to book an emergency appointment to have it checked?';
        } else if (lowercaseInput.includes('whitening') || lowercaseInput.includes('whiter')) {
          response = 'We offer professional teeth whitening services that can brighten your smile by several shades. Our treatment is safe and provides long-lasting results. Would you like to learn more about our whitening options?';
        } else if (lowercaseInput.includes('braces') || lowercaseInput.includes('invisalign')) {
          response = 'We offer both traditional braces and clear aligners like Invisalign. The best option depends on your specific needs. Would you like to schedule a consultation with one of our orthodontists?';
        } else if (lowercaseInput.includes('appointment') || lowercaseInput.includes('book')) {
          response = 'I\'d be happy to help you book an appointment! You can schedule directly through our booking system. What type of service are you looking for?';
        } else if (lowercaseInput.includes('cost') || lowercaseInput.includes('price') || lowercaseInput.includes('expensive')) {
          response = 'Our prices vary depending on the treatment. We offer competitive rates and accept most insurance plans. For a specific quote, we would need to do an initial consultation. Would you like to schedule one?';
        } else {
          response = 'Thank you for your message. To better assist you, would you like to schedule a consultation with one of our dentists, or can I help you with information about a specific treatment?';
        }
        
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
      <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 5.5"></path><path d="M5.5 17A16.5 16.5 0 0 1 4 12c0-2 .5-4 1.5-5.5"></path><path d="M7 8a8.82 8.82 0 0 1 4-1c1 0 2 .2 3 .5"></path><path d="M14.5 6.5a4.24 4.24 0 0 0-3-1c-1 0-1.5.5-2.5 1.5"></path><path d="M7 15c1-1 2-2 4-2 1 0 2 .5 3 1"></path><path d="M11 12.5c.33-.67 1-1.12 1.67-.78.94.48 1.8 1.34 2.33 2.28"></path></svg>
          <h3 className="font-bold">Dr. Denti AI Assistant</h3>
        </div>
        <button onClick={onClose} className="text-white" aria-label="Close chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.isUser ? 'text-right' : ''}`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                message.isUser
                  ? 'bg-primary-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Dr. Denti anything..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-primary-600 text-white px-4 rounded-r-lg hover:bg-primary-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Dr. Denti can answer questions, check symptoms, and help book appointments.
        </p>
      </div>
    </div>
  );
};

export default ChatBot;