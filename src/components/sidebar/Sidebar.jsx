import React from "react";
import Search from "./Search";
import ChatUser from "./ChatUser";
import User from "./User";
import Top from "./Top";

function Sidebar() {
  return (
    <div className="bg-gray-2 flex flex-col flex-2 h-full text-white">
      {/* <Search /> */}
      <div className=" h-full px-2">
        <Top />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <p className="text-sm">Direct Messages</p>
            <button className="bg-transparent">+</button>
          </div>

          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>
      </div>

      <User />
    </div>
  );
}

export default Sidebar;
