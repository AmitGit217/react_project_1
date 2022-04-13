import React from "react";
import LinkedinButtonCSS from "./LinkedinButton.module.css";

export default function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/amitbg/"
      className={LinkedinButtonCSS.button}
      target="_blank"
      rel="noreferrer"
    >
      Linkedin
    </a>
  );
}
