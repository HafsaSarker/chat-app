import React from "react";
import { useState, useEffect, useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import Msg from "./Msg";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../firebase";

function MsgContainer() {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      // console.log(doc.data());
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="h-full overflow-y-auto">
      {messages && messages.length >= 1 ? (
        <div className="flex flex-col min-h-full justify-end px-4 pb-4">
          {messages.map((item, index) => (
            <Msg key={item.id} message={item} allMsgs={messages} indx={index} />
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col justify-end px-4 gap-2 pb-4">
          <h2>
            This is the begining of your direct message history with{" "}
            <span className="font-semibold">{data.user.displayName}</span>
          </h2>
          <img src="./wumpus.png" width={150} />
        </div>
      )}
    </div>
  );
}

export default MsgContainer;
