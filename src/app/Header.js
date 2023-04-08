import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import Linkedin from "../images/linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";

function Header() {
  return (
    <div className="header">
      <div class="header_left">
        <img src={Linkedin} alt="Lnkn logo" />
        <div class="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div class="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Notifications" Icon={CircleNotificationsIcon} />
      </div>
    </div>
  );
}

export default Header;
