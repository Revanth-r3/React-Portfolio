import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Importing LeetCode icon from react-icons

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Text-based logo */}
      <div className="flex flex-shrink-0 items-center text-white text-2xl font-semibold">
        Your Data , My Passion
      </div>
      
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <a 
          href="https://www.linkedin.com/in/revanth-r4011/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          <FaLinkedin className="text-white" />
        </a>
        
        {/* GitHub Icon */}
        <a 
          href="https://github.com/Revanth-r3" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          <FaGithub className="text-white" />
        </a>
        
        {/* LeetCode Icon */}
        <a 
          href="https://leetcode.com/Revanth33" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          <SiLeetcode className="text-orange-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

