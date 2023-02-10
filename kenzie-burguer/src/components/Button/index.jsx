import React from "react";
import { ButtonStyles } from "./stylesButton";

export default function Button({ onClick, text }) {
  return (
    <>
      <ButtonStyles onClick={onClick}>{text}</ButtonStyles>
    </>
  );
}
