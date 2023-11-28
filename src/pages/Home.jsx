import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chatSection/Chat";

function Home() {
  return (
    <div className="flex justify-start items-start h-full w-full">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Home;
