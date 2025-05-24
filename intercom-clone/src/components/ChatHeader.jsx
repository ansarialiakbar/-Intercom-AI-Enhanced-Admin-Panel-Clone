import { FaPhone, FaClock, FaTimes } from 'react-icons/fa';

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4">
      <h1 className="text-lg font-semibold  text-gray-800">Nikola Tesla</h1>
      <div className="flex space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FaPhone className="text-gray-600" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FaClock className="text-gray-600" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FaTimes className="text-gray-600" />
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Copilot
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;