//mui staff
import Menu from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";

//local file
import * as s from "./Profile.styles";

const ProfileMenu = ({ openProfile, profile, handleProfileClose }) => {
  return (
    <Menu
      id="profile-menu"
      anchorEl={profile}
      open={openProfile}
      onClose={handleProfileClose}
      MenuListProps={{
        "aria-labelledby": "profile-btn",
      }}
    >
      <s.Container>
        <s.Wrapper onClick={handleProfileClose}>
          <AccountCircleIcon />
          <s.DrawerText>Profile</s.DrawerText>
        </s.Wrapper>
        <s.Wrapper onClick={handleProfileClose}>
          <AccountCircleIcon />
          <s.DrawerText>My account</s.DrawerText>
        </s.Wrapper>
        <s.Wrapper onClick={handleProfileClose}>
          <SettingsIcon />
          <s.DrawerText>Settings</s.DrawerText>
        </s.Wrapper>
        <s.Wrapper onClick={handleProfileClose}>
          <MessageIcon />
          <s.DrawerText>Messages</s.DrawerText>
        </s.Wrapper>
        <s.Wrapper onClick={handleProfileClose}>
          <NotificationsIcon />
          <s.DrawerText>Notifications</s.DrawerText>
        </s.Wrapper>
        <s.Wrapper onClick={handleProfileClose}>
          <PowerSettingsNewIcon />
          <s.DrawerText>Logout</s.DrawerText>
        </s.Wrapper>
      </s.Container>
    </Menu>
  );
};

export default ProfileMenu;
