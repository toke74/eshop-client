import React, { useState } from "react";

//mui stuff
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";

//local stuff
import * as S from "./navbar.styles";
import DrawerNavbar from "../Drawer/DrawerNavbar";
import ProfileMenu from "./ProfileMenu";

const authenticated = false;

const Navbar = () => {
  //profile Menu
  const [profile, setProfile] = useState(null);

  const openProfile = Boolean(profile);

  const handleProfileClick = (event) => {
    setProfile(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfile(null);
  };
  return (
    <S.Container>
      <div>
        <S.LogoLeft>
          <S.Shopping />
        </S.LogoLeft>
        <DrawerNavbar authenticated={authenticated} />
      </div>
      <div>
        <S.SearchBar>
          <S.SearchI />
          <input type="search" placeholder="Search for anything" />
        </S.SearchBar>
        <S.LogoMiddle>
          <S.Shopping />
        </S.LogoMiddle>
      </div>

      <S.RightNavbar>
        <S.TopLinks>
          <span>Home</span>
          <span
            style={{
              margin: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span>Categories</span>
            <ArrowDropDownIcon />
          </span>
          <S.BadgeCartIcon badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon />
          </S.BadgeCartIcon>
          <S.BadgeCartIcon badgeContent={1} color="error">
            <FavoriteBorderOutlinedIcon />
          </S.BadgeCartIcon>
        </S.TopLinks>

        {authenticated ? (
          <Box
            id="profile-btn"
            aria-controls="profile-menu"
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            onClick={handleProfileClick}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <S.ProfilePhoto
              src="https://randomuser.me/api/portraits/women/91.jpg"
              alt=""
            />
            <span style={{ marginLeft: "5px", fontSize: "13px" }}>Sarah</span>
            <ArrowDropDownIcon />
          </Box>
        ) : (
          <>
            <S.LoginButton>Log in</S.LoginButton>
            <S.SignupButton>Sign up</S.SignupButton>
          </>
        )}
        <ProfileMenu
          openProfile={openProfile}
          profile={profile}
          handleProfileClose={handleProfileClose}
        />
      </S.RightNavbar>
    </S.Container>
  );
};

export default Navbar;
