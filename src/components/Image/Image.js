import React from "react";
import ImageCSS from "./Image.module.css";
import image from "../../images/image.module.jpg";

export default function Image() {
  return <img className={ImageCSS.image} src={image} alt="me" />;
}
