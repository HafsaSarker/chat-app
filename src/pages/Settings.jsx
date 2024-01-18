import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TiLockClosed } from "react-icons/ti";
import UserCard from "../components/settings/UserCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Settings() {
  return (
    <div className="flex flex-col justify-start items-center h-full w-full bg-gray-3 gap-3 text-gray-50 pt-10 overflow-y-scroll">
      <div className="flex min-w-fit items-center max-w-5xl w-full px-56 justify-between">
        <h2 className="text-2xl font-semibold">My Account</h2>
        <Link
          to="/home"
          className="flex flex-col text-gray-400 hover:text-gray-300 text-sm items-center"
        >
          <span className="text-4xl ">
            <IoIosCloseCircleOutline />
          </span>
          ESC
        </Link>
      </div>

      <div className="min-w-max w-full px-56  max-w-5xl">
        <UserCard />
      </div>

      <div className="border max-w-2xl my-8 border-gray-4 w-full px-56"></div>

      <div className="flex flex-col min-w-fit items-start max-w-5xl w-full px-56 justify-between">
        <h2 className="text-2xl font-semibold">Password and Authentication</h2>

        <p className="text-xs text-green-500 flex items-center py-3 font-semibold">
          <span>
            <TiLockClosed />
          </span>
          MULTI-FACTOR AUTHENTICATION ENABLED
        </p>

        <button className="bg-blue-2 text-sm py-1 px-3 rounded-sm my-3 hover:bg-opacity-80">
          Change Password
        </button>

        <div className="flex flex-col my-3">
          <p className="text-gray-400 font-semibold text-xs">ACCOUNT STATUS</p>
          <p className="text-xs mt-2 text-gray-400">
            Logging out of your account means you can log back in any time duh!
          </p>

          <div className="flex gap-5 my-3">
            <button
              onClick={() => signOut(auth)}
              className="bg-red-500 text-sm py-1 px-3 rounded-sm mt-3 hover:bg-opacity-80"
            >
              Logout
            </button>

            <button className="bg-inherit border border-red-500 text-sm py-1 px-3 rounded-sm mt-3 hover:bg-red-500">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
