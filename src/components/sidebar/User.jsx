import { IoMdMicOff, IoMdMic } from "react-icons/io";
import { TbHeadphonesOff, TbHeadphonesFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

function User() {
  const [mute, setMute] = useState(true);
  const [deafen, setDeafen] = useState(false);
  const status = "npm install sleep";
  return (
    <div className="bg-gray-1 h-20 flex justify-between items-center gap-10 py-4 px-2">
      <div className="flex gap-2 justify-center items-center">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full"
            src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
            alt=""
          />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-md">SugarCube</h3>
          {status.length >= 14 ? (
            <p className="text-xs text-gray-400 bg-inherit">
              {status.slice(0, 14)}...
            </p>
          ) : (
            <p className="text-xs text-gray-400 bg-inherit"></p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        {mute ? (
          <button
            className="bg-transparent text-xl"
            onClick={() => setMute((prev) => !prev)}
          >
            <IoMdMicOff />
          </button>
        ) : (
          <button
            className="bg-transparent text-xl"
            onClick={() => setMute((prev) => !prev)}
          >
            <IoMdMic />
          </button>
        )}

        {deafen ? (
          <button
            className="bg-transparent text-2xl"
            onClick={() => setDeafen((prev) => !prev)}
          >
            <TbHeadphonesOff />
          </button>
        ) : (
          <button
            className="bg-transparent text-2xl"
            onClick={() => setDeafen((prev) => !prev)}
          >
            <TbHeadphonesFilled />
          </button>
        )}

        <button className="bg-transparent text-2xl">
          <IoMdSettings />
        </button>
      </div>
    </div>
  );
}

export default User;
