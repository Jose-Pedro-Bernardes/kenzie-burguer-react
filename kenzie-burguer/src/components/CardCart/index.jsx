import React from "react";

export default function CardCart({ children, product }) {
  return (
    <>
      <li className="productList" key={product.id}>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>

        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
        </div>

        {children}
      </li>
    </>
  );
}
