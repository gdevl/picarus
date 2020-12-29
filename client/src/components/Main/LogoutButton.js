import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import { logout } from "../../store/actions/authentication";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    (async () => {
      dispatch(logout());
    })();
  };

  return (
    <Tooltip title="Logout">
      <IconButton
        color="primary"
        aria-label="logout"
        component="span"
        onClick={handleLogout}
      >
        <ExitToAppIcon color="primary" className="main__appbar_icons" />
      </IconButton>
    </Tooltip>
  );
};

export default LogoutButton;
