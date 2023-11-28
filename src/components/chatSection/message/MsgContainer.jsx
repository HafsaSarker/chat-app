import React from "react";
import Msg from "./Msg";

function MsgContainer() {
  return (
    <div className="h-full flex flex-col justify-end px-4 gap-4 pb-4">
      <Msg />
      <Msg />
      <Msg />
      <Msg />
    </div>
  );
}

export default MsgContainer;
