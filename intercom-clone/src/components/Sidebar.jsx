import { FaTimes } from 'react-icons/fa';
import RIMG from '../assets/RIMG.jpg'; 

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="w-full md:w-80 bg-white dark:bg-gray-800 p-4 border-l border-gray-200 dark:border-gray-700 h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Details</h2>
        <button onClick={toggleSidebar} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <FaTimes className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Assignee</h2>
      <div className="flex items-center space-x-2 mb-4">
        <img
          src={RIMG}
          alt="Assignee"
          className="w-8 h-8 rounded-full"
        />
        <select className="border rounded p-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition dark:bg-gray-800 dark:text-gray-300">
          <option>Brian Byrne</option>
          <option>Unassigned</option>
        </select>
      </div>

      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Links</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
          <span className="text-sm text-gray-600 dark:text-gray-300">Tracker ticket</span>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">+</button>
        </div>
        <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
          <span className="text-sm text-gray-600 dark:text-gray-300">Back-office tickets</span>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">+</button>
        </div>
      </div>

      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Side conversations</h2>
      <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Add side conversation</span>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">+</button>
      </div>

      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">User data</h2>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Conversation attributes</h2>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Company details</h2>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Salesforce</h2>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Stripe</h2>
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Jira for tickets</h2>
    </div>
  );
};

export default Sidebar;