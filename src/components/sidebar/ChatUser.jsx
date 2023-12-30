import React from "react";

function ChatUser({ img, displayName, latestMsg }) {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-4 py-1 px-1 rounded-lg hover:cursor-pointer">
      <img className="w-10 h-10 rounded-full" src={img} alt="" />
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm">{displayName}</h3>
        <p className="text-xs text-gray-400">{latestMsg}</p>
      </div>
    </div>
  );
}

export default ChatUser;
