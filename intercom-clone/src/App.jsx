import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatHeader from './components/ChatHeader';
import ChatMessage from './components/ChatMessage';
import Sidebar from './components/Sidebar';
import NoteSection from './components/NoteSection';
import ActionDropdown from './components/ActionDropdown';
import ChatFooter from './components/ChatFooter';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import './App.css';

const dummyMessages = [
  {
    sender: 'AI Copilot',
    content: "Thanks, passing you to the right team now.",
    timestamp: "22m",
  },
  {
    sender: 'AI Copilot',
    content: "We understand if your purchase didn’t quite meet your expectations. To help you with a refund, please provide your order ID and proof of purchase.\n\nJust a heads-up:\nWe can only refund orders from the last 60 days.\nYour item must meet our return condition requirements.\n\nOnce confirmed, I’ll send you a returns QR code for easy processing.\n\nThanks for your cooperation!",
    timestamp: "22m",
  },
  {
    sender: 'Nikola Tesla',
    content: "I placed the order over 60 days ago 😢 Could you make an exception, please?",
    timestamp: "21m",
  },
];

const App = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen(!isSidebarOpen);
      }
      if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme, isSidebarOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSendMessage = (content) => {
    const newMessage = {
      sender: 'Nikola Tesla',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        sender: 'AI Copilot',
        content: "Let me check on that exception for you, Nikola. Could you please provide your order ID?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
      toast.info('AI Copilot has responded!', {
        position: "top-right",
        autoClose: 3000,
      });
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.warn('Customer has been waiting for 5 minutes!', {
        position: "top-right",
        autoClose: 5000,
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col md:flex-row h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="flex-1 flex flex-col p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <button onClick={toggleSidebar} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <FaBars className="text-gray-600 dark:text-gray-300" />
            </button>
            <ChatHeader />
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {theme === 'light' ? <FaMoon className="text-gray-600" /> : <FaSun className="text-yellow-400" />}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg}
              isTyping={isTyping && index === messages.length - 1 && msg.sender === 'Nikola Tesla'}
            />
          ))}
          <div className="text-center text-sm text-yellow-600 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200 p-2 rounded">
            This customer has been waiting for 5 minutes.
          </div>
          <NoteSection />
          <div ref={chatEndRef} />
        </div>
        <ActionDropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
        <ChatFooter onSendMessage={handleSendMessage} />
      </div>
      <div
        className={`fixed md:static inset-0 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;