import React from "react";

function Search() {
  return (
    <div className="border-gray-400 text-gray-400  bg-inherit w-full text-sm flex items-center  border-b border-b-gray-1 h-16 py-9 px-2">
      <input
        className="bg-gray-1 w-full px-2 rounded-sm py-1 focus:outline-none"
        type="text"
        placeholder="Find or start a conversation"
      />
    </div>
  );
}

export default Search;
