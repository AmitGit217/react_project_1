import React from "react";
import CardCss from "./Card.module.css";
import Image from "../Image/Image";
import Intro from "../Intro/Intro";

export default function Card() {
  return (
    <section className={CardCss.card}>
      <Image />
      <Intro />
    </section>
  );
}
