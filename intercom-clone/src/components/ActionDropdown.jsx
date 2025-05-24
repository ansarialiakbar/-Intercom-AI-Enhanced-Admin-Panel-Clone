import { motion } from 'framer-motion';
import { FaPen, FaCode, FaComment, FaTicketAlt, FaClock, FaPaperclip, FaGift } from 'react-icons/fa';

const ActionDropdown = ({ isOpen, setIsOpen }) => {
  const actions = [
    { icon: <FaPen />, label: 'Write a note' },
    { icon: <FaCode />, label: 'Use macro' },
    { icon: <FaComment />, label: 'Summarize conversation' },
    { icon: <FaTicketAlt />, label: 'Create a back-office ticket' },
    { icon: <FaClock />, label: 'Snooze' },
    { icon: <FaPaperclip />, label: 'Upload attachment' },
    { icon: <FaGift />, label: 'Insert gif' },
  ];

  return (
    <div className="relative mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm text-gray-600 p-2 rounded hover:bg-gray-100 transition"
      >
        Search actions
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 bg-white border rounded-lg shadow-lg w-64 mt-1"
        >
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
            >
              {action.icon}
              <span className="text-sm text-gray-600">{action.label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ActionDropdown;