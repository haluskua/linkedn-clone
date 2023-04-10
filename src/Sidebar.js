import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="profile"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Omps kay</h2>
        <h4>haluskua.one@gmail.com</h4>
      </div>
      <div className="sidebar__stat">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,653</p>
        </div>
        <p>Views on post</p>
        <div className="sidebar__stat">2,112</div>
      </div>
    </div>
  );
}

export default Sidebar;
