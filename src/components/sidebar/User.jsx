import { IoMdMicOff, IoMdMic } from "react-icons/io";
import { TbHeadphonesOff, TbHeadphonesFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function User() {
  const [mute, setMute] = useState(true);
  const [deafen, setDeafen] = useState(false);
  const status = "npm install sleep";

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-gray-1 h-20 flex justify-between items-center gap-10 py-4 px-2">
      <div className="flex gap-2 justify-center items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={currentUser.photoURL}
          alt=""
        />
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-md">{currentUser.displayName}</h3>
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
          <Link to="/settings">
            <IoMdSettings />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default User;
