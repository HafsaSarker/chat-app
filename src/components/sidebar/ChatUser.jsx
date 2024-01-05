import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

function ChatUser({ user, latestMsg }) {
  const { dispatch } = useContext(ChatContext);
  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  return (
    <div
      className="flex items-center gap-3 hover:bg-gray-4 py-1 px-1 rounded-lg hover:cursor-pointer"
      onClick={() => handleSelect(user)}
    >
      <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm">{user.displayName}</h3>
        <p className="text-xs text-gray-400">{latestMsg}</p>
      </div>
    </div>
  );
}

export default ChatUser;
