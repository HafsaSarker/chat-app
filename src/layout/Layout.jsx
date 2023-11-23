import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* NAV HERE */}
      <div className="h-screen w-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
