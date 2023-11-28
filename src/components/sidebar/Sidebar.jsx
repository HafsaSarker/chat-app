import React from "react";
import Search from "./Search";
import ChatUser from "./ChatUser";
import User from "./User";

function Sidebar() {
  return (
    <div className="flex flex-col flex-2 h-full text-white">
      <div className="bg-gray-2 h-full px-2">
        <Search />

        <div className="flex flex-col gap-2">
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
