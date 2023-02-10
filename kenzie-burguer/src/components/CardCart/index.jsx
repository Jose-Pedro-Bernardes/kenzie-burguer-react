import React from "react";

export default function CardCart({ children, key, img, name, category }) {
  return (
    <>
      <li key={key}>
        <figure>
          <img src={img} alt={name} />
        </figure>

        <div>
          <h2>{name}</h2>
          <p>{category}</p>
        </div>

        {children}
      </li>
    </>
  );
}
