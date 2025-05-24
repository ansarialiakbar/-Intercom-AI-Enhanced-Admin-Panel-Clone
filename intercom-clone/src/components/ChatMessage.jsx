import { memo } from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, isTyping }) => {
  const isUser = message.sender === 'Nikola Tesla';

  return (
    <>
      {isTyping && message.sender === 'AI Copilot' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-end mb-4"
        >
          <div className="flex space-x-1 p-3 bg-blue-100 dark:bg-blue-800 rounded-lg">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="w-2 h-2 bg-gray-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
              className="w-2 h-2 bg-gray-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
              className="w-2 h-2 bg-gray-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div
          className={`flex items-start space-x-2 max-w-md ${
            isUser ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              isUser ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            {message.sender.charAt(0)}
          </div>
          <div>
            <div
              className={`p-3 rounded-lg ${
                isUser ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-100 dark:bg-blue-800'
              }`}
            >
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{message.content}</p>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(ChatMessage);