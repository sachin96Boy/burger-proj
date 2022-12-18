import React from "react";
import Auxilary from "../../hoc/Auxilary";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";
import TopBar from "../Navigation/Toolbar/TopBar";
import { useSelector } from "react-redux";

function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = React.useState(false);
  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }
  const selector = useSelector((state) => {
    return {
      isAuthenticated: state.auth.token !== null,
    };
  });
  return (
    <Auxilary>
      <TopBar sideDrawerHandler={sideDrawerCloseHandler} isAuthenticated={selector.isAuthenticated}/>
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} isAuthenticated={selector.isAuthenticated}/>
      <main className="mt-20">{props.children}</main>
    </Auxilary>
  );
}

export default Layout;
