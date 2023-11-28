import React from "react";
import Search from "./Search";
import ChatUser from "./ChatUser";

function Sidebar() {
  return (
    <div className="flex flex-col flex-2 h-full text-white">
      <nav className="bg-gray-1 h-20 flex justify-between items-center gap-10 px-2">
        <h3 className="text-lg text-blue-1 font-semibold">Kiki Chat</h3>

        <div className="flex gap-2 justify-center items-center">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
              alt=""
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-lg">SugarCube</h3>
            <button className="text-xs text-blue-1 bg-inherit">Logout</button>
          </div>
        </div>
      </nav>

      <div className="bg-gray-2 h-full px-2">
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
