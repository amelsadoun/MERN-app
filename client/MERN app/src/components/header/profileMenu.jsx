import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import logout_icon from "../../assets/logout.svg";
import profile_icon from "../../assets/profile.svg";
import lock_icon from "../../assets/lock.svg";
import { useSelector } from "react-redux";
import { showPopup } from "react-popupify";
import { LogoutPopup } from "../popups/logoutPopup";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const clubPfp = useSelector((state) => state.auth.club?.imageURL);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    showPopup("logoutPopup", { open: true });
  };

  return (
    <>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "plain", color: "neutral" } }}
          sx={{ borderRadius: 40, width: 50, height: 50 }}
        >
          <img src={clubPfp} className="rounded-full w-10 h-10" alt="pic" />
        </MenuButton>
        <Menu>
          <MenuItem
            onClick={() => {
              navigate("/editProfile");
            }}
          >
            <img
              src={profile_icon}
              className="self-center w-6 cursor-pointer"
              alt="profile"
            />
            Edit profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/changePassword");
            }}
          >
            <img
              src={lock_icon}
              className="self-center w-6 cursor-pointer"
              alt="change password"
            />
            Change password
          </MenuItem>
          <MenuItem onClick={handleLogoutClick}>
            <img
              src={logout_icon}
              className="self-center w-6 cursor-pointer"
              alt="logout"
            />
            Logout
          </MenuItem>
        </Menu>
      </Dropdown>
      <LogoutPopup />
    </>
  );
}
