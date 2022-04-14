import React from "react";
import TextCSS from "./Text.module.css";

export default function Text() {
  return (
    <section className={TextCSS.text}>
      <div className={TextCSS.block}>
        <h2 className={TextCSS.block__title}>About</h2>
        <p className={TextCSS.block__paragraph}>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className={TextCSS.block}>
        <h2 className={TextCSS.block__title}>Interests</h2>
        <p className={TextCSS.block__paragraph}>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </section>
  );
}
