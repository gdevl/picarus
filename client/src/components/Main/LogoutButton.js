import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../store/actions/authentication";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    (async () => {
      dispatch(logout());
    })();
  };

  return (
    <IconButton
      color="primary"
      aria-label="logout"
      component="span"
      onClick={handleLogout}
    >
      <ExitToAppIcon color="primary" className="main__appbar_icons" />
    </IconButton>
  );
};

export default LogoutButton;
