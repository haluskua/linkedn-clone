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
      <div className="header_left">
        <img src={Linkedin} alt="Lnkn logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={CircleNotificationsIcon} />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D5635AQGsr1uJR1hcmQ/profile-framedphoto-shrink_200_200/0/1628630057885?e=1681642800&v=beta&t=eyvqTkQIz4xVkabwLVicAW75y3OsWXgEXgNTvUp3cHQ"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
