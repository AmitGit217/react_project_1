import React from "react";
import CardCss from "./Card.module.css";
import Image from "../Image/Image";
import Intro from "../Intro/Intro";
import LinkedinButton from "../LinkedinButton/LinkedinButton";

export default function Card() {
  return (
    <section className={CardCss.card}>
      <Image />
      <Intro />
      <LinkedinButton />
    </section>
  );
}
