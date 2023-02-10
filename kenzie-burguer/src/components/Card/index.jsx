import React from "react";

export default function Card({ children, id, img, name, category, price }) {
  return (
    <>
      <li key={id}>
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div>
          <div>
            <h2>{name}</h2>
            <p>{category}</p>
            <h3>
              R$ {parseFloat(price).toFixed(2).toString().replace(".", ",")}
            </h3>
          </div>
        </div>
        {children}
      </li>
    </>
  );
}
