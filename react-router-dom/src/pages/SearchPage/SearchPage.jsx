import React, { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  console.log(items);

  return (
    <div>
      {loading && <h1>Carregando</h1>}
      <h1>Sua busca:</h1>
      {items.map((prod) => (
        <li key={prod.id}>
          <h2>{prod.name}</h2>
          <h2>{prod.price} R$</h2>
          <Link to={`/products/${prod.id}`}>Detalhes</Link>
        </li>
      ))}
    </div>
  );
};
