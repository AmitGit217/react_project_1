import React from "react";
import CardCss from "./Card.module.css";
import Image from "../Image/Image";

export default function Card() {
  return (
    <section className={CardCss.card}>
      <Image />
    </section>
  );
}
