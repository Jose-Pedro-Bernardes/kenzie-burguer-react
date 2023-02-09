import React from "react";

export default function Card({ children, id, img, name, category, price }) {
  return (
    <>
      <li key={id}>
        <div>
          <img src={img} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
          <h3>
            R$ {parseFloat(price).toFixed(2).toString().replace(".", ",")}
          </h3>
        </div>
        {children}
      </li>
    </>
  );
}
