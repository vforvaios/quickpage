import { Box, Button, List, ListItem } from "@mui/material";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import logo from "../assets/react.svg";
import React from "react";

// forwardRef so TS + MUI accept it
const AdapterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink ref={ref} {...props} />
);

const HeaderMenu = () => {
  return (
    <Box
      m={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <img src={logo} />
      <nav style={{ flexGrow: 1, maxWidth: 400 }}>
        <List
          className="header-menu"
          component="ul"
          sx={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <AdapterLink to="/">Home</AdapterLink>
          </ListItem>

          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <AdapterLink to="/about">About Us</AdapterLink>
          </ListItem>

          <ListItem sx={{ display: "block", textAlign: "center" }}>
            <AdapterLink to="/pricing">Pricing</AdapterLink>
          </ListItem>
        </List>
      </nav>
      <Button
        to="/login"
        component={AdapterLink}
        color="primary"
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
};

export default HeaderMenu;
