import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";

function Msg({ allMsgs, indx, message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      {allMsgs[indx - 1]?.senderId != message.senderId && (
        <img
          className="w-10 h-10 mt-4 rounded-full"
          src={
            message.senderId == currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />
      )}

      {/* only display name, date and time if msg is NOT from the same user */}
      <div className="flex flex-col items-start">
        {allMsgs[indx - 1]?.senderId != message.senderId && (
          <div className="flex gap-2 items-center  pt-4">
            <h3 className="font-semibold text-md">
              {message.senderId == currentUser.uid
                ? currentUser.displayName
                : data.user.displayName}
            </h3>
            <span className="text-xs text-gray-400">11/20/2023</span>
            <span className="text-xs text-gray-400">2:22 PM</span>
          </div>
        )}

        {/* same sender messages */}
        {allMsgs[indx - 1]?.senderId == message.senderId ? (
          <>
            <p className="text-md pl-14">{message.text}</p>

            {message.file && (
              <a href={message.file} target="_blank">
                <img
                  src={message.file}
                  className="rounded-md hover:cursor-pointer ml-14 py-1"
                  width={150}
                />
              </a>
            )}
          </>
        ) : (
          <>
            <p className="text-md">{message.text}</p>

            {message.file && (
              <a href={message.file} target="_blank">
                <img
                  src={message.file}
                  className="rounded-md hover:cursor-pointer py-1"
                  width={150}
                />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Msg;
