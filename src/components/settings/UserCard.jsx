import React from "react";

function UserCard() {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg min-w-max w-full bg-gray-1 p-4">
      {/* top part */}
      <div className="flex justify-between w-full items-center pt-16">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
            />
            <span className="bottom-0 left-14 absolute  w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>

          <div className="flex flex-col pt-5">
            <p className="text-lg font-semibold">sugarCube</p>

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
          <p className="text-sm">SugarCube</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">USER ID</p>
          <p className="text-sm">0X82744DI2C</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">EMAIL</p>
          <p className="text-sm">sugar@gmail.com</p>
        </div>

        <div>
          <p className="text-gray-400 font-semibold text-xs">PHONE NUMBER</p>
          <p className="text-sm">1234567810</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
