import React from "react";
import { CardCartStyles } from "./stylesCardCart";

export default function CardCart({ children, product }) {
  return (
    <>
      <CardCartStyles key={product.id}>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>

        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
        </div>

        {children}
      </CardCartStyles>
    </>
  );
}
