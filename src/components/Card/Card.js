import React from "react";
import CardCss from "./Card.module.css";
import Image from "../Image/Image";
import Intro from "../Intro/Intro";
import LinkedinButton from "../LinkedinButton/LinkedinButton";
import Text from "../Text/Text";
import Footer from "../Footer/Footer";

export default function Card() {
  return (
    <section className={CardCss.card}>
      <Image />
      <Intro />
      <LinkedinButton />
      <Text />
      <Footer />
    </section>
  );
}
