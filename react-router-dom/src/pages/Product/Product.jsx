import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Product = () => {
  const { id } = useParams();

  const url = `${"http://localhost:3000/products"}/${id}`;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  const { name, price } = product;

  return (
    <div>
      {loading && <p style={{ textAlign: "center" }}>Carregando..</p>}
      {!loading && (
        <>
          <h1>{name}</h1>
          <h2>{price} R$</h2>
        </>
      )}
      <div style={{ textAlign: "center" }}>
        <Link to={`/products/${product.id}/info`}>Info</Link>
      </div>
      {error && <p>Ocorreu um erro</p>}
    </div>
  );
};
