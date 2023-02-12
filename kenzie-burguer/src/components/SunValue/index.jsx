import React from "react";

export default function SunValue(cart) {
  const sunValueExpensesResult = cart.reduce((valorAnterior, valorAtual) => {
    return Number(valorAnterior) + Number(valorAtual.price);
  }, 0);

  return sunValueExpensesResult;
}
