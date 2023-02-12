import React from "react";
import { HeaderStyles } from "./stylesHeader";
import logo from "../../assets/logo.svg";
import InputSearch from "../InputSearch";

export default function Header({ handleSearch, inputValue, handleSubmit }) {
  return (
    <>
      <HeaderStyles>
        <section>
          <img src={logo} alt="Logo Burguer Kenzie" />
          <InputSearch
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            handleSearch={handleSearch}
          />
        </section>
      </HeaderStyles>
    </>
  );
}
