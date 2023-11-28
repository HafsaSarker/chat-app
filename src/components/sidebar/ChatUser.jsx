import React from "react";

function ChatUser() {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-4 py-1 px-1 rounded-lg hover:cursor-pointer">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
        alt=""
      />
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg">SugarCube</h3>
        <p className="text-xs text-gray-400">Okay thank you</p>
      </div>
    </div>
  );
}

export default ChatUser;
