// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { CSSPlugin } from "gsap/CSSPlugin";
// import { HoverPlugin } from "gsap/HoverPlugin";

import "./HeaderOption.css";
import { Avatar } from "@mui/material";

// gsap.registerPlugin(CSSPlugin, HoverPlugin);

function HeaderOption({ avatar, Icon, title }) {
  // const elementRef = useRef(null);
  // const animateOnHover = () => {
  //   gsap.to(elementRef.current, {
  //     duration: 0.3,
  //     scale: 1.2,
  //   });
  // };
  // const animateOffHover = () => {
  //   gsap.to(elementRef.current, {
  //     duration: 0.3,
  //     scale: 1,
  //   });
  // };
  return (
    <div
      // ref={elementRef}
      // onMouseEnter={animateOnHover}
      // onMouseLeave={animateOffHover}
      className="headerOption"
    >
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
