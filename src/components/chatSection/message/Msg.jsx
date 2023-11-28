import React from "react";

function Msg() {
  return (
    <div className="flex items-start gap-4">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.unisoftbank.com/wp-content/uploads/2022/12/black-cat-pfp-for-discord-10.jpg"
        alt=""
      />

      <div className="flex flex-col items-start">
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-md">SugarCube</h3>
          <span className="text-xs text-gray-400">11/20/2023</span>
          <span className="text-xs text-gray-400">2:22 PM</span>
        </div>

        <p className="text-md">Hey I missed your call</p>
      </div>
    </div>
  );
}

export default Msg;
