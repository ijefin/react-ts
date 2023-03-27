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

  const { data: items } = useFetch(url)


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const newProduct = {
      name,
      price: parseFloat(price).toFixed(2)
    }

    console.log(typeof price)

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })

    const addedProduct = await res.json();

    setProducts((prevProduct) => [...prevProduct, addedProduct])

    setproductName("")
    setproductPrice("")
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
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div className="App">
        {items.map((prod: data) => <Card key={prod.id} title={prod.name} price={prod.price} />)}
      </div>
    </>
  );
};
