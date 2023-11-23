import React from "react";
import Search from "./Search";
import Chat from "./Chat";
import ChatUser from "./ChatUser";

function Sidebar() {
  return (
    <div className="flex flex-col flex-2 h-full text-white">
      <nav className="bg-gray-1 py-5 flex justify-between items-center gap-10 px-2">
        <h3 className="text-lg">Kiki Chat</h3>

        <div className="flex gap-2 justify-center items-center">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
              alt=""
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <h3 className="text-lg">username</h3>
          <button className="text-sm bg-gray-50 text-gray-900 px-2 py-0.5 rounded-lg">
            Logout
          </button>
        </div>
      </nav>

      <div className="bg-gray-3 h-full px-2">
        <Search />

        <div className="flex flex-col gap-2">
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
