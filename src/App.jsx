import { Outlet } from "react-router-dom";
import { MenuIcon, Sidebar } from "./components";
import { MenuButton } from "./components/Sidebar/styles";
import { useState } from "react";

export function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function hideMenu() {
    setShowSidebar(false);
  }

  return (
    <main>
      <MenuButton
        onClick={handleToggleSidebar}
        className={showSidebar ? "active" : ""}
      >
        <MenuIcon />
      </MenuButton>
      <Sidebar isActive={showSidebar} hideMenu={hideMenu} />
      <Outlet />
    </main>
  );
}
