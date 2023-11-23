import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* NAV HERE */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
