import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import MsgContainer from "./message/MsgContainer";
import MsgInput from "./message/MsgInput";
import Navbar from "./Navbar";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <>
      {data.user.displayName ? (
        <div className="flex flex-col flex-1 text-white bg-gray-3 h-full justify-between">
          <Navbar />

          <MsgContainer />

          <MsgInput />
        </div>
      ) : (
        <div className="flex flex-col flex-1 text-white bg-gray-3 h-full justify-center w-full items-center">
          <img src="./wumpus.png" width={150} />
          <h2>Select a friend to chat with</h2>
        </div>
      )}
    </>
  );
}

export default Chat;
