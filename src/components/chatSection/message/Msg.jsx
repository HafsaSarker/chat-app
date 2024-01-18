import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

function Msg({ message, senderId, file }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className="flex items-start gap-4">
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
        {file && (
          <a href={file} target="_blank">
            <img
              src={file}
              className="rounded-md hover:cursor-pointer"
              width={150}
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default Msg;
