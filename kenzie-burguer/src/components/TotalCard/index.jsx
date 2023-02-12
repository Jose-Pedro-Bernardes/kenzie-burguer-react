import React from "react";
import Button from "../Button";
import { TotalCardStyles } from "./stylesCard";

export default function TotalCard({ totalValue, removeAllItens }) {
  return (
    <>
      <TotalCardStyles>
        <div>
          <h3>Total</h3>
          <p>
            {/* {parseFloat(totalValue).toFixed(2).toString().replace(".", ",")} */}
            R$40,00
          </p>
        </div>
        <Button onClick={removeAllItens} />
      </TotalCardStyles>
    </>
  );
}
