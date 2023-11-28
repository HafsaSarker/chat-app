import { FaVideo, FaUserPlus } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="text-lg flex items-center justify-between border-b border-b-gray-1 h-16 py-9 w-full px-2 pr-5">
      <div className="flex items-center gap-3 pl-1">
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full"
            src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
            alt=""
          />
          <span className="bottom-0 left-6 absolute  w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <h3 className="text-lg">username</h3>
      </div>

      <div className="flex gap-3 cursor-pointer">
        <button className="bg-transparent">
          <BiSolidPhoneCall />
        </button>

        <button className="bg-transparent">
          <FaVideo />
        </button>

        <button className="bg-transparent">
          <FaUserPlus />
        </button>

        <button className="bg-transparent">
          <IoIosMore />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
