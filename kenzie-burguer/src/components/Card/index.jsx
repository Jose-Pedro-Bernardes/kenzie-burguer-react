import React from "react";
import Button from "../Button";

export default function Card({ id, img, name, category, price }) {
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
        <Button>Adicionar</Button>
      </li>
    </>
  );
}
