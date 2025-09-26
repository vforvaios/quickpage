import { Box, Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavLink as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import logo from "../assets/logo.png";
import React from "react";
import Menu from "./Menu";

// forwardRef so TS + MUI accept it
const AdapterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink ref={ref} {...props} />
);

const HeaderMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu mode="desktop" />
        <Box
          display="flex"
          gap={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            to="/login"
            component={AdapterLink}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
          <MenuIcon className="hidden" onClick={toggleDrawer(true)} />
        </Box>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Menu />
      </Drawer>
    </>
  );
};

export default HeaderMenu;
