import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function TopBar() {
  return (
    <header className="h-14 w-full fixed top-0 left-0 bg-orange-800 flex justify-between items-center px-5 box-border z-30">
      <div>MENU</div>
      <Logo />
      <nav className="h-full">
        <NavigationItems />
      </nav>
    </header>
  );
}

export default TopBar;
