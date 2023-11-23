import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import MsgContainer from "./MsgContainer";
import MsgInput from "./MsgInput";

function Chat() {
  return (
    <div className="flex flex-col flex-1 text-white bg-gray-3 h-full justify-between">
      <nav className="text-lg flex items-center justify-between border-b border-b-gray-1 h-16 py-9 w-full px-2 pr-5">
        <h3 className="text-lg">username</h3>

        <div className="flex gap-3">
          <FaVideo />
          <FaUserPlus />
          <IoIosMore />
        </div>
      </nav>

      <MsgContainer />

      <MsgInput />
    </div>
  );
}

export default Chat;
