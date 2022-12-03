import React from "react";
import Auxilary from "../../hoc/Auxilary";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";
import TopBar from "../Navigation/Toolbar/TopBar";

function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = React.useState(false);
  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }
  return (
    <Auxilary>
      <TopBar sideDrawerHandler={sideDrawerCloseHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler}/>
      <main className="mt-20">{props.children}</main>
    </Auxilary>
  );
}

export default Layout;
