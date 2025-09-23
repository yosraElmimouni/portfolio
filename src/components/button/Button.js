import React from "react";
import "./Button.scss";
import "../../styles/animations.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="main-button button-hover" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
