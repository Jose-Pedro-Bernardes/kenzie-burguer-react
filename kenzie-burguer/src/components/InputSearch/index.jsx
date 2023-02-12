import React from "react";
import Button from "../Button";
import { SearchStyles } from "./stylesSearch";

export default function InputSearch({
  handleSearch,
  inputValue,
  handleSubmit,
}) {
  return (
    <>
      <SearchStyles>
        <input
          value={inputValue}
          onChange={handleSearch}
          maxLength="20"
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <Button onClick={handleSubmit} text="Pesquisar" />
      </SearchStyles>
    </>
  );
}
