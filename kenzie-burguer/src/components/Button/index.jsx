import React from "react";
import { ButtonStyles } from "../../styles/ButtonStyles";

export default function Button({ onClick, text }) {
  return (
    <>
      <ButtonStyles onClick={onClick}>{text}</ButtonStyles>
    </>
  );
}
