import React from "react";

function Search() {
  return (
    <div>
      <input
        className="my-4 border-b border-gray-400 text-gray-400 py-0.5 bg-inherit w-full focus:outline-none"
        type="text"
        placeholder="Find a user"
      />
    </div>
  );
}

export default Search;
