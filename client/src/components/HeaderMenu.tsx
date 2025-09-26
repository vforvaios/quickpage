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
      m={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <img src={logo} />
      <nav>
        <List
          component="ul"
          style={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
            display: "flex",
            gap: "12px",
          }}
        >
          <ListItem>
            <AdapterLink to="/">Home</AdapterLink>
          </ListItem>

          <ListItem>
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
