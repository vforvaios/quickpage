import { List, ListItem } from "@mui/material";
import React from "react";

import {
  NavLink as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";

// forwardRef so TS + MUI accept it
const AdapterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink ref={ref} {...props} />
);

interface IMenuProps {
  mode?: string;
}

const Menu = ({ mode }: IMenuProps) => {
  return (
    <nav
      style={{ flexGrow: 1, maxWidth: 400 }}
      className={` flex gap-6 items-center ${
        mode === "desktop" ? "shown" : ""
      }`}
    >
      <List
        className={`header-menu ${!mode ? "mobile" : ""}`}
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

        <ListItem sx={{ display: "block", textAlign: "center" }}>
          <AdapterLink to="/contact">Contact</AdapterLink>
        </ListItem>
      </List>
    </nav>
  );
};

export default Menu;
