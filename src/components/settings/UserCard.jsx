import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function UserCard() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-between rounded-lg min-w-max w-full bg-gray-1 p-4">
      {/* top part */}
      <div className="flex justify-between w-full items-center pt-16">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={currentUser.photoURL}
            />
            <span className="bottom-0 left-14 absolute  w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>

          <div className="flex flex-col pt-5">
            <p className="text-lg font-semibold">{currentUser.displayName}</p>

            <div className="flex items-center gap-1">
              <img src="nitro7.png" width={20} />
              <img src="hypesquad.png" width={16} />
            </div>
          </div>
        </div>

        <button className="bg-blue-2 text-sm py-1 px-3 rounded-sm mt-5 hover:bg-opacity-80 ml-5">
          Edit User Profile
        </button>
      </div>

      {/* user info */}
      <div className="p-4 rounded-md mt-4 w-full bg-gray-2 flex flex-col gap-4">
        <div>
          <p className="text-gray-400 font-semibold text-xs">USERNAME</p>
          <p className="text-sm">{currentUser.displayName}</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">USER ID</p>
          <p className="text-sm">{currentUser.uid}</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">EMAIL</p>
          <p className="text-sm">{currentUser.email}</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">PHONE NUMBER</p>
          {currentUser.phoneNumber ? (
            <p className="text-sm">{currentUser.phoneNumber}</p>
          ) : (
            <p className="text-sm">Wumpus</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
