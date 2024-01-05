import { FaVideo, FaUserPlus } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

function Navbar() {
  const { data } = useContext(ChatContext);
  return (
    <nav className="text-lg flex items-center justify-between border-b border-b-gray-1 h-16 py-9 w-full px-2 pr-5">
      <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={data.user.photoURL}
          alt=""
        />
        <h3 className="text-lg">{data.user.displayName}</h3>
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
