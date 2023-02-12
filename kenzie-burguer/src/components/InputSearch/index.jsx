import React from "react";
import Button from "../Button";
import { SearchStyles } from "./stylesSearch";

export default function InputSearch({ searchProduct }) {
  return (
    <SearchStyles>
      <input maxLength="20" type="text" placeholder="Digitar Pesquisa" />
      <Button text="Pesquisar" />
    </SearchStyles>
  );
}
