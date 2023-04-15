import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  //function
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
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
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,653</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,653</p>
        </div>
        <div class="sidebar__bottom">
          <p>{recentItem("reactjs")}</p>
          <p>{recentItem("programming")}</p>
          <p>{recentItem("design")}</p>
          <p>{recentItem("developer")}</p>
          <p>{recentItem("softwareengineering")}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
