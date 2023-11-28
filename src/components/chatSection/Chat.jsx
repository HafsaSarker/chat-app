import React from "react";
import MsgContainer from "./message/MsgContainer";
import MsgInput from "./message/MsgInput";
import Navbar from "./Navbar";

function Chat() {
  return (
    <div className="flex flex-col flex-1 text-white bg-gray-3 h-full justify-between">
      <Navbar />

      <MsgContainer />

      <MsgInput />
    </div>
  );
}

export default Chat;
