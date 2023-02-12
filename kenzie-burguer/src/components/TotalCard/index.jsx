import React from "react";
import Button from "../Button";
import { TotalCardStyles } from "./stylesCard";
import SunValue from "../SunValue";

export default function TotalCard({ cart, removeAllCart }) {
  return (
    <>
      <TotalCardStyles>
        <div className="text-align">
          <h3>Total</h3>
          <p>
            R${" "}
            {parseFloat(SunValue(cart)).toFixed(2).toString().replace(".", ",")}
          </p>
        </div>
        <Button text="Remover tudo" onClick={removeAllCart} />
      </TotalCardStyles>
    </>
  );
}
