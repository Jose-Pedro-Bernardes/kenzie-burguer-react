import React from "react";
import { HeaderStyles } from "../../styles/HeaderStyles";
import logo from "../../assets/logo.svg";
import Button from "../Button";

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <section>
          <img src={logo} alt="Logo Burguer Kenzie" />
          <div>
            <input type="text" placeholder="Digitar Pesquisa" />
            <div></div>
            <Button />
          </div>
        </section>
      </HeaderStyles>
    </>
  );
}
