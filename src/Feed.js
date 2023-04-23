import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";

const Feed = () => {
  return (
    <div className="feed">
      <div class="feed__inputContainer">
        <div class="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div class="feed__inputOptions">
          <inputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          {/* */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
