import React from "react";
import CardCart from "../CardCart";
import { CartStyles } from "./stylesCart";

export default function Cart({ cart, removeProduct }) {
  return (
    <>
      <CartStyles>
        <h2 className="title">Carrinho de compras</h2>

        {cart.length === 0 ? (
          <>
            <ul className="emptyList">
              <li>
                <h2>Seu carrinho está vazio</h2>
                <p>{"<><><>"}</p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="productList">
              {cart.map((product) => {
                return (
                  <CardCart product={product}>
                    <button onClick={() => removeProduct(product.id)}>
                      Remover
                    </button>
                  </CardCart>
                );
              })}
            </ul>
          </>
        )}
      </CartStyles>
    </>
  );
}
