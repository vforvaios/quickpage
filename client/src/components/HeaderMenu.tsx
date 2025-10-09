import { Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { token } from "@/models/selectors/userSelectors";
import { logoutUser } from "@/models/actions/userActions";

const HeaderMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector(token);
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
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
          {!userToken ? (
            <>
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
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <PersonIcon />
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
          <MenuIcon className="hidden" onClick={toggleDrawer(true)} />
        </Box>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Menu setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default HeaderMenu;
