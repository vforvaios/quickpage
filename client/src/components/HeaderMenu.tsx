import { Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-indigo-600">QUICKPAGE</h1>
        <Menu mode="desktop" />
        <Box
          display="flex"
          gap={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link to="/login">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Register
            </button>
          </Link>
          <MenuIcon className="hidden" onClick={toggleDrawer(true)} />
        </Box>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Menu />
      </Drawer>
    </>
  );
};

export default HeaderMenu;
