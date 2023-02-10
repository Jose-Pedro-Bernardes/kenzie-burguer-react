import React from "react";
import { HeaderStyles } from "./stylesHeader";
import logo from "../../assets/logo.svg";
import InputSearch from "../InputSearch";

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <section>
          <img src={logo} alt="Logo Burguer Kenzie" />
          <div>
            <InputSearch />
          </div>
        </section>
      </HeaderStyles>
    </>
  );
}
