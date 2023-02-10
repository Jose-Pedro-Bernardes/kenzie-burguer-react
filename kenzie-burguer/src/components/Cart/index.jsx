import React from "react";
import CardCart from "../CardCart";

export default function Cart({ cart, removeProduct }) {
  return (
    <>
      <aside>
        <h2>Carrinho de compras</h2>

        {cart.length === 0 ? (
          <>
            <ul className="emptyList">
              <li>
                <h2>Seu carrinho está vazio</h2>
                <p>Adicionar mais</p>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              {cart.map((product) => {
                return (
                  <CardCart
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    category={product.category}
                  >
                    <button onClick={() => removeProduct(product.id)}>
                      Remover
                    </button>
                  </CardCart>
                );
              })}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
