import { IoPerson } from "react-icons/io5";
import { BsRocketFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

function Top() {
  return (
    <div className="flex flex-col pb-2">
      <button className="bg-transparent flex items-center text-md gap-3 py-2 hover:bg-gray-4 px-1 rounded-lg focus:bg-gray-4">
        <IoPerson />
        <p>Friends</p>
      </button>
      <button className="bg-transparent flex items-center text-md gap-3 py-2 hover:bg-gray-4 px-1 rounded-lg focus:bg-gray-4">
        <BsRocketFill />
        <p>Nitro</p>
      </button>
      <button className="bg-transparent flex items-center text-md gap-3 py-2 hover:bg-gray-4 px-1 rounded-lg focus:bg-gray-4">
        <IoMail />
        <p>Message Requests</p>
      </button>
      <button className="bg-transparent flex items-center text-md gap-3 py-2 hover:bg-gray-4 px-1 rounded-lg focus:bg-gray-4">
        <FaCartShopping />
        <p>Shop</p>
      </button>
    </div>
  );
}

export default Top;
