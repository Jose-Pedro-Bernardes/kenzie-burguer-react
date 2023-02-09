import React from "react";
import { HeaderStyles } from "../../styles/HeaderStyles";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <section>
          <img src={logo} alt="Logo Burguer Kenzie" />
          <div>
            <input type="text" placeholder="Digitar Pesquisa" />
            <div></div>
            <button>Pesquisar</button>
          </div>
        </section>
      </HeaderStyles>
    </>
  );
}
