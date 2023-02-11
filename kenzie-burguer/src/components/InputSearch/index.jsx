import React from "react";
import Button from "../Button";
import { SearchStyles } from "./stylesSearch";

export default function InputSearch({ searchProduct }) {
  return (
    <SearchStyles>
      <input type="text" placeholder="Digitar Pesquisa" />
      <div></div>
      <Button text="Pesquisar" />
    </SearchStyles>
  );
}
