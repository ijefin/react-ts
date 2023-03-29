import { EventHandler, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { useFetch } from "./hooks/useFetch";

export const App = () => {

  interface data {
    id: number
    name: string
    price: number | GLfloat
  }

  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState(Array<data>);
  const [name, setproductName] = useState(String)
  const [price, setproductPrice] = useState(String || Number)

  const { data: items, httpConfig, loading, error } = useFetch(url)

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const newProduct = {
      name,
      price: parseFloat(price).toFixed(2)
    }

    httpConfig(newProduct, "POST")

    setproductName("")
    setproductPrice("")
  }

  const handleRemove = (id: number) => {
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">
            Nome:
          </label>
          <input type="text" name="productName" value={name} onChange={(e) => setproductName(e.target.value)} />
          <label htmlFor="productPrice">
            Preço:
          </label>
          <input type="number" step={0.01} value={price} id="productPrice" onChange={(e) => setproductPrice(e.target.value)} />
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
      {loading && <p>Carregando dados..</p>}
      {error && <p>{error}</p>}
      {!error && <div className="App">
        {items.map((prod: data) => (<>
          <Card key={prod.id} remove={() => handleRemove(prod.id)} title={prod.name} price={prod.price} />
        </>))}
      </div>}
    </>
  );
};
