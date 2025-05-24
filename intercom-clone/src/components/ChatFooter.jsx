import { useState } from 'react';
import { FaBolt, FaPaperclip, FaSmile, FaRobot } from 'react-icons/fa';

const ChatFooter = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
    if (file) {
      onSendMessage(`Uploaded file: ${file.name}`);
      setFile(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex space-x-2 mr-4">
        <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <FaBolt />
        </button>
        <label className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 cursor-pointer">
          <FaPaperclip />
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <FaSmile />
        </button>
        <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          <FaRobot />
        </button>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {file && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          {file.name}
        </span>
      )}
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatFooter;