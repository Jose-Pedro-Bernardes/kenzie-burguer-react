import React from "react";
import { ButtonStyles } from "./stylesButton";

export default function Button({ onClick, text, classN, children }) {
  return (
    <>
      <ButtonStyles className={classN} onClick={onClick}>
        {text} {children}
      </ButtonStyles>
    </>
  );
}
