import React from "react";
import Button from "../Button";
import { TotalCardStyles } from "./stylesCard";

export default function TotalCard({ totalValue, removeAllItens }) {
  return (
    <>
      <TotalCardStyles>
        <div className="text-align">
          <h3>Total</h3>
          <p>
            R${" "}
            {/* {parseFloat(totalValue).toFixed(2).toString().replace(".", ",")} */}
            40,00
          </p>
        </div>
        <Button text="Remover itens" onClick={removeAllItens} />
      </TotalCardStyles>
    </>
  );
}
