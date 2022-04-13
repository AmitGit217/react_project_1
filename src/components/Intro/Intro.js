import React from "react";
import IntroCSS from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={IntroCSS.intro}>
      <h1 className={IntroCSS.intro__title}>Amit Bar-Gil</h1>
      <h2 className={IntroCSS.intro__subtitle}>Full Stack Developer</h2>
    </div>
  );
}
