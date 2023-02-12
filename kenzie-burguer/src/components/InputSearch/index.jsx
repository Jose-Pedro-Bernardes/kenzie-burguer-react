import React from "react";
import Button from "../Button";
import { SearchStyles } from "./stylesSearch";

export default function InputSearch({ handleSearch }) {
  return (
    <>
      <SearchStyles>
        <input
          onChange={handleSearch}
          maxLength="20"
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <Button text="Pesquisar" />
      </SearchStyles>
    </>
  );
}
