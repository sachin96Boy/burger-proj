import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/AuthAction";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);
  return <></>;
}

export default Logout;
