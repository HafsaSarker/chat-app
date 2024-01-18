import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

function Msg({ message, senderId, file }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="flex items-start gap-4">
      <img
        className="w-10 h-10 rounded-full"
        src={
          senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL
        }
      />

      <div className="flex flex-col items-start">
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-md">
            {senderId == currentUser.uid
              ? currentUser.displayName
              : data.user.displayName}
          </h3>
          <span className="text-xs text-gray-400">11/20/2023</span>
          <span className="text-xs text-gray-400">2:22 PM</span>
        </div>

        <p className="text-md">{message}</p>
        {file && <img src={file} className="rounded-md" width={150} />}
      </div>
    </div>
  );
}

export default Msg;
