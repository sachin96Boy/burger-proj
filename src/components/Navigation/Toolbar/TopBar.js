import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { GiHamburger } from "react-icons/gi";

function TopBar(props) {
  return (
    <header className="h-14 w-full fixed top-0 left-0 bg-orange-800 flex justify-between items-center px-5 box-border z-30">
      <div onClick={props.sideDrawerHandler}><GiHamburger style={{
        fontSize: "2rem",
        color: "white",
      }}/></div>
      <div className="h-4/5">
        <Logo />
      </div>
      <div className="hidden lg:flex">
        <nav className="h-full">
          <NavigationItems />
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
