import React from "react";
import Auxilary from "../../../../hoc/Auxilary";
import Bakdrop from "../../../UI/Backdrop/Bakdrop";
import Logo from "../../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems";

function SideDrawer(props) {
    let attachedClasses = "fixed w-72 max-w-screen-lg h-full left-0 top-0 z-50 bg-white py-8 px-4 box-border transition-opacity lg:hidden -translate-x-full";
    if (props.open) {
        attachedClasses = "fixed w-72 max-w-screen-lg h-full left-0 top-0 z-50 bg-white py-8 px-4 box-border transition-opacity lg:hidden translate-x-0";
    }
    // "fixed w-72 max-w-screen-lg h-full left-0 top-0 z-50 bg-white py-8 px-4 box-border transition-opacity lg:hidden open:translate-x-0 last:-translate-x-full"
  return (
    <Auxilary>
      <Bakdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className="h-24 w-full items-center justify-between">
          <Logo />
        </div>
        <nav className="h-1/2">
          <NavigationItems />
        </nav>
      </div>
    </Auxilary>
  );
}

export default SideDrawer;
