import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import ChatUser from "./ChatUser";
import User from "./User";
import Top from "./Top";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function Sidebar() {
  const [chatUsers, setChatUsers] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUserChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChatUsers(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getUserChats();
  }, [currentUser.uid]);

  return (
    <div className="bg-gray-2 flex flex-col flex-2 h-full text-white">
      <Search />
      <div className="mt-3 h-full px-2">
        <Top />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <p className="text-sm">Direct Messages</p>
            <button className="bg-transparent">+</button>
          </div>

          {/* display list of all DMs */}
          {chatUsers && (
            <div className="flex flex-col justify-start w-full">
              {Object.keys(chatUsers).map((key, index) => (
                <ChatUser
                  key={index}
                  user={chatUsers[key].userInfo}
                  latestMsg="Static Msg"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <User />
    </div>
  );
}

export default Sidebar;
