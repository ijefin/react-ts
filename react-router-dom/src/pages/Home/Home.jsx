import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Home = () => {
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  console.log(items);

  return (
    <div>
      <h1>Produtos</h1>
      <ul className="products">
        {items.map((prod) => (
          <li key={prod.id}>
            <h2>{prod.name}</h2>
            <h2>{prod.price} R$</h2>
            <Link to={`/product/${prod.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
