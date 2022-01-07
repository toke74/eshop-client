import React, { useState } from "react";

//mui stuff
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ListIcon from "@mui/icons-material/List";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//local stuff
import * as s from "./drawer.styles";
import { SearchI } from "../navbar/navbar.styles";

const DrawerNavbar = ({ authenticated }) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setState({ ...state, left: open });
  };

  return (
    <s.Container>
      <s.IconBtn
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </s.IconBtn>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <s.DrawerWrapper>
            <s.SearchBar>
              <SearchI />
              <input type="search" placeholder="Search ..." />
            </s.SearchBar>
            <s.Hr />

            <s.Wrapper onClick={toggleDrawer(false)}>
              <HomeIcon />
              <s.DrawerText>Home</s.DrawerText>
            </s.Wrapper>

            <s.Wrapper>
              <ListIcon />
              <s.DrawerText>Categories</s.DrawerText>
              <ArrowRightIcon sx={{ ml: "50px" }} />
            </s.Wrapper>

            <s.Wrapper onClick={toggleDrawer(false)}>
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
              <s.DrawerText>My Cart</s.DrawerText>
            </s.Wrapper>

            <s.Wrapper onClick={toggleDrawer(false)}>
              <Badge badgeContent={1} color="error">
                <FavoriteBorderOutlinedIcon />
              </Badge>
              <s.DrawerText>Wishlist</s.DrawerText>
            </s.Wrapper>

            {authenticated && (
              <s.Wrapper onClick={toggleDrawer(false)}>
                <PowerSettingsNewIcon />
                <s.DrawerText>Log out</s.DrawerText>
              </s.Wrapper>
            )}
          </s.DrawerWrapper>
        </Box>
      </Drawer>
    </s.Container>
  );
};

export default DrawerNavbar;
