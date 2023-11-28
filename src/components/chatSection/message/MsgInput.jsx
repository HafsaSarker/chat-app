import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { BsFiletypeGif } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";

function MsgInput() {
  return (
    <div className="flex items-center justify-between bg-gray-4 h-16 py-9 w-full px-2">
      <input
        className="w-full bg-transparent focus:outline-none"
        type="text"
        placeholder="Type something..."
      />

      <div className="flex gap-1 text-xl pr-3">
        <label htmlFor="file-input">
          <IoIosAttach />
        </label>
        <input type="file" style={{ display: "none" }} id="file-input" />
        <BsFiletypeGif />
        <BsFillEmojiHeartEyesFill />
      </div>
    </div>
  );
}

export default MsgInput;
